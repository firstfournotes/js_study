
//画像を管理する変数
var img;

//画像の読み込み
function preload(){
  img = loadImage("img/sky.jpg");
}


function setup() {
  
  //画像と同じサイズの描画領域を用意する
  createCanvas(img.width, img.height);
  //画像を表示する
  image(img,0,0);
  
  
}

function draw() {
  
}