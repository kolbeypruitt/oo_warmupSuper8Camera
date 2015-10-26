function Camera() {
  this.loaded = false;
  this.totalFrames = 0;
  this.fps = 18;
}

Camera.prototype.shoot = function(rate){
  if (rate === 'fast'){
      this.fps = 9
    } else if(rate === 'slow'){
      this.fps = 36
    } else  this.fps = 18 
}

Camera.prototype.addFilm = function() {
  this.loaded = true;
  this.totalFrames = 3600;
};

module.exports = Camera;
