window.onload = function() {

    var breeds = ['labrador', 'weimaraner', 'beagle', 'boxer', 'rottweiler', 'chihuahua', 'dachshund']
    var wins = 0;
    var losses = 0;
    var correctLetter = [];
    var wrongLetter = [];
    var lettersGuessed = [];
    var guessesLeft = 10;
    var wordBlanks = [];
    var randomBreed = breeds[Math.floor(Math.random() * (breeds.length))];
    console.log(randomBreed);
    
    document.onkeyup= function() {start()};
//functions
    function startGame() {
 
//picks a random dog breed     
    document.getElementById('wordBlanks').innerHTML = wordBlanks.join("_");

        wrongLetter = [];
        guessesLeft = 10;

    document.getElementById('guessesLeft').innerHTML= guessesLeft;
    console.log(guessesLeft + "strings");
   }

    document.onkeyup = function(event)
    {
        lettersGuessed = event.key

        if(randomBreed.indexOf(lettersGuessed) > -1)
        {
            for(var i = 0; i < randomBreed.length; i++)
            {
                if(randomBreed[i] === lettersGuessed)
                {
                    wordBlanks[i] = lettersGuessed;
                    console.log(wordBlanks);
                    document.getElementById('wordBlanks').innerHTML = lettersGuessed
                    
                }    
            }
        }
        else
        {
            wrongLetter.push(lettersGuessed);
            guessesLeft --;
            document.getElementById('lettersGuessed').innerHTML = wrongLetter
            console.log(wrongLetter);
        }
    
}
}