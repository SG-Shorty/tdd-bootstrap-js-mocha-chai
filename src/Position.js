class Position {
    
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    add(direction) {
        if (direction != null) {
            this.positionX += direction.position.positionX;
            this.positionY += direction.position.positionY;
        }
    }
}

module.exports = Position;