var inputStr = "abacabb";

function charPosition(inputStr) {
		
	var cleanStr = inputStr.replace(/\s+/g, '');
	var charCount = {};

	for (let i = 0; i < cleanStr.length; i++) {
		charCount[cleanStr[i]];
		
		if (!charCount[cleanStr[i]]) {
			charCount[cleanStr[i]] = [i];
		} else {
			charCount[cleanStr[i]].push(i);
		}
	}	
return charCount;
}

console.log(charPosition(inputStr));