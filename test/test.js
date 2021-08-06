Snake = require('../src/Snake.js');
Position = require('../src/Position.js');

const expect = require('chai').expect;

describe('Snake', function() {
    it('should have no direction on init', function() {
        let snake = new Snake();
        expect(snake.getDirection()).to.be.null;
    })

    it('should have a position on init', function() {
        let snake = new Snake();
        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,0));
    })

    it('should not move without direction', function() {
        const snake = new Snake();
        snake.update();
        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,0));
    })
});
