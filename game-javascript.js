
let level = 5, winner = 50;

function startGame(){
    randomGenerator();
    insertionExtra();
};

    function randomGenerator(){
        for (var i = 0; i < level; i++) {
            Left = Math.floor(Math.random() * 75) + 15;
            Top = Math.floor(Math.random() * 80) + 5;

            insertionR(Left, Top, i);
            insertionL(Left, Top, i);

    }
    
};

function insertionL(left, top, iteratorL){
    $("#L").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorL + ">");
    return $("#" + iteratorL).css({
            "position": "absolute",
                "top": top + "%",
                "left": left + "%"
        });
        
};

function insertionR(left, top, iteratorR){
    $("#R").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorR + ">");
    return $("#" + iteratorR).css({
            "position": "absolute",
                "top": top + "%",
                "left": left + "%"
        });
};


function insertionExtra(iterationExtra){
    $("#R").append("<img src = 'smiley4.png' width='50' height='50' onclick='next()' id=" + iterationExtra + ">");
    return $("#" + iterationExtra).css({
            "position": "absolute",
                "top": Math.floor(Math.random() * 75) + 15 + "%",
                "left": Math.floor(Math.random() * 80) + 5 + "%"
        });
};

function next(){

    level+=5;
    $("img").remove();
    startGame(level);

    if(level > winner) alert("YOU WIN");
}
