var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight

ctx.textAlign = 'center'
ctx.textBaseline = 'middle';

var bg = new Image();
var circle = new Image();

bg.src = "img/game/back.png";

function draw() {

    var a = window.innerWidth * 0.96
    var b = window.innerHeight * 0.9
    //ctx.drawImage(btnRetry,0,0);
    ctx.drawImage(bg, 0, 0, a, b);
    //ctx.drawImage(bg,0,0,1.65*a,b,1*a,1*b,-1.2*a,);

}

bg.onload = () => {
    var a = window.innerWidth * 0.96
    var b = window.innerHeight * 0.9
    //ctx.drawImage(btnRetry,0,0);
    ctx.drawImage(bg, 0, 0, a, b);
    const btn1 = createBtn('1', 100, 100, 30);
    const btn2 = createBtn('1', 200, 200, 30);
    ctx.beginPath();
    ctx.bezierCurveTo(100, 100, 10, 150, 200, 200);
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'darkgreen';
    ctx.stroke();
    btn1.draw();
    btn2.draw();
    console.log(btn1.path2D);
    cvs.addEventListener("click", function (event) {
        console.log("X : " + translatedX(event.clientX)  + " Y :" + translatedY(event.clientY))
        if(ctx.isPointInPath(btn1.path2D, translatedX(event.clientX), translatedY(event.clientY))){
            alert(btn1.text);
            location.assign("http://localhost:5500/main");  
        }
    })
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
                case "over":
                    ctx.fillStyle = "darkred";
                    //ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    this.path2D.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    ctx.fill(this.path2D);
                    ctx.fillStyle = "black";
                    ctx.fillText(index , this.x, this.y);
                    break;
                default:
                    // ctx.fillStyle = "darkred";
                    // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    // ctx.fill()
                    // ctx.fillStyle = "black";
                    // ctx.fillText(index , this.x, this.y);
                    ctx.fillStyle = "darkred";
                    this.path2D.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    ctx.fill(this.path2D);
                    ctx.fillStyle = "black";
                    ctx.fillText(index , this.x, this.y);
            }
        }
    }
};

function translatedX(x){
    var rect = cvs.getBoundingClientRect();
    var factor = cvs.width / rect.width;
    return factor * (x - rect.left);
}

function translatedY(y){
    var rect = cvs.getBoundingClientRect();
    var factor = cvs.width / rect.width;
    return factor * (y - rect.top);
}

// var btnRetry = {
//     x: canvas.width / 2 - 60,
//     y: canvas.height / 2 - 20,
//     w: 120,
//     h: 40,
//     text: "Retry",
//     state: "default",
//     draw: function () {
//         ctx.font = "20px Arial ";
//         switch (this.state) {
//             case "over":
//                 ctx.fillStyle = "darkred";
//                 ctx.fillRect(this.x, this.y, this.w, this.h);
//                 ctx.fillStyle = "black";
//                 ctx.fillText("Retry?", this.x + this.w / 2 - ctx.measureText("Retry").width / 2, this.y + this.h / 2 + 10);
//                 break;
//             default:
//                 ctx.fillStyle = "red";
//                 ctx.fillRect(this.x, this.y, this.w, this.h);
//                 ctx.fillStyle = "black";
//                 ctx.fillText("Retry", this.x + this.w / 2 - ctx.measureText("Retry").width / 2, this.y + this.h / 2 + 10);

//         }
//     }
// };