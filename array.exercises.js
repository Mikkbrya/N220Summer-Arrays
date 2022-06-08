function setup() { createCanvas(400,300);}
function draw() { background (220,0,200);
line(0,50,400,300);
rectMode(CENTER);
rect(200, 150, 150, 150);
}

var circle_coords=[];
var frames_count=0;
var diameter=30;
function setup(){ createCanvas(400,400);}
function draw(){
    background(127);
    for(let i =0; i<circle_coords[i]; i++){
    ellipse(width/2,circle_coords[i],diameter,diameter);
    circle_coords[i]=circle_coords[i]+5; }
    frames_count=frames_count+1;
    if(frames_count==10){
       frames_count=0;
       circle_coords.push(0);
       if(circle_coords.length>100){
         circle_coords.shift();

         }
       }
    }
  }
}

var rectXY= [];
function setup() {
    createCanvas(400,400);
}
function draw() {
    background(50);
    noStroke();
    reactMode(CENTER);
    fill(255);
    for (var i = 0; i < reactyy.length; i++) {
        fill(reactXY[i][2]);
        rect(rectXY[i][0]), rectXY[i] [1], 50, 25);
        rectXY[i][1] += 1;
        } 
    }
    function mousePressed() {
        rectXY.push([mouseX, mouseY, random(255)]) ;
    
}
    }
      }
var radius =20;
var x = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var y = [0,0,0,0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas (400,400);
}

function draw() {
    x.shift();
    x.push(mouseX);
    y.shift();
    y.push(mouseY);
    background('blue')
    for(let i=0; i<10; i++){
        ellipse( x[i], y[i], radius, radius);
    }
}

