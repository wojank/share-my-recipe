const express = require("express");
const router = express.Router();
const {
  createPost,
  readPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

const upload = require("../config/upload");

router.post("/create", upload, createPost);
router.get("/read", readPost);
router.put("/update", updatePost);
router.post("/delete", deletePost);

module.exports = router;
