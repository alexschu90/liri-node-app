# liri-node-app

Video Test Link: https://drive.google.com/file/d/187_ATXY9wOsw_TH646dhZ4_DMGhnF4aF/view


Purpose: 
    This program's main focus was to emulate an artificial assitant (i.e Iphone's SIRI).
    LIRI would take in a set of basic commands from the command line and return relevant information based on the user's input. 

Technologies: 
    * node / NPM
        - axios
        - moment
    * API's pulled
        - Spotify
        - OMDB
        - Bands in town


Rundown: 
    A switch statement was used to handle the logical conditions for the commands [concert-this, spotify-this-song, movie-this, do-what-it-says]. Each case would then run a function that would run their respective api calls using axios and return a response. 

    Finally, a log function was used in to append text to a log.txt file for all the commands that have been run. 
    
