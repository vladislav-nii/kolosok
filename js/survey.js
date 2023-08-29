var json = {
    "maxWidth": '10px',
    "title": "Виды пшеницы",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "maxWidth": "5%",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question1",
                    "title": "Какие виды пшеницы существуют",
                    "correctAnswer": [
                        "мягкая краснозерная яровая",
                        "твердая яровая"
                    ],
                    "choices": [
                        "мягкая краснозерная яровая",
                        "твердая яровая",
                        "анатолийская"
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question2",
                    "title": "Какие виды пшеницы существуют",
                    "correctAnswer": [
                        "мягкая краснозерная яровая",
                        "твердая яровая"
                    ],
                    "choices": [
                        "мягкая краснозерная яровая",
                        "твердая яровая",
                        "анатолийская"
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question3",
                    "title": "Какие виды пшеницы существуют",
                    "correctAnswer": [
                        "мягкая краснозерная яровая",
                        "твердая яровая"
                    ],
                    "choices": [
                        "мягкая краснозерная яровая",
                        "твердая яровая",
                        "анатолийская"
                    ]
                }
            ]
        }
    ]
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
survey.render("surveyContainer");
survey.onComplete.add(async(e) => {
    const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(document.cookie);
    const result = JSON.stringify(getResult(survey));
    const response = await fetch('https://oprosnik.onrender.com/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result }),
    });
    
});