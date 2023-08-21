var cameraX = 0, cameraY = 0, camera_coord = [];
var scaling;
var xOffset, yOffset;

function calculate_camera(){
  let coord_player = [];
  for(let player of players){
    if(player.state<=2)
      coord_player.push([player.posX, player.posY]);
  }
  if(coord_player.length==0)
    return camera_coord;
  else if(coord_player.length==1)
    return [Math.max(100, Math.min(coord_player[0][0], game_Width-100)), Math.max(100, Math.min(coord_player[0][1], game_Height-100))];
  else if(coord_player.length==2)
    return [Math.max(100, Math.min((coord_player[0][0]+coord_player[1][0])/2, game_Width-100)), Math.max(100, Math.min((coord_player[0][1]+coord_player[1][1])/2, game_Height-100))];
  else if(coord_player.length>=3){
    let distX = 0, x1, x2;
    let distY = 0, y1, y2;
    for(let index1 of coord_player){
      for(let index2 of coord_player){
        if(distX<=Math.abs(index1[0]-index2[0])){
          distX = Math.abs(index1[0]-index2[0]);
          x1 = index1[0];
          x2 = index2[0];
        }
        if(distY<=Math.abs(index1[1]-index2[1])){
          distY = Math.abs(index1[1]-index2[1]);
          y1 = index1[1];
          y2 = index2[1];
        }
      }
    }
    return [Math.max(100,Math.min((x1+x2)/2, game_Width-100)), Math.max(100, Math.min((y1+y2)/2, game_Height-100))];
  }
}

function calculate_scale_by_X(){
  let max_dist_X = 0;
  for(let player of players){
    if(player.state<=2)
      max_dist_X = Math.max(max_dist_X, Math.abs(player.posX-cameraX));
  }
  return 0.8*(game_Width-40)/(2*max_dist_X);
}

function calculate_scale_by_Y(){
  let max_dist_Y = 0;
  for(let player of players){
    if(player.state<=2)
      max_dist_Y = Math.max(max_dist_Y, Math.abs(player.posY-cameraY));
  }
  return 0.8*(game_Height-40)/(2*max_dist_Y);
}