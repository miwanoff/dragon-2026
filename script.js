let canvas; // Для canvas
let context; // Для контекста canvas

let positionX = screen.width; // координата x для движущихся холмов, изначально они не видны
let positionY = 0; // координата y для движущихся холмов

const offset = 205;

let speed = 2; // скорость движения холмов(на сколько будет изменяться position_x)
let timer; // Для setTimeout()

let direction; // Направление движения, задается стрелками клавиатуры
let up = 160; // насколько дракон переместился вверх

let dragonX = 100; // координата x дракона

let directions = {
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down",
};

// let dragonImage = new Image();
// let dragonImage = document.getElementById("d")
// dragonImage.src = "images/dragon.png";

let dragon = new Image();
dragon.src = "images/dragon.png";

// Dragon
function drawDragon(context, x, y) {
  context.drawImage(dragon, x, y);
}

// Трава
function drawGrass(context) {
  context.beginPath();
  context.strokeStyle = "#0f0";
  context.lineWidth = 1;
  context.moveTo(0, 205);
  context.lineTo(canvas.width, 205);
  context.stroke();
}

function drawHill(context, x, w, h) {
  //   checkCollision(dragon_x, x, w);
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 1;
  context.moveTo(x, offset);
  context.lineTo(x + w / 4, offset - h);
  context.lineTo(x + (w * 3) / 4, offset - h);
  context.lineTo(x + w, offset);
  context.stroke();
}

function animateDragon(speed) {
  canvas = document.getElementById("dragon");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrass(context);
  drawDragon(context, dragonX, up);
  drawHill(context, positionX, 40, 35);
  drawHill(context, positionX + 300, 60, 20);
  drawHill(context, positionX + 400, 20, 40);

  positionX -= speed;

  // context.drawImage(dragonImage, 100,160);
  // context.drawImage(dragon, 100, 160);
}

function start() {
  timer = setInterval(animateDragon, 10, speed);
}

// animateDragon(speed);

start();
