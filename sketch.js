const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [211, 211, 211];

let boy;
let boyAnim;
let yokai;

function preload() {
  const boySpriteSheet = loadSpriteSheet("sprites/hero.png", 30, 30, 3);
  boyAnim = loadAnimation(boySpriteSheet);
  boy = createSprite(CANVAS_WIDTH / 3.5, CANVAS_HEIGHT / 2, 30, 30);
  boy.moveSpeed = 4;
  
  const yokai1SpriteSheet = loadSpriteSheet("sprites/yokai1.png", 55, 55, 4);
  yokai1 = loadAnimation(yokai1SpriteSheet);
  yokai1.moveSpeed = 1;

  const yokai2SpriteSheet = loadSpriteSheet("sprites/yokai2.png", 80, 80, 4);
  yokai2 = loadAnimation(yokai2SpriteSheet);
  yokai2.moveSpeed = 1;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  boy.addAnimation("move", boyAnim);
  boy.addImage("still", loadImage("sprites/herostill.png"));
  boy.setDefaultCollider()
}


function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  boy.limitSpeed(boy.moveSpeed);
  drawSprite(object);
}


function draw() {
  background(BG_COLOR);
  update(boy);
  animation(yokai1,400,200,55);
  animation(yokai2,500,300,80);
}