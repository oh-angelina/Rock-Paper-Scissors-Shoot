
// All variables listed here
var name = "Player 1";
var playerScore = 0;
var compScore = 0;
var playerPlay = null;
var compPlay = null;
var scoreUpdate = "";
const player_score = document.getElementById("player-score");
const comp_score = document.getElementById("comp-score");
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
var compRock = document.getElementById("comp-rock");
var compPaper = document.getElementById("comp-paper");
var compScissors = document.getElementById("comp-scissors");
const update = document.getElementById("greeting");


// An array and functions that generate the computer's plays
var weapons = ["rock", "paper", "scissors"];

function hand() {
	return weapons[parseInt(Math.random()*weapons.length) %3.5];
}

function compHand() {
	compPlay = hand(); 
}

function glow() {
	if (compPlay=="rock") {
		compRock.classList.add("green");
	} else if (compPlay=="paper") {
		compPaper.classList.add("green");
	} else {
		compScissors.classList.add("green");
	} 

	setTimeout(function () { 
    $(compRock).removeClass("green");
	}, 500);
	setTimeout(function () { 
    $(compPaper).removeClass("green");
	}, 500);
	setTimeout(function () { 
    $(compScissors).removeClass("green");
	}, 500);
}

/*// Captures Player 1's name
function greetOnLoad () {
    var name = ""; 
    name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    greeting.innerHTML= "Welcome to the tournament " + name;
}

greetOnLoad();*/

// Player 1's play options as a trigger to begin the game
playerRock.addEventListener("click", function(){
	playerPlay = "rock"; 
	game(); 
})

playerPaper.addEventListener("click", function(){
	playerPlay = "paper"; 
	game(); 
})

playerScissors.addEventListener("click", function(){
	playerPlay = "scissors"; 
	game(); 
})

// The three possible game outcomes
function win() {
	playerScore++;
	player_score.innerHTML = playerScore; 
	scoreUpdate = "YOU WIN!";
	update.innerHTML = scoreUpdate;
}
function lose() {
	compScore++;
	comp_score.innerHTML = compScore; 
	scoreUpdate = "YOU LOSE!";
}
function tie() {
	scoreUpdate = "You tied. Play again.";
	update.innerHTML = scoreUpdate;
}

// Determines who wins the game
function game() {
	compHand(); 
	glow();
	switch (playerPlay + compPlay) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win();
			break;
		case "rockpaper":
		case "scissorsrock":
		case "paperscissors":
			lose();
			break;
		case "rockrock":
		case "scissorsscissors":
		case "paperpaper":
			tie();
			break;
	}
}