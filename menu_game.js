function starting_menu(){
  game_name_display = createSpan("SPACE PARTY");
  game_name_display.addClass("displaying");
  game_name_display.id("animated-down");
  game_name_display.size(100, 60);
  game_name_display.position(game_Width/2-165, game_Height/2-200);

  button_start = createButton("START GAME");
  button_start.size(300, 50);
  button_start.position(game_Width/2-150, game_Height/2+50);
  button_start.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();
    player_setup = true;
    displaying = false;
  });

  button_option = createButton("OPTIONS");
  button_option.size(300, 50);
  button_option.position(game_Width/2-150, game_Height/2+120);
  button_option.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();
    setup_option = true;
    displaying = false;
  });
}

function options_display(){
  button_back = createButton("BACK");
  button_back.size(130, 50);
  button_back.position(60, game_Height-100);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    setup_option = false;
    displaying = false;
  });

  button_music = createButton("MUSIC: " + ((music) ? "ON" : "OFF"));
  button_music.size(240, 50);
  button_music.position(game_Width/2-300, game_Height/2-25);
  button_music.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    music = (music) ? false : true;
    checkMusic();
    displaying = false;
  });

  button_sound = createButton("SOUND: " + ((sound) ? "ON" : "OFF"));
  button_sound.size(240, 50);
  button_sound.position(game_Width/2+60, game_Height/2-25);
  button_sound.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    sound = (sound) ? false : true;
    displaying = false;
  });
}

function player_option(){
  button_back = createButton("BACK");
  button_back.size(130, 50);
  button_back.position(60, game_Height-100);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    player_setup = false;
    displaying = false;
  });

  button_choose_number_of_players = createButton("PLAYERS: " + String(number_of_players) + "-PLAYERS");
  button_choose_number_of_players.size(400, 60);
  button_choose_number_of_players.position(game_Width/2-200, game_Height/2-180);
  button_choose_number_of_players.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    let index = [1, 2, 0], number = [2, 3, 4];
    number_of_players = number[index[number.indexOf(number_of_players)]];
    displaying = false;
  });

  if(number_of_players==2)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'"
    );
  else if(number_of_players==3)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'<br><br><br>PLAYER 3:&emsp;TURN: Button 'j'&emsp;SHOOT: Button 'k'"
    );
  else if(number_of_players==4)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'<br><br><br>PLAYER 3:&emsp;TURN: Button 'j'&emsp;SHOOT: Button 'k'<br><br><br>PLAYER 4:&emsp;TURN: Button 'c'&emsp;SHOOT: Button 'v'"
    );
  control_guidance.size(800, 300);
  control_guidance.position(game_Width/2-380, game_Height/2-40);

  button_begin = createButton("NEXT >>");
  button_begin.size(170, 50);
  button_begin.position(game_Width-200, game_Height-100);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    setup_new_game = true;
    displaying = false;
  });
}

function options_for_new_game(){
  button_back = createButton("BACK");
  button_back.size(130, 50);
  button_back.position(60, game_Height-100);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    setup_new_game = false;
    displaying = false;
  });

  button_type_match = createButton(type[match_index] + " MATCH: " + number_of_wins[number_of_players-2][match_index] + " WINS");
  button_type_match.size(500, 50);
  button_type_match.position(game_Width/2-250, game_Height/2-100);
  button_type_match.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    let index = [1, 2, 0];
    match_index = index[match_index];
    displaying = false;
  });

  button_advance_setting = createButton("ADVANCE SETTING");
  button_advance_setting.size(500, 50);
  button_advance_setting.position(game_Width/2-250, game_Height/2+50);
  button_advance_setting.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    advance_setting = true;
    displaying = false;
  });

  button_begin = createButton("BEGIN >>");
  button_begin.size(180, 50);
  button_begin.position(game_Width-210, game_Height-100);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    begin_new_game = true;
    displaying = false;
  });
}

