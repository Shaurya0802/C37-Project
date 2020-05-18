var dots = [];

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);
}

function mouseDragged(){
    var point = {
        x : mouseX,
        y : mouseY
    }
    dots.push(point);
}

function draw(){
    background(0);

    beginShape();
    strokeWeight(7);
    stroke(255);
    noFill();
    for(var i = 0; i < dots.length; i++){
        vertex(dots[i].x,dots[i].y);
    }
    endShape();
}
