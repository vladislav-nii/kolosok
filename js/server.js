const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5500;
const cors = require("cors");
//const authRouter = require ('./authRouter.js')
const adminLogin = "admin";
const adminPassword = "admin";
const { PythonShell } = require("python-shell");
const multer = require("multer");
const fs = require('fs');
const path = require('path');




const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://NIIinAPK:nii123@survey.yvbwk8s.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean,
  email: String,
});

const User = mongoose.model("users", userSchema);

// Регистрация
app.post("/register", async (req, res) => {
  const user = new User(req.body);

  const users = await User.find().exec();
  const reset = users.find(item => item.email === user.email);

  if (!reset) { const result = await user.save();
    if (user.username == adminLogin && user.password == adminPassword) {
      IsAdmin = true;
    } else {
      IsAdmin = false;
    }
    res.send({
      message: "Успешная авторизация",
      username: user.username,
      isAdmin: IsAdmin,
    });
  }
  else {
    res.send({msg:"пользовтель с такой почтой уже есть"});
  }
});

// Авторизация
app.post("/login", async (req, res) => {

  const { username, password } = req.body;
  const user = await User.findOne({ username, password }).exec();
  if (user) {
    if (user.username == adminLogin && user.password == adminPassword) {
      IsAdmin = true;
    } else {
      IsAdmin = false;
    }
    res.send({
      message: "Успешная авторизация",
      username: user.username,
      isAdmin: IsAdmin,
    });
  } else {
    res.status(401).send({ message: "Неверное имя пользователя или пароль" });
  }
});

// Получение всех пользователей (для администратора)
app.get("/users", async (req, res) => {
  const users = await User.find().exec();
  res.send(users);
});


// Удаление пользователя (для администратора)
app.delete("/users/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id).exec();
  res.send(result);
});



app.get('/survey', (req, res) => {
  console.log(`Сервер запущен на порту ${PORT}`);

  res.sendFile(__dirname + '/survey.html');
});

app.get('/surveys', (req, res) => {
  surveysPath = path.join(__dirname, '../surveys/surveysPage.html');
  res.sendFile(surveysPath);
});

app.get('/surveys/survey1', (req, res) => {
  surveysPath = path.join(__dirname, 'survey.html');
  res.sendFile(surveysPath);
});



const filePath = path.join(__dirname, '../');
app.use(express.static(filePath));


// app.listen(PORT, () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
//   const currentPath = path.dirname(__filename);
// });
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  const currentPath = path.dirname(__filename);
});
