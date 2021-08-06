class Snake{
    
}

const expect = require('chai').expect;

describe('World', function() {
    it('red', function() {
        expect('foo').to.equal('foo')
    })
});

describe('Snake', function() {
    it('exist', function() {
        let snake = new Snake();
        expect(snake).to.be.not.null;
    })
});
