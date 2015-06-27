// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here
event.preventDefault();
// var box1 = document.querySelector("#box1");

var allBoxes = document.querySelectorAll(".box");
var button = document.querySelector(".btn");
var count = 0;

var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");

// var rows = [[box1.innerText, box2.innerText, box3.innerText], [box4.innerText, box5.innerText, box6.innerText], [box7.innerText, box8.innerText, box9.innerText]];
// var columns = [[box1.innerText, box4.innerText, box7.innerText], [box2.innerText, box5.innerText, box8.innerText], [box3.innerText, box6.innerText, box9.innerText]];
// var diagonals = [[box1.innerText, box5.innerText, box9.innerText], [box7.innerText, box5.innerText, box3.innerText]];
var winner;
function checkWinner(player) {
	
	//check for winner by row
	if ((box1.innerText === player && box2.innerText === player && box3.innerText === player) || (box4.innerText === player && box5.innerText === player && box6.innerText === player) || (box7.innerText === player && box8.innerText === player && box9.innerText === player)) {
		console.log("Player " + player + "  wins");
		return winner = player;

	//check for winner by column
	} else if ((box1.innerText === player && box4.innerText === player && box7.innerText === player) || (box2.innerText === player && box5.innerText === player && box8.innerText === player) || (box3.innerText === player && box6.innerText === player && box9.innerText === player)) {
		console.log("Player " + player + " wins");
		return winner = player;

	//check for winner by diagonal
	} else if ((box1.innerText === player && box5.innerText === player && box9.innerText === player) || (box7.innerText === player && box5.innerText === player && box3.innerText === player)) {
		console.log("Player " + player + " wins");
		return winner = player;
	}
}

for (i=0; i<allBoxes.length; i++){

	//listen for a click on any box in the board grid
	allBoxes[i].addEventListener("click", function() {

	//start the game with welcome and intructions
	if (count === 0) {
			alert("Welcome to Tic-Tac-Toe. Player O, please click a box to chose the first move.");
			count ++;

	} else {

		//for clicks on even-numbered turns, when count is an even number 
		if (count % 2 === 0 && this.innerText === ""){	
			this.innerText = "X";
			this.classList.add("x");
			
			//run functions to check for a winner
			checkWinner("X");
			checkWinner("O");
			
			//announce the winner, if there is one
			if (winner === "X"){
				alert("Player X is the winner! Click the Reset button to play again.");
			} else if (winner === "O") {
				alert("Player O is the winner! Click the Reset button to play again.");
			
			//announce a draw, if there is one
			} else if (count === 9 && winner === "") {
				alert("Draw! There is no winner. Click the Reset button to play again.");

			//otherwise, continue the game
			} else {
				count++;
				alert("It's now Player O's turn.")	
			};

		//for clicks on odd-numbered turns, when count is an odd number
		} else if (count % 2 !== 0 && this.innerText === ""){
			this.innerText = "O";
			this.classList.add("o");
			checkWinner("X");
			checkWinner("O");
			
			//announce a winner, if there is one
			if (winner === "X"){
				alert("Player X is the winner! Click the Reset button to play again.");
			} else if (winner === "O") {
				alert("Player O is the winner! Click the Reset button to play again.");
			
			//announce a draw, if there is one
			} else if (count === 9 && winner === "") {
				alert("Draw! There is no winner. Click the Reset button to play again.");

			//if there is no winner yet, continue the game
			} else {
				count++;
				alert("It's now Player X's turn.")	
			};

		} else {
			alert("This box has already been chosen!");
		};	
	};	
	});
};


button.addEventListener("click", function(event) {
	 for (i=0; i<allBoxes.length; i++) { 
		allBoxes[i].classList.remove("x");
		allBoxes[i].classList.remove("o")
		allBoxes[i].innerText = "";
		count = 0;
		winner = "";
		}
	});

 

});
