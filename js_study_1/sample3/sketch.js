var img;

//画像の描画位置
var x=0, y=0;

//画像の読み込み
function preload(){
  img = loadImage("img/bohe.png");
}

function setup() {
  createCanvas(800, 800);
  console.log(img.width*2);
  console.log(img.height*2);
}

function draw() {
  //描画領域をクリアする
  background(250);
  image(img, x, y);
  //画像の表示位置を変更する
  x +=10;
  y +=10;
  
}