/*
 * Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life (save/load from database)
 * https://sam2b.github.io/compworlds3
 *
 * Notes: [] Best performance with FireFox browser.
 *        [] Interactive with the mouse to add/remove blocks so you
 *           can play with various configurations.
 *        [] Resolution can be set in main.js (pixel dimensions)
 *        [] Frame rate optimized from reducing memory consumption by
 *           not drawing a rectangle if it already alive.
 * Credits: John Conway, https://en.wikipedia.org/wiki/Game_of_life
 */

 function Unit(game, x, y) {
    this.game = game;
    Entity.call(this, game, x, y);
    //this.sprite = ASSET_MANAGER.getAsset("./img/unit.png");
}

Unit.prototype = new Entity();
Unit.prototype.constructor = Unit;

// This is run by the GameEngine after checkAllCells() is run. The next step is remove from the screen if dead.
Unit.prototype.update = function () {
    if(this.game.generation.cells[Math.floor(this.x/resolution)][Math.floor(this.y/resolution)] == dead) {                   // FLAG TO BE REMOVED.
        this.removeFromWorld = true;
    }
    Entity.prototype.update.call(this);
}

Unit.prototype.draw = function (ctx) {
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    //ctx.drawImage(this.sprite, 0, 0, resolution, resolution, this.x, this.y, resolution, resolution);
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y,resolution, resolution);
    Entity.prototype.draw.call(this);
}
