var dots = [];

var database;

var paint;

var dbArray = [];

function setup(){
    database = firebase.database();
    canvas = createCanvas(1250,650);

    paint = database.ref('drawing');
    paint.on("value",readPosition,showError);
}

function mouseDragged(){
    var point = {
        x : mouseX,
        y : mouseY
    }
    dots.push(point);
    database.ref('drawing').set({
        'db' : dots
    })
    
}

function draw(){
    background(240);

    beginShape();
    strokeWeight(10);
    stroke(255,0,0);
    noFill();
    for(var i = 0; i < dbArray.length; i++){
        vertex(dbArray[i].x,dbArray[i].y);
    }
    endShape();
}

function readPosition(data){
    dbArray = data.val().db;
}

function showError(){
    console.log("Error!Error!");
}
