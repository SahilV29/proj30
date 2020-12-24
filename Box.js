class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      (0,0,this.width, this.height);
      if(this.body.speed < 3){
      this.body.display 
      }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image( this.body.position.x, this.body.position.y, 50, 50);
        
       }
     pop();
      }
    }