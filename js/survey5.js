var category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var json = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "Какую температуру имеет свежевыдоенное молоко?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "около 42 °C"
      },
      {
       "value": "Item 2",
       "text": "около 32 °C"
      },
      {
       "value": "Item 3",
       "text": "около 17 °C"
      },
      {
       "value": "Item 4",
       "text": "около 37 °C"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "Что называют «парным молоком»?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "слегка подогретое молоко, когда только начинает идти пар"
      },
      {
       "value": "Item 2",
       "text": "молоко, которое только что дала корова"
      },
      {
       "value": "Item 3",
       "text": "молоко, после кипячения"
      },
      {
       "value": "Item 4",
       "text": "нет верного варианта ответа"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": "Как называется кисломолочный напиток из кобыльего молока?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "айран"
      },
      {
       "value": "Item 2",
       "text": "кумыс"
      },
      {
       "value": "Item 3",
       "text": "ряженка"
      },
      {
       "value": "Item 4",
       "text": "шубат"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": "Как называется стельная самка крупного рогатого скота до первого отёла?",
     "correctAnswer": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "нетель"
      },
      {
       "value": "Item 2",
       "text": "телочка"
      },
      {
       "value": "Item 3",
       "text": "нетелочка"
      },
      {
       "value": "Item 4",
       "text": "корова"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": "Как называются роды у коровы?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "окорол"
      },
      {
       "value": "Item 2",
       "text": "отёл"
      },
      {
       "value": "Item 3",
       "text": "нетель"
      },
      {
       "value": "Item 4",
       "text": "дотёл"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question6",
     "title": "Сколько длится беременность у кроликов?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "23-25 дней"
      },
      {
       "value": "Item 2",
       "text": "38-43 дней"
      },
      {
       "value": "Item 3",
       "text": "28-35 дней"
      },
      {
       "value": "Item 4",
       "text": "55-61 день"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "title": "Сколько времени в современных условиях выращивают бройлера (кур на мясо)?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "61-70 дней"
      },
      {
       "value": "Item 2",
       "text": "38-45 дней"
      },
      {
       "value": "Item 3",
       "text": "28-32 дней"
      },
      {
       "value": "Item 4",
       "text": "59-65 день"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": "Продолжительность беременности, которую у коров называют стельностью, длится?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "420-470 дней"
      },
      {
       "value": "Item 2",
       "text": "330-350 дней"
      },
      {
       "value": "Item 3",
       "text": "180-220 дней"
      },
      {
       "value": "Item 4",
       "text": "250-310 дней"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Какое заболевание у коров называют «мастит»?",
     "correctAnswer": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "воспалительное заболевание молочной железы"
      },
      {
       "value": "Item 2",
       "text": "воспалительное заболевание желудочно-кишечного тракта"
      },
      {
       "value": "Item 3",
           "text":  "воспалительное заболевание рубца"
      },
      {
       "value": "Item 4",
            "text": "воспалительное заболевание легких"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": "Сколько в среднем длится аппаратная дойка коров продуктивностью 18-24 литра?",
     "correctAnswer": " Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text":   "3-5 минут",
      },
      {
       "value": "Item 2",
       "text": "5-10 минут",
      },
      {
       "value": "Item 3",
           "text": "17-22 мин"
      },
      {
       "value": "Item 4",
            "text":  "30-35"
      }
     ]
    }
   ]
  }
 ], 
 "maxTimeToFinish": 300,
    "showTimerPanel": "top",
    "navigateToUrl": `http://localhost:5500/categories/category${category_id}`,
    "widthMode": "responsive"
};




function getResult(survey) {
    var questions = survey.getQuizQuestions();
    var correct = 0;
    var numberOfQuestions = 0;
    var total = 0;
    questions.forEach(function (question) {
        total++;
        if (!question.isEmpty()) {
            numberOfQuestions++;
            if (question.isAnswerCorrect())
                correct++;
        } 
    });
    var result = {};
    result["correct_answers"] = correct;
    result["no_of_questions"] = numberOfQuestions;
    result["total"] = total;

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
    const test_id = 5;

    e.timestamps['finished'] = Date.now();
    e.timestamps['dif'] = (e.timestamps['finished'] - e.timestamps['started']) / 1000;
    const time = e.timestamps['dif'];
    console.log('time');
    console.log(e.timestamps);
    const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(document.cookie);
    const result = JSON.stringify(getResult(survey));
    const response = await fetch('http://localhost:5500/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result, time,  test_id}),
    });

});
