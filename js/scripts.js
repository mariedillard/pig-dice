var playerOneScore = 0;
var playerTwoScore = 0;
var score = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

$(document).ready(function(){
  $("button#pl1rollDice").click(function(event){
    var randomRollDice = getRandomInt(1,6)
    if (randomRollDice <= 1){
      score = 0;
      alert("Snake eyes!");
      alert("Your turn, Player Two!");
    } else if (randomRollDice > 1 && randomRollDice <= 6) {
      score += randomRollDice
    }
  });
  $("button#pl1Hold").click(function(event){
      playerOneScore += score
      document.getElementById("pl1Score").innerHTML = playerOneScore;
      if (playerOneScore >= 100 || playerOneScore === 100) {
          alert("PLAYER ONE WINS!");
      } else {
        alert("Your turn, Player Two!");
      }
  });
  $("button#pl2rollDice").click(function(event){
    var randomRollDice = getRandomInt(1,6)
    if (randomRollDice === 1) {
      score = 0;
      alert("Snake eyes!");
      alert("Your turn, Player One!");
    } else if (randomRollDice > 1 && randomRollDice <= 6) {
      score += randomRollDice
    }
  });
  $("button#pl2Hold").click(function(event){
      playerTwoScore += score
      document.getElementById("pl2Score").innerHTML = playerTwoScore;
      if (playerTwoScore >= 100 || playerTwoScore === 100) {
        alert("PlAYER TWO WINS!")
      } else {
        alert("Your turn, Player One!");
      }
  });

});
