const Position = require('../src/Position.js');
const Direction = require('../src/Direction.js');

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
            this.direction = Direction.NORTH;
        }
        if (direction === 'east') {
            this.direction = Direction.EAST;
        }
        if (direction === 'west') {
            this.direction = Direction.WEST;
        }        
    }

    getDirection(){
        if (this.direction == null) {
            return null;
        }
        return this.direction.name;
    }

    getHeadPosition() {
        return this.headPosition;
    }

    update() {
        this.headPosition.add(this.direction)
    }
}

module.exports = Snake;