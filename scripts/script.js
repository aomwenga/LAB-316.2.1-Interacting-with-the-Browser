// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

// declared the input
let guess = prompt(`Pick a number between 1-3`);
// changes for input
let tries = 3;

// looping inputs
for (let attempt = 1; attempt <= tries; attempt++) {
  if (Number(guess)) {
    // declared input from guess
    let input = guess;
    // if they chose intended winning number
    if (input == 2) {
      console.log(`You Win!`);
      // if the number was wrong
    } else {
      if (input !== 2) console.log(`OOPS`);
      prompt(`Try again`);
    }
    // if the number was the wrong type of input
  } else {
    console.log(`You Lose`);
  }
  if (attempt == tries) {
    console.log(`Out of attempts`);
  }
}
