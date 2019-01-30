var score = 0;
var value = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

var playerOne = {
  score: 0,
  endScore: 0,
}

var playerComputer = {
  score: 0,
  endScore: 0,
}

function healthbar(){
  if (playerComputer.endScore - playerOne.endScore <= -30){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").show()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").show()

    //Computer : I'ts not fair wahh!!
  } else if(playerComputer.endScore - playerOne.endScore <= -25){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").show()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").show()
    $("#neg30Rab").hide()

    //Computer: Your uh, pretty good.
  } else if(playerComputer.endScore - playerOne.endScore <= -20){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").show()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").show()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()

    //Computer: Youre not that good!!
  } else if(playerComputer.endScore - playerOne.endScore <= -15){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").show()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").show()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()

    //Computer: Hmmpf!
  } else if(playerComputer.endScore - playerOne.endScore <= 15){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").show()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").show()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()

  }else if(playerComputer.endScore - playerOne.endScore <= 20){
    $("#pos30Pig").hide()
    $("#pos25Pig").hide()
    $("#pos20Pig").show()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").hide()
    $("#pos20Rab").show()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()
    //Computer: Hehehe,
  } else if(playerComputer.endScore - playerOne.endScore <= 25){
    $("#pos30Pig").hide()
    $("#pos25Pig").show()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").hide()
    $("#pos25Rab").show()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()
    //Computer: Remember not to be a sore loser when I beat you.
  } else if(playerComputer.endScore - playerOne.endScore <= 30) {
    $("#pos30Pig").show()
    $("#pos25Pig").hide()
    $("#pos20Pig").hide()
    $("#pos15pig").hide()
    $("#neg15Pig").hide()
    $("#neg20Pig").hide()
    $("#neg25Pig").hide()
    $("#neg30Pig").hide()

    $("#pos30Rab").show()
    $("#pos25Rab").hide()
    $("#pos20Rab").hide()
    $("#pos15Rab").hide()
    $("#neg15Rab").hide()
    $("#neg20Rab").hide()
    $("#neg25Rab").hide()
    $("#neg30Rab").hide()
    //Computer: GIT GUD!!
  }
}

function computerTurn(){
  while(value === 2){
    var comDiceRoll = getRandomInt(1, 6);
    var computerChoice = getRandomInt(1, 100);

    if(comDiceRoll === 1){
      alert("SNAKE EYES!");
      alert("Computer ends their turn!")
      playerComputer.score = 0
      value -=  1
    } else if(comDiceRoll <= 6){
      playerComputer.score += comDiceRoll
        if(computerChoice >= 50){
          playerComputer.endScore += playerComputer.score
          document.getElementById("comScore").innerHTML = playerComputer.endScore;
            if (playerComputer.endScore >= 100 || playerComputer.endScore === 100) {
              alert("COMPUTER WINS!");
            } else {
              alert("Computer ends their turn!");
            }
          value -= 1
      } else{

      }
    }
  }
}

$(document).ready(function(){
  $("button#pl1rollDice").click(function(event){
    var randomRollDice = getRandomInt(1,6)
    if (randomRollDice <= 1){
      playerOne.score = 0;
      alert("Snake eyes!");
      alert("Player One ends their turn!");
      value += 1
      computerTurn()
    } else if (randomRollDice > 1 && randomRollDice <= 6) {
      playerOne.score += randomRollDice
    }
  });
  $("button#pl1Hold").click(function(event){
      playerOne.endScore += playerOne.score
      document.getElementById("pl1Score").innerHTML = playerOne.endScore;
      if (playerOne.endScore >= 100 || playerOne.endScore === 100) {
          alert("PLAYER ONE WINS!");
      } else {
        alert("Computer's turn!");
        value += 1
        computerTurn()
      }
    });
});
