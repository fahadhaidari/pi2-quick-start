pi2.setup = function () {
  this.width = 400;
  this.height = 400;
  this.color = '#111111';
  this.friction = 0.999;
  this.gravity = { x: 0, y: 0 };
  this.border = {
    color: '#EEEEEE',
    width: 10,
  }
}

pi2.start();

pi2.onMouseUp = function(data) {
  pi2.draw.circle({
    x: data.mouse.x,
    y: data.mouse.y,
    vel: new pi2.Vector(
      pi2.util.randomDouble(-2, 2),
      pi2.util.randomDouble(-2, 2),
    ),
    radius: pi2.util.randomInt(5, 20),
    color: pi2.util.randomColor(),
  });
};