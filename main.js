const playSound = function(cellId) {
  let music = "/sounds/chain1/" + cellId + ".mp3";
  document.getElementById(cellId).setAttribute("style", "background : green");

  let audio = new Audio(music);
  audio.play();
  audio.onended = function() {
    document.getElementById(cellId).setAttribute("style", "background : red");
  };
};
