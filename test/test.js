class Snake {
    constructor() {}

    getDirection(){
        return null
    }

}

const expect = require('chai').expect;

describe('Snake', function() {
    it('exist', function() {
        let snake = new Snake();
        expect(snake).to.be.not.null;
    })

    it('should have a direction', function() {
        let snake = new Snake();
        expect(snake.getDirection()).to.be.null;
    })
});
