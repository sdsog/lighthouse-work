

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  
  uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


  printPlaylists : function () {
                  for (let playlistNumber in library.playlists) {
                  let playlists = library.playlists[playlistNumber];
                  console.log(playlists.id + ": " + playlists.name + " - " + playlists.tracks.length + " tracks");
              }
            }, 
  printTracks : function () {
    for (let tracksNumber in library.tracks) {
      let tracks = library.tracks[tracksNumber];
      console.log(tracks.id + ": " + tracks.name + " by " + tracks.artist + " (" + tracks.album + ")");}
  },

  printPlaylist : function (playlistId) {
    let playlist = this.playlists;
    let tracks = this.tracks;
    let playlistTracks;
 
     if (playlist.hasOwnProperty(playlistId)) {
       playlistTracks = playlist[playlistId].tracks;
       console.log(playlist[playlistId].id  + ": " + playlist[playlistId].name + " - " + playlist[playlistId].tracks.length + " tracks");
     }

     for (let trackNumber of playlistTracks) {
     if (tracks.hasOwnProperty(trackNumber)) {
      console.log(tracks[trackNumber].id + ": " + tracks[trackNumber].name + " by " + tracks[trackNumber].artist + " (" + tracks[trackNumber].album + ")");}
   }
  },

 addTrackToPlaylist : function (trackId, playlistId) {
  
  this.playlists[playlistId].tracks.push(trackId);
  console.log(this.playlists[playlistId].tracks);
},

 addPlaylist : function (name) {

  let uniqueId = this.uid();
  library.playlists[uniqueId] = { "id": uniqueId, "name": name, "tracks": [] };
  console.log(this.playlists);
},

 addTrack : function (name, artist, album) {

  let uniqueId = this.uid();

  library.tracks[uniqueId] = { "id": uniqueId, "name": name, "artist": artist, "album": album };
  console.log(this.tracks);
},






};


console.log("\nTHIS IS PRINT PLAYLIST: \n"); 
library.printPlaylists()

console.log("\nTHIS IS PRINT TRACKS: \n"); 
library.printTracks()

console.log("\nTHIS IS ADD TRACK TO PLAYLIST: \n"); 
library.addTrackToPlaylist('t03', 'p01');

console.log("\nTHIS IS PRINT PLAYLIST ID: \n"); 
library.printPlaylist('p01');

console.log("\nTHIS IS ADD TRACK TO PLAYLIST: \n"); 
library.addTrackToPlaylist('t03', 'p01');

console.log("\nTHIS IS ADD PLAYLIST: \n"); 
library.addPlaylist('Cool Playlist');

console.log("\nTHIS IS ADD TRACK: \n"); 
library.addTrack('Cover Me', 'Bruce Springsteen', 'Born in America');



// var printPlaylist = function (playlistId) {
//   let playlist = library.playlists;
//   let tracks = library.tracks;
//   let playlistTracks;

//   if (playlist.hasOwnProperty(playlistId)) {
//     playlistTracks = playlist[playlistId].tracks;
//     console.log(playlist[playlistId].id  + ": " + playlist[playlistId].name + " - " + playlist[playlistId].tracks.length + " tracks");
//   }

//   for (let trackNumber of playlistTracks) {
//     if (tracks.hasOwnProperty(trackNumber)) {
//       console.log(tracks[trackNumber].id + ": " + tracks[trackNumber].name + " by " + tracks[trackNumber].artist + " (" + tracks[trackNumber].album + ")");
//     }
//   }
// };




// // adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
  
//   library.playlists[playlistId].tracks.push(trackId);
//   console.log(library.playlists[playlistId].tracks);

// };

// console.log("\nTHIS IS ADD TRACK TO PLAYLIST: \n"); 
// addTrackToPlaylist('t03', 'p01');

// // generates a unique id
// // (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };


// // adds a track to the library

// var addTrack = function (name, artist, album) {

//   let uniqueId = uid();

//   library.tracks[uniqueId] = { "id": uniqueId, "name": name, "artist": artist, "album": album };

// };

// console.log("\nTHIS IS ADD TRACK: \n"); 
// addTrack('Cover Me', 'Bruce Springsteen', 'Born in America');
// console.log(library);







// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }