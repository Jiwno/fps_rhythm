class People{

  constructor(jsonobj){
    this.time = jsonobj.time;
    this.pos = createVector(jsonobj.x,jsonobj.y,jsonobj.z);
    this.pos = createVector(cam_x+(jsonobj.rad)*sin(radians(jsonobj.pan)) , cam_y+(jsonobj.rad)*sin(radians(jsonobj.tilt)) , cam_z+(jsonobj.rad)*cos(radians(jsonobj.pan))*cos(radians(jsonobj.tilt)));
    this.color = color(jsonobj.r, jsonobj.g, jsonobj.b);

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
