var password = process.argv.pop();

function obfuscator(password) {

var hiddenPw = "";

for (var i = 0; i < password.length; i++) {
	if (password[i] === "a") {
    	hiddenPw += "4";
    } else if (password[i] === "e") {
    	hiddenPw += "3";
    } else if (password[i] === "o") {
    	hiddenPw += "0";
    } else if (password[i] === "l")  {
    	hiddenPw += "1";
    } else {
    	hiddenPw += password[i];
    }
}

return hiddenPw;

}


 console.log(obfuscator(password));