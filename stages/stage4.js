var category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var json = {
  locale: "ru",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
        "type": "radiogroup",
        "name": "question1",
        "title": "С какого зерна производят геркулес?",
        "correctAnswer": "Item 4",
        "isRequired": true,
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
        "isRequired": true,
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
        "isRequired": true,
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
        "isRequired": true,
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
        "title": "Какие вещества являются красящими веществами свеклы?",
        "correctAnswer": "Item 4",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "хлорофилл"
         },
         {
          "value": "Item 2",
          "text": "каротин"
         },
         {
          "value": "Item 3",
          "text": "лейкоантоцианы"
         },
         {
          "value": "Item 4",
          "text": "бетацианины"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": "Из какого зерна делают перловую крупу?",
        "correctAnswer": "Item 1",
        "isRequired": true,
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
        "name": "question7",
        "title": "Манную крупу получают из…",
        "correctAnswer": "Item 4",
        "isRequired": true,
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
        "name": "question8",
        "title": "Как называется сушеный абрикос без косточки?",
        "correctAnswer": "Item 3",
        "isRequired": true,
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
        "name": "question9",
        "title": "Какая сельскохозяйственная культура может содержать в себе высокую концентрацию соланина?",
        "correctAnswer": "Item 3",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Физалис"
         },
         {
          "value": "Item 2",
          "text": "Томат"
         },
         {
          "value": "Item 3",
          "text": "Картофель"
         },
         {
          "value": "Item 4",
          "text": "Баклажан"
         }
        ]
       },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": "Какие вещества являются красящими веществами моркови?",
     "correctAnswer": "Item 4",
     "isRequired": true,
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
    "maxTimeToFinish": 45,
    "showTimerPanel": "top",
    // "navigateToUrl": `/stages`,
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
    const test_id = 8;

    e.timestamps['finished'] = Date.now();
    e.timestamps['dif'] = (e.timestamps['finished'] - e.timestamps['started']) / 1000;
    const time = e.timestamps['dif'];
    console.log('time');
    console.log(e.timestamps);
    const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const response2 = await fetch(`/idCardResults/milo${email}`);
    const resp = await response2.json();
    const id_card = resp.id_card;
    const result = JSON.stringify(getResult(survey));

    console.log(result);
    const response3 = await fetch('/stages/updateEvery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_card_results: id_card, newResult: JSON.parse(result)['correct_answers'].toString(), stage_id: "4"}),
    });


    const response = await fetch('/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result, time,  test_id}),
    });

    window.location.href = `/stages`;
});
