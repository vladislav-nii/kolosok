var json ={
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "С какого зерна производят геркулес?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1Пшеница",
       "text": "Пшеница"
      },
      {
       "value": "Item 2",
       "text": "Ячмень"
      },
      {
       "value": "Item 3",
       "text": "Кукуруза"
      },
      {
       "value": "Item 4",
       "text": "Овёс"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "Из какого растения получают пшённую крупу?",
     "correctAnswer": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "Просо"
      },
      {
       "value": "Item 2",
       "text": "Соя"
      },
      {
       "value": "Item 3",
       "text": "Чечевица"
      },
      {
       "value": "Item 4",
       "text": "Люпин"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": "Из каких семян в Беларуси производят биотопливо?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "Соя"
      },
      {
       "value": "Item 2",
       "text": "Горох"
      },
      {
       "value": "Item 3",
       "text": "Рапс"
      },
      {
       "value": "Item 4",
       "text": "Пшеница"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": "Из муки какого зерна в основном производят макаронные изделия?",
     "correctAnswer": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "пшеницы"
      },
      {
       "value": "Item 2",
       "text": "ячменя"
      },
      {
       "value": "Item 3",
       "text": "овёс"
      },
      {
       "value": "Item 4",
       "text": "ржи"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": "Из какого зерна делают перловую крупу?",
     "correctAnswer": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "ячмень"
      },
      {
       "value": "Item 2",
       "text": "рожь"
      },
      {
       "value": "Item 3",
       "text": "пшеница"
      },
      {
       "value": "Item 4",
       "text": "овёс"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question6",
     "title": "Манную крупу получают из…",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "проса"
      },
      {
       "value": "Item 2",
       "text": "кукурузы"
      },
      {
       "value": "Item 3",
       "text": "ржи"
      },
      {
       "value": "Item 4",
       "text": "пшеницы"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "title": "Как подразделяется пшеничная хлебопекарная мука в зависимости от товарного сорта?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "крупка, высший сорт, первый сорт"
      },
      {
       "value": "Item 2",
       "text": "полукрупка, высший сорт, первый сорт"
      },
      {
       "value": "Item 3",
       "text": "крупчатка, высший сорт, первый сорт, второй сорт, обойная"
      },
      {
       "value": "Item 4",
       "text": "высший сорт, первый сорт, второй сорт"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": "Какой показатель качества положен в основу деления круп на сорта?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "вкус"
      },
      {
       "value": "Item 2",
       "text": "время варки"
      },
      {
       "value": "Item 3",
       "text": "влажность"
      },
      {
       "value": "Item 4",
       "text": "содержание доброкачественного ядра"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Как называется сушеный абрикос без косточки?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "изюм"
      },
      {
       "value": "Item 2",
       "text": "чернослив"
      },
      {
       "value": "Item 3",
       "text": "курага"
      },
      {
       "value": "Item 4",
       "text": "цукаты"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": "Из чего нижеперечисленного вырабатывают крахмал (кроме картофеля)?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "фасоль"
      },
      {
       "value": "Item 2",
       "text": "горох"
      },
      {
       "value": "Item 3",
       "text": "рис"
      },
      {
       "value": "Item 4",
       "text": "тыква"
      }
     ]
    }
   ]
  }
 ], 
 "maxTimeToFinish": 300,
    "showTimerPanel": "top",
    "navigateToUrl": "https://kolosok.onrender.com/surveys/",
    "widthMode": "responsive"
};




function getResult(survey) {
    var questions = survey.getQuizQuestions();
    var correct = 0;
    var numberOfQuestions = 0;
    questions.forEach(function (question) {
        if (!question.isEmpty()) {
            numberOfQuestions++;
            if (question.isAnswerCorrect())
                correct++;
        }
    });
    var result = {};
    result["correct_answers"] = correct;
    result["no_of_questions"] = numberOfQuestions;

    return result;
}

var survey = new Survey.Model(json);

survey.timestamps = {};

survey
    .onAfterRenderSurvey
    .add(function (sender, options) {
        sender.timestamps['started'] = Date.now();
    });

survey.render("surveyContainer");
survey.onComplete.add(async (e) => {
    const test_id = 6;

    e.timestamps['finished'] = Date.now();
    e.timestamps['dif'] = (e.timestamps['finished'] - e.timestamps['started']) / 1000;
    const time = e.timestamps['dif'];
    console.log('time');
    console.log(e.timestamps);
    const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(document.cookie);
    const result = JSON.stringify(getResult(survey));
    const response = await fetch('https://kolosok.onrender.com/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result, time,  test_id}),
    });

});
