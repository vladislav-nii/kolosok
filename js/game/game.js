// import { conductSurvey as conductSurvey1 } from "./question1.js";
// import { conductSurvey as conductSurvey2 } from "./question2.js";
const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");

const userGameResults = await(
    await fetch("/user-game-results")
).json();

const back = document.getElementById("back");
back.addEventListener("click", (ev) => {
    location.assign("/main");
});

const holder = document.getElementById("game-canvas-holder");
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = (window.innerHeight < 900) ? 900 : window.innerHeight - document.getElementById("btn-holder").clientHeight - 200;

ctx.textAlign = "center";
ctx.textBaseline = "middle";

var bg = new Image();
var circle = new Image();

bg.src = "../img/game/back.png";

const buttons = [];
const lines = [];
var isCurrent = true;



bg.onload = () => {
    const coordinates = generateCoordinates(
        10,
        cvs.clientWidth * 0.75,
        cvs.clientHeight,
        40,
        40
    );
    for (let i = 0; i < coordinates.length; ++i) {
        const x = coordinates[i].x;
        const y = coordinates[i].y;

        const btn = createBtn(i.toString(), x, y, 25);
        buttons.push(btn);
        if (i == 0) continue;

        const xPrev = coordinates[i - 1].x;
        const yPrev = coordinates[i - 1].y;
        ctx.beginPath();
        ctx.moveTo(xPrev, yPrev);

        const xAvg = x > xPrev ? xPrev + (x - xPrev) / 2 : x + (xPrev - x) / 2;
        const yAvg = y > yPrev ? yPrev + (y - yPrev) / 2 : y + (yPrev - y) / 2;

        ctx.bezierCurveTo(
            xAvg * Math.random(),
            yAvg,
            xAvg * Math.random(),
            yAvg,
            x,
            y
        );
        ctx.lineWidth = 10;
        ctx.setLineDash([20, 5]);
        ctx.strokeStyle = "rgba(44,146,58,0.8)";
        ctx.stroke();
    }

    buttons.forEach(async (button) => {
        button.draw();
        cvs.addEventListener("click", async function (event) {
            if (
                ctx.isPointInPath(
                    button.path2D,
                    translatedX(event.clientX),
                    translatedY(event.clientY)
                )
            ) {
                const userGameResultsNow = await (
                    await fetch("/user-game-results")
                ).json();
                if (userGameResultsNow.length != Number(button.text)) {
                    return;
                }

                holder.style.display = "none";

                const pathTo = `./question${button.text}.js`;
                const { json, multiplier } = await import(pathTo);

                var survey = new Survey.Model(json);

                survey.timestamps = {};

                survey.onAfterRenderSurvey.add(function (sender, options) {
                    sender.timestamps["started"] = Date.now();
                });

                survey.render("surveyContainer");
                survey.showCompletedPage = false;
                survey.onComplete.add(async (e) => {
                    const test_id = 101;

                    e.timestamps["finished"] = Date.now();
                    e.timestamps["dif"] =
                        (e.timestamps["finished"] - e.timestamps["started"]) / 1000;
                    const time = e.timestamps["dif"];
                    const result = JSON.stringify(+getResult(survey) * multiplier);
                    const game_id = 1;
                    const question_id = button.text;

                    holder.style.display = "flex";

                    const response = await fetch("/gameResult", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, result, time, game_id, question_id }),
                    });
                    refresh(buttons);

                    if (Number(button.text) === buttons.length - 1) {
                        holder.style.display = "none";
                        const results = await (
                            await fetch("/user-game-results")
                        ).json();
                        var score = 0;
                        results.forEach((result) => {
                            score += Number(result.result);
                        });

                        showResults();
                    }
                });
            }
        });
    });
    refresh(buttons);
};

function createBtn(index, xCoordinate, yCoordinate, rad) {
    return {
        path2D: new Path2D(),
        x: xCoordinate,
        y: yCoordinate,
        radius: rad,
        text: index,
        state: "default",
        draw: function () {
            ctx.font = "20px Arial ";
            switch (this.state) {
                default:
                    ctx.fillStyle = "orange";
                    this.path2D.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    ctx.fill(this.path2D);
                    ctx.fillStyle = "black";
                    ctx.font = '40px AvdiraRegular';
                    ctx.fillText(index, this.x, this.y);
            }
        },
    };
}

function translatedX(x) {
    var rect = cvs.getBoundingClientRect();
    var factor = cvs.width / rect.width;
    return factor * (x - rect.left);
}

function translatedY(y) {
    var rect = cvs.getBoundingClientRect();
    var factor = cvs.width / rect.width;
    return factor * (y - rect.top);
}

