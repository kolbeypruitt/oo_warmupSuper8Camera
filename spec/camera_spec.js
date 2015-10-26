var Camera = require('../camera');
var camera;
/*
Create a super 8 camera
It starts out with no film.
Write a function to add a film cartridge. ( a cartridge contains 3,600 frames )
Write a function to shoot film at normal speed (18 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
Write a function to shoot film at slow motion (36 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
Write a function to shoot film at fast motion (9 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
What other features can a camera have? Add more.
When you are done make the camera run.
*/

describe('camera', function(){
  var camera = new Camera();
  it('should not have film when created', function(){
    expect(camera.loaded).toEqual(false);
  });

  it('can have film added', function(){
    expect(camera.loaded).toEqual(false);
    camera.addFilm();
    expect(camera.loaded).toEqual(true);
  });

  it('takes film cartridges in 3600 frames', function () {
    camera.addFilm();
    expect(camera.totalFrames).toEqual(3600);
  });

  it('starts with 0 totalFrames', function () {
    var camera = new Camera();
    expect(camera.totalFrames).toEqual(0);
  });

  it('fps should default to normal', function () {
    expect(camera.fps).toEqual(18);
  });

  it('should have normal shooting mode speed (18 fps)', function () {
    camera.shoot('normal');
    expect(camera.fps).toEqual(18);
  });

  it('should have slow shooting mode speed (36 fps)', function () {
    // expect(camera.fps).toEqual(18);
    camera.shoot('slow');
    expect(camera.fps).toEqual(36);
  });

  it('should have fast shooting mode speed (9 fps)', function () {
    // expect(camera.fps).toEqual(18);
    camera.shoot('fast');
    expect(camera.fps).toEqual(9);
  });

});
