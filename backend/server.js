const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const { notFound, customError } = require("./middleware/errorMiddleware.js");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/images", express.static("images"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/post", require("./routes/postRoutes"));

app.use(notFound);
app.use(customError);

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});
