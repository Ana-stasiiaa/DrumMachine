document.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.getElementById(e.key.toUpperCase());
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    displayText("");
  }
}

function displayText(text) {
  const display = document.getElementById("display");
  display.innerText = text;
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    const audio = this.querySelector(".clip");
    audio.currentTime = 0;
    audio.play();
    displayText("");
  });
});
