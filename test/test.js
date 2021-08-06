Snake = require('../src/Snake.js');
Position = require('../src/Position.js');

const expect = require('chai').expect;

describe('Snake', function() {

    let snake;
    const defaultPosition = new Position(0,0);
    const directionNorth = 'north';

    beforeEach(function() {
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
        snake.setDirection(directionNorth);
        expect(snake.getDirection()).to.equal(directionNorth);
    })

    it('can move in direction', function() {
        snake.setDirection(directionNorth);
        snake.update();
        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,1));
    })

    it('can move twice in direction', function() {
        snake.setDirection(directionNorth);
        snake.update();
        snake.update();
        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,2));
    })
});
