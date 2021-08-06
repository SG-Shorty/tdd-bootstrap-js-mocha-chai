Snake = require('../src/Snake.js');
Position = require('../src/Position.js');

const expect = require('chai').expect;

describe('Snake', function() {

    let snake;
    let defaultPosition = new Position(0,0);
    before(function() {
        snake = new Snake();

    });

    it('should have no direction on init', function() {
        expect(snake.getDirection()).to.be.null;
    })
    it('should have a position on init', function() {
        expect(snake.getHeadPosition()).to.deep.equal(defaultPosition);
    })

    it('should not move without direction', function() {
        snake.update();
        expect(snake.getHeadPosition()).to.deep.equal(defaultPosition);
    })

    it('can receive a new direction', function() {
        let direction = 'north';
        snake.setDirection(direction);
        expect(snake.getDirection()).to.equal(direction);
    })
});
