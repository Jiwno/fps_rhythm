class People{

  constructor(jsonobj, color){
    this.time = jsonobj.time;
    this.pos = createVector(jsonobj.x,jsonobj.y,jsonobj.z);
    this.pos = createVector(cam_x+(jsonobj.rad)*sin(jsonobj.pan) , cam_y+(jsonobj.rad)*sin(jsonobj.tilt) , cam_z+(jsonobj.rad)*cos(jsonobj.pan)*cos(jsonobj.tilt));
    this.color = color;

    //we need to compare cam(pan&tilt) w/ jsonobj.pan&tilt.
  }

  render(){
    push();
      fill(this.color);
      translate(this.pos);
      box(50,50,50);
    pop();
  }


}
