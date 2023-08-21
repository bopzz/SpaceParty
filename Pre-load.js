let normal_bullet_png, mine_bullet_png, scatter_bullet_png, laser_bullet_png;
let boosts_png = [];
let reverse_png, mine_png, scatter_png, laser_png;

let all_Ships = [[], [], [], []];

function preload(){   // Lấy hình ảnh và kiểu chữ từ assets

  normal_bullet_png = loadImage("https://i.imgur.com/ycBN3Cu.png")
  mine_bullet_png = loadImage("https://i.imgur.com/L0Hlgkb.png")
  scatter_bullet_png = loadImage("https://i.imgur.com/TF0RL2k.png")
  laser_bullet_png = loadImage("https://i.imgur.com/ugFkU5F.png")

  reverse_png = loadImage("https://i.imgur.com/6SBACOh.png")
  mine_png = loadImage("https://i.imgur.com/w7cpHEL.png")
  scatter_png = loadImage("https://i.imgur.com/IS3TrUz.png")
  laser_png = loadImage("https://i.imgur.com/ylWwfMA.png")

  side_cannons_png = loadImage("https://i.imgur.com/ypXgvfV.png");
  boosts_png.push(loadImage("https://i.imgur.com/8SCbFW6.png"));
  boosts_png.push(loadImage("https://i.imgur.com/EGEqiYX.png"));

  all_Ships[0].push(loadImage("https://i.imgur.com/VPD5YY4.png"))
  all_Ships[0].push(loadImage("https://i.imgur.com/FJ7Cs1i.png"))
  all_Ships[0].push(loadImage("https://i.imgur.com/gIdC9Ux.png"))

  all_Ships[1].push(loadImage("https://i.imgur.com/kqyvEJs.png"))
  all_Ships[1].push(loadImage("https://i.imgur.com/uAlMKcM.png"))
  all_Ships[1].push(loadImage("https://i.imgur.com/v0SKzhf.png"))

  all_Ships[2].push(loadImage("https://i.imgur.com/picXWAc.png"))
  all_Ships[2].push(loadImage("https://i.imgur.com/Z49rNYm.png"))
  all_Ships[2].push(loadImage("https://i.imgur.com/B4XE8yl.png"))

  all_Ships[3].push(loadImage("https://i.imgur.com/DXVAdb0.png"))
  all_Ships[3].push(loadImage("https://i.imgur.com/DD6KGeY.png"))
  all_Ships[3].push(loadImage("https://i.imgur.com/zj8DocP.png"))
}