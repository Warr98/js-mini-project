var wins = 0;
var ties = 0;
var losses = 0;

var options = ["r","p","s"];

var userName = window.prompt("Enter your name here: ");



if (window.confirm("Do you want to play?")){
    var startGame = function() {
        
        var randomNumber = Math.floor(Math.random() * options.length);
            
        var playerChoice = window.prompt("Please enter r, p or s:");

        playerChoice = playerChoice.toLowerCase();

        var computerChoice = options[randomNumber];

        window.alert("The computer chose " + computerChoice);

        if (playerChoice === computerChoice){
            window.alert("It's a tie!");
            ties++;
        }else if ((playerChoice === "r" && computerChoice === "s") || (playerChoice === "p" && computerChoice === "r") || (playerChoice === "c" && computerChoice === "p")){
            window.alert("You win!");
            wins++;
        }else{
            window.alert("You lose!");
            losses++;
        }
        window.alert("Score Board for " + userName + "\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses);
    
        if (window.confirm("Do you wanna play again?")){
            startGame();
        }else{
            return;
        }
    }
    startGame();
}else{
    var userQuit = function(){
        document.getElementById("p1").innerHTML = "Sad to see you go, " + userName + "!";
    }
    userQuit();
}


