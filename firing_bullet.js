function firing_bullet(x, y, rotation, number, type){
  if(type=="mine")
    mines.push(new mine_bullets(x, y, number));
  else if(type=="laser"){
    if(sound)
      laser_Sound.play();
    flying_bullets.push(new laser_bullets(x, y, rotation, number));
    players[number].knockback = 8;
  }
  else if(type=="scatter"){
    if(sound)
      scatting_Sound.play();
    for(let i=0;i<24;i++)
      flying_bullets.push(new scatter_bullets(x, y, 15*i, number));
  }
  else if(type=="normal"){
    if(sound)
      pew_Sound.play();
    flying_bullets.push(new normal_bullets(x, y, rotation, number));
  }
}

function keyPressed() {
  if(keyCode==87){  // Bắn mỗi viên mỗi lần bấm của tàu 1 (Nút w)
    let player = players[0];
    if(player.special_ammo>0&&player.state<=1){
      if(player.type_special_ammo!="side-cannons"){
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        player.special_ammo--;
        if(player.special_ammo==0)
          player.type_special_ammo = "normal";
      }
      else{
        player.special_ammo = 0;
        player.side_cannons = true;
        player.type_special_ammo = "normal";
      }
    }
    else if(player.normal_ammo>0&&player.state<=1){
      if(!player.side_cannons)
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
      else{
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        let angle = TWO_PI*player.rotation/360.0;
        let persec = [sin(angle), -cos(angle)];
        firing_bullet(player.posX-persec[0]*10-persec[1]*10, player.posY-persec[1]*10+persec[0]*10, player.rotation, player.order, player.type_special_ammo);
        firing_bullet(player.posX-persec[0]*10+persec[1]*10, player.posY-persec[1]*10-persec[0]*10, player.rotation, player.order, player.type_special_ammo);
      }
      player.normal_ammo--;
    }
  }
  if(keyCode==220){  // Bắn mỗi viên mỗi lần bấm của tàu 2 (Nút \)
    let player = players[1];
    if(player.special_ammo>0&&player.state<=1){
      if(player.type_special_ammo!="side-cannons"){
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        player.special_ammo--;
        if(player.special_ammo==0)
          player.type_special_ammo = "normal";
      }
      else{
        player.special_ammo = 0;
        player.side_cannons = true;
        player.type_special_ammo = "normal";
      }
    }
    else if(player.normal_ammo>0&&player.state<=1){
      if(!player.side_cannons)
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
      else{
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        let angle = TWO_PI*player.rotation/360.0;
        let persec = [sin(angle), -cos(angle)];
        firing_bullet(player.posX-persec[0]*10-persec[1]*10, player.posY-persec[1]*10+persec[0]*10, player.rotation, player.order, player.type_special_ammo);
        firing_bullet(player.posX-persec[0]*10+persec[1]*10, player.posY-persec[1]*10-persec[0]*10, player.rotation, player.order, player.type_special_ammo);
      }
      player.normal_ammo--;
    }
  }
  if(keyCode==75&&number_of_players>=3){  // Bắn mỗi viên mỗi lần bấm của tàu 3 (Nút k)
    let player = players[2];
    if(player.special_ammo>0&&player.state<=1){
      if(player.type_special_ammo!="side-cannons"){
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        player.special_ammo--;
        if(player.special_ammo==0)
          player.type_special_ammo = "normal";
      }
      else{
        player.special_ammo = 0;
        player.side_cannons = true;
        player.type_special_ammo = "normal";
      }
    }
    else if(player.normal_ammo>0&&player.state<=1){
      if(!player.side_cannons)
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
      else{
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        let angle = TWO_PI*player.rotation/360.0;
        let persec = [sin(angle), -cos(angle)];
        firing_bullet(player.posX-persec[0]*10-persec[1]*10, player.posY-persec[1]*10+persec[0]*10, player.rotation, player.order, player.type_special_ammo);
        firing_bullet(player.posX-persec[0]*10+persec[1]*10, player.posY-persec[1]*10-persec[0]*10, player.rotation, player.order, player.type_special_ammo);
      }
      player.normal_ammo--;
    }
  }
  if(keyCode==86&&number_of_players==4){  // Bắn mỗi viên mỗi lần bấm của tàu 4 (Nút v)
    let player = players[3];
    if(player.special_ammo>0&&player.state<=1){
      if(player.type_special_ammo!="side-cannons"){
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        player.special_ammo--;
        if(player.special_ammo==0)
          player.type_special_ammo = "normal";
      }
      else{
        player.special_ammo = 0;
        player.side_cannons = true;
        player.type_special_ammo = "normal";
      }
    }
    else if(player.normal_ammo>0&&player.state<=1){
      if(!player.side_cannons)
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
      else{
        firing_bullet(player.posX, player.posY, player.rotation, player.order, player.type_special_ammo);
        let angle = TWO_PI*player.rotation/360.0;
        let persec = [sin(angle), -cos(angle)];
        firing_bullet(player.posX-persec[0]*10-persec[1]*10, player.posY-persec[1]*10+persec[0]*10, player.rotation, player.order, player.type_special_ammo);
        firing_bullet(player.posX-persec[0]*10+persec[1]*10, player.posY-persec[1]*10-persec[0]*10, player.rotation, player.order, player.type_special_ammo);
      }
      player.normal_ammo--;
    }
  }
}

function keyReleased(){
  if(keyCode==81){
    let player = players[0];
    player.dashed = false;
    player.release_time = 0;
    player.press_twice_ready = (player.press_twice_ready) ? false : true;
  }
  if(keyCode==221){
    let player = players[1];
    player.dashed = false;
    player.release_time = 0;
    player.press_twice_ready = (player.press_twice_ready) ? false : true;
  }
  if(keyCode==74&&number_of_players>=3){
    let player = players[2];
    player.dashed = false;
    player.release_time = 0;
    player.press_twice_ready = (player.press_twice_ready) ? false : true;
  }
  if(keyCode==67&&number_of_players==4){
    let player = players[3];
    player.dashed = false;
    player.release_time = 0;
    player.press_twice_ready = (player.press_twice_ready) ? false : true;
  }
}