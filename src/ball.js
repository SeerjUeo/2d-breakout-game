import {
    getX,
    setX,
    getY,
    setY,
    getDx,
    setDx,
    getDy,
    setDy
} from './index.js';
import {
    getCanvas,
    getCtx
} from './canvas.js';
import {
    getPaddleWidth,
    getPaddleX,
    setPaddleX
} from './paddle.js';
import {
    drawLives,
    getLives,
    setLives
} from './lives.js';

export {
    drawBall,
    updateBallPosition
};

var ballRadius = 10;

function drawBall() {
    getCtx().beginPath();
    getCtx().arc(getX(), getY(), ballRadius, 0, Math.PI * 2);
    getCtx().fillStyle = "#0095DD";
    getCtx().fill();
    getCtx().closePath();
}

function updateBallPosition() {
    if (getX() + getDx() > getCanvas().width - ballRadius || getX() + getDx() < ballRadius) {
        setDx(getDx() * (-1));
    }
    if (getY() + getDy() < ballRadius) {
        setDy(getDy() * (-1));

    } else if (getY() + getDy() > getCanvas().height - ballRadius) {
        if (getX() > getPaddleX() && getX() < getPaddleX() + getPaddleWidth()) {
            setDy(getDy() * (-1));
        } else {
            setLives(getLives() - 1);
            if (getLives() == 0) {
                console.log('GAME OVER');
                document.location.reload();
                return;
            } else {
                setX(getCanvas().width / 2);
                setY(getCanvas().height - 30);
                setDx(3);
                setDy(-3);
                setPaddleX((getCanvas().width - getPaddleWidth()) / 2);
            }
        }
    }
    setX(getDx() + getX());
    setY(getDy() + getY());
}