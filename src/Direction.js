const Position = require("./Position");

const Direction = {
    NORTH: new Position(0, 1),
    EAST: new Position(1, 0),
    WEST: new Position(-1,0)
  };

  module.exports = Direction;