function advance_options(){
  button_back = createButton("BACK");
  button_back.size(130, 50);
  button_back.position(60, game_Height-100);
  button_back.mouseClicked(function(){
    button_back.remove();
    while(display.length>0){
      display[0].remove();
      display.splice(0, 1);
    }
    advance_setting = false;
    displaying = false;
  });

  let options = ["START WITH SHIELD:", "POWERUPS:", "STARTING POWER:", "TRIPPLE POWER:", "SUPER DASH:"];
  let display = [];

  for(let i=0;i<options.length;i++){
    let describe = createSpan(options[i]);
    describe.size(300, 25);
    describe.position(game_Width/2-230, 230+i*70);

    let state;
    if(options[i]!="STARTING POWER:"){
      state = createButton((advance_setting_state[options[i]]) ? "ON" : "OFF");
      state.mouseClicked(function(){
        button_back.remove();
        while(display.length>0){
          display[0].remove();
          display.splice(0, 1);
        }
        advance_setting_state[options[i]] = (advance_setting_state[options[i]]) ? false : true;
        displaying = false;
      });
    }
    else{
      state = createButton(power_type[advance_setting_state[options[i]]]);
      state.mouseClicked(function(){
        button_back.remove();
        while(display.length>0){
          display[0].remove();
          display.splice(0, 1);
        }
        advance_setting_state[options[i]] = (advance_setting_state[options[i]]+1)%6;
        displaying = false;
      });
    }
    state.size(140, 50);
    state.position(game_Width/2+80, 230+i*70-25);

    display.push(describe);
    display.push(state);
  }
}

function pause_game(){

  push()
  scale(1/scaling);
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-game_Width/2, -game_Height/2, game_Width, game_Height);
  pop()

  word_paused = createSpan("PAUSED");
  word_paused.addClass("displaying");
  word_paused.size(500, 60);
  word_paused.position(game_Width/2-200, game_Height/2-120);

  button_continue = createButton("CONTINUE");
  button_continue.size(180, 50);
  button_continue.position(game_Width/2+60, game_Height/2+30);
  button_continue.mouseClicked(function(){
    word_paused.remove();
    button_continue.remove();
    button_return_to_menu.remove();
    battle_Music.play();
    loop();
  });

  button_return_to_menu = createButton("RETURN TO MENU");
  button_return_to_menu.size(300, 50)
  button_return_to_menu.position(game_Width/2-360, game_Height/2+30);
  button_return_to_menu.mouseClicked(function(){
    word_paused.remove();
    button_continue.remove();
    button_return_to_menu.remove();
    loadAudio(menu_Music);
    setup_new_game = false;
    setup_option = false;
    begin_new_game = false;
    advance_setting = false;
    player_setup = false;
    cameraX = 0;
    cameraY = 0;
    checkMusic();
    loop();
  });
}

function display_winner(arr){
  let word_winner;
  if(arr.length==1)
    word_winner = createSpan("WINNER");
  else
    word_winner = createSpan("WINNERS");
  word_winner.addClass("displaying");
  word_winner.size(500, 60);
  word_winner.position(game_Width/2-200, game_Height/2-160);

  push()
  imageMode(CENTER);
  for(let i=0;i<arr.length;i++)
    image(all_Ships[arr[i]][0], -(arr.length-1)*20+i*40, -10);
  pop()

  button_rematch = createButton("REMATCH");
  button_rematch.size(180, 50);
  button_rematch.position(game_Width/2+60, game_Height/2+30);
  button_rematch.mouseClicked(function(){
    word_winner.remove();
    button_rematch.remove();
    button_return_to_menu.remove();
    loadAudio(battle_Music);
    game_setup_complete = false;
    loop();
  });

  button_return_to_menu = createButton("RETURN TO MENU");
  button_return_to_menu.size(300, 50)
  button_return_to_menu.position(game_Width/2-360, game_Height/2+30);
  button_return_to_menu.mouseClicked(function(){
    word_winner.remove();
    button_rematch.remove();
    button_return_to_menu.remove();
    loadAudio(menu_Music);
    setup_new_game = false;
    setup_option = false;
    begin_new_game = false;
    advance_setting = false;
    player_setup = false;
    cameraX = 0;
    cameraY = 0;
    checkMusic();
    loop();
  });
}