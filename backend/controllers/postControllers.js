const Post = require("../models/postModel");
const fs = require("fs");
const path = require("path");

//create post
const createPost = async (req, res) => {
  const { category, author, title, content } = req.body;
  const img = req.file.filename;
  //user jako autor i zablokowac tego routa
  try {
    const createdPost = await Post.create({
      category,
      author,
      title,
      img,
      content,
    });

    if (createdPost) {
      res.status(201).json({ msg: "Utworzono posta", post: createdPost });
    } else {
      throw new Error("błąd");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Wystąpił błąd podczas tworzenia posta." });
  }
};

//read post
const readPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).json({ msg: "nie odnaleziono posta" });
      throw new Error("taki post nie istnieje w bazie danych");
    } else {
      res.status(200).json({ post });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Wystąpił błąd podczas pobierania posta." });
  }
};

//get all posts
const readAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();

    if (!allPosts) {
      res.status(404);
      throw new Error("Nie znaleziono postów w bazie danych");
    } else {
      res.status(200).json({ allPosts });
    }
  } catch (error) {
    res.status(500).json({ msg: "nie znaleziono postów" });
  }
};
//update post
const updatePost = async (req, res) => {
  const { category, title, content } = req.body;
  const img = req.file;
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (post) {
      post.category = category || post.category;
      post.title = title || post.title;
      post.content = content || post.content;

      if (img) {
        const oldImgPath = path.join("backend/images", post.img);

        if (fs.existsSync(oldImgPath)) {
          fs.unlinkSync(oldImgPath);
          console.log(`usunięto stary obrazek ${post.img}`);
        } else {
          console.log(`nie znaleziono obrazka ${post.img}`);
        }
        post.img = img.filename || post.img;
      }
      const updatedPost = await post.save();
      res
        .status(200)
        .json({ msg: "zaktualizowano posta pomyślnie", post: updatedPost });
    } else {
      res.status(404);
      throw new Error("nie ma takiego posta w bazie danych");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "błąd podczas aktualizacji posta" });
  }
};
//delete post
const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).json({ msg: "nie ma takiego posta w bazie danych" });
    } else {
      const oldImgPath = path.join("backend/images", post.img);
      if (fs.existsSync(oldImgPath)) {
        fs.unlinkSync(oldImgPath);
        console.log(`usunięto stary obrazek ${post.img}`);
      } else {
        console.log(`nie znaleziono obrazka ${post.img}`);
      }
      const deletedPost = await Post.findByIdAndDelete(postId);
      res.status(200).json({ msg: "usunięto posta", deletedPost });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "coś poszło nie tak podczas usuwania posta" });
  }
};

module.exports = { createPost, readPost, readAllPosts, updatePost, deletePost };
