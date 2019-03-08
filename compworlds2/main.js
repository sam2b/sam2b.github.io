/*
 * Author: Sam Brendel modified starter code example.
 * 3/14/2019, TCSS491 Computational Worlds
 * Game of Life
 * https://sam2b.github.io/compworlds2/
 */

var width;
var height;
const alive = 1;
const dead = 0;
var ASSET_MANAGER = new AssetManager();

function setInitialState(game) {
    createBlinker(game, 30, 10);
    createToad(game, 50, 10);
    createBeacon(game, 40, 10);
    createPulsar(game, 10, 40);
    createPentadecathlon(game, 11, 11);
    //createGosperGliderGun(game, 30, 30);
    createSingleRowInfinity(game, 50, 100);
}

function createBlinker(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x, y+1));
    game.generation.birthQueue.push({x:x, y:y+1});

    game.addEntity(new Unit(game, x, y+2));
    game.generation.birthQueue.push({x:x, y:y+2});
}

function createToad(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x+1, y));
    game.generation.birthQueue.push({x:x+1, y:y});

    game.addEntity(new Unit(game, x+2, y));
    game.generation.birthQueue.push({x:x+2, y:y});

    game.addEntity(new Unit(game, x-1, y+1));
    game.generation.birthQueue.push({x:x-1, y:y+1});

    game.addEntity(new Unit(game, x, y+1));
    game.generation.birthQueue.push({x:x, y:y+1});

    game.addEntity(new Unit(game, x+1, y+1));
    game.generation.birthQueue.push({x:x+1, y:y+1});
}

function createBeacon(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x+1, y));
    game.generation.birthQueue.push({x:x+1, y:y});

    game.addEntity(new Unit(game, x, y+1));
    game.generation.birthQueue.push({x:x, y:y+1});

    game.addEntity(new Unit(game, x+1, y+1));
    game.generation.birthQueue.push({x:x+1, y:y+1});

    game.addEntity(new Unit(game, x+2, y+2));
    game.generation.birthQueue.push({x:x+2, y:y+2});

    game.addEntity(new Unit(game, x+3, y+2));
    game.generation.birthQueue.push({x:x+3, y:y+2});

    game.addEntity(new Unit(game, x+2, y+3));
    game.generation.birthQueue.push({x:x+2, y:y+3});

    game.addEntity(new Unit(game, x+3, y+3));
    game.generation.birthQueue.push({x:x+3, y:y+3});
}

