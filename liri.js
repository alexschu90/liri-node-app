require("dotenv").config();
var keys = require("./keys.js");

var command = process.argv[2];

var concert = function() {
    axios = require("axios");
    moment = require("moment");
    input = process.argv;
    bandName = process.argv.slice(3).join(" ");
    

    queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function(response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
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

var spotify = function() {
    Spotify = require('node-spotify-api');
    spotify = new Spotify(keys.spotify);

    input = process.argv;
    
    if (!input[3]) {
        spotify.search({ type: 'track', query: "The Sign"})
        .then(function(response) {
        console.log("Artist: " + response.tracks.items[5].artists[0].name);
        console.log("Song Title: " + response.tracks.items[5].name);
        console.log("Preview Link: " + response.tracks.items[5].preview_url);
        console.log("Album Title: " + response.tracks.items[5].album.name);
        })
        .catch(function(err) {
        console.log(err);
        });
    } else {
        songName = "";

        for (var i = 3; i < input.length; i++) {
            if (i > 2 && i < input.length) {
                songName = songName + "+" + input[i];
            } else {
                songName += input[i];
            }
        }

        spotify.search({ type: 'track', query: songName, limit: 1})
        .then(function(response) {
        console.log("Artist: " + response.tracks.items[0].artists[0].name);
        console.log("Song Title: " + response.tracks.items[0].name);
        console.log("Preview Link: " + response.tracks.items[0].preview_url);
        console.log("Album Title: " + response.tracks.items[0].album.name);
        })
        .catch(function(err) {
        console.log(err);
        });
    }
};

var movie = function() {
    axios = require("axios");
    input = process.argv;

    if (!input[3]) {
        queryUrl = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy"
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
    } 
    else {
    movieName = process.argv.slice(3).join(" "); 

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
    }
};

var doThis = function() {
    fs = require("fs");

    fs.readFile("random.txt", "utf8", function(error, action) {
        if(error) {
            return console.log(error);
        }
        actionArr = action.split(",");

        if (actionArr[0] === "spotify-this-song") {
            Spotify = require('node-spotify-api');
            spotify = new Spotify(keys.spotify);
            songName = actionArr[1];

            spotify.search({ type: 'track', query: songName, limit: 1})
            .then(function(response) {
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song Title: " + response.tracks.items[0].name);
            console.log("Preview Link: " + response.tracks.items[0].preview_url);
            console.log("Album Title: " + response.tracks.items[0].album.name);
            })
            .catch(function(err) {
            console.log(err);
            });
        }
    })
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