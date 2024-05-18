var bgsxa_category = document.cookie.replace(
    /(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  var json = {
    "locale": "ru",
    "title": {
     "ru": "Я – Учёный!"
    },
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Сфера ваших жизненных интересов (один приоритетный вариант)? ",
        "isRequired": true,
        "choices": [
         "Управление",
         "Бизнес",
         "Маркетинг",
         "Охрана порядка",
         "Политика",
         "Экономика",
         "Образование",
         "Наука",
         "Государственное управление",
         "Международные отношения"
        ],
        "showOtherItem": true,
        "otherText": "Другое (заполнить)"
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": {
         "ru": "Что вы любите (один приоритетный вариант)?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Следить за порядком",
          "text": {
           "ru": "Следить за порядком"
          }
         },
         {
          "value": "Соревноваться",
          "text": {
           "ru": "Соревноваться"
          }
         },
         {
          "value": "Изучать все новое (технологии)",
          "text": {
           "ru": "Изучать все новое (технологии)"
          }
         },
         {
          "value": "Исследовать мир",
          "text": {
           "ru": "Исследовать мир"
          }
         },
         {
          "value": "Быть лидером",
          "text": {
           "ru": "Быть лидером"
          }
         },
         {
          "value": "Творить и придумывать",
          "text": {
           "ru": "Творить и придумывать"
          }
         },
         {
          "value": "Радоваться и веселится",
          "text": {
           "ru": "Радоваться и веселится"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": {
         "ru": "Знаете ли Вы, что в Беларуси по виду экономической деятельности «Информация и связь» (включая сферу ИТ) в настоящее время занято столько же населения, сколько и в научной сфере – чуть более 3 %?   "
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": {
         "ru": "Есть ли среди членов Вашей семьи или знакомых представители сферы науки?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да, только члены семьи и знакомые",
          "text": {
           "ru": "Да, только члены семьи и знакомые"
          }
         },
         {
          "value": "Да, только знакомые",
          "text": {
           "ru": "Да, только знакомые"
          }
         },
         {
          "value": "Да, семьи и знакомые",
          "text": {
           "ru": "Да, семьи и знакомые"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": {
         "ru": "Есть ли у Вас опыт написания научных статей, тезисов конференций, участия в научных проектах и исследованиях?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": {
         "ru": "Планируете ли Вы поступать в магистратуру?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Скорее да",
          "text": {
           "ru": "Скорее да"
          }
         },
         {
          "value": "Скорее нет",
          "text": {
           "ru": "Скорее нет"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": {
         "ru": "Знаете ли Вы, что стипендия аспиранта в настоящее время составляет 1010,23 руб.?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": {
         "ru": "Знаете ли Вы, что стипендия докторанта в настоящее время составляет 1 638,81руб.?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question9",
        "title": {
         "ru": "При каких условиях Вы выбрали бы науку как сферу занятости? (выбрать 2 ключевых варианта)"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Заработная плата в 2 раза выше, чем в среднем по стране",
          "text": {
           "ru": "Заработная плата в 2 раза выше, чем в среднем по стране"
          }
         },
         {
          "value": "Предоставление бесплатного жилья на срок работы",
          "text": {
           "ru": "Предоставление бесплатного жилья на срок работы"
          }
         },
         {
          "value": "Возможность сделать научную карьеру",
          "text": {
           "ru": "Возможность сделать научную карьеру"
          }
         },
         {
          "value": "Получение льготного кредита на постройку жилья",
          "text": {
           "ru": "Получение льготного кредита на постройку жилья"
          }
         },
         {
          "value": "Возможность получения повышенной пенсии",
          "text": {
           "ru": "Возможность получения повышенной пенсии"
          }
         },
         {
          "value": "Выход раньше на пенсию на 10 лет",
          "text": {
           "ru": "Выход раньше на пенсию на 10 лет"
          }
         }
        ],
        "maxSelectedChoices": 2,
        "minSelectedChoices": 2
       },
       {
        "type": "radiogroup",
        "name": "question10",
        "title": {
         "ru": "Предлагали ли Вам в университете участвовать в проведении научных исследований?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": {
         "ru": "Мотивируют (поощряют) ли в Вашем учебном заведении студентов, занимающихся научными исследованиями?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Да",
          "text": {
           "ru": "Да"
          }
         },
         {
          "value": "Да, но хотелось бы больше",
          "text": {
           "ru": "Да, но хотелось бы больше"
          }
         },
         {
          "value": "Нет",
          "text": {
           "ru": "Нет"
          }
         },
         {
          "value": "Не знаю (не интересовался)",
          "text": {
           "ru": "Не знаю (не интересовался)"
          }
         }
        ]
       }
      ]
     }
    ],
    "showTitle": true,
    "navigateToUrl": "https://kolosok.onrender.com/polls",
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
        if (question.isAnswerCorrect()) correct++;
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
  
  survey.onAfterRenderSurvey.add(function (sender, options) {
    sender.timestamps["started"] = Date.now();
  });
  
  survey.render("surveyContainer");
  survey.onComplete.add(async (e) => {
  
    e.timestamps["finished"] = Date.now();
    e.timestamps["dif"] =
      (e.timestamps["finished"] - e.timestamps["started"]) / 1000;
    const time = e.timestamps["dif"];
    //console.log('time');
    //console.log(e.timestamps);
    const email = document.cookie.replace(
      /(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    //console.log(document.cookie);
    //console.log(survey.getPlainData());
    const name = "Опрос 4"
    const result = JSON.stringify(getResult(survey));
    console.log(JSON.stringify({ name, email, questions: survey.getPlainData() }));
    const response = await fetch("https://kolosok.onrender.com/poll-result/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, questions: survey.getPlainData() }),
      // body: JSON.stringify({ email, result, time,  test_id, "category": bgsxa_category}),
    });
  });
  