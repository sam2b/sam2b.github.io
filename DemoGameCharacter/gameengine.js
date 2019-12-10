/*
 * Assignment 1, Computational Worlds 
 * Augmented by: Sam Brendel 
 * Demonstration of character movement in a game world.
 * 2019-02-01
 */

// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
}

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;
    this.click = null;
    this.mouse = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
    this.origin = {x: 0, y: 0};
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

    var getXandY = function(e) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

        if (x < 1024) {
            x = Math.floor(x / 32);
            y = Math.floor(y / 32);
        }
        return { x: x, y: y };
    }

    this.ctx.canvas.addEventListener("keydown", function(e) {
        e.preventDefault();
        switch(e.keyCode) {
            case 32: // ' '
                that.space = true;
                break;
            case 37: // arrow left
            case 65: // a
                that.left = true;
                that.lefting = e.repeat;
                break;
            case 39: // arrow right
            case 68: // d
                that.right = true;
                that.righting = e.repeat;
                break;
            case 38: // arrow up
            case 87: // w
                that.up = true;
                that.upping = e.repeat;
                break;
            case 40: // arrow down
            case 83: // s
                that.down = true;
                that.downing = e.repeat;
                break;
            default:
                console.error("Key Down Event - Char: " + e.code + " Code: " + e.keyCode + " Reapeat: " + e.repeat);
                break;
        }
        //if (String.fromCharCode(e.which) === ' ') that.space = true;
    }, false);

    this.ctx.canvas.addEventListener('keyup', function(e) {
        switch(e.keyCode) {
            case 32: // ' '
                that.space = false;
                break;
            case 37: // arrow left
            case 65: // a
                that.left = false;
                that.lefting = false;
                break;
            case 39: // arrow right
            case 68: // d
                that.right = false;
                that.righting = false;
                break;
            case 38: // arrow up
            case 87: // w
                that.up = false;
                that.upping = false;
                break;
            case 40: // arrow down
            case 83: // s
                that.down = false;
                that.downing = false;
                break;
        }
    }, false);

    this.ctx.canvas.addEventListener("click", function(e) {
        that.click = getXandY(e);
        //console.log("Clicked at " + e.clientX + "," + e.clientY); // The coordinates on the browser screen.
    }, false);

    console.log('Input started');
}

GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();

    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
}

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
    this.space = null;
    this.click = null;

    // // Just pressed a button breifly.
    // this.up = null;
    // this.down = null;
    // this.left = null;
    // this.right = null;

    // // Holding down a button for >1 second.
    // this.upping = null;
    // this.downing = null;
    // this.lefting = null;
    // this.righting = null;
}

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
}

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }
}

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}
