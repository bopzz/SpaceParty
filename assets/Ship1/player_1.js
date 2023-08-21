function player1(){ // Tàu 1

  this.posX = 30;   // Tọa độ x ban đầu
  this.posY = 30;  // Tọa độ y ban đầu

  this.rotation = 0;                                                        // Góc theo DEGREE
  let angle = TWO_PI*this.rotation/360.0;                                   // Góc theo RADIAN
  this.persec = [sin(angle), -cos(angle)];                                  // Hướng đi ban đầu của tàu

  this.state = (!advance_setting_state["START WITH SHIELD:"]) ? 1 : 0;      // Trạng thái của tàu
  this.time_out_of_ship = 0;                                                // Thời điểm phá nát rời khỏi tàu
  this.side_cannons = false;

  this.ammo_rotation = 0;                                                   // Đạn rotate quanh tàu
  this.normal_ammo = 3;                                                     // Đạn bình thường ban đầu

  this.type_special_ammo = chosen;                                          // Loại đạn ban đầu

  if(advance_setting_state["STARTING POWER:"]==0)                           //
    this.special_ammo = 0;                                                  // Đạn đặc biệt ban đầu
  else if(!advance_setting_state["TRIPPLE POWER:"])                         //
    this.special_ammo = 1;                                                  //
  else                                                                      //
    this.special_ammo = 3;                                                  //

  this.reload = 0;                                                          // Đếm thời gian để nạp 1 viên đạn bình thường

  this.order = 0;                                                           // Vị trí trong mảng

  this.knockback = 0;                                                       // Bị lùi lại do đạn laze

  this.release_time = 0;                                                    // Thời điểm rời nút quay
  this.press_twice_ready = false;                                           // Chuẩn bị cho dash
  this.dashed = false;                                                      // Đã dash chưa
  this.boosting = 0;                                                        // Thời gian đến khi hết

  this.update = function(){ // Cập nhật trạng thái tàu

    if(keyIsPressed){
      if(keyIsDown(81)){ // Nút q
        if(this.press_twice_ready&&this.release_time<=12&&!this.dashed&&this.state<2){
          if(!reverse_state)
            this.rotation = ((this.rotation+90>360) ? this.rotation+90-360 : this.rotation+90);
          else
            this.rotation = ((this.rotation-90<0) ? this.rotation-90+360 : this.rotation-90);
          let angle = TWO_PI*this.rotation/360.0;
          this.persec = [sin(angle), -cos(angle)];
          if(!this.boosting)
            this.boosting = (advance_setting_state["SUPER DASH:"])? 480 : 60;
          this.posX = Math.min(Math.max(this.posX+this.persec[0]*12, 30), game_Width-30);
          this.posY = Math.min(Math.max(this.posY+this.persec[1]*12, 30), game_Height-30);
          this.dashed = true;
        }
        else if(!reverse_state)
          this.rotation = ((this.rotation+3>360) ? this.rotation+3-360 : this.rotation+3);  // Cập nhật hướng tàu sẽ đi nếu không đổi chiều
        else
          this.rotation = ((this.rotation-3<0) ? this.rotation-3+360 : this.rotation-3);    // Cập nhật hướng tàu sẽ đi nếu đổi chiều
        let angle = TWO_PI*this.rotation/360.0;
        this.persec = [sin(angle), -cos(angle)];
      }
      if(keyIsDown(87)&&this.state==2){ // Nút w
        this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5, 30), game_Width-30);   // Cập nhật trạng thái đi nếu tàu bị phá
        this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5, 30), game_Height-30);  //
      }
    }

    if(this.state<=1&&this.press_twice_ready)
      this.release_time++;
    
    if(this.boosting)
      this.boosting--;

    if(this.state<=1&&!this.knockback){
      this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5*((this.boosting)? 2 : 1 ), 30), game_Width-30);   // 
      this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5*((this.boosting)? 2 : 1 ), 30), game_Height-30);  //
    }                                                                                                              //
    else if(this.knockback){                                                                                       // Cập nhật vị trí mới của tàu 
      this.posX = Math.min(Math.max(this.posX-this.persec[0]*1.5*((this.boosting)? 2 : 1 ), 30), game_Width-30);   //
      this.posY = Math.min(Math.max(this.posY-this.persec[1]*1.5*((this.boosting)? 2 : 1 ), 30), game_Height-30);  //
      this.knockback--;                                                                                            //
    }

    if(this.normal_ammo<3)  //
      this.reload++;        //
    if(this.reload==90){    // Nạp đạn
      this.normal_ammo++;   //
      this.reload = 0;      //
    }

    if(this.state==2){                                          // Hồi phục tàu bị phá nếu sống đủ lâu
      this.time_out_of_ship++;
      if(this.time_out_of_ship==360){
        this.state = 1;
        this.time_out_of_ship = 0;
      }
    }

    this.ammo_rotation++;
    if(this.ammo_rotation==360)
      this.ammo_rotation = 0;
  }

  this.display_ship = function(){ // Vẽ tàu
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    rotate(TWO_PI*this.rotation/360.0);
    imageMode(CENTER);
    if(this.side_cannons&&this.state<2)
      image(side_cannons_png, 0, 0);
    image(all_Ships[this.order][this.state], 0, 0);
    if(this.boosting>0&&this.state<2)
      image(boosts_png[(this.boosting%8>3)?1:0], 0, 0);
    pop()
  }

  this.display_ammo = function(){  // Vẽ đạn bay quanh tàu
    if(this.state<=1){
      push()
      fill(255);
      translate(this.posX-cameraX, this.posY-cameraY);
      angleMode(DEGREES);
      rotate(this.ammo_rotation);
      angleMode(RADIANS);
      strokeWeight(0);
      for(let i=0;i<=this.normal_ammo-1;i++){
        rotate(TWO_PI/3.0);
        square(25, -2.5, 5);
      }
      pop()
    }
  }
}