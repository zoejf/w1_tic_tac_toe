// wait for the DOM to finish loading
// window.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
  // all code goes here
event.preventDefault();
console.log("sanity check: JS works");
// var box1 = document.querySelector("#box1");

var allBoxes = $(".box");
var count = 0;
console.log("count = ", count);
console.log("allBoxes[1] = ", allBoxes[1]);
var box1 = $("#box1");
var box2 = $("#box2");
var box3 = $("#box3");
var box4 = $("#box4");
var box5 = $("#box5");
var box6 = $("#box6");
var box7 = $("#box7");
var box8 = $("#box8");
var box9 = $("#box9");

// $(".box").on("click", function () {
// 	console.log("box clicked", this);
// });

// var rows = [[box1.innerText, box2.innerText, box3.innerText], [box4.innerText, box5.innerText, box6.innerText], [box7.innerText, box8.innerText, box9.innerText]];
// var columns = [[box1.innerText, box4.innerText, box7.innerText], [box2.innerText, box5.innerText, box8.innerText], [box3.innerText, box6.innerText, box9.innerText]];
// var diagonals = [[box1.innerText, box5.innerText, box9.innerText], [box7.innerText, box5.innerText, box3.innerText]];
var winner;
function checkWinner(player) {
	//check for winner by row
	if ((box1.innerText === player && box2.innerText === player && box3.innerText === player) || (box4.innerText === player && box5.innerText === player && box6.innerText === player) || (box7.innerText === player && box8.innerText === player && box9.innerText === player)) {
		console.log("Player " + player + "  wins");
		winner = player;
		return winner;
	//check for winner by column
	} else if ((box1.innerText === player && box4.innerText === player && box7.innerText === player) || (box2.innerText === player && box5.innerText === player && box8.innerText === player) || (box3.innerText === player && box6.innerText === player && box9.innerText === player)) {
		console.log("Player " + player + " wins");
		winner = player;
		return winner;
	//check for winner by diagonal
	} else if ((box1.innerText === player && box5.innerText === player && box9.innerText === player) || (box7.innerText === player && box5.innerText === player && box3.innerText === player)) {
		console.log("Player " + player + " wins");
		winner = player;
		return winner;
	}
}

//listen for a click on any box in the board grid
$(".box").click(function() {
	while (count < 9) {
		//start the game with welcome and intructions
		if (count === 0) {
				alert("Welcome to Tic-Tac-Toe. Player O, please click a box to chose the first move.");
				count ++;
				return count;		
		} else {
			if (this.innerText !== "") {
				alert("This box has already been chosen!");	
				return count;
			//When count is an even number: X's turn
			} else if (count % 2 === 0 && this.innerText === ""){	
				this.innerText = "X";
				$(this).addClass("x");
				
				//run functions to check for a winner
				checkWinner("X");
				checkWinner("O");
				
				//announce the winner, if there is one
				if (winner === "X"){
					alert("Player X is the winner! Click the Reset button to play again.");
				} else if (winner === "O") {
					alert("Player O is the winner! Click the Reset button to play again.");
				//otherwise, continue the game
				} else {
					count++;
					console.log("count is now: ", count);
					alert("It's now Player O's turn.");
					return count;	
				}

			//When count is an odd number: O's turn
			} else if (count % 2 !== 0 && this.innerText === ""){
				console.log("inside O function this = ", this);
				this.innerText = "O";
				console.log("line 88", this);
				$(this).addClass("o");
				checkWinner("X");
				checkWinner("O");
				
				//announce a winner, if there is one
				if (winner === "X"){
					alert("Player X is the winner! Click the Reset button to play again.");
				} else if (winner === "O") {
					alert("Player O is the winner! Click the Reset button to play again.");
				//if there is no winner yet, continue the game
				} else {
					count++;
					console.log("count is now: ", count);
					alert("It's now Player X's turn.");	
					return count;
				}
			} 
		}	
	} // end of while count < 9
	alert("Draw! There is no winner. Click the Reset button to play again.");
});

//when you click the Reset button, the whole board clears
var button = $(".btn");
button.click(function () {
// button.addEventListener("click", function(event) {
	 for (var i=0; i < allBoxes.length; i++) { 
		allBoxes[i].removeClass("x");
		allBoxes[i].removeClass("o")
		allBoxes[i].innerText = "";
		count = 0;
		winner = "";
		}
	});

 

});
