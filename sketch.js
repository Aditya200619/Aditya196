var boy
var girl
function setup(){
  createCanvas(400,400)
boy = createSprite(200,200,20,20)
girl = createSprite(100,300,20,20)
}
function draw(){
background ("red")
boy.shapeColor = "white"
boy.x = mouseX
boy.y = mouseY
drawSprites()
}