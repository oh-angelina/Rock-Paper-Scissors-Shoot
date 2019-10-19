/*var billAmount = 50;

function gratuity() {
	return billAmount*.2; 
}

function totalWithGrat(billAmount) {
	return gratuity() + billAmount; 
}

console.log("Your total amount with 20% tip is " + totalWithGrat(billAmount)); */


var weapons = ["rock", "paper", "scissors"];

function player1wins() {
	wins1++
}

function player2wins() {
	wins2++
}

var wins1 = 0;
var wins2 = 0; 

function hand() {
	return weapons[parseInt(Math.random()*weapons.length) %3];
}

function test() {

	if (plays1[plays]=="rock" && plays2[plays]=="rock") {
		return("Both players played rock, there is a tie.");

	 } else if (plays1[plays]=="rock" && plays2[plays]=="paper") {
	 	++wins2;
	 	return("Player two is the winner of this round.");

	 } else if (plays1[plays]=="rock" && plays2[plays]=="scissors") {
	 	++wins1;
	 	return("Player one is the winner of this round.");
	

	} else if (plays1[plays]=="paper" && plays2[plays]=="paper") {
		return("Both players played paper, there is a tie.");

	} else if (plays1[plays]==="paper" && plays2[plays]=="scissors") {
		++wins2;
	 	return("Player two is the winner of this round.");

	} else if (plays1[plays]==="paper" && plays2[plays]=="rock") {
		++wins1;
		return("Player one is the winner of this round.");


	} else if (plays1[plays]=="scissors" && plays2[plays]=="scissors") {
		return("Both players played scissors, there is a tie");

	 }  else if (plays1[plays]==="scissors" && plays2[plays]==="paper") {
	 	++wins1;
	 	return("Player one is the winner of this round");

	 } else if (plays1[plays]==="scissors" && plays2[plays]=="rock") {
	 	++wins2;
	 	return("Player two is the winner of this round");

	} else {
		return("there was an error");
	}

}

	
plays1=[];
plays2=[];


for(var plays=0; plays<=50; plays++) {

		plays1.push(hand()); 

		plays2.push(hand()); 

		console.log("Player1 played " + plays1[plays] + " and Player 2 played " + plays2[plays]); 

		console.log(test());

		console.log("Player1 has a score of: " + wins1 + " and Player2 has a score of: " + wins2 + ".");

		if (wins1 == 3 || wins2 ==3) { 
		break; 
  		}

}


if(wins1>wins2) {
	console.log("The winner is player1" ); 
} else if(wins2>wins1) {
	console.log("The winner is player2" ); 
} else {
console.log("There was an error" ); 
} 
