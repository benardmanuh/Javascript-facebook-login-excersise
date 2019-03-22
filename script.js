// I am trying to something like a facebook signing form.


// The first thing i am trying to make is a database array. In this database array I going to write down the username and password of a user.
// later in this file I am going to peform an action through a function based on whether i typed in the correct username and password.

//  on the first line you create the first line of a array, i have given this array a variable called 'database'.
// the reason why i have given this array a variable because i am later going to use it in my function. 
// the array is used a wrapper for the object. 

var database = [

{
	username: "Benard",
	password: "Hello123"

},

{
	username: "Sally",
	password: "123"

},

{
	username: "Ingrid",
	password: "777"

},



];

var newsFeed = [

{
	username: "Jarrad",
	post: "Just finished work"
},

{
	username: "Charles",
	post: "Just turned 23"
}




];
// now we create two prompt variables in which we type our username and password. we later use these variables when we excecute our code at the end.
var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(usernamePrompt, passwordPrompt) {
	for (var i=0; i < database.length; i++) {
	if (usernamePrompt === database[i].username && 
		passwordPrompt === database[i].password) {
			return true;
		}

	}
		return false;
}

function signIn(usernamePrompt, passwordPrompt) {
	if (isUserValid(usernamePrompt, passwordPrompt)) {
		console.log(newsFeed);
		} else {
			alert("Sorry, wrong username and password!");
		}
}
signIn(usernamePrompt, passwordPrompt);
/* I have written a function which checks if the userNamePrompt and passwordPrompt matches the username and 
password written inside the 'database' array and if it does it would display the 'newsfeed' array in the console
 and if it doesnt match it would show the alert function i have written down. */
	
	/*	function signIn(userNamePrompt, passwordPrompt) {
			if (userNamePrompt === database[0].username && 
				passwordPrompt === database[0].password) {
				console.log(newsFeed);
			} else {
				alert("Sorry, wrong username and password!");
			}
}
*/