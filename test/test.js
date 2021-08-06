Snake = require('../src/Snake.js');
Position = require('../src/Position.js');

const expect = require('chai').expect;

describe('Snake', function() {
    
    let snake;
    
    before(function() {
        snake = new Snake();
    });

    it('should have no direction on init', function() {

        expect(snake.getDirection()).to.be.null;
    })

    it('should have a position on init', function() {

        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,0));
    })

    it('should not move without direction', function() {

        snake.update();
        expect(snake.getHeadPosition()).to.deep.equal(new Position(0,0));
    })
});
