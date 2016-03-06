var TRACK_URL = "https://soundcloud.com/jerbeary/mrsaxobeat";

var visualize = function(track) {
	var streamURL = track.stream_url + "?client_id=" + CLIENT_ID;

	var sketch = function(p) {

		var song;
		
		p.preload = function(){
			song = p.loadSound(streamURL);
		}

		p.setup = function() {
			p.createCanvas(window.innerWidth, window.innerHeight);
		};

		p.draw = function() {
			p.background(51);
			p.fill(255);
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