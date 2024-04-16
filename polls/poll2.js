var bgsxa_category = document.cookie.replace(
    /(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  var json = {
    "locale": "ru",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "name": "question1",
        "title": "Выберите 3 наиболее значимых барьера (ограничения), препятствующих применению цифровых технологий в сельскохозяйственных предприятиях.",
        "isRequired": true,
        "choices": [
         {
          "value": "Дефицит специалистов, владеющих цифровыми технологиями в сельскохозяйственном производстве",
          "text": "Дефицит специалистов, владеющих цифровыми технологиями в сельскохозяйственном производстве."
         },
         "Нежелание сотрудников использовать новые технологии на своих рабочих местах/участках",
         "Недостаточный уровень охвата и качества высокоскоростного интернета и мобильной связи в сельскохозяйственных организациях",
         {
          "value": "Сложности в качественной интеграции различного вида программного обеспечения между собой ",
          "text": "Сложности в качественной интеграции различного вида программного обеспечения между собой"
         },
         "Высокая стоимость внедрения и обслуживания цифровых технологий",
         "Недостаток на рынке отечественной техники и программного обеспечения для эффективного применения цифровых технологий",
         "Несоответствие отчетных форм иностранного ПО требованиям белорусского законодательства",
         {
          "value": "Необходимость дублирования отчетности в электронном и бумажном виде ",
          "text": "Необходимость дублирования отчетности в электронном и бумажном виде"
         },
         "Недостаточный уровень методической поддержки (примеров использования, инструкций и пр.) при реализации проектов цифровизации",
         "Сложность проведения независимой экспертизы и оценки эффективности внедрения цифровых технологий",
         "Недостаток финансовых инструментов поддержки внедрения цифровых технологий"
        ],
        "maxSelectedChoices": 3
       }
      ]
     }
    ],
    showTitle: false,
    navigateToUrl: "http://127.0.0.1:5500/polls",
    widthMode: "responsive",
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
    const test_id = 1;
  
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
    const name = "Опрос 2"
    const result = JSON.stringify(getResult(survey));
    const response = await fetch("http://127.0.0.1:5500/poll-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, questions: survey.getPlainData() }),
      // body: JSON.stringify({ email, result, time,  test_id, "category": bgsxa_category}),
    });
  });
  