var players = [];

function createPlayer(audioSrc) {
  var sound = new Howl({
    src: [audioSrc],
  });

  var player = document.createElement("div");
  player.classList.add("player");

  var transportButton = document.createElement("div");
  transportButton.classList.add("transport-button");
  transportButton.innerHTML = "►";
  transportButton.addEventListener("click", function() {
    if (!sound.playing()) {
      sound.play();
      transportButton.innerHTML = "❚❚";
    } else {
      sound.stop();
      transportButton.innerHTML = "►";
    }
  });

  player.appendChild(transportButton);
  document.body.appendChild(player);

  players.push({ sound: sound, player: player });
}