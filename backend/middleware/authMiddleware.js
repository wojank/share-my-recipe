const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(decoded.userId);

      if (!user) {
        res.status(401).json({ message: "token failed" });
        throw new Error("bad token");
      } else {
        req.user = user;
        next();
      }
    } else {
      res.status(401).json({ message: "brak autoryzacji" });
      throw new Error("brak autoryzacji");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { protect };
