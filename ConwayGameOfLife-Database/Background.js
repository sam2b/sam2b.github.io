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
