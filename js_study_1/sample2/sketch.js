//画像を管理する変数
var img1;
var img2;

//画像の読み込み
function preload(){
  img1 = loadImage("img/sky.jpg");
  img2 = loadImage("img/android.jpg");
}

function setup() {
  
  createCanvas(1440, 960);
  //画像を表示する
  image(img1,0,0);
  image(img2,img1.width,0);
  
}

function draw() {
  
}