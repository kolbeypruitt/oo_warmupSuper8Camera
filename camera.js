function Camera() {
  this.loaded = false;
  this.totalFrames = 0;
  this.fps = 18;
}

Camera.prototype.addFilm = function() {
  this.loaded = true;
  this.totalFrames = 3600;
};

module.exports = Camera;
