var TRACK_URL = "https://soundcloud.com/jerbeary/mrsaxobeat";

var visualize = function(track) {
	var streamURL = track.stream_url + "?client_id=" + CLIENT_ID;

	var sketch = function(p) {

		var sound;

		p.preload = function(){
			sound = p.loadSound(streamURL);
		}

		p.setup = function() {
			p.createCanvas(window.innerWidth, window.innerHeight);
		};

		p.draw = function() {
			p.background(51);
			p.fill(255);
		};

		p.mousePressed = function() {

			if(sound.isPlaying()) {
				sound.pause();
			} else {
				sound.loop();
			}
		};
	};

	var myp5 = new p5(sketch);
};

SC.initialize({
	client_id: CLIENT_ID
});

SC.resolve(TRACK_URL).then(function(track){
	visualize(track);

}).catch(function(error){
	console.log(error);
});