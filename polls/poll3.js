var bgsxa_category = document.cookie.replace(
    /(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  var json = {
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
    const name = "Опрос 3"
    const result = JSON.stringify(getResult(survey));
    const response = await fetch("http://127.0.0.1:5500/poll-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, questions: survey.getPlainData() }),
      // body: JSON.stringify({ email, result, time,  test_id, "category": bgsxa_category}),
    });
  });
  