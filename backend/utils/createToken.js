const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: "1h" });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 3600000,
  });
};

module.exports = createToken;
