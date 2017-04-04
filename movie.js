// - The **movie** file will contain a **Module**.
// - This module should *export* a function named `get(movieTitle)`.
// - `get(movieTitle)` should make a *request* to OMDB with the *movieTitle* as an argument.
// - **Hint:** what do you need to do to use the `request` library?
// - You should console.log your output.
// - You should test this with `node` to verify it works!

var request = require('request');

var movie = function get(movieTitle) {
	request("http://www.omdbapi.com/?t=" + movieTitle, function(error, response, body) { //Have to put error, response, body in that order
		var goodMovie = JSON.parse(body);
		console.log(goodMovie.Title);
	
	});
};



module.exports = movie;