const Position = require('../src/Position.js');
const Direciotn = require('../src/Direction.js');

class Snake {

    headPosition;
    direction;

    constructor() {
        this.direction = null;
        this.headPosition = new Position(0,0);
    }

    setDirection(direction) {
        if (direction === 'north')
        {
            this.direction = Direciotn.NORTH;
        }
        if (direction === 'east') {
            this.direction = Direciotn.EAST;
        }
        if (direction === 'west') {
            this.direction = Direciotn.WEST;
        }        
    }

    getDirection(){
        return this.direction;
    }

    getHeadPosition() {
        return this.headPosition;
    }

    update() {
        this.headPosition = this.headPosition.add(this.direction)
    }
}

module.exports = Snake;