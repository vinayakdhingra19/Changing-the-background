var r = 0, g = 50, b = 255;

function setup(){
  createCanvas(255, 255);  
}

function draw(){
  
  r = mouseX;
  g = mouseY;
  b = mouseX / 1.5;

  background(rgb(r, g, b));

  fill("white");
  stroke("black")
  var pointer =  ellipse(mouseX, mouseY, 10, 10);
  
}
