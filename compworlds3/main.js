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

var socket = io.connect("http://24.16.255.56:8888"); //24.16.255.56  // The database server.
const STUD_NAME = "Sam Brendel";
const STATE_NAME = "LifeStateC";
var bigData = [];

    // Catches messages from the server.
    socket.on("message", function (obj) {
        if (obj.message) {
            console.log("Server Message: " + obj.message);
        } else {
            console.log("No message from server.");
        }
    });

    // Catches the data from the server.
    socket.on("load", function (obj) {
        console.log("Server replied with load.");
        //console.log(d);
        if(obj.data.length > 0) {
            clearBoard();
            for(var i=0; i<height; i++) {
                for(var j=0; j<width; j++) {
                    if(obj.data[i][j].state == alive) {
                        GAME_ENGINE.generation.add(i, j);
                    }
                }
            }
        } else {
            console.error("null data received on load! Length = " + d.length);
        }
    });

window.onload = function () {
    console.log("Starting up client sheild...");

    // window.onkeydown = function (e) {
    //     if (e.keyCode === 13) { // the Enter key.
    //         console.log("You pressed the enter key.  Saved to database.");
    //         socket.emit("save", { studentname: STUD_NAME, statename: "testState", data: "craper" });

    //     } else if (e.keyCode === 32) { // space bar.
    //         console.log("You pressed the space bar.  Loaded from database.");
    //         socket.emit("load", { studentname: STUD_NAME, statename: "testState"});
    //     }
    // };

    socket.on("connect", function () {
        console.log("Socket connected.")
    });
    socket.on("disconnect", function () {
        console.log("Socket disconnected.")
    });
    socket.on("reconnect", function () {
        console.log("Socket reconnected.")
    });

};

function clearBoard() {
    for(var i=0; i<height; i++) {
        for(var j=0; j<width; j++) {
            GAME_ENGINE.generation.remove(i, j);
        }
    }
}

function setInitialState() {
    //createBlinker(30, 10);
    //createToad(50, 10);
    //createBeacon(40, 10);
    //createPulsar(10, 40);
    //createPulsar(5, 120);
    createPentadecathlon(5, 11);
    //createGosperGliderGun(150, 90);
    //createSingleRowInfinity(20, 100);
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
            row.push(0); // dead
        }
        game.generation.cells.push(row);
    }
    setInitialState(game);
}

// MUST RUN queueDownload() WITH SOMETHING ELSE THE PROGRAM WILL NOT RUN AT ALL.
ASSET_MANAGER.queueDownload("./img/unit.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up my sheild");
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
        document.getElementById('save-life').disabled = true;
        document.getElementById('load-life').disabled = true;
        document.getElementById('step-life').disabled = true;
    } else {
        GAME_ENGINE.paused = true;
        document.getElementById('start-life').innerHTML  = "RESUME";
        document.getElementById('save-life').disabled = false;
        document.getElementById('load-life').disabled = false;
        document.getElementById('step-life').disabled = false;
    }
    //console.debug("engine " + GAME_ENGINE.paused);
}

function step() {
    if (GAME_ENGINE.paused) {
        GAME_ENGINE.paused = false;
        GAME_ENGINE.generation.checkAllCells();
        GAME_ENGINE.paused = true;
        document.getElementById('save-life').disabled = false;
        document.getElementById('load-life').disabled = false;
    }
}

function save() {
    if (GAME_ENGINE.paused) {
        // store the state of all 160,000 entities to json and push to database.
        // Then display confirmation dialog.
        document.getElementById('save-life').disabled = true;
        document.getElementById('load-life').disabled = false;
        var theData = [];
        var row = [];
        for(var i=0; i<height; i++) {
            row = [];
            for(var j=0; j<width; j++) {
                row.push({ x:j, y:i, state:GAME_ENGINE.generation.cells[i][j] });
            }
            theData.push(row);
        }

        console.log("Sent data to server.");
        //console.log(theData);
        socket.emit("save", { studentname: STUD_NAME, statename: STATE_NAME, data: theData });
    }
}

function load() {
    if (GAME_ENGINE.paused) {
        // retreive the state of all 160,000 entities to json and push to database.
        // Then display confirmation dialog.
        document.getElementById('save-life').disabled = true;
        socket.emit("load", { studentname: STUD_NAME, statename: STATE_NAME});
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
