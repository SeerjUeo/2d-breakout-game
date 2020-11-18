import './index.css'
import {
	clearCanvas,
	getCanvas,
	getCtx
} from './canvas.js';
import {
	drawBall,
	updateBallPosition
} from './ball.js';
import {
	drawPaddle,
	updatePaddlePosition,
	getPaddleWidth,
	getPaddleX,
	setPaddleX
} from './paddle.js';
import {
	drawLives,
	getLives,
	setLives
} from './lives.js';
import {
	drawScore
} from './score.js';
import {
	collisionDetection,
	drawBricks
} from "./bricks.js";

export {
	getX,
	setX,
	getY,
	setY,
	getDx,
	setDx,
	getDy,
	setDy
}

var x = getCanvas().width / 2;
var y = getCanvas().height - 30;
var dx = 2;
var dy = -2;

function draw() {
	clearCanvas();

	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();

	requestAnimationFrame(draw);
}

draw();

function getX() {
	return x;
}

function setX(number) {
	x = number;
}

function getY() {
	return y;
}

function setY(number) {
	y = number;
}

function getDx() {
	return dx;
}

function setDx(number) {
	dx = number;
}

function getDy() {
	return dy;
}

function setDy(number) {
	dy = number;
}