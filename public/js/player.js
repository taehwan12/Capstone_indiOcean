let trackArt = document.querySelector('.track-art');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');

let playPause = document.querySelector('.playpause-track');
let nexttrack = document.querySelector('.next-track');
let prevtrack = document.querySelector('.prev-track');

let seekSlider = document.querySelector('.seek-slider');
let volumeSlider = document.querySelector('.volume-slider');
let currentTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration');
let currentTrack = document.createElement('audio');

let trackIndex = 0;
let isPlaying = false;
let updateTimer;

const playlist = [{
    name: 'Blowback',
    artist: 'Galimatias',
    img: 'images/Blowback.png',
    music: 'media/Blowback.mp3'
  },
  {
    name: 'Free For',
    artist: 'BUD',
    img: 'images/Free For.png',
    music: 'media/Free For.mp3'
  },
  {
    name: 'Soulful',
    artist: 'L\'indécis',
    img: 'images/Soulful.png',
    music: 'media/Soulful.mp3'
  },
  {
    name: 'Sweetly',
    artist: 'Lord Kael',
    img: 'images/Sweetly.png',
    music: 'media/Sweetly.mp3'
  },
  {
    name: 'Tadow',
    artist: 'Masego & FKJ',
    img: 'images/Tadow.png',
    music: 'media/Tadow.mp3'
  },
  {
    name: 'Ylang Ylang',
    artist: 'FKJ',
    img: 'images/Ylang Ylang.png',
    music: 'media/Ylang Ylang.mp3'
  }
];

console.log('player.js served');

loadTrack(trackIndex);

function loadTrack(trackIndex) {
  clearInterval(updateTimer);
  reset();

  currentTrack.src = playlist[trackIndex].music;
  currentTrack.load();
  trackArt.style.background = "url(" + playlist[trackIndex].img + ")";
  trackName.textContent = playlist[trackIndex].name;
  trackArtist.textContent = playlist[trackIndex].artist;

  updateTimer = setInterval(setUpdate, 1000);
  currentTrack.addEventListener('ended', nexttrack);
}

function reset() {
  currentTime.textContent = '00:00';
  totalDuration.textContent = '00:00';
  seekSlider.value = 0;
}

function playPauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPause.innerHTML = '<i class="fa-solid fa-pause fa-3x"></i>'
}

function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPause.innerHTML = '<i class="fa-solid fa-play fa-3x"></i>'
}

function nextTrack() {
  if (trackIndex < playlist.length - 1) {
    trackIndex++;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex--;
  } else {
    trackIndex = playlist.length - 1;
  }
  loadTrack(trackIndex);
  playTrack();
}

function seekTo() {
  currentTrack.currentTime = currentTrack.duration * (seekSlider.value / 100);
}

function setVolume() {
  currentTrack.volume = volumeSlider.value / 100;
}


function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
    seekSlider.value = seekPosition;

    let currentMinutes = Math.floor(currentTrack.currentTime / 60);
    let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(currentTrack.duration / 60);
    let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }

    currentTime.textContent = currentMinutes + ':' + currentSeconds;
    totalDuration.textContent = durationMinutes + ':' + durationMinutes;
  }
}
