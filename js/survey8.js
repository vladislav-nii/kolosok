var json = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "Какое зерно выращивают в воде?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "ячмень"
      },
      {
       "value": "Item 2",
       "text": "овес"
      },
      {
       "value": "Item 3",
       "text": "рис"
      },
      {
       "value": "Item 4",
       "text": "просо"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "Выберите группу культур, в которой все относятся к злаковым?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "гречиха, просо, фасоль, пшеница"
      },
      {
       "value": "Item 2",
       "text": "пшеница, рожь, овес, ячмень"
      },
      {
       "value": "Item 3",
       "text": "сорго, ячмень, овес, лен"
      },
      {
       "value": "Item 4",
       "text": "рож, горох, подсолнечник, соя"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": "Какие зерновые культуры из перечисленных отличаются наибольшим содержанием белка?",
     "correctAnswer": "Item 3",
     "choices": [
      {
       "value": "Item 1",
       "text": "злаковые"
      },
      {
       "value": "Item 2",
       "text": "масличные"
      },
      {
       "value": "Item 3",
       "text": "бобовые"
      },
      {
       "value": "Item 4",
       "text": "гречишные"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": "Какие зерновые культуры характеризуются повышенным содержанием углеводов?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "гречишные"
      },
      {
       "value": "Item 2",
       "text": "масличные"
      },
      {
       "value": "Item 3",
       "text": "бобовые"
      },
      {
       "value": "Item 4",
       "text": "злаковые"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": "Назовите фрукт, получивший название «королевский плод»",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "яблоко"
      },
      {
       "value": "Item 2",
       "text": "груша"
      },
      {
       "value": "Item 3",
       "text": "ананас"
      },
      {
       "value": "Item 4",
       "text": "киви"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question6",
     "title": "Какое фруктовое дерево из списка является священным в Индии?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "вишня"
      },
      {
       "value": "Item 2",
       "text": "манго"
      },
      {
       "value": "Item 3",
       "text": "слива"
      },
      {
       "value": "Item 4",
       "text": "джекфрут"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "title": "Название какого фрукта по своему звучанию соответствует названию чиновника в имперском феодальном Китае?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "киви"
      },
      {
       "value": "Item 2",
       "text": "лимон"
      },
      {
       "value": "Item 3",
       "text": "абрикос"
      },
      {
       "value": "Item 4",
       "text": "мандарин"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": "Как называется фрукт с «адским запахом и божественным вкусом»?",
     "correctAnswer": "Item 2",
     "choices": [
      {
       "value": "Item 1",
       "text": "джекфрут"
      },
      {
       "value": "Item 2",
       "text": "дуриан"
      },
      {
       "value": "Item 3",
       "text": "ананас"
      },
      {
       "value": "Item 4",
       "text": "рамбутан"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Какие ягоды из нижеперечисленных имеют наибольшее содержание глюкозы?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "клюква"
      },
      {
       "value": "Item 2",
       "text": "смородина"
      },
      {
       "value": "Item 3",
       "text": "малина"
      },
      {
       "value": "Item 4",
       "text": "виноград"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": "Какие вещества являются красящими веществами моркови?",
     "correctAnswer": "Item 4",
     "choices": [
      {
       "value": "Item 1",
       "text": "хлорофилл"
      },
      {
       "value": "Item 2",
       "text": "антоцианы"
      },
      {
       "value": "Item 3",
       "text": "лейкоантоцианы"
      },
      {
       "value": "Item 4",
       "text": "каротин"
      }
     ]
    }
   ]
  }
 ],
    "showTitle": false,
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
    const test_id = 8;

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
