var img;

//画像の描画位置
var x=0, y=0;
var limit = 10;
var speed = 0;
var angle=0;

//画像の読み込み
function preload(){
  img = loadImage("img/bohe.png");
}

function setup() {
  createCanvas(800,800);
  imageMode(CENTER);
}

function draw() {
  //描画領域をクリアする
  background(250);
  translate(x, y);

  rotate(radians(angle));
  image(img, 0, 0, 100, 62);

  //画像の表示位置を変更する

  if(speed < limit){
    speed +=0.08;
  }
  x+=speed;
  y+=speed;
  angle+=5;

  
}