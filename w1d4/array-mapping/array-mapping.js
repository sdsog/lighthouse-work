var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(input) {
	var x = input.x;
	var y = input.y;
	var result = Math.sqrt(x * x + y * y);
	return result;

}
); 


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);