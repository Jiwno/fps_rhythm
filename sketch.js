let object;
let a;
let col;

function preload(){
object = loadJSON("object.json");
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  col = color(255,0,0);
}

function draw(){
  //console.log(object[0]);
  a = new People(object[0], col);
  a.render();
}
