const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  if (min === null || max === null) {
    throw new Error("Min and max must not be null");
  }

  if (min > max) {
    throw new Error("Min must be less than or equal to max");
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  rl.question("Enter min: ", minInput => {
    const min = Number(minInput);
    if (isNaN(min)) {
      console.log("Min must be a number.");
      return playGame();
    }

    rl.question("Enter max: ", maxInput => {
      const max = Number(maxInput);
      if (isNaN(max)) {
        console.log("Max must be a number.");
        return playGame();
      }

      if (min > max) {
        console.log("Min must be less than or equal to max.");
        return playGame();
      }

      const numberToGuess = getRandomInt(min, max);
      console.log("The number is : ", numberToGuess);
      let attempts = 0;

      function guessNumber() {
        rl.question(`Guess a number between ${min} and ${max}: `, guessInput => {
          const guessedNumber = Number(guessInput);
          attempts++;

          if (isNaN(guessedNumber)) {
            console.log("Your guess must be a number.");
            return guessNumber();
          }

          if (guessedNumber === numberToGuess) {
            console.log(`Congratulations! You guessed the number: ${numberToGuess} in ${attempts} attempts.`);
            playAgain();
          } else {
            console.log(`Sorry, that's not correct. Try again.`);
            guessNumber();
          }
        });
      }

      guessNumber();
    });
  });
}

function playAgain() {
  rl.question("Do you want to play again? (yes/no): ", answer => {
    if (answer.toLowerCase() === "yes") {
      playGame();
    } else {
      rl.close();
    }
  });
}

playGame();