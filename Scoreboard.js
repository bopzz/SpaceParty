let winner = [];

function Scoreboard(){

  let dividing_section = int(540 / number_of_wins[number_of_players-2][match_index]);

  push()
  scale(1/scaling);
  imageMode(CENTER);
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-game_Width/2, -game_Height/2, game_Width, game_Height);
  col.setAlpha(255);
  fill(33, 55, 156);

  if(end_round_time/70>=aftermath_actions.length+1){
    for(let i=0;i<number_of_players;i++){
      if(player_score[i]>=number_of_wins[number_of_players-2][match_index])
        winner.push(i);
    }
    if(winner.length==0){
      new_round_Start();
      checkMusic();
    }
    else{
      let maxi = 0;
      let check_winner = [];
      for(let i=0;i<winner.length;i++){
        if(maxi<player_score[winner[i]]){
          while(check_winner.length>0)
            check_winner.pop();
          check_winner.push(winner[i]);
        }
        else if(maxi==player_score[winner[i]])
          check_winner.push(winner[i]);
      }
      display_winner(check_winner);
      winner = [];
      noLoop();
    }
  }

  if(end_round_time/70<aftermath_actions.length+1&&end_round_time/70>=aftermath_actions.length){
    for(let i=0;i<number_of_players;i++){
      rect(-300, -number_of_players*30+i*60, 600, 60);
      for(let j=0;j<4;j++){
        for(let k=0;k<4;k++){
          push()
          fill(((j*4+k-j)%2) ? 255 : 0);
          square(240+k*15, -number_of_players*30+i*60+j*15, 15);
          pop()
        }
      }
      push()
      translate(-280+player_score[i]*dividing_section, -number_of_players*30+i*60+30);
      rotate(HALF_PI);
      image(all_Ships[i][0], 0, 0);
      pop()
    }
  }

  if(end_round_time/70<aftermath_actions.length){
    let action = aftermath_actions[int(end_round_time/70)];
    if(player_score[action[0]]+action[1]<0)
      action[1] = 0;
    for(let i=0;i<number_of_players;i++){
      rect(-300, -number_of_players*30+i*60, 600, 60);
      for(let j=0;j<4;j++){
        for(let k=0;k<4;k++){
          push()
          fill(((j*4+k-j)%2) ? 255 : 0);
          square(240+k*15, -number_of_players*30+i*60+j*15, 15);
          pop()
        }
      }
      if(i!=action[0]){
        push()
        translate(-280 + player_score[i]*dividing_section, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        image(all_Ships[i][0], 0, 0);
        pop()
      }
      else if(i==action[0]&&action[1]>0){
        push()
        translate(-280 + player_score[i]*dividing_section + (((end_round_time%70>60)?60:end_round_time%70)/60)*dividing_section, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        image(all_Ships[i][0], 0, 0);
        pop()
      }
      else{
        push()
        translate(-280 + player_score[i]*dividing_section + action[1]*(((end_round_time%70>60)?60:end_round_time%70)/60)*dividing_section, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        rotate(((end_round_time%70>60)?60:end_round_time%70)/5);
        image(all_Ships[i][0], 0, 0);
        pop()
      }
    }
    if(end_round_time%70==69)
      player_score[action[0]] += action[1];
  }

  end_round_time++;
  pop()
}