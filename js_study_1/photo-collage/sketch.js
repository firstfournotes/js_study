var imgs = [];
var boxNo;
var x;
var animationStep;

// 3 photos
var layout3 = [];
layout3[0] = {x:   0, y:   0, w: 400, h: 200};
layout3[1] = {x:   0, y: 200, w: 200, h: 200};
layout3[2] = {x: 200, y: 200, w: 200, h: 200};

// 4 photos
var layout4 = [];
layout4[0] = {x:   0, y:   0, w: 200, h: 200};
layout4[1] = {x: 200, y:   0, w: 200, h: 200};
layout4[2] = {x:   0, y: 200, w: 200, h: 200};
layout4[3] = {x: 200, y: 200, w: 200, h: 200};

// 5 photos
var layout5 = [];
layout5[0] = {x:   0, y:   0, w: 200, h: 200};
layout5[1] = {x:   0, y: 200, w: 200, h: 200};
layout5[2] = {x:   0, y: 400, w: 200, h: 200};
layout5[3] = {x: 200, y:   0, w: 300, h: 300};
layout5[4] = {x: 200, y: 300, w: 300, h: 300};

// 6 photos
var layout6 = [];
layout6[0] = {x:   0, y:   0, w: 200, h: 200};
layout6[1] = {x:   0, y: 200, w: 200, h: 200};
layout6[2] = {x: 200, y:   0, w: 200, h: 200};
layout6[3] = {x: 200, y: 200, w: 200, h: 200};
layout6[4] = {x: 400, y:   0, w: 200, h: 200};
layout6[5] = {x: 400, y: 200, w: 200, h: 200};

var layout = layout3;

function preload() {
  // 使用する画像を読み込む
  imgs[0] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/12093551_1404305876535349_720114381_n.jpg?ig_cache_key=MTI1NjMxMDA5NzQ1MDYwNTUxMw%3D%3D.2");
  imgs[1] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/13108670_103700513384316_177254976_n.jpg?ig_cache_key=MTI1NjMwOTM1NjU3NzEzNTU0OQ%3D%3D.2");
  imgs[2] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/13116728_503809063148407_64730927_n.jpg?ig_cache_key=MTI1NjMwOTc2MjM4NDQzNjE2NA%3D%3D.2");
  imgs[3] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/13257161_887211481404867_1602173577_n.jpg?ig_cache_key=MTI1NjMxMDM5MjA5MjA3MjkxMg%3D%3D.2");
  imgs[4] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/13266879_1018244158259085_1815267322_n.jpg?ig_cache_key=MTI1NjMwOTA3NjcwODAwNjgzNA%3D%3D.2");
  imgs[5] = loadImage("https://scontent.cdninstagram.com/t51.2885-15/e35/13277584_1601233296854972_849925808_n.jpg?ig_cache_key=MTI1NjMwODA3MDk0NzQ2MjA0OA%3D%3D.2");
}

function setup() {
  // レイアウト切り替えボタンの設定
  var button3 = createButton("3").size(30, 30).position(0, 0);
  button3.mouseClicked(function () {
    initAnimation(layout3);
  });
  
  var button4 = createButton("4").size(30, 30).position(0, 30);
  button4.mouseClicked(function () {
    initAnimation(layout4);
  });
  
  var button5 = createButton("5").size(30, 30).position(0, 60);
  button5.mouseClicked(function () {
    initAnimation(layout5);
  });

  var button6 = createButton("6").size(30, 30).position(0, 90);
  button6.mouseClicked(function () {
    initAnimation(layout6);
  });
  
  // 写真の描画領域の設定
  var cvs = createCanvas(800, 800);
  cvs.position(30, 0);
  // 写真をクリックした時の動作を設定
  cvs.mousePressed(function () {
    imgs = shuffle(imgs);
    initAnimation(layout);
  });

  animationStep = 6;
  initAnimation(layout);
}

function draw() {
  if (boxNo >= layout.length) {
    // 全てのボックスを書き終えた
    return;
  }
  
  // 画面全体を消去
  background(255);
  
  // すでに決まっているボックスの写真を描画
  for (var i = 0; i < boxNo; i++) {
    image(imgs[i], layout[i].x, layout[i].y, layout[i].w, layout[i].h);
  }

  // アニメーション中の位置を計算
  x -= animationStep;
  if (x < layout[boxNo].x) {
    // 位置が定位置を超えた
    x = layout[boxNo].x;
  }

  // アニメーション中の写真を表示
  image(imgs[boxNo], x, layout[boxNo].y, layout[boxNo].w, layout[boxNo].h);
  
  // アニメーションが終了したかどうか？
  if (x === layout[boxNo].x) {
    // 終了していれば、次のボックスを指定
    boxNo = boxNo + 1;
    if (boxNo >= layout.length) {
      // 全てのボックスの指定が終了
      return;
    }
    // X座標を初期化
    x = width;
  }
}

// アニメーションのパラメータを初期化
function initAnimation(l) {
  layout = l;
  boxNo = 0;
  x = width;
}
