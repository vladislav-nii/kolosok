var bgsxa_category = document.cookie.replace(
  /(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);
var json = {
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "Какое учреждение образования вы представляете?",
          isRequired: true,
        },
        {
          type: "text",
          name: "question2",
          title: "Какие дисциплины вы преподаете?",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question5",
          title:
            "Рассказываете ли вы обучающимся о последних достижениях в аграрной сфере для разрушения стереотипов о ней?",
          isRequired: true,
          choices: [
            "да",
            "нет",
            {
              value: "затрудняюсь",
              text: "затрудняюсь ответить",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "question4",
          title:
            "Считаете ли вы, что педагогам необходимо придерживаться концепции непрерывного образования в целях постоянного совершенствования своих навыков и умений?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
        {
          type: "radiogroup",
          name: "question6",
          title:
            "Считаете ли вы, что жизнь молодёжи в сельской местности может быть перспективной (в плане построения карьеры, развития бизнеса и т.д.)?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
        {
          type: "text",
          name: "question3",
          title:
            "Какие, на ваш взгляд, наиболее перспективные сельскохозяйственные профессии?",
          isRequired: true,
        },
        {
          type: "text",
          name: "question7",
          title:
            "Как вам кажется, какие сельскохозяйственные профессии в будущем могут исчезнуть?",
          isRequired: true,
        },
        {
          type: "checkbox",
          name: "question18",
          title:
            "Какие факторы тормозят приток молодежи для работы в сельскохозяйственной сфере?",
          isRequired: true,
          choices: [
            "особенности условий труда",
            "слабая развитость цифровизации в данной сфере",
            "низкий уровень заработной платы",
            "непрестижность работы",
            "ограниченный карьерный рост",
          ],
          showOtherItem: true,
          otherText: "др.",
        },
        {
          type: "checkbox",
          name: "question9",
          title:
            "Какие способы привлечения молодежи в сельское хозяйство вы видите?",
          isRequired: true,
          choices: [
            "улучшение условий труда",
            "увеличение заработной платы",
            "предоставление льготных условий на приобретение жилья, бытовые нужды",
            "улучшение оснащенности рабочих мест передовыми техникой и технологий",
          ],
          showOtherItem: true,
          otherText: "др.",
        },
        {
          type: "checkbox",
          name: "question10",
          title:
            "Какие формы ранней профориентации вам кажутся наиболее эффективными?",
          isRequired: true,
          choices: [
            "мастер-классы",
            "профориентационные игры",
            "экскурсии в организации",
            "проектная деятельность",
            "конкурсы",
            "встречи с представителями учреждений образования",
            "встречи с представителями профессии, которые достигли успеха в своем деле",
          ],
          showOtherItem: true,
          otherText: "др.",
        },
        {
          type: "checkbox",
          name: "question11",
          title:
            "Какие вы используете методические разработки для повышения заинтересованности у школьников к сельскохозяйственной сфере?",
          isRequired: true,
          choices: [
            "мастер-классы",
            "профориентационные игры",
            "экскурсии в организации",
            "проектная деятельность",
            "конкурсы",
            "встречи с представителями учреждений образования",
            "встречи с представителями профессии, которые достигли успеха в своем деле",
          ],
          showOtherItem: true,
          otherText: "др.",
        },
        {
          type: "radiogroup",
          name: "question13",
          title:
            "Считаете ли вы, что использование цифровых образовательных технологий способствует большей мотивации обучающихся?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
        {
          type: "text",
          name: "question8",
          title:
            "Какие действия должны предпринимать родители для заинтересованности детей сельскохозяйственной сферой?",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question15",
          title:
            "Считаете ли вы, что существуют особенности при подготовке школьников, выбирающих аграрные профессии?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
        {
          type: "text",
          name: "question14",
          title:
            "Если на предшествующий вопрос вы ответили утвердительно, напишите, какие существую особенности выбора аграрной профессии? ",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question17",
          title:
            "Известно ли вам направление «психология аграрного образования», которая, в целях совершенствования учебного процесса, занимается изучением отдельных аспектов обучения, воспитания и развития в данной сфере?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
        {
          type: "text",
          name: "question16",
          title:
            "Как вам кажется, какая основная причина выбора школьниками обучения в аграрных классах?",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question19",
          title:
            "Считаете ли вы, что работа в аграрной сфере в будущем может стать трендом?",
          isRequired: true,
          choices: ["да", "нет", "затрудняюсь ответить"],
        },
      ],
    },
  ],
  showTitle: false,
  navigateToUrl: "/polls",
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
  const name = "Опрос 1";
  const result = JSON.stringify(getResult(survey));
  const response = await fetch("/poll-result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, questions: survey.getPlainData() }),
    // body: JSON.stringify({ email, result, time,  test_id, "category": bgsxa_category}),
  });
});
