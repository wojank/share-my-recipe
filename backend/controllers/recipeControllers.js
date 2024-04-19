const Recipe = require("../models/recipeModel");
const fs = require("fs");
const path = require("path");

//POST api/recipe
const createRecipe = async (req, res) => {
  const { category, title, ingredients, content } = req.body;
  const img = req.file.filename;

  try {
    const createdRecipe = await Recipe.create({
      category,
      title,
      author: "Wojtek",
      img,
      ingredients: JSON.parse(ingredients),
      content,
    });

    if (createdRecipe) {
      res
        .status(201)
        .json({ msg: "Udało się utworzyć przepis pomyślnie", createdRecipe });
    } else {
      throw new Error("Błąd podczas zapisywania przepisu");
    }
  } catch (error) {
    res.status(500).json({ msg: "Błąd po stronie servera", error });
  }
};

//GET api/recipe
const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    if (allRecipes) {
      res
        .status(200)
        .json({ msg: "Pobrano przepisy z bazy danych", allRecipes });
    } else {
      throw new Error("Nie znaleziono przepisów w bazie danych");
    }
  } catch (error) {
    res.status(500).json({ msg: "Błąd po stronie servera", error });
  }
};

//GET api/recipe/:recipeId
const getRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const recipe = await Recipe.findById(recipeId);

    if (recipe) {
      res.status(200).json({ msg: "Pobrano przepis z bazy danych", recipe });
    } else {
      throw new Error("Nie znaleziono przepisu w bazie danych");
    }
  } catch (error) {
    res.status(500).json({ msg: "Błąd po stronie servera", error });
  }
};

//PUT api/recipe/:recipeId
const updateRecipe = async (req, res) => {
  const { category, title, ingredients, content } = req.body;
  const { recipeId } = req.params;

  try {
    const recipe = await Recipe.findById(recipeId);

    if (recipe) {
      recipe.category = category || recipe.category;
      recipe.title = title || recipe.title;
      recipe.ingredients = JSON.parse(ingredients) || recipe.ingredients;
      recipe.content = content || recipe.content;

      if (req.file) {
        const oldImgPath = path.join("backend/images", recipe.img);

        if (fs.existsSync(oldImgPath)) {
          fs.unlinkSync(oldImgPath);
        } else {
          console.log("nie znaleziono obrazka w dokumencie");
        }

        recipe.img = req.file.filename || recipe.img;
      }

      const updatedRecipe = await recipe.save();

      if (updatedRecipe) {
        res
          .status(200)
          .json({ msg: "Udało się zaktualizować przepis", updatedRecipe });
      } else {
        throw new Error("Błąd podczas zapisywania przepisu");
      }
    } else {
      throw new Error("Nie znaleziono przepisu w bazie danych");
    }
  } catch (error) {
    res.status(500).json({ msg: "Błąd po stronie servera", error });
  }
};

//DELETE api/recipe/:recipeId
const deleteRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const recipe = await Recipe.findById(recipeId);

    if (recipe) {
      const oldImgPath = path.join("backend/images", recipe.img);
      if (fs.existsSync(oldImgPath)) {
        fs.unlinkSync(oldImgPath);
      } else {
        console.log("nie znaleziono obrazka");
      }
    } else {
      throw new Error(
        "Nie można usunąć przepisu, który nie istnieje w bazie danych"
      );
    }

    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

    if (deletedRecipe) {
      res
        .status(200)
        .json({ msg: "Usunięto przepis z bazy danych", deletedRecipe });
    } else {
      throw new Error("Błąd podczas usuwania przepisu");
    }
  } catch (error) {
    res.status(500).json({ msg: "Błąd po stronie servera", error });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
