const express = require("express");
const router = express.Router();
const {
  createPost,
  readPost,
  readAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

const upload = require("../config/upload");

router.post("/create", upload, createPost);
router.get("/read/:postId", readPost);
router.get("/read", readAllPosts);
router.put("/update/:postId", upload, updatePost);
router.delete("/delete/:postId", deletePost);

module.exports = router;
