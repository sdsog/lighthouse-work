var rolledNumber = process.argv.slice(2);
console.log("rolled number: " + rolledNumber);


 function diceRoller(rolledNumber) {
 	
 	var output = '';
 	
 	for (var i = 0; i < rolledNumber; i++) {
 		//creates random number 
 		var randomNumber = Math.floor(Math.random() * 6) + 1;
 		//adds number to randonNumber
 		output += randomNumber;
 		//adds commas to returned value 
 		if (i < rolledNumber - 1) {
 			output += ', ';
 		}
 	}

 	console.log(output);
 }
diceRoller(rolledNumber);



/*Write a program that takes a single number from the command line
rolls that many six-sided dice. 

node dice-roller.js 3
Rolled 3 dice: 2, 6, 5


To generate a random number, you'll have to use the built-in
Math.random.

Reminder: In an earlier exercise, we had you create your
own joinList function to achieve a similar goal.
However, for this exercise you are free to use Array.prototype.join.
Always feel free to use any existing helper methods that have not
been specifically prohibited.

When you've finished, don't forgot to save your work as a gist and to submit it.


*/

