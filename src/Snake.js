Position = require('../src/Position.js');

class Snake {

    direction;
    constructor() {
        this.direction = null;
    }

    setDirection(direction) {
        this.direction = direction
    }

    getDirection(){
        return this.direction
    }

    getHeadPosition() {
        return new Position(0, 0);
    }

    update() {
        
    }
}

module.exports = Snake;