let object;
let a;
let col;
let cam_x, cam_y, cam_z;
let cam_dx, cam_dy, cam_dz;
let cam_cx, cam_cy, cam_cz;
let pan, tilt;
let obj_x, obj_y, obj_z;
let obj_x1, obj_y1, obj_z1;


function preload(){
object = loadJSON("object.json");
}

function setup(){
  cam_x = 0;
  cam_y = 0;
  cam_z = windowHeight/2/ tan(PI*30.0 / 180.0);
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
  background(255);
  updateCamCenter();
  camera(cam_x, cam_y, cam_z,cam_cx, cam_cy, cam_cz,0,1,0);
  pan += movedX/128;
  tilt -= movedY/128;
  updateCamCenter();
  fill(0,0,255);
//  plane(1000, 1000);

  push();
  fill(0);
   a.render();
  pop();

    //translate(obj_x, obj_y, obj_z);
    //translate(obj_x1, obj_y1, obj_z1);
    translate(0,0,cam_z*2);
    fill(0,255,0);
    box();


  //console.log(object[0]);
}

function mouseClicked(){
  console.log(cam_dx + " "+ cam_dy);
  requestPointerLock();
}


function updateCamCenter(){
  cam_dz = 1;
  cam_dx = -sin(pan);
  cam_dy = -sin(tilt);

  // compute scene center position
  cam_cx = cam_x + cam_dx;
  cam_cy = cam_y + cam_dy;
  cam_cz = cam_z + cam_dz;

  obj_x = cam_x + 3*cam_dx;
  obj_y = cam_y + 3*cam_dy;
  obj_z = cam_z +cam_dz;

  obj_x1 = cam_x - cam_dx/64;
  obj_y1 = cam_y - cam_dy/64;
  obj_z1 = cam_z + cam_dz;
}