function createPulsar(game, x, y) {
    game.addEntity(new Unit(game, x+2, y));
    game.generation.birthQueue.push({x:x+2, y:y});

    game.addEntity(new Unit(game, x+3, y));
    game.generation.birthQueue.push({x:x+3, y:y});

    game.addEntity(new Unit(game, x+4, y));
    game.generation.birthQueue.push({x:x+4, y:y});

    game.addEntity(new Unit(game, x+8, y));
    game.generation.birthQueue.push({x:x+8, y:y});

    game.addEntity(new Unit(game, x+9, y));
    game.generation.birthQueue.push({x:x+9, y:y});

    game.addEntity(new Unit(game, x+10, y));
    game.generation.birthQueue.push({x:x+10, y:y});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+2));
    game.generation.birthQueue.push({x:x, y:y+2});

    game.addEntity(new Unit(game, x+5, y+2));
    game.generation.birthQueue.push({x:x+5, y:y+2});

    game.addEntity(new Unit(game, x+7, y+2));
    game.generation.birthQueue.push({x:x+7, y:y+2});

    game.addEntity(new Unit(game, x+12, y+2));
    game.generation.birthQueue.push({x:x+12, y:y+2});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+3));
    game.generation.birthQueue.push({x:x, y:y+3});

    game.addEntity(new Unit(game, x+5, y+3));
    game.generation.birthQueue.push({x:x+5, y:y+3});

    game.addEntity(new Unit(game, x+7, y+3));
    game.generation.birthQueue.push({x:x+7, y:y+3});

    game.addEntity(new Unit(game, x+12, y+3));
    game.generation.birthQueue.push({x:x+12, y:y+3});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+4));
    game.generation.birthQueue.push({x:x, y:y+4});

    game.addEntity(new Unit(game, x+5, y+4));
    game.generation.birthQueue.push({x:x+5, y:y+4});

    game.addEntity(new Unit(game, x+7, y+4));
    game.generation.birthQueue.push({x:x+7, y:y+4});

    game.addEntity(new Unit(game, x+12, y+4));
    game.generation.birthQueue.push({x:x+12, y:y+4});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+2, y+5));
    game.generation.birthQueue.push({x:x+2, y:y+5});

    game.addEntity(new Unit(game, x+3, y+5));
    game.generation.birthQueue.push({x:x+3, y:y+5});

    game.addEntity(new Unit(game, x+4, y+5));
    game.generation.birthQueue.push({x:x+4, y:y+5});

    game.addEntity(new Unit(game, x+8, y+5));
    game.generation.birthQueue.push({x:x+8, y:y+5});

    game.addEntity(new Unit(game, x+9, y+5));
    game.generation.birthQueue.push({x:x+9, y:y+5});

    game.addEntity(new Unit(game, x+10, y+5));
    game.generation.birthQueue.push({x:x+10, y:y+5});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+2, y+7));
    game.generation.birthQueue.push({x:x+2, y:y+7});

    game.addEntity(new Unit(game, x+3, y+7));
    game.generation.birthQueue.push({x:x+3, y:y+7});

    game.addEntity(new Unit(game, x+4, y+7));
    game.generation.birthQueue.push({x:x+4, y:y+7});

    game.addEntity(new Unit(game, x+8, y+7));
    game.generation.birthQueue.push({x:x+8, y:y+7});

    game.addEntity(new Unit(game, x+9, y+7));
    game.generation.birthQueue.push({x:x+9, y:y+7});

    game.addEntity(new Unit(game, x+10, y+7));
    game.generation.birthQueue.push({x:x+10, y:y+7});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+8));
    game.generation.birthQueue.push({x:x, y:y+8});

    game.addEntity(new Unit(game, x+5, y+8));
    game.generation.birthQueue.push({x:x+5, y:y+8});

    game.addEntity(new Unit(game, x+7, y+8));
    game.generation.birthQueue.push({x:x+7, y:y+8});

    game.addEntity(new Unit(game, x+12, y+8));
    game.generation.birthQueue.push({x:x+12, y:y+8});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+9));
    game.generation.birthQueue.push({x:x, y:y+9});

    game.addEntity(new Unit(game, x+5, y+9));
    game.generation.birthQueue.push({x:x+5, y:y+9});

    game.addEntity(new Unit(game, x+7, y+9));
    game.generation.birthQueue.push({x:x+7, y:y+9});

    game.addEntity(new Unit(game, x+12, y+9));
    game.generation.birthQueue.push({x:x+12, y:y+9});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x, y+10));
    game.generation.birthQueue.push({x:x, y:y+10});

    game.addEntity(new Unit(game, x+5, y+10));
    game.generation.birthQueue.push({x:x+5, y:y+10});

    game.addEntity(new Unit(game, x+7, y+10));
    game.generation.birthQueue.push({x:x+7, y:y+10});

    game.addEntity(new Unit(game, x+12, y+10));
    game.generation.birthQueue.push({x:x+12, y:y+10});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+2, y+12));
    game.generation.birthQueue.push({x:x+2, y:y+12});

    game.addEntity(new Unit(game, x+3, y+12));
    game.generation.birthQueue.push({x:x+3, y:y+12});

    game.addEntity(new Unit(game, x+4, y+12));
    game.generation.birthQueue.push({x:x+4, y:y+12});

    game.addEntity(new Unit(game, x+8, y+12));
    game.generation.birthQueue.push({x:x+8, y:y+12});

    game.addEntity(new Unit(game, x+9, y+12));
    game.generation.birthQueue.push({x:x+9, y:y+12});

    game.addEntity(new Unit(game, x+10, y+12));
    game.generation.birthQueue.push({x:x+10, y:y+12});
    ///////////////////////////////////////////////////
}

