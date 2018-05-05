window.onload = function() {

    var alphabet
    alphabet = ['a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p','q','r','s',
    't','u','v','w','x','y','z'];

    var breeds = ["labrador", "weimaraner", "beagle", "boxer", "rottweiler", "chihuahua", "dachshund"]
    var wins = 0;
    var currentWord;
    var guessesRemaining = 0;
    var lettersGuessed = [];
    var guessingWord = [];
    var actualWord = [];
    var gameStared = false;
    var hasFinished = false;
    var wordIndex;
    
    const maxTries = 7

    function resetGame() {
        guessesRemaining = maxTries;
        gameStarted = false;
        
        breeds = Math.floor(Math.random() * (breeds.length));
    
        lettersGuessed = [];
        actualWord = [];
    
        document.getElementById("title-image").src = "";
    
        for (var i = 0; i < breeds[ordIndex].length; i++) {
            actualWord.push("_");
        }
        // Hide game over and win images/text
        document.getElementById("winImageLab").style.cssText= "display: none";
        document.getElementById("winImageWiem").style.cssText = "display: none";
        document.getElementById("winImageBeag").style.cssText = "display: none";
        document.getElementById("winImageBox").style.cssText= "display: none";
        document.getElementById("winImageRott").style.cssText = "display: none";
        document.getElementById("winImageChih").style.cssText= "display: none";
        document.getElementById("winImageDach").style.cssText = "display: none";
        

        // Show display
        updateDisplay();
};
        function updateDisplay() {

            document.getElementById("wins").innerText = wins;
            document.getElementById("actualWord").innerText = "";
            for (var i = 0; i < actualWord.length; i++) {
                document.getElementById("currentWord").innerText += actualWord[i];
            }
            document.getElementById("guessesRemaining").innerText = guessesRemaining;
            document.getElementById("lettersGuessed").innerText = lettersGuessed;
            if(guessesRemaining <= 0) {
                document.getElementById("gameover-image").style.cssText = "display: block";
                document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
                hasFinished = true;
    }
};
// Updates the image depending on how many guesses
        function updateHangmanImage() {
            document.getElementById("title-image").src = "assets/images/HangmanTitle.png" + (maxTries - guessesRemaining) + ".png";
};

            document.onkeydown = function(event) {
                // If we finished a game, dump one keystroke and reset.
                if(hasFinished) {
                    resetGame();
                    hasFinished = false;
                } else {
                    // Check to make sure a-z was pressed.
                    if(event.keyCode >= 65 && event.keyCode <= 90) {
                        makeGuess(event.key.toLowerCase());
                    }
                }
            };
        function makeGuess(letter) {
            if (guessesRemaining > 0) {
                if (!gameStarted) {
                    gameStarted = true;
                }
        
                // Make sure we didn't use this letter yet
                if (lettersGuessed.indexOf(letter) === -1) {
                    lettersGuessed.push(letter);
                    evaluateGuess(letter);
                }
            }
            
            updateDisplay();
            checkWin();
        };
        
        function evaluateGuess(letter) {
            // Array to store positions of letters in string
            var positions = [];
        
            // Loop through word finding all instances of guessed letter, store the indicies in an array.
            for (var i = 0; i < breeds[currentWordIndex].length; i++) {
                if(breeds[wordIndex][i] === letter) {
                    positions.push(i);
                }
            }
        
            // if there are no indicies, remove a guess and update the hangman image
            if (positions.length <= 0) {
                guessesRemaining--;
                updateHangmanImage();
            } else {
                // Loop through all the indicies and replace the '_' with a letter.
                for(var i = 0; i < positions.length; i++) {
                    guessingWord[positions[i]] = letter;
                }
            }
            function checkWin() {
                if(guessingWord.indexOf("_") === -1) {
                    document.getElementById("youwin-image").style.cssText = "display: block";
                    document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
                    wins++;
                    hasFinished = true;
                }
            };
        };
        
}