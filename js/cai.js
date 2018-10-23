var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);
var guessField=document.querySelector('#guessField');
console.log(guessField);
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
    // document.write('我是结论');
guesses.innerHTML=guessField.value+"";
guesses.style.backgroundColor="blue";
}
// checkGuess();
