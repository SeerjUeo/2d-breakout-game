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