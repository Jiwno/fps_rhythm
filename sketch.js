let object;
let people = [];
let peopletexture = [];
let col;
let col2;
let cam_x, cam_y, cam_z;
let cam_dx, cam_dy, cam_dz;
let cam_cx, cam_cy, cam_cz;
let aim_rad, aim_x, aim_y, aim_z, aim_tipangle;
let pan, tilt;
let sensitivity;



function preload(){
object = loadJSON("object.json");
  for(let i = 3; i <= 4; i++){
    peopletexture[i] = loadImage("assets/"+i+".png") ;
  }
//peopletexture[0] = loadImage("assets/1.jpg");
}

function setup(){
  cam_x = 0;
  cam_y = 0;
  cam_z = -(windowHeight/2/ tan(PI*30.0 / 180.0));
  cam_dx = 0;
  cam_dy = 0;
  cam_dz = 0;
  pan = 0;
  tilt = 0;
  sensitivity = 8;
  aim_rad = (-cam_z)/10;

  createCanvas(windowWidth, windowHeight, WEBGL);
  col = color(255,0,0);
  col2 = color(0,255,0);
}

function draw(){
  background(0);
  updateCamCenter();
  camera(cam_x, cam_y, cam_z,cam_cx, cam_cy, cam_cz,0,-1,0);
  pan += radians(movedX)/sensitivity;
  tilt -= radians(movedY)/sensitivity;


  //<Object.keys(object).length = length of the json object
  for(let i = 0; i<Object.keys(object).length; i++){
    people[i] = new People(object[i]);
  }


  fill(0,0,255);
//  plane(1000, 1000);

for(let i = 0; i<Object.keys(object).length; i++){
  people[i].render();
}


//set aiming point
    push();
    translate(aim_x, aim_y, aim_z);
    fill(255);
    noStroke();
    sphere(0.5);
    pop();


  //console.log(object[0]);
}

function mouseClicked(){
  for(let i = 0; i<Object.keys(object).length; i++){
    people[i].detected();
    console.log(0+": "+people[0].detected());
  }
  requestPointerLock();
}


function updateCamCenter(){
  cam_dz = cos(pan)*cos(tilt);
  cam_dx = sin(pan);
  cam_dy = sin(tilt);

  // compute scene center position
  cam_cx = cam_x + cam_dx*(-cam_z);
  cam_cy = cam_y + cam_dy*(-cam_z);
  cam_cz = cam_z + (cam_dz)*(-cam_z);

  //compute aiming point position
  aim_x = cam_x + cam_dx*aim_rad;
  aim_y = cam_y + cam_dy*aim_rad;
  aim_z = cam_z + (cam_dz)*aim_rad;
  aim_tipangle = asin(0.25/sqrt(sq(aim_x-cam_x)+sq(aim_z-cam_z)));
}
