// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011.

/*
 * Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life (save/load from database)
 * https://sam2b.github.io/ConwayGameOfLife-Database
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

const dead = 0;
const pendingAlive = 1;
const alive = 2;

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 10 );
        };
})();


function GameEngine() {
    this.entities = [];
    this.ctx = null;
    this.click = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
    this.generation = null;
    this.paused = true;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    console.log('game initialized');
}

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
}

GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;

    //Get Mouse Position
    function getPosition(canvas, e) {
        var rectum = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rectum.left,
            y: e.clientY - rectum.top
        };
    }

    this.ctx.canvas.addEventListener("click", function (e) {
        document.getElementById('save-life').disabled = false;
        var mouse = getPosition(that.ctx.canvas, e);
        var x = Math.floor(mouse.x/resolution);
        var y = Math.floor(mouse.y/resolution);
        //console.debug("that.generation.cells[x][y] = " + that.generation.cells[x][y]);
        //console.debug(that.generation.cells);
        if (that.generation.cells[x][y] == alive) { // must check for 2, not zero.  When set to zero, an object is considered "undefined" in javascript as per my investigation in logs. Weird.
            that.generation.remove(x, y);
        } else {
            that.generation.add(x, y);
        }
        //console.debug("Clicked " + mouse.x + "," + mouse.y)
        that.click = {x:x, y:y};
    }, false);

    console.log('Input started');
}

GameEngine.prototype.addEntity = function (entity) {
    //console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;
    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];
        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    // Removes the entity, which means it will no longer render on the screen.
    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities[i] = null;
            //console.debug("-----------------DEATH of [" + this.entities[i].x + "][" + this.entities[i].y + "]");
            this.entities.splice(i, 1);      // NOW REMOVED FROM THE SCREEN.
        }
    }
}

GameEngine.prototype.loop = function () {
        this.clockTick = this.timer.tick();
        this.generation.checkAllCells();
        this.update();
        this.draw();
        this.space = null;
}
