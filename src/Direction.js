const Position = require("./Position");

const Direction = {
    NORTH: { name : 'north', position : new Position(0, 1)},
    EAST: { name : 'east', position : new Position(1, 0)},
    WEST: { name : 'west', position : new Position(-1,0)}
  };

  module.exports = Direction;