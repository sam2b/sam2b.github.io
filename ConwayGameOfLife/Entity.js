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

 function Entity(game, x, y) {
    this.game = game;
    this.x = x*resolution;
    this.y = y*resolution;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
    //this.x +=4;  // Just testing.
}

Entity.prototype.draw = function (ctx) {
    // if (this.game.showOutlines && this.radius) {
    //     this.game.ctx.beginPath();
    //     this.game.ctx.strokeStyle = "green";
    //     this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //     this.game.ctx.stroke();
    //     this.game.ctx.closePath();
    // }
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
