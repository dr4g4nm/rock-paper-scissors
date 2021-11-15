var choice = {
			Rock     : {value: 1, name: "Rock", code: "R"}, 
			Paper    : {value: 2, name: "Paper", code: "P"}, 
			Scissors : {value: 3, name: "Scissors", code: "S"}
		};

	function Start(play) {
		var humanChoice;
		var compChoice;
	
		if (play==='R') {
				humanChoice = choice.Rock;
		} else if (play==='P') {
				humanChoice = choice.Paper;
		} else if (play==='S') {
				humanChoice = choice.Scissors;
		}
	
		var computer = (Math.floor( Math.random() * 3 + 0.5 ));
			if ( computer === 1 ) {
					compChoice = choice.Rock }
			else { if ( computer === 2 ) {
					compChoice = choice.Paper }
			else { 
					compChoice = choice.Scissors }
			}
			document.getElementById('result').innerHTML="<p>You chose " + humanChoice.name + " and computer chose " + compChoice.name + "</p>";
				
		var win = humanChoice.value - compChoice.value;
			if ( win === 0 ) { 
				document.getElementById('result').innerHTML += "<p><b>It's a draw!</b></p>" } 
			else {
				if ( win === -2 || win === 1 ) { 
					document.getElementById('result').innerHTML += "<p><b>You won! Congratulations!</b></p>";}
			else {
				if ( win === -1 || win === 2 ) { 
						document.getElementById('result').innerHTML += "<p><b>Computer won!</b></p>";}
			else {}
				}
			}
		}