const express = require("express");
const router = express.Router();
const { registerUser, getUser } = require("../controllers/userControllers");

router.post("/register", registerUser);
router.get("/", getUser);

module.exports = router;