function createPentadecathlon(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x, y+1));
    game.generation.birthQueue.push({x:x, y:y+1});

    game.addEntity(new Unit(game, x, y+3));
    game.generation.birthQueue.push({x:x, y:y+3});

    game.addEntity(new Unit(game, x, y+4));
    game.generation.birthQueue.push({x:x, y:y+4});

    game.addEntity(new Unit(game, x, y+5));
    game.generation.birthQueue.push({x:x, y:y+5});

    game.addEntity(new Unit(game, x, y+6));
    game.generation.birthQueue.push({x:x, y:y+6});

    game.addEntity(new Unit(game, x, y+8));
    game.generation.birthQueue.push({x:x, y:y+8});

    game.addEntity(new Unit(game, x, y+9));
    game.generation.birthQueue.push({x:x, y:y+9});

    game.addEntity(new Unit(game, x-1, y+2));
    game.generation.birthQueue.push({x:x-1, y:y+2});

    game.addEntity(new Unit(game, x+1, y+2));
    game.generation.birthQueue.push({x:x+1, y:y+2});

    game.addEntity(new Unit(game, x-1, y+7));
    game.generation.birthQueue.push({x:x-1, y:y+7});

    game.addEntity(new Unit(game, x+1, y+7));
    game.generation.birthQueue.push({x:x+1, y:y+7});
}

function createBlock(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x+1, y));
    game.generation.birthQueue.push({x:x+1, y:y});

    game.addEntity(new Unit(game, x, y+1));
    game.generation.birthQueue.push({x:x, y:y+1});

    game.addEntity(new Unit(game, x+1, y+1));
    game.generation.birthQueue.push({x:x+1, y:y+1});
}

function createGosperGliderGun(game, x, y) {
    createBlock(game, x-17, y-1);
    createBlock(game, x+17, y-3);
    ////////////////////////////////////////////////
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x-1, y));
    game.generation.birthQueue.push({x:x-1, y:y});

    game.addEntity(new Unit(game, x-1, y-1));
    game.generation.birthQueue.push({x:x-1, y:y-1});

    game.addEntity(new Unit(game, x-1, y+1));
    game.generation.birthQueue.push({x:x-1, y:y+1});

    game.addEntity(new Unit(game, x-2, y+2));
    game.generation.birthQueue.push({x:x-2, y:y+2});

    game.addEntity(new Unit(game, x-2, y-2));
    game.generation.birthQueue.push({x:x-2, y:y-2});

    game.addEntity(new Unit(game, x-3, y));
    game.generation.birthQueue.push({x:x-3, y:y});

    game.addEntity(new Unit(game, x-4, y+3));
    game.generation.birthQueue.push({x:x-4, y:y+3});

    game.addEntity(new Unit(game, x-5, y+3));
    game.generation.birthQueue.push({x:x-5, y:y+3});

    game.addEntity(new Unit(game, x-6, y+2));
    game.generation.birthQueue.push({x:x-6, y:y+2});

    game.addEntity(new Unit(game, x-7, y+1));
    game.generation.birthQueue.push({x:x-7, y:y+1});

    game.addEntity(new Unit(game, x-7, y));
    game.generation.birthQueue.push({x:x-7, y:y});

    game.addEntity(new Unit(game, x-7, y-1));
    game.generation.birthQueue.push({x:x-7, y:y-1});

    game.addEntity(new Unit(game, x-6, y-2));
    game.generation.birthQueue.push({x:x-6, y:y-2});

    game.addEntity(new Unit(game, x-5, y-3));
    game.generation.birthQueue.push({x:x-5, y:y-3});

    game.addEntity(new Unit(game, x-4, y-3));
    game.generation.birthQueue.push({x:x-4, y:y-3});
    /////////////////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+3, y-1));
    game.generation.birthQueue.push({x:x+3, y:y-1});

    game.addEntity(new Unit(game, x+3, y-2));
    game.generation.birthQueue.push({x:x+3, y:y-2});

    game.addEntity(new Unit(game, x+3, y-3));
    game.generation.birthQueue.push({x:x+3, y:y-3});

    game.addEntity(new Unit(game, x+4, y-1));
    game.generation.birthQueue.push({x:x+4, y:y-1});

    game.addEntity(new Unit(game, x+4, y-2));
    game.generation.birthQueue.push({x:x+4, y:y-2});

    game.addEntity(new Unit(game, x+4, y-3));
    game.generation.birthQueue.push({x:x+4, y:y-3});

    game.addEntity(new Unit(game, x+5, y-4));
    game.generation.birthQueue.push({x:x+5, y:y-4});

    game.addEntity(new Unit(game, x+7, y-4));
    game.generation.birthQueue.push({x:x+7, y:y-4});

    game.addEntity(new Unit(game, x+7, y-5));
    game.generation.birthQueue.push({x:x+7, y:y-5});

    game.addEntity(new Unit(game, x+5, y));
    game.generation.birthQueue.push({x:x+5, y:y});

    game.addEntity(new Unit(game, x+7, y));
    game.generation.birthQueue.push({x:x+7, y:y});

    game.addEntity(new Unit(game, x+7, y+1));
    game.generation.birthQueue.push({x:x+7, y:y+1});


}

