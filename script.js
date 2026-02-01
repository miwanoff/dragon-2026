let canvas; // Для canvas
let context; // Для контекста canvas

let positionX = screen.width; // координата x для движущихся холмов, изначально они не видны
let positionY = 0; // координата y для движущихся холмов

let speed = 2; // скорость движения холмов(на сколько будет изменяться position_x)
let timer; // Для setTimeout()

let direction; // Направление движения, задается стрелками клавиатуры
let up = 0; // насколько дракон переместился вверх

let dragonX= 100; // координата x дракона


