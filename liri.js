require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var concert = function() {

};

var spotify = function() {

};

var movie = function() {
    axios = require("axios");
    input = process.argv;
    movieName = ""; 
    
    for (var i = 3; i < input.length; i++) {
        if (i > 2 && i < input.length) {
            movieName = movieName + "+" + input[i];
          } else {
            movieName += input[i];
          }
    }

    queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response) {
          console.log("Title of the movie: " + response.data.Title);
          console.log("Year of the movie came out: " + response.data.Year);
          console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
          console.log("Country Produced: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
          console.log("IMDB Rating: " + response.data.Ratings[0].Value);
 
        })
        .catch(function(error) {
            if(error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
};

var doThis = function() {

}


switch (command) {
    case "concert-this":
        concert(); 
        break;

    case "spotify-this-song":
        spotify(); 
        break; 
    
    case "movie-this":
        movie(); 
        break; 

    case "do-what-it-says":
        doThis();
        break; 
}