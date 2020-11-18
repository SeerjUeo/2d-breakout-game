import {
    getCtx
} from './canvas.js';

export {
    drawScore,
    getScore,
    setScore
}

var score = 0;

function drawScore() {
    getCtx().font = "16px Arial";
    getCtx().fillStyle = "#0095DD";
    getCtx().fillText("Score: " + score, 8, 20);
}

function getScore() {
    return score;
}

function setScore(number) {
    score = number;
}