function generateCoordinates(
    count,
    canvasWidth,
    canvasHeight,
    marginX,
    marginY
) {
    const coordinates = [];

    for (let i = 0; i < count; ++i) {
        const x = randomInteger(0 + marginX, canvasWidth - marginX + canvasWidth * 0.3);

        const minMarginY = (canvasHeight - 2 * marginY) / (count - 1);

        const y = marginY + minMarginY * i;
        coordinates.push({ x, y });
    }
    return coordinates;
}

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getResult(survey) {
    var questions = survey.getQuizQuestions();
    var correct = false;
    questions.forEach(function (question) {
        if (!question.isEmpty()) {
            if (question.isAnswerCorrect()) correct = true;
        }
    });

    return correct;
}

async function refresh() {
    //console.log("refreshing...");
    const results = await (
        await fetch("/user-game-results")
    ).json();
    buttons.forEach(async (button) => {
        if (Number(button.text) < results.length) {
            if(results[Number(button.text)].result === "1"){
                ctx.fillStyle = "#31913d7a";
            } else {
                ctx.fillStyle = "#cd4e4e73";
            }
        } else if (Number(button.text) > results.length) {
            ctx.fillStyle = "#6b665e7a";
        } else {
            if (isCurrent)
                ctx.fillStyle = "#eca02f79";
            else {
                ctx.fillStyle = "#fffb2198";
            }
            isCurrent = !isCurrent;
        }
        ctx.fill(button.path2D);
        ctx.fillStyle = "white";
        ctx.font = '40px AvdiraRegular';
        ctx.fillText(button.text, button.x, button.y);
    });
}

function toggleVisibility(button) {
    ctx.fillStyle = "orange";
    ctx.fill(button.path2D);
    setTimeout(() => {
        ctx.fillStyle = "yellow";
        ctx.fill(button.path2D);
    }, 500);
}

async function showResults() {
    const results = await (
        await fetch("/user-game-results")
    ).json();
    var score = 0;
    results.forEach((result) => {
        score += Number(result.result);
    });

    if (results.length == 10) {
        document.getElementById('header').style.display = 'none';
        //document
        // .getElementById("resultContainer")
        //     .innerHTML =
        //     `<p>Вы набрали ${score} ${scklonenie(score)}</p>`;
        const response = await fetch(`/idCardResults/milo${email}`);
        const resp = await response.json();
        const id_card = resp.id_card;
        const response2 = await fetch("/stages/updateEvery", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id_card_results: id_card, stage_id: "5", newResult: score.toString()})
        });




        const resultsArr = Array.from(results);

        const resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML =
            // `<p>Ваш урожай составил ${Math.round(score * 7.86 * 100) / 100} цейнтнеров с га по сорту "Дарья"</p>
            // <p>---------------------</p>
            `<p> Вопрос 0: ${Number(resultsArr[0].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 1: ${Number(resultsArr[1].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 2: ${Number(resultsArr[2].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 3: ${Number(resultsArr[3].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 4: ${Number(resultsArr[4].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 5: ${Number(resultsArr[5].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 6: ${Number(resultsArr[6].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 7: ${Number(resultsArr[7].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 8: ${Number(resultsArr[8].result) ? "Верно" : "Неверно"}</p>
            <p> Вопрос 9: ${Number(resultsArr[9].result) ? "Верно" : "Неверно"}</p>`;

        const btn = document.createElement("button");
        // btn.textContent = "Сбросить результаты";
        // resultContainer.appendChild(btn);
        // btn.addEventListener("click", async (ev) => {
        //     console.log(email);
        //     await fetch(`/gameResults/${email}`, { method: 'DELETE' });
        //     location.reload();
        // })
        resultContainer.style.display = 'block';
        cvs.style.display = 'none';
    }
}

function scklonenie(num) {
    let forms = ['колосок', 'колоска', 'колосков'];

    num = Math.abs(num); // Преобразуем num в абсолютное значение

    // Проверяем, что передан массив с тремя формами склонения
    if (forms.length !== 3) {
        throw new Error('Неверный формат массива форм склонения');
    }

    // Определяем index для склонения в зависимости от значения числа
    let index;
    if (num % 10 === 1 && num % 100 !== 11) {
        index = 0; // Именительный падеж (1, 21, 31, ...)
    } else if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) {
        index = 1; // Родительный падеж (2-4, 22-24, 32-34, ...)
    } else {
        index = 2; // Родительный падеж для остальных случаев (0, 5-20, 25-30, ...)
    }

    return forms[index];
};


showResults();

setInterval(refresh, 500);