function createSingleRowInfinity(game, x, y) {
    game.addEntity(new Unit(game, x, y));
    game.generation.birthQueue.push({x:x, y:y});

    game.addEntity(new Unit(game, x+1, y));
    game.generation.birthQueue.push({x:x+1, y:y});

    game.addEntity(new Unit(game, x+2, y));
    game.generation.birthQueue.push({x:x+2, y:y});

    game.addEntity(new Unit(game, x+3, y));
    game.generation.birthQueue.push({x:x+3, y:y});

    game.addEntity(new Unit(game, x+4, y));
    game.generation.birthQueue.push({x:x+4, y:y});

    game.addEntity(new Unit(game, x+5, y));
    game.generation.birthQueue.push({x:x+5, y:y});

    game.addEntity(new Unit(game, x+6, y));
    game.generation.birthQueue.push({x:x+6, y:y});

    game.addEntity(new Unit(game, x+7, y));
    game.generation.birthQueue.push({x:x+7, y:y});
    ///////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+9, y));
    game.generation.birthQueue.push({x:x+9, y:y});

    game.addEntity(new Unit(game, x+10, y));
    game.generation.birthQueue.push({x:x+10, y:y});

    game.addEntity(new Unit(game, x+11, y));
    game.generation.birthQueue.push({x:x+11, y:y});

    game.addEntity(new Unit(game, x+12, y));
    game.generation.birthQueue.push({x:x+12, y:y});

    game.addEntity(new Unit(game, x+13, y));
    game.generation.birthQueue.push({x:x+13, y:y});
    /////////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+17, y));
    game.generation.birthQueue.push({x:x+17, y:y});

    game.addEntity(new Unit(game, x+18, y));
    game.generation.birthQueue.push({x:x+18, y:y});

    game.addEntity(new Unit(game, x+19, y));
    game.generation.birthQueue.push({x:x+19, y:y});
    //////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+26, y));
    game.generation.birthQueue.push({x:x+26, y:y});

    game.addEntity(new Unit(game, x+27, y));
    game.generation.birthQueue.push({x:x+27, y:y});

    game.addEntity(new Unit(game, x+28, y));
    game.generation.birthQueue.push({x:x+28, y:y});

    game.addEntity(new Unit(game, x+29, y));
    game.generation.birthQueue.push({x:x+29, y:y});

    game.addEntity(new Unit(game, x+30, y));
    game.generation.birthQueue.push({x:x+30, y:y});

    game.addEntity(new Unit(game, x+31, y));
    game.generation.birthQueue.push({x:x+31, y:y});

    game.addEntity(new Unit(game, x+32, y));
    game.generation.birthQueue.push({x:x+32, y:y});
    ////////////////////////////////////////////////

    game.addEntity(new Unit(game, x+34, y));
    game.generation.birthQueue.push({x:x+34, y:y});

    game.addEntity(new Unit(game, x+35, y));
    game.generation.birthQueue.push({x:x+35, y:y});

    game.addEntity(new Unit(game, x+36, y));
    game.generation.birthQueue.push({x:x+36, y:y});

    game.addEntity(new Unit(game, x+37, y));
    game.generation.birthQueue.push({x:x+37, y:y});

    game.addEntity(new Unit(game, x+38, y));
    game.generation.birthQueue.push({x:x+38, y:y});
}

