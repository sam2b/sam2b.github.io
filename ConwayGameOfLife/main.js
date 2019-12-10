/*
 * Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life
 * https://sam2b.github.io/compworlds2/
 *
 * Notes: [] Best performance with FireFox browser.
 *        [] Interactive with the mouse to add/remove blocks so you
 *           can play with various configurations.
 *        [] Resolution can be set in main.js (pixel dimensions)
 *        [] Frame rate optimized from reducing memory consumption by
 *           not drawing a rectangle if it already alive.
 * Credits: John Conway, https://en.wikipedia.org/wiki/Game_of_life
 */

var width;
var height;
const ASSET_MANAGER = new AssetManager();
const GAME_ENGINE = new GameEngine();
var resolution = 4;

function setInitialState() {
    createBlinker(30, 10);
    createToad(50, 10);
    createBeacon(40, 10);
    createPulsar(10, 40);
    createPulsar(5, 120);
    createPentadecathlon(5, 11);
    createGosperGliderGun(150, 90);
    createSingleRowInfinity(20, 100);
}

function createBlinker(x, y) {
    var data = [[x,y], [x,y+1], [x,y+2]];
    createTheThingy(data, x, y);
}

function createToad(x, y) {
    var data = [[x,y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1]];
    createTheThingy(data, x, y);
}

function createBeacon(x, y) {
    var data = [[x,y], [x+1, y], [x, y+1], [x+1, y+1], [x+2, y+2], [x+3, y+2], [x+2, y+3], [x+3, y+3]];
    createTheThingy(data, x, y);
}

function createPulsar(x, y) {
    //console.debug("Creating Pulsar at " + x + "," + y);
    var data = [[x+2, y], [x+3, y], [x+4, y], [x+8, y], [x+9, y], [x+10, y], [x, y+2], [x+5, y+2],
        [x+7, y+2], [x+12, y+2], [x, y+3], [x+5, y+3], [x+7, y+3], [x+12, y+3], [x, y+4], [x+5, y+4],
        [x+7, y+4], [x+12, y+4], [x+2, y+5], [x+3, y+5], [x+4, y+5], [x+8, y+5], [x+9, y+5], [x+10, y+5],
        [x+2, y+7], [x+3, y+7], [x+4, y+7], [x+8, y+7], [x+9, y+7], [x+10, y+7], [x, y+8], [x+5, y+8],
        [x+7, y+8], [x+12, y+8], [x, y+9], [x+5, y+9], [x+7, y+9], [x+12, y+9], [x, y+10], [x+5, y+10],
        [x+7, y+10], [x+12, y+10], [x+2, y+12], [x+3, y+12], [x+4, y+12], [x+8, y+12], [x+9, y+12],
        [x+10, y+12]];
    createTheThingy(data, x, y);
}

function createPentadecathlon(x, y) {
    var data = [[x, y], [x, y+1], [x, y+3], [x, y+4], [x, y+5], [x, y+6], [x, y+8], [x, y+9], [x-1, y+2],
        [x+1, y+2], [x-1, y+7], [x+1, y+7]];
    createTheThingy(data, x, y);
}

function createBlock(x, y) {
    var data = [[x, y],[x+1, y],[x, y+1],[x+1, y+1]];
    createTheThingy(data, x, y);
}

function createGosperGliderGun(x, y) {
    createBlock(x-17, y-1);
    createBlock(x+17, y-3);

    var data = [[x, y],[x-1, y],[x-1, y-1],[x-1, y+1],[x-2, y+2],[x-2, y-2],[x-3, y],
        [x-4, y+3],[x-5, y+3],[x-6, y+2],[x-7, y+1],[x-7, y],[x-7, y-1],[x-6, y-2],
        [x-5, y-3],[x-4, y-3],[x+3, y-1],[x+3, y-2],[x+3, y-3],[x+4, y-1],[x+4, y-2],
        [x+4, y-3],[x+5, y-4],[x+7, y-4],[x+7, y-5],[x+5, y],[x+7, y],[x+7, y+1]];
    createTheThingy(data, x, y);
}

function createSingleRowInfinity(x, y) {
    var data = [[x, y],[x+1, y],[x+2, y],[x+3, y],[x+4, y],[x+5, y],[x+6, y],[x+7, y],
        [x+9, y],[x+10, y],[x+11, y],[ x+12, y],[x+13, y],[x+17, y],[x+18, y],[x+19, y],
        [x+26, y],[x+27, y],[x+28, y],[x+29, y],[x+30, y],[x+31, y],[x+32, y],[x+34, y],
        [x+35, y],[x+36, y],[x+37, y],[x+38, y]];
    createTheThingy(data, x, y);
}

function createTheThingy(data, x, y) {
    for (var i=0; i < data.length; i++)
        GAME_ENGINE.generation.add(data[i][0], data[i][1]);
}

function initialize(game) {
    // Set every cell to a dead state.
    for (let y = 0; y < height; y++) {
        var row = [];
        for (let x = 0; x < width; x++) {
            row.push[0]; // dead
        }
        game.generation.cells.push(row);
    }
    setInitialState(game);
}

// MUST RUN queueDownload() WITH SOMETHING ELSE THE PROGRAM WILL NOT RUN AT ALL.
ASSET_MANAGER.queueDownload("./img/unit.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    //var GAME_ENGINE = new GameEngine();
    GAME_ENGINE.generation = new Generation(GAME_ENGINE);
    var bg = new Background(GAME_ENGINE);
    GAME_ENGINE.addEntity(bg);

    GAME_ENGINE.init(ctx);
    initialize(GAME_ENGINE);
    GAME_ENGINE.start();
});


// the "main" code begins here /////////////////////////////////////////
function startLife() {
    if (GAME_ENGINE.paused) {
        GAME_ENGINE.paused = false;
        document.getElementById('start-life').innerHTML  = "PAUSE";
    } else {
        GAME_ENGINE.paused = true;
        document.getElementById('start-life').innerHTML  = "RESUME";
    }
    //console.debug("engine " + GAME_ENGINE.paused);
}

function step() {
    if (GAME_ENGINE.paused) {
        GAME_ENGINE.paused = false;
        GAME_ENGINE.generation.checkAllCells();
        GAME_ENGINE.paused = true;
    }
}

function menuSelection(value) {
    var last = GAME_ENGINE.entities.length;
    var x = GAME_ENGINE.click.x;
    var y = GAME_ENGINE.click.y;
    console.debug("menu selected " + value + "  " + x + "," + y);
    switch(value) {
        case "Pulsar":
            createPulsar(x, y);
            break;
        case "Blinker":
            createBlinker(x,y);
            break;
    }
}
