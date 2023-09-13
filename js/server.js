const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5500;
const cors = require("cors");
//const authRouter = require ('./authRouter.js')
const adminEmail = "admin@refor.by";
const adminPassword = "admin";
const { PythonShell } = require("python-shell");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
var isLoggined = false;
var isAvailable = [true, true, false, false, false, false, false, false, false, false];
var openingTime = ['11:00', '12:00', '13:00', '14:00', '13:00', '15:00', '12:00', '13:20', '13:20', '13:20'];
const cookieParser = require('cookie-parser');
const { Double } = require("mongodb");

const ExcelJS = require('exceljs');
const { time } = require("console");



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../')));
app.use((req, res, next) => {
  const allowedRoutes = ['/setTime','/categories/','/register', '/login', '/surveys/', '/setting', '/result', '/users', '/download-excel', '/user-results', '/is-available', '/send-event', '/', '/opening-time']; // Список допустимых маршрутов
  const requestedRoute = req.path;

  if (!allowedRoutes.includes(requestedRoute) && !requestedRoute.startsWith('/users') && !requestedRoute.startsWith('/allowTest/') && !requestedRoute.startsWith('/closeTest/') && !requestedRoute.startsWith('/results') && !requestedRoute.startsWith('/surveys/survey') && !requestedRoute.startsWith('/categories')) {
    return res.status(404).send('Страница не найдена');
  }

  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
  time: String,
  test_id: String,
});

const Result = mongoose.model("results", resultSchema);

const User = mongoose.model("users", userSchema);

app.get("/", function (request, response) {

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
  const test_id = req.body.test_id;

  if (result && ((test_id != 1) && (test_id != 2))) {
    const saveResulst = await result.save();
    res.send({
      message: "Успешная авторизация",
    });
  } else {
    res.status(401).send({ message: "Неверное имя пользователя или пароль" });
  }
});

app.post("/allowTest/:id", async (req, res) => {
  isAvailable[req.params.id - 1] = true;
  res.send(req.params.id);
})

app.post("/closeTest/:id", async (req, res) => {
  isAvailable[req.params.id - 1] = false;
  res.send(isAvailable[req.params.id - 1]);
})



