/* Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life
 * https://sam2b.github.io/ConwayGameOfLife
 */
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
