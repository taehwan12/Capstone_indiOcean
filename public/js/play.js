
function play(a) {
  var audio = document.getElementById('audio_play'+a);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
  if(audio.currentTime === audio.duration){
    a++;
    play(a);
  }
}

function playpause(a) {
  var audio = document.getElementById('audio_play'+a);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    // audio.currentTime = 0;
  }
}
