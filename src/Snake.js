const Position = require('../src/Position.js');

class Snake {

    headPosition;
    direction;
    constructor() {
        this.direction = null;
        this.headPosition = new Position(0,0);
    }

    setDirection(direction) {
        this.direction = direction
    }

    getDirection(){
        return this.direction
    }

    getHeadPosition() {
        return this.headPosition
    }

    update() {
        if (this.direction === 'north') {
            this.headPosition = new Position(this.headPosition.positionX, this.headPosition.positionY + 1);
        }
    }
}

module.exports = Snake;