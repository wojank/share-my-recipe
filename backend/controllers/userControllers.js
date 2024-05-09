const User = require("../models/userModel");
const createToken = require("../utils/createToken.js");

//POST api/user/register
const registerUser = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      res
        .status(400)
        .json({ message: `user ${user.login} ${user.email} already exists` });
      // throw new Error('User already exists');
    }

    const newUser = await User.create({
      login,
      email,
      password,
    });

    if (newUser) {
      createToken(res, newUser._id);
      res.status(200).json({
        message: "user registered succesfully",
        userId: newUser._id,
        userLogin: newUser.login,
        userEmail: newUser.email,
      });
    } else {
      res.status(400);
      throw new Error("ni ma i cześc");
    }
  } catch (err) {
    // next(err);
    console.log(err);
    res.status(500).json({ message: err });
  }
};

//POST api/user/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      createToken(res, user._id);
      res
        .status(200)
        .json({ userId: user._id, login: user.login, email: user.email });
    } else {
      res.status(401).json({ message: "invalid email or password" });
      throw new Error("invalid email or password");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

// POST api/user/logout
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: "wylogowano poprawnie" });
};

// PUT api/user/update
const updateUser = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.login = login || user.login;
      user.email = email || user.email;

      if (password) {
        user.password = password;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        message: "updated user succesfully",
        login: updatedUser.login,
        email: updatedUser.email,
      });
    } else {
      res
        .status(404)
        .json({ message: "nie udało się zaktualizować użytkownika" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const getUser = (req, res) => {
  res.status(200).json({ message: "nasz user" });
};

module.exports = { registerUser, loginUser, logoutUser, updateUser, getUser };
