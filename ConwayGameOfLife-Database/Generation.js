/*
 * Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life (save/load from database)
 * https://sam2b.github.io/compworlds3
 *
 *
 * Notes: [] Best performance with FireFox browser.
 *        [] Interactive with the mouse to add/remove blocks so you
 *           can play with various configurations.
 *        [] Resolution can be set in main.js (pixel dimensions)
 *        [] Frame rate optimized from reducing memory consumption by
 *           not drawing a rectangle if it already alive.
 * Credits: John Conway, https://en.wikipedia.org/wiki/Game_of_life
 */

 function Generation(game) {
    this.game = game;
    this.cells = [];
    this.deathQueue = [];
    this.birthQueue = [];
}

/**
  * Only used for adding a unit to the screen, including when clicking.
  */
 Generation.prototype.add = function (x, y) {
    this.birthQueue.push({x:x, y:y});
    //console.info("pushed onto birthQueue " + x + "," + y);
    var unit = new Unit(this.game, x, y);
    unit.draw(this.game.ctx);
}

/**
  * Only used for adding a unit to the screen, including when clicking.
  */
 Generation.prototype.remove = function (x, y) {
    this.deathQueue.push({x:x, y:y});
}

/** Runs every tick in an infinite loop by the GAME_ENGINE.
  * n^4 runtime.
  */
Generation.prototype.checkAllCells = function () {
    var i, j;
    if (!this.game.paused) {
        for (i = 0; i < height; i++) {
            for (j = 0; j < width; j++) {
                this.checkNeighbors(i,j);
            }
        }
    }

    // Do the following even if the game is paused.

    for(var i = 0; i < this.deathQueue.length; i++) {
        this.cells[this.deathQueue[i].x][this.deathQueue[i].y] = dead;
        //console.debug("Queue Death of");
        //console.debug(this.deathQueue[i]);
    }
    this.deathQueue = [];

    for(var i = 0; i < this.birthQueue.length; i++) {
        this.cells[this.birthQueue[i].x][this.birthQueue[i].y] = pendingAlive;
        //console.debug("Queue Birth of");
        //console.debug(this.birthQueue[i]);
    }
    this.birthQueue = [];

    // The GameEngine will later draw the results on the screen.
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            if (this.cells[x][y] == pendingAlive) { // 1 represents a pending "alive" state.
                this.game.addEntity(new Unit(this.game, x, y)); // BUG cells that stay alive will have this line run repeatedly!  SHould only run once.
                this.cells[x][y] = alive; // increment to 2 to represent already alive.
            }
            // else the GameEngine will remove from the screen if dead.
        }
    }
}

// Every cell interacts with its eight neighbours, which are the cells that are horizontally,
// vertically, or diagonally adjacent.
Generation.prototype.checkNeighbors = function (x, y) {
    var livingNeighbors = 0;
    // TODO check for edges < 0 and > dimension+16
    if (x > 0 && y > 0 && this.cells[x-1][y-1] == alive) {
        livingNeighbors++;
    }
    if (x > 0 && this.cells[x-1][y] == alive) {
        livingNeighbors++;
    }
    if (x > 0 && y < height-1 && this.cells[x-1][y+1] == alive) {
        livingNeighbors++;
    }
    if (x < width-1 && y > 0 && this.cells[x+1][y-1] == alive) {
        livingNeighbors++;
    }
    if (x < width-1 && this.cells[x+1][y] == alive) {
        livingNeighbors++;
    }
    if (x < width-1 && y < height-1 && this.cells[x+1][y+1] == alive) {
        livingNeighbors++;
    }
    if (y > 0 && this.cells[x][y-1] == alive) {
        livingNeighbors++;
    }
    if (y < height-1 && this.cells[x][y+1] == alive) {
        livingNeighbors++;
    }

    if (this.cells[x][y] == alive) {
        //     underpopulation         overpopulation
        if(livingNeighbors < 2 || livingNeighbors > 3) {
            this.deathQueue.push({x:x, y:y});
        }
    // else if the cell is dead and has 3 live neighbors.
    } else if (livingNeighbors == 3) {
        this.birthQueue.push({x:x, y:y});
    }

    return livingNeighbors;
}
