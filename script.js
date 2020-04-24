const musicContainer = document.getElementById('music_container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressConatiner = document.getElementById('progress-conatiner');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// song title 
const songs = ['hey', 'summer', 'ukulele'];

//keep track of song 
let songIndex = 2;

// initially load song details into DOM 
loadSong(song[songIndex]);

//update song details 
function loadSong(song) {
    title.innerHTML = song;
    audio.src = 'music/${song}.mp3';
}
 
