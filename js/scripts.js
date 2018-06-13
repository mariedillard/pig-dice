function randomRollDice(min, max){
  min = Math.ceil(1);
  max =  Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min)
}
$(document).ready(function(){
  randomRollDice();
});
