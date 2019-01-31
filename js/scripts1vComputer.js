var value = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

function scoreKeeper(score, endScore){
  this.score = score,
  this.endScore = endScore
}

function gameAlert(computer, player){
  this.computer = computer,
  this.player = player
}

var playerOne = new scoreKeeper(0, 0);
var playerComputer = new scoreKeeper(0, 0);
var currentGame = new gameAlert(" ", " ");

function competitionPig(){
  var competitiveScore = playerOne.endScore - playerComputer.endScore;
  if (playerComputer.endScore >= 100){
    document.getElementById("competitionTxt").innerHTML = "Loser!";
    document.getElementById("competitionPig").innerHTML = "<img src='img/loser.gif'>";
    document.getElementById("newGame").innerHTML = "Play again?";
  }else if (competitiveScore <= 0){
    document.getElementById("competitionTxt").innerHTML = "You aren't very good at this, are you?";
    document.getElementById("competitionPig").innerHTML = "<img src='img/1.gif'>";
  } else if (competitiveScore <= 10){
    document.getElementById("competitionTxt").innerHTML = "You aren't that far ahead!";
    document.getElementById("competitionPig").innerHTML = "<img src='img/2.gif'>";
  } else if (competitiveScore <= 20){
    document.getElementById("competitionTxt").innerHTML = "Hey, slow down!";
    document.getElementById("competitionPig").innerHTML = "<img src='img/3.gif'>";
  } else if (competitiveScore <= 30){
    document.getElementById("competitionTxt").innerHTML = "That's not good!";
    document.getElementById("competitionPig").innerHTML = "<img src='img/4.gif'>";
  } else {
    document.getElementById("competitionTxt").innerHTML = "!!!!!!!!!!";
    document.getElementById("competitionPig").innerHTML = "<img src='img/5.gif'>";
  }
}

function computerTurn(){
  while(value === 2){
    var comDiceRoll = getRandomInt(1, 6);
    var computerChoice = getRandomInt(1, 100);
    playerComputer.score = 0;
    if(comDiceRoll === 1){
      currentGame.computer = "SNAKE EYES! +0!";
      playerComputer.score = 0;
      value -=  1;
    } else if(comDiceRoll <= 6){
      playerComputer.score += comDiceRoll+2;
        if(computerChoice >= 25){
          playerComputer.endScore += playerComputer.score
          document.getElementById("comScore").innerHTML = playerComputer.endScore;
          if (playerComputer.endScore >= 100 || playerComputer.endScore === 100) {
            currentGame.computer = "COMPUTER WINS!";
            currentGame.player = " ";
            $("p#buttons").empty();
          } else {
            currentGame.computer = "Computer scored: " + playerComputer.score;
          }
        value -= 1;
      }
    }
    competitionPig();
    document.getElementById("computerAlert").innerHTML = currentGame.computer;
  }
}

$(document).ready(function(){
  $("button#pl1rollDice").click(function(event){
    event.preventDefault();
    var randomRollDice = getRandomInt(1,6)
    if (randomRollDice <= 1){
      playerOne.score = 0;
      currentGame.player = "SNAKE EYES! +0!";
      value += 1
      computerTurn()
    } else if (randomRollDice > 1 && randomRollDice <= 6) {
      playerOne.score += randomRollDice;
      currentGame.player = "So far you've scored: " + playerOne.score;
    }
    document.getElementById("playerAlert").innerHTML = currentGame.player;
  });
  $("button#pl1Hold").click(function(event){
    event.preventDefault();
      playerOne.endScore += playerOne.score
      document.getElementById("pl1Score").innerHTML = playerOne.endScore;
      if (playerOne.endScore >= 100 || playerOne.endScore === 100) {
        currentGame.player = "PLAYER ONE WINS!";
        currentGame.computer = " ";
        document.getElementById("competitionTxt").innerHTML = " ";
        document.getElementById("competitionPig").innerHTML = "<img src='img/winner.gif'>";
        $("p#buttons").empty();
        document.getElementById("newGame").innerHTML = "Play again?";
      } else {
        value += 1;
        currentGame.player = "Keep going!";
        computerTurn();
      }
      playerOne.score = 0;
      document.getElementById("playerAlert").innerHTML = currentGame.player;
    });
    $("button#newGame").click(function(event){
      event.preventDefault();
      window.location.reload();
    });
});
