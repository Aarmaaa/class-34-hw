//Create variables here

var dog,happydog,foods,footstock,database

var dogg

function preload()
{
  //load images here
  dog=loadImage("images/dogimg.png")
  happydog=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dogg=createSprite(250,300)
  dogg.addImage(dog)
  dogg.scale=0.15

  database=firebase.database()

  var foodStock=database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dogg.addImage(happydog)

  }

}

function readStock(data){
foods=data.val()

}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}


