class Position {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    add(position){
        return new Position(this.positionX+position.positionX, this.positionY+position.positionY)
    }
}

module.exports = Position;