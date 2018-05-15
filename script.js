/*The random number guessing game creates a random number, then takes input from a user 
for their guess. The program then compares the guess to the original random number and with the aid of conditional statements tells the user if they were correct, higher or lower and even gives the a second guess based on the result if required
*/
//create  boolean variable
var correctGuess = false;
//creates random number
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// asks user for guess and stores it in guess
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
//compares first guess
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
//if not checking if lower and give second guess
}else if(parseInt(guess) < randomNumber){
  var guessMore = prompt("Try again, the number I am thinking of is more than " + guess);
  if(randomNumber === parseInt(guess)){
    correctGuess = true;
  }
// if not checking if higher and give second guess 
}else if(parseInt(guess) > randomNumber){
  var guessLess = prompt("Try again, the number I was thinking is less than " + guess);
  if(randomNumber === parseInt(guess)){
    correctGuess = true;
  } 
}
// If you guess is correct congradulate or if no tell them number
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}