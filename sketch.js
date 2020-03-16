var player


function setup() {
  createCanvas(displayWidth,displayHeight);
  player = new Player(displayWidth /2,displayHeight)
}

function draw() {
  background(0);  
player.display();



}