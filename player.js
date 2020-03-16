class Player{
constructor(x,y){
this.width = 50;
this.height = 50;
this.size = 50;
this.x = x;
this.y = y;
}
display(){
    rectMode(CENTER);
    rect(this.x,this.y,50,50);
}



}