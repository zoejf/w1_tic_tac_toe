// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here
event.preventDefault();
// var box1 = document.querySelector("#box1");

var allBoxes = document.querySelectorAll(".box")

var button = document.querySelector(".btn")

var count = 0;

for (i=0; i<allBoxes.length; i++){

	allBoxes[i].addEventListener("click", function() {
		if (count % 2 === 0 && this.innerText === ""){	
			this.innerText = "X";
			this.classList.add("x");
			count++;
			alert("It's now Player O's turn.")
		} else if (count % 2 !== 0 && this.innerText === ""){
			this.innerText = "O";
			this.classList.add("o");
			count++;
			alert("It's now Player X's turn.")
		} else {
			alert("This box has already been chosen!");
		};	
	});
};


button.addEventListener("click", function(event) {
	 for (i=0; i<allBoxes.length; i++) { 
		allBoxes[i].classList.remove("x");
		allBoxes[i].classList.remove("o")
		allBoxes[i].innerText = "";
		count = 0;
		}
	});

 

});
