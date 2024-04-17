const Post = require("../models/postModel");

//create post
const createPost = async (req, res) => {
  const { category, author, title, content } = req.body;
  const img = req.file.filename;

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
  }
};

//read post
const readPost = (req, res) => {
  res.json({ wiadomość: "Oto post" });
};

//read all posts ?
//update post
const updatePost = (req, res) => {
  res.json({ wiadomość: "Zaktualizowano posta" });
};
//delete post
const deletePost = (req, res) => {
  res.json({ wiadomość: "Usunięto posta" });
};

module.exports = { createPost, readPost, updatePost, deletePost };
