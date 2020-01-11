var randomNumbers = [];
var guesses = [];
var gameLevel = 0;
var check = false;
var gameOn = false;

$(document).keypress(function() {
  gameLevel = 1;
  gameOn = true;
  $("body").removeClass("game-over");
  $("h1").text("LEVEL " + gameLevel);
  randomNumbers.push(Math.floor(Math.random() * 4) + 1);
  var button = ".btn" + randomNumbers[0];
  $(button).fadeOut(300).fadeIn(300);
  var audio = new Audio("sounds/btn" + randomNumbers[i] + ".mp3");
  audio.play();
});

$(".btn").click(function(event) {
  if (gameOn) {
    guesses.push(event.target.id);
    $(".btn" + event.target.id).addClass("pressed");
    setTimeout(function() {
      document.querySelector(".btn" + event.target.id).classList.remove("pressed");
    }, 100);

    if (guesses.length === gameLevel) {
      for (var i = 0; i < gameLevel; i++) {
        if (guesses[i] == randomNumbers[i]) {
          continue;
        } else {
          var audio = new Audio("sounds/wrong.mp3");
          audio.play();
          guesses = [];
          randomNumbers = [];
          gameLevel = 0;
          $("body").addClass("game-over");
          $("h1").text("You lost! To play again press any key.");
          gameOn = false;
          check = false;
          break;
        }
      }
      guesses = [];
      randomNumbers = [];
      gameLevel++;
      check = true;
    }

    if (check) {
      if (gameOn) {
        $("h1").text("LEVEL " + gameLevel);
      }

      for (var j = 0; j < gameLevel; j++) {
        randomNumbers.push(Math.floor(Math.random() * 4) + 1);
        var button1 = ".btn" + randomNumbers[j];
        $(button1).delay(500 * j).fadeOut(300).fadeIn(300);
      }
      check = false;
    }
  }
});
