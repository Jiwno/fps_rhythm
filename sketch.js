let object;
let a;
let col;
let cam_x, cam_y, cam_z;
let cam_dx, cam_dy, cam_dz;
let cam_cx, cam_cy, cam_cz;
let aim_x, aim_y, aim_z;
let pan, tilt;



function preload(){
object = loadJSON("object.json");
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


  createCanvas(windowWidth, windowHeight, WEBGL);
  col = color(255,0,0);

}

function draw(){
  a = new People(object[0], col);
  background(0);

  updateCamCenter();
  camera(cam_x, cam_y, cam_z,cam_cx, cam_cy, cam_cz,0,-1,0);
  pan += movedX/360;
  tilt -= movedY/360;

  //updateCamCenter();
  fill(0,0,255);
//  plane(1000, 1000);

  push();
  fill(0);
  a.render();
  pop();


//set aiming point
    push();
    translate(aim_x, aim_y, aim_z);
    fill(255);
    noStroke();
    sphere(0.5);
    pop();

    push();
    translate(50,0, 50);
    fill(0,255,0);
    box();
    pop();



  //console.log(object[0]);
}

function mouseClicked(){
  console.log(cam_dx + " "+ cam_dy);
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

  aim_x = cam_x + cam_dx*(-cam_z)/8;
  aim_y = cam_y + cam_dy*(-cam_z)/8;
  aim_z = cam_z + (cam_dz)*(-cam_z)/8;

}
