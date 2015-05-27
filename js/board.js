;(function () {
  "use strict";
  if ( typeof Nonogram === "undefined" ) {
    window.Nonogram = {};
  }

  var SIZE = 10;

  var Board = Nonogram.Board = function(size) {
    this.size = size || SIZE;
    this.solution = new Nonogram.Nonogram(this.size);
    this.dimX = this.size;
    this.dimY = this.size;
    this.pixels = [];
    this.blocks = [];
  };

  Board.prototype.render = function () {
    var boardString = "";
    
    for (var i = 0; i < this.dimY; i++) {
      var rowString = "";

      for (var j = 0; k < this.dimX; j++) {

        if (this.isPixel([j,i])) {
          rowString += "+";
        } else if (this.isBlock([j,i])) {
          rowString += "x";
        } else {
          rowString += ".";
        }

      }
      boardString += rowString;
    }

    return boardString;
  };

  Board.prototype.toggle = function (pos) {
    if (this.isPixel(pos)) {
      this.removePixel(pos);
      this.addBlock(pos);
    } else if (this.isBlock(pos)) {
      this.removeBlock(pos);
    } else {
      this.addPixel(pos);
    }
  };

  Board.prototype.addPixel = function (pos) {
    this.pixels.push(new Nonogram.Coord([pos[0], pos[1]]));
  };

  Board.prototype.addBlock = function (pos) {
    this.blocks.push(new Nonogram.Coord([pos[0], pos[1]]));
  };

  Board.prototype.removePixel = function (pos) {
    this.pixels.forEach( function (coord, index, pixels) {
      if (coord.equals(pos)) {
        pixels.splice(index, 1);
        return;
      }
    });
  };

  Board.prototype.removeBlock = function (pos) {
    this.blocks.forEach( function (coord, index, blocks) {
      if (coord.equals(pos)) {
        blocks.splice(index, 1);
        return;
      }
    });
  };

  Board.prototype.removeBlock = function (pos) {
  };

  Board.prototype.isPixel = function (pos) {
    this.pixels.forEach( function (coord) {
      if (coord.equals(pos)) {
        return true;
      }
    });
    return false;
  };

  Board.prototype.isBlock = function (pos) {
    this.blocks.forEach( function (coord) {
      if (coord.equals(pos)) {
        return true;
      }
    });
    return false;
  };

})();