//установка времени в массив админом
app.post("/setTime", async (req, res) => {
  const timeStart = req.body.time;
  const id = req.body.id;
  openingTime[id - 1] = timeStart;

  res.send("super");
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

app.get('/categories/', (req, res) => {
  const cookieValue = req.cookies.email;

  if (cookieValue) {
    //surveysPath = path.join(__dirname, '../surveys/.ejs');
    surveysPath = path.join(__dirname, '../category/category.ejs');
    res.render(surveysPath);
  } else {
    res.redirect("/login");
  }
});

app.get('/categories/category:id', async (req, res) => {
  if (!req.headers.cookie) {
    return res.redirect('/login');
  }
  categoriesPath = path.join(__dirname, `../surveys/surveysPage${req.params.id}.ejs`);
  res.render(categoriesPath, {isAvailable});
});

app.get('/categories/category:id/survey:num', async (req, res) => {
  if (!req.headers.cookie) {
    return res.redirect('/login');
  }
  const userEmail = req.headers.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  searchUser = await Result.findOne({ email: userEmail, test_id: req.params.num }).exec();
  surveysPath = path.join(__dirname, `survey${req.params.num}.html`);
  if (isAvailable[req.params.num - 1] && !(searchUser)) {
    res.sendFile(surveysPath);
  }
  else {
    res.redirect(`/categories/category${req.params.id}`);
  }
});

app.get('/setting', async (req, res) => {
  const cookieValue = req.cookies.email;
  const currentUser = await User.findOne({ email: cookieValue }).exec()
  if (currentUser) {
    if (currentUser.isAdmin) {
      surveysPath = path.join(__dirname, '../setting.html');
      res.sendFile(surveysPath);
    }
    else {
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

// 
app.get('/login', (req, res) => {
  login2Path = path.join(__dirname, '../login.html');
  res.sendFile(login2Path);
});

app.get('/register', (req, res) => {
  login2Path = path.join(__dirname, '../register.html');
  res.sendFile(login2Path);
});

app.get('/download-excel', async (req, res) => {
  // Создание книги Excel и добавление данных
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');
  worksheet.columns = [
    { header: 'Почта', key: 'email' },
    { header: 'Имя пользователя', key: 'username' },
    { header: 'Номер теста', key: 'test_id' },
    { header: 'Количество правильных ответов', key: 'correct' },
    { header: 'Всего отвечено', key: 'no_of_questions' },
    { header: 'Всего вопросов', key: 'total' },
    { header: 'Время выполнения в секундах', key: 'time' },
  ];

  const users = await User.find().exec();
  const results = await Result.find().exec();
  let i = 2;
  users.forEach((user) => {
    let correct = 0;
    let no_of_questions = 0;
    let total = 0;
    results.forEach((result) => {
      if (result.email === user.email) {
        worksheet.getRow(i).values = {
          email: `${user.email}`,
          username: `${user.username}`,
          test_id: `${result.test_id}`,
          correct: `${JSON.parse(result.result)["correct_answers"]}`,
          no_of_questions: `${JSON.parse(result.result)["no_of_questions"]}`,
          total: `${JSON.parse(result.result)["total"]}`,
          time: `${result["time"]}`,
        }
        correct += JSON.parse(result.result)["correct_answers"];
        no_of_questions += JSON.parse(result.result)["no_of_questions"];
        total += JSON.parse(result.result)["total"];
        ++i;
      }
    });
  });

  // Установка HTTP-заголовков для скачивания файла
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=results.xlsx');

  //worksheet.autoFitColumns();
  worksheet.columns.forEach(function (column, i) {
    let maxLength = 0;
    column["eachCell"]({ includeEmpty: true }, function (cell) {
      var columnLength = cell.value ? cell.value.toString().length + 2 : 10;
      if (columnLength > maxLength) {
        maxLength = columnLength;
      }
    });
    column.width = maxLength < 10 ? 10 : maxLength;
  });

  // Сохранение книги в поток ответа
  workbook.xlsx.write(res)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      console.log('Ошибка при сохранении данных:', error);
      res.status(500).send('Произошла ошибка');
    });
});

app.get('/user-results', (req, res) => {
  resultsPath = path.join(__dirname, '../results.html');
  res.sendFile(resultsPath);
});

app.get('/is-available', async (req, res) => {
  res.send(isAvailable);
});

app.get('/opening-time', (req, res) => {
  res.send(openingTime);
});

// app.get('/send-event', (req, res) => {
//   // Отправка серверного события клиенту
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');
//   res.flushHeaders();

//   res.write('event: update\n');  // Тип события
//   res.write(`data: ${JSON.stringify({ message: 'Update requested' })}\n\n`); // Данные события

//   // Закрытие соединения
//   res.end();
// });

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  const currentPath = path.dirname(__filename);
});



//app.get('/surveys/', (req, res) => {
  //   const cookieValue = req.cookies.email;
  
  //   if (cookieValue) {
  //     //surveysPath = path.join(__dirname, '../surveys/.ejs');
  //     surveysPath = path.join(__dirname, '../surveys/surveysPage1');
  //     //res.sendFile(surveysPath)
  //     res.render(surveysPath, { isAvailable });
  //   } else {
  //     res.redirect("/login");
  //   }
  // });
  
  // app.get('/surveys/survey:id', async (req, res) => {
  //   if (!req.headers.cookie) {
  //     return res.redirect('/login');
  //   }
  //   const userEmail = req.headers.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  //   searchUser = await Result.findOne({ email: userEmail, test_id: req.params.id }).exec();
  //   surveysPath = path.join(__dirname, `survey${req.params.id}.html`);
  //   if (isAvailable[req.params.id - 1] && !(searchUser)) {
  //     res.sendFile(surveysPath);
  //   }
  //   else {
  //     res.redirect("/surveys/");
  //   }
  // })
  
  