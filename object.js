class People{

  constructor(jsonobj, color){
    this.time = jsonobj.time;
    this.pos = createVector(jsonobj.x,jsonobj.y,jsonobj.z);
    this.color = color;
  }

  render(){
    push();
      fill(this.color);
      translate(this.pos);
      box(50,50,50);
    pop();
  }


}