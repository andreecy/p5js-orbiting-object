var posX;
var posY;
var radiusX, radiusY;
var speed;
var dir;

function setup() {
    createCanvas(500,500);
    background(0);
    noStroke();
    posX = posY = 0;
    radiusX = radiusY = 200;
    speed=0;
    dir=0;

}

function draw() {
    background(0);
    stroke(255);
    fill(0);
    ellipse(width/2,height/2,radiusX*2,radiusY*2);

    // orbiting
    speed += dir*0.05;
    posX = radiusX * cos(speed);
    posY = radiusY * sin(speed);
    translate(width/2,height/2);
    fill(255);
    rectMode(CENTER);
    rect(posX,posY,20,40);
}

function keyPressed() {
    if(key === " "){
        if (dir==1) {
            dir = -1;
        }else{
            dir = 1;
        }
    }

}
