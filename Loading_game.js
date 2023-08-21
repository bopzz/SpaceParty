var players = [], flying_bullets = [], player_score = [], power_ups = [], mines = [];
var advance_setting_state = {"START WITH SHIELD:" : false,
                            "POWERUPS:" : false,
                            "STARTING POWER:" : 0,
                            "TRIPPLE POWER:" : false,
                            "SUPER DASH:" : false
};
var power_type = ["normal", "laser", "mine", "scatter", "side-cannons", "random"];
var chosen;
var aftermath_actions = [];

function new_game_Start(){

  loadAudio(battle_Music);
  countdown = 200;
  end_round = 0;
  end_round_time = 0;
  reverse_state = 0;

  if(power_type[advance_setting_state["STARTING POWER:"]]!="random")
    chosen = power_type[advance_setting_state["STARTING POWER:"]];
  else
    chosen = power_type[Math.round(random(1, 5))];

  while(mines.length>0)
    mines.pop();
  while(flying_bullets.length>0)
    flying_bullets.pop();
  while(power_ups.length>0)
    power_ups.pop();
  while(aftermath_actions.length>0)
    aftermath_actions.pop();
  while(players.length>0){
    players.pop();
    player_score.pop();
  }
  players.push(new player1());
  player_score.push(0);
  players.push(new player2());
  player_score.push(0);
  if(number_of_players==3){
    players.push(new player3());
    player_score.push(0);
  }
  else if(number_of_players==4){
    players.push(new player3());
    player_score.push(0);
    players.push(new player4());
    player_score.push(0);
  }

  if(advance_setting_state["POWERUPS"])
    new_random_power_spawn(game_Width/2, game_Height/2);
}

function new_round_Start(){

  loadAudio(battle_Music);
  end_round_time = 0;
  countdown = 200;
  end_round = 0;
  reverse_state = 0;

  if(power_type[advance_setting_state["STARTING POWER:"]]!="random")
    chosen = power_type[advance_setting_state["STARTING POWER:"]];
  else
    chosen = power_type[Math.round(random(1, 5))];

  while(players.length>0)
    players.pop();
  while(mines.length>0)
    mines.pop();
  while(flying_bullets.length>0)
    flying_bullets.pop();
  while(power_ups.length>0)
    power_ups.pop();
  while(aftermath_actions.length>0)
    aftermath_actions.pop();
  players.push(new player1());
  players.push(new player2());
  if(number_of_players==3)
    players.push(new player3());
  else if(number_of_players==4){
    players.push(new player3());
    players.push(new player4());
  }

  if(advance_setting_state["POWERUPS"])
    new_random_power_spawn(game_Width/2, game_Height/2);
}