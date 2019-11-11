/*function greetOnLoad() {
	var player1 = prompt("Hello Player 1! What is your name?");
	var player2 =prompt("Hello Player2! What is your name?");
	var myelement = document.getElementById("greeting");
	greeting.innerHTML = "Welcome to the game" + player1 + " and " + player2 "!";
}
greetOnLoad(); */


// All variables listed here
var name = "Player 1"
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
const update = document.getElementById("greeting");


// An array and functions that generate the computer's plays
var weapons = ["rock", "paper", "scissors"];

function hand() {
	return weapons[parseInt(Math.random()*weapons.length) %3.5];
}

function compHand() {
	compPlay = hand(); 
	console.log(compPlay); 
}

// Captures Player 1's name
function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    greeting.innerHTML= "Welcome to the tournament " + name;
}

greetOnLoad();

// Player 1's play options as a trigger to begin the game
playerRock.addEventListener("click", function(){
	playerPlay = "rock"; 
	console.log("You clicked rock")
	game(); 
})

playerPaper.addEventListener("click", function(){
	playerPlay = "paper"; 
	console.log("You clicked paper")
	game(); 
})

playerScissors.addEventListener("click", function(){
	playerPlay = "scissors"; 
	console.log("You clicked scissors")
	game(); 
})

// The three possible game outcomes
function win() {
	playerScore++;
	player_score.innerHTML = playerScore; 
	scoreUpdate = "YOU WIN!";
	update.innerHTML = scoreUpdate;
	console.log("YOU WIN");
}
function lose() {
	compScore++;
	comp_score.innerHTML = compScore; 
	scoreUpdate = "YOU LOSE!";
	update.innerHTML = scoreUpdate;
}
function tie() {
	scoreUpdate = "You tied. Play again.";
	update.innerHTML = scoreUpdate;
}

// Determines who wins the game
function game() {
	compHand(); 
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