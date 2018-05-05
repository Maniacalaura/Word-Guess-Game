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

        document.getElementById("winImageLab").style.cssText= "display: none";
        document.getElementById("winImageWiem").style.cssText = "display: none";
        document.getElementById("winImageBeag").style.cssText = "display: none";
        document.getElementById("winImageBox").style.cssText= "display: none";
        document.getElementById("winImageRott").style.cssText = "display: none";
        document.getElementById("winImageChih").style.cssText= "display: none";
        document.getElementById("winImageDach").style.cssText = "display: none";
        

        
        updateDisplay();
        }
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
        }
        function updateHangmanImage() {
            document.getElementById("title-image").src = "assets/images/HangmanTitle.png" + (maxTries - guessesRemaining) + ".png";
            }

            document.onkeydown = function(event) {
                if(hasFinished) {
                    resetGame();
                    hasFinished = false;
                } else {
                
                    if(event.keyCode >= 65 && event.keyCode <= 90) {
                        makeGuess(event.key.toLowerCase());
                    }
                }   
            }
        function makeGuess(letter) {
            if (guessesRemaining > 0) {
                if (!gameStarted) {
                    gameStarted = true;
                }
        
                
                if (lettersGuessed.indexOf(letter) === -1) {
                    lettersGuessed.push(letter);
                    evaluateGuess(letter);
                }
            }
        }
    }
