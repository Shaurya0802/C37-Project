var dots = [];

function setup(){
    canvas = createCanvas(displayWidth-70,displayHeight-150);
}

function mouseDragged(){
    var point = {
        x : mouseX,
        y : mouseY
    }
    dots.push(point);
}

function draw(){
    background(240);

    beginShape();
    strokeWeight(7);
    stroke(0);
    noFill();
    for(var i = 0; i < dots.length; i++){
        vertex(dots[i].x,dots[i].y);
    }
    endShape();
}
