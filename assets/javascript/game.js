 // Created an array named myLetters.
    var myLetters = ["m", "e", "v", "l", "a", "r", "c", "j", "y"];

    // We start the game with a score of 0.
    var wins = 0;
    var losses = 0;
    var numberofGuesses = 9;
    var userGuess = [];


    //  FUNCTIONS  // 

    // Sets userGuess variable equal to a random choice from the myLetter array.
    //var userGuess = myLetters[Math.floor(Math.random() * myLetters.length)];


    var restart = function () {
      numberofGuesses = 9;
      userGuess = [];
      var userGuess = myLetters[Math.floor(Math.random() * myLetters.length)];
    }


  // When the user presses a key, it will run the following function..
  document.onkeyup = function (event) {

    // subtract guesses if User continues to guess the wrong letter until it hits 0, restart back to 9 guesses. 
    numberofGuesses--;
    if(numberofGuesses === 0){
      losess++;
      alert("You lose!");
      //update losses counter
       document.querySelector("#lose").innerHTML = "Losses: " + losses;
      restart();
    }

    // Display number of remaining guesses 
    document.querySelector("#guessesLeft").textContent = numberofGuesses;

    // Capturing the letters pressed 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    // Displaying the characters on the web browser 
    document.querySelector("#letters").textContent += userGuess + " "; 

  }
    // 

    // print the correct answer and alert the user they have won 

    if (userGuess.toString() === myLetters.toString()) {

      wins++;
      alert("You win!");
      // update the counter in wins
   document.querySelector("#wins").innerHTML = "Wins: " + wins;
   //restart game
   restart();
  
    }
    // else if (numberofGuesses === 0) {
    //   Losses++;
    //   document.querySelector("#lose").innerHTML = "Loses: " + Losses;
    //   restart();
    // }
    // else  if (answers === false) {
    //     return false;
    // }
    //   else if (answers === true) {
    //     //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
    //     numberofGuesses--;
    //     userGuess.push(myLetters);
    //     updateGuessesLeft();
    //     updateGuessesSoFar();

    //   }
    // };


  // What's missing... getting the letters to show up on the browser and getting the interaction from user to computer :/ 
