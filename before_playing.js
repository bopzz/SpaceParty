// Phần xóa nút F12
// document.onkeypress = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123) 
//     return false;
// }

// document.onmousedown = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123) 
//     return false;
// }

// document.onkeydown = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123)
//     return false;
// }

function sort_changes(arr){
  let new_arr = [];
  for(let i=0;i<4;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j][0]==i){
        if(arr[j][1]==1)
          new_arr.push(arr[j]);
      }
    }
    for(let j=0;j<arr.length;j++){
      if(arr[j][0]==i){
        if(arr[j][1]==-1)
          new_arr.push(arr[j]);
      }
    }
  }
  return new_arr;
}

let menu_Music, battle_Music;

let pew_Sound, explosion_Sound, laser_Sound, scatting_Sound;

pew_Sound = document.getElementById("pew");
explosion_Sound = document.getElementById("explosion");
laser_Sound = document.getElementById("laser");
scatting_Sound = document.getElementById("scatting");

menu_Music = document.getElementById("menu-theme");
battle_Music = document.getElementById("battle-theme");

pew_Sound.volume = 0.2;
explosion_Sound.volume = 0.2;
laser_Sound.volume = 0.2;
scatting_Sound.volume = 0.2;

menu_Music.volume = 0.2;
battle_Music.volume = 0.2;

menu_Music.loop = true;
battle_Music.loop = true;

function loadAudio(type){
  type.load();
}

function pauseAudio(type){
  type.pause();
}

function checkMusic(){
  if(music){
    if(!begin_new_game){
      menu_Music.play();
      if(!battle_Music.paused)
        battle_Music.pause();
    }
    else{
      battle_Music.play();
      if(!menu_Music.paused)
        menu_Music.pause();
    }
  }
  else{
    pauseAudio(battle_Music);
    pauseAudio(menu_Music);
  }
}