class Snake {
    constructor() {}

    getDirection(){
        return null
    }

}

const expect = require('chai').expect;

describe('Snake', function() {
    it('should have no direction on init', function() {
        let snake = new Snake();
        expect(snake.getDirection()).to.be.null;
    })

    it('should have a position on init', function() {
        let snake = new Snake();
        expect(snake.getHeadPosition()).to.equal(new Position(0,0));
    })
});
