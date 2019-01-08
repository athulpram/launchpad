let soundElements = {};

let createSoundElement = function(id) {
  if (soundElements[id] == undefined) {
    soundElements[id] = {
      status: false,
      music: new Audio("/sounds/chain1/" + id + ".mp3")
    };
  }
};

const playSound = function(cellId) {
  createSoundElement(cellId);
  playOrStop(cellId);
  soundElements[cellId].music.onended = () => stopPlaying(cellId);
};

const stopPlaying = function(id) {
  soundElements[id].status = false;
  soundElements[id].music.pause();
  document.getElementById(id).setAttribute("style", "background : red");
};

const playOrStop = function(id) {
  if (soundElements[id].status) {
    return stopPlaying(id);
  }
  soundElements[id].status = true;
  document.getElementById(id).setAttribute("style", "background : green");
  soundElements[id].music.play();
};
