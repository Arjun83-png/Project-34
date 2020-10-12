var dog, dogImg2, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);

  dog = createSprite(250, 300, 20, 20);
  dog.scale = 0.2;
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0) {
    x = 0;
  } else {
    x = x+1
  }
  database.ref('/').update({
    food: x
  })
}



