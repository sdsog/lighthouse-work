var countdownGenerator = function (x) {

	var id = x + 1;
	
	//console.log("initial countdown: " + id);

	// if (id === 3) {
	// 	console.log("T minus 3...");
	// } 



  return function() {

  	id -= 1;

  	if (id > 0) {
		console.log("T minus " + id + "...");
	} else if (id === 0) {
		console.log("Blast Off!");
	} else {
		console.log("Rockets already gone, bub!");
	}

  	
 
  };


};

var countdown = countdownGenerator(6);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();