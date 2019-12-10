/* Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life
 * https://sam2b.github.io/ConwayGameOfLife
 */
function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.5;
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
