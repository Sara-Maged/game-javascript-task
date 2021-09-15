
let level = 5, winner = 50;

function startGame(){
    randomGenerator();
    insertionExtra();

    // if(level == winner){
    //     $("img").remove();
    //     document.getElementById("gameEnv").appendChild(<h1>YOU WIN</h1>)
        
    // }

    // if(level == winner){
    //     $("#body").append("<h1> YOU WIN !</h1>");
    //     return $("#").css({
    //         "position": "absolute",
    //             "top": top + "%",
    //             "left": left + "%"
    //     });

    //     break;
    // }
};

    function randomGenerator(){
        for (var i = 0; i < level; i++) {
            Left = Math.floor(Math.random() * 80) + 10;
            Top = Math.floor(Math.random() * 80) + 5;

            // Leftx = Math.floor(Math.random() * 80) + 10;
            // Topx = Math.floor(Math.random() * 80) + 5;

            insertionR(Left, Top, i);
            insertionL(Left, Top, i);

            //if(i > (min/5)) insertionExtra(Leftx, Topx, i);

    }
    
};

function insertionL(left, top, iteratorL){
    $("#L").append("<img src = 'smiley.png' width='50' height='50' id=" + iteratorL + ">");
    return $("#" + iteratorL).css({
            "position": "absolute",
                "top": top + "%",
                "left": left + "%"
        });
        
};

function insertionR(left, top, iteratorR){
    $("#R").append("<img src = 'smiley.png' width='50' height='50' id=" + iteratorR + ">");
    return $("#" + iteratorR).css({
            "position": "absolute",
                "top": top + "%",
                "left": left + "%"
        });
};

// for(var j = 0; j < 2; j++){

//     Left = Math.floor(Math.random() * 80) + 10;
//     Top = Math.floor(Math.random() * 80) + 5;

//     insertionExtra(Left, Top, j);
// }


function insertionExtra(iterationExtra){
    $("#R").append("<img src = 'smiley.png' width='50' height='50' onclick='next()' id=" + iterationExtra + ">");
    return $("#" + iterationExtra).css({
            "position": "absolute",
                "top": Math.floor(Math.random() * 80) + 10 + "%",
                "left": Math.floor(Math.random() * 80) + 5 + "%"
        });
};

function next(){
    // document.getElementById(iterationExtra)

    level+=5;
    $("img").remove();
    startGame(level);

    if(level > winner) alert("YOU WIN");

    // for(var x = 0; x < level; x++){
    //     var element = document.getElementById("x").style.display='none';
	    
    // }



}




// (function makeDiv(){
//     // vary size for fun
//     var divsize = ((Math.random()*100) + 50).toFixed();
//     var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
//     $newdiv = $('<div/>').css({
//         'width':divsize+'px',
//         'height':divsize+'px',
//         'background-color': color
//     });

//     // make position sensitive to size and document's width
//     var posx = (Math.random()).toFixed();
//     var posy = (Math.random()).toFixed();

//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( 'body' ).fadeIn(100).delay(1000).fadeOut(500, function(){
//       $(this).remove();
//       makeDiv(); 
//     }); 
// })();

// function generateRandomForArray() {
//     var num = Math.floor(Math.random() * 8);
//     return num;
// }

// function generateRandom() {
//     var num = Math.floor(Math.random() * 400);
//     return num;
// }

// function showLetter() {
//     var letter = imgsArray[generateRandomForArray()];
//     $("div").append("<img src='GameHTML5/images/" + letter + ".png'>");
//     var left = generateRandom();
//     var top = generateRandom();
//     $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
// }


// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// function drawCircle(xCenter, yCenter){
//     ctx.beginPath();

//     ctx.arc(xCenter, yCenter, 3, 0, 2 * Math.PI);
//     ctx.fill();
// }

// function generateRandom(minNumber, maxNumber){
//     let randomDecimal = Math.random(); // generates decimal from 0 to 1 
//     let range = maxNumber - minNumber;
//     let ScaleUp = Math.round(randomDecimal * range);
//     let finalnumber = minNumber + ScaleUp;

//     return finalnumber;
// }

// function drawRandomCircle(x1, y1, x2, y2){
//     let xCenter = generateRandom(x1, x2);
//     let yCenter = generateRandom(y1, y2);

//     drawCircle(xCenter, yCenter);
// }

// for(var i = 0; i < 5; i++){
//     drawRandomCircle(5, 5, 200, 100);
// }
