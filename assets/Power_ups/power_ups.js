function reverse_power(x, y){

  this.posX = x;
  this.posY = y;

  this.persec = [0, 0];

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && dist(player.posX, player.posY, this.posX, this.posY)<=80){
        if(dist(player.posX, player.posY, this.posX, this.posY)<=18){
          reverse_state = ((reverse_state) ? 0 : 1);
          let index = power_ups.indexOf(this);
          power_ups.splice(index, 1);
        }
        let length = dist(player.posX, player.posY, this.posX, this.posY);
        this.persec = [(player.posX-this.posX)*2/length, (player.posY-this.posY)*2/length];
        break;
      }
      else
        this.persec = [0, 0];
    }
    
    this.posX += this.persec[0];
    this.posY += this.persec[1];

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    if(this.rotation%90>=0&&this.rotation%90<=20){
      push()
      noFill();
      stroke(color(33, 55, 156));
      strokeWeight(2);
      circle(0, 0, (this.rotation%90)*2);
      pop()
    }
    imageMode(CENTER);
    image(reverse_png, 0, 0);
    pop()
  }
}

function mine_power(x, y){

  this.posX = x;
  this.posY = y;

  this.persec = [0, 0];

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && dist(player.posX, player.posY, this.posX, this.posY)<=80){
        if(dist(player.posX, player.posY, this.posX, this.posY)<=18){
          player.special_ammo = (!advance_setting_state["TRIPPLE POWER:"]) ? 1 : 3;
          player.type_special_ammo = "mine";
          let index = power_ups.indexOf(this);
          power_ups.splice(index, 1);
        }
        let length = dist(player.posX, player.posY, this.posX, this.posY);
        this.persec = [(player.posX-this.posX)*2/length, (player.posY-this.posY)*2/length];
        break;
      }
      else
        this.persec = [0, 0];
    }
    
    this.posX += this.persec[0];
    this.posY += this.persec[1];

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    if(this.rotation%90>=0&&this.rotation%90<=20){
      push()
      noFill();
      stroke(color(33, 55, 156));
      strokeWeight(2);
      circle(0, 0, (this.rotation%90)*2);
      pop()
    }
    imageMode(CENTER);
    image(mine_png, 0, 0);
    pop()
  }
}

function scatter_power(x, y){

  this.posX = x;
  this.posY = y;

  this.persec = [0, 0];

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && dist(player.posX, player.posY, this.posX, this.posY)<=80){
        if(dist(player.posX, player.posY, this.posX, this.posY)<=18){
          player.special_ammo = (!advance_setting_state["TRIPPLE POWER:"]) ? 1 : 3;
          player.type_special_ammo = "scatter";
          let index = power_ups.indexOf(this);
          power_ups.splice(index, 1);
        }
        let length = dist(player.posX, player.posY, this.posX, this.posY);
        this.persec = [(player.posX-this.posX)*2/length, (player.posY-this.posY)*2/length];
        break;
      }
      else
        this.persec = [0, 0];
    }
    
    this.posX += this.persec[0];
    this.posY += this.persec[1];

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    if(this.rotation%90>=0&&this.rotation%90<=20){
      push()
      noFill();
      stroke(color(33, 55, 156));
      strokeWeight(2);
      circle(0, 0, (this.rotation%90)*2);
      pop()
    }
    imageMode(CENTER);
    image(scatter_png, 0, 0);
    pop()
  }
}

function laser_power(x, y){

  this.posX = x;
  this.posY = y;

  this.persec = [0, 0];

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && dist(player.posX, player.posY, this.posX, this.posY)<=80){
        if(dist(player.posX, player.posY, this.posX, this.posY)<=18){
          player.special_ammo = (!advance_setting_state["TRIPPLE POWER:"]) ? 1 : 3;
          player.type_special_ammo = "laser";
          let index = power_ups.indexOf(this);
          power_ups.splice(index, 1);
        }
        let length = dist(player.posX, player.posY, this.posX, this.posY);
        this.persec = [(player.posX-this.posX)*2/length, (player.posY-this.posY)*2/length];
        break;
      }
      else
        this.persec = [0, 0];
    }
    
    this.posX += this.persec[0];
    this.posY += this.persec[1];

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    if(this.rotation%90>=0&&this.rotation%90<=20){
      push()
      noFill();
      stroke(color(33, 55, 156));
      strokeWeight(2);
      circle(0, 0, (this.rotation%90)*2);
      pop()
    }
    imageMode(CENTER);
    image(laser_png, 0, 0);
    pop()
  }
}

function dropout_power(x, y, type){
  if(type=="mine")
    power_ups.push(new mine_power(x, y));
  else if(type=="scatter")
    power_ups.push(new scatter_power(x, y));
  else if(type=="laser")
    power_ups.push(new laser_power(x, y));
}

function new_random_power_spawn(x, y){
  power_ups.push(random([new reverse_power(x, y), new mine_power(x, y), new scatter_power(x, y), new laser_power(x, y)]));
}