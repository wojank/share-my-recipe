const express = require("express");
const router = express.Router();
const {
  createPost,
  readPost,
  readAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const { protect } = require("../middleware/authMiddleware");

const upload = require("../config/upload");

router.post("/create", protect, upload, createPost);
router.get("/read/:postId", readPost);
router.get("/read", readAllPosts);
router.put("/update/:postId", protect, upload, updatePost);
router.delete("/delete/:postId", protect, deletePost);

module.exports = router;
