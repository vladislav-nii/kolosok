const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5500;
const cors = require("cors");
//const authRouter = require ('./authRouter.js')
const adminEmail = "v.mineev@refor.by";
const adminPassword = "admin";
const { PythonShell } = require("python-shell");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
var isLoggined = false;
var isAvailable = [false, false, false, false, false, false, false, false];
const cookieParser = require('cookie-parser');



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../')));
app.use((req, res, next) => {
  const allowedRoutes = ['/register', '/login', '/surveys/', '/setting', '/surveys/survey1', '/result', '/users']; // Список допустимых маршрутов
  const requestedRoute = req.path;
  //console.log(requestedRoute);

  if (!allowedRoutes.includes(requestedRoute) && !requestedRoute.startsWith('/users') && !requestedRoute.startsWith('/allowTest/') && !requestedRoute.startsWith('/closeTest/') && !requestedRoute.startsWith('/results')) {
    return res.status(404).send('Страница не найдена');
  }

  next();
});

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

const resultSchema = new mongoose.Schema({
  email: String,
  result: String,
});

const Result = mongoose.model("results", resultSchema);

const User = mongoose.model("users", userSchema);

app.get("/", function(request, response){
     
  // отправляем ответ
  response.send("<h2>Привет Express!</h2>");
});
// Регистрация
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  const users = await User.find().exec();
  const reset = users.find(item => item.email === user.email);

  if (!reset) {
    const result = await user.save();
    if (user.email == adminEmail && user.password == adminPassword) {
      IsAdmin = true;
    } else {
      IsAdmin = false;
    }
    isLoggined = true;
    res.send({
      password: user.password,
      email: user.email,
      isAdmin: IsAdmin,
    });
  }
  else {
    res.send({ msg: "пользователь с такой почтой уже есть" });
  }
});

// Авторизация
app.post("/login", async (req, res) => {
  //console.log(req);
  const { email, password } = req.body;
  const user = await User.findOne({ email, password }).exec();
  if (user) {
    if (user.email == adminEmail && user.password == adminPassword) {
      IsAdmin = true;
    } else {
      IsAdmin = false;
    }
    isLoggined = true;
    res.send({
      password: user.password,
      email: user.email,
      isAdmin: IsAdmin,
    });
  } else {
    res.status(401).send({ message: "Неверное имя пользователя или пароль" });
  }
});

app.post("/result", async (req, res) => {
  const result = new Result(req.body);
  const results = await Result.find().exec();

  if (result) {
    const saveResulst = await result.save();
    res.send({
      message: "Успешная авторизация",
    });
  } else {
    res.status(401).send({ message: "Неверное имя пользователя или пароль" });
  }
});

app.post("/allowTest/:id", async (req, res) =>{
  isAvailable[req.params.id - 1] = true;
  res.send(req.params.id);
})

app.post("/closeTest/:id", async (req, res) =>{
  isAvailable[req.params.id - 1] = false;
  console.log(isAvailable[req.params.id - 1]);
  res.send(isAvailable[req.params.id - 1]);
})

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

app.get("/results", async (req, res) => {
  const results = await Result.find().exec();
  res.send(results);
});


app.get('/surveys/', (req, res) => {
  const cookieValue = req.cookies.email;

  if (cookieValue) {
    surveysPath = path.join(__dirname, '../surveys/surveysPage.html');
    res.sendFile(surveysPath);
  } else {
    res.redirect("/login");
  }
});

app.get('/setting', async (req, res) => {
  const cookieValue = req.cookies.email;
  console.log('asdfasdfasdf');
  console.log(cookieValue);
  const currentUser = await User.findOne({email: cookieValue}).exec()
  if(currentUser){
    if(currentUser.isAdmin){
      surveysPath = path.join(__dirname, '../setting.html');
      res.sendFile(surveysPath);
    }
    else{
      res.redirect("/login");
    }
  }
  // if (cookieValue === 'admin') {
  //   surveysPath = path.join(__dirname, '../setting.html');
  //   res.sendFile(surveysPath);
  // } else {
  //   res.redirect("/login");
  // }
});



app.get('/surveys/survey1', (req, res) => {
  if (isAvailable[0]) {
    surveysPath = path.join(__dirname, 'survey.html');
    res.sendFile(surveysPath);
  }
  else {
    res.redirect('/surveys/');
  }
});

app.get('/login', (req, res) => {
  login2Path = path.join(__dirname, '../login.html');
  res.sendFile(login2Path);
});

app.get('/register', (req, res) => {
  login2Path = path.join(__dirname, '../register.html');
  res.sendFile(login2Path);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  const currentPath = path.dirname(__filename);
});
