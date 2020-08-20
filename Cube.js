var x;
function setup(){
  x = 20;
  createCanvas(1000,700,WEBGL);
}
function draw(){
  thing();
  thing(x);
  shapes();
  mousePressed();
}
function thing(x){
  background(255);
  stroke(255,255,255);
  ambientLight(0,255,255);
  ambientMaterial(0,0,245);
  rotateZ(frameCount * 4);
  torus(80+x,15);
  rotateX(frameCount * 1);
  rotateY(frameCount * 2);
  push();
  translate(-200,0,0);
  box(150+x,20+x,50);
  translate(400,0,0);
  box(150+x,20+x,50);
  translate(-200,0,200);
  pop();
  pop();
}

function mousePressed(){
  frameCount = frameCount + 10;
}
function shapes(){
  sphere(40);
  rotateZ(millis() / 4);
  rotateX(frameCount * 1);
  rotateY(frameCount * 2);
}