function initialize(game) {
    // Set every cell to a dead state.
    for (let y = 0; y < height; y++) {
        var row = [];
        for (let x = 0; x < width; x++) {
            row.push[dead];
        }
        game.generation.cells.push(row);
    }
    setInitialState(game);
}

function Generation(game) {
    this.game = game;
    this.cells = [];
    this.deathQueue = [];
    this.birthQueue = [];
}

// Runs every tick in an infinite loop by the gameEngine.
Generation.prototype.checkAllCells = function () {
    var i, j;
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            this.checkNeighbors(i,j);
        }
    }

    for(var i = 0; i < this.deathQueue.length; i++) {
        this.cells[this.deathQueue[i].x][this.deathQueue[i].y] = dead;
        ////console.debug("Queue Death of");
        ////console.debug(this.deathQueue[i]);
    }
    this.deathQueue = [];

    for(var i = 0; i < this.birthQueue.length; i++) {
        this.cells[this.birthQueue[i].x][this.birthQueue[i].y] = alive;
        ////console.debug("Queue Birth of");
        //console.debug(this.birthQueue[i]);
    }
    this.birthQueue = [];

    // Draw the results on the screen
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            if (this.cells[x][y] == alive) {
                this.game.addEntity(new Unit(this.game, x, y));
            }
            // else the GameEngine will remove from the screen if dead.
        }
    }
}

Generation.prototype.add = function (x, y) {
    var unit = new Unit(this.game, x, y);
    this.birthQueue.push({x:x, y:y});
    unit.draw(this.game.ctx);
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

function Background(game) {
    Entity.call(this, game, 0, 0);
}

Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.update = function () {

}

Background.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height);
    Entity.prototype.draw.call(this);
}

function Unit(game, x, y) {
    this.game = game;
    Entity.call(this, game, x, y);
    this.sprite = ASSET_MANAGER.getAsset("./img/unit.png");
}

Unit.prototype = new Entity();
Unit.prototype.constructor = Unit;

// This is run by the GameEngine after checkAllCells() is run. The next step is remove from the screen if dead.
Unit.prototype.update = function () {
    if(this.game.generation.cells[this.x/4][this.y/4] == dead) {                   // FLAG TO BE REMOVED.
        this.removeFromWorld = true;
    }
    //this.game.generation.checkNeighbors(this.x, this.y);
    Entity.prototype.update.call(this);
}

Unit.prototype.draw = function (ctx) {
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    ctx.drawImage(this.sprite, 0, 0, 4, 4, this.x, this.y, 4, 4);
    Entity.prototype.draw.call(this);
}

// the "main" code begins here /////////////////////////////////////////

ASSET_MANAGER.queueDownload("./img/unit.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    var gameEngine = new GameEngine();
    gameEngine.generation = new Generation(gameEngine);
    var bg = new Background(gameEngine);
    gameEngine.addEntity(bg);

    gameEngine.init(ctx);
    initialize(gameEngine);
    gameEngine.start();
});
