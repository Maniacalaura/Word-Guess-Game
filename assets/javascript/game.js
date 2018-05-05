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
    
    const maxTries = 10

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

            document.getElementById("wins").innerHTML = wins;
            document.getElementById("actualWord").innerHTML = "";

            for (var i = 0; i < actualWord.length; i++) {
                document.getElementById("currentWord").innerHTML += actualWord[i];
            }
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

            if(guessesRemaining === 0) {
                document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
                hasFinished = true;
            }
        }
    
    }
