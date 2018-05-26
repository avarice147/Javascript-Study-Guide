
// CONDITIONALS

// // Get age and convert it to a Number (prompt always returns a String)
// var age = Number(prompt("What is your age?"));
 
// // If age is negative
// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }
 
// // If age is 21  
// if(age === 21) {
//  console.log("Happy 21st Birthday!");
// }
 
// // If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }
 
// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }

// create a secret number
// var secretNumber = 4

// ask user for guess
// var stringGuess = prompt("guess a number!");
// var guess = Number(stringGuess);

//check if guess is right
// if(guess === secretNumber) {
//	alert("you got it right!");
// }

//check if guess is higher
// else if () {
//	alert("too high, guess again!");
//}


// else {
// alert("too low. guess again!")
// }


// WHILE LOOPS

//print all numbers between -10 and 19
// var count = -10;
// while(count < 20) {
// 	console.log(count);
// 	count++;
// }

//print all even # between 10 and 40
// var count = 10;
// while(count < 40) {
// 	if(count % 2 === 0) {
// 	console.log(count);
// }
// count+=2;
// }


//print all odd # between 300 and 333
// var count = 300;
// while(count < 333) {
// 	if(count % 2 !== 0) {
// 	console.log(count);
// }
// count+=1;
// }

//print all numbers divisible by 5 AND 3 between 5 and 50
// var count = 5;
// while(count <= 50) {
// 	if(count % 5 === 0 && count % 3 === 0) {
// 	console.log(count);
// }
// 	count+=1;
// }




// if version

// if(answer === "yes") {
// 	alert("yay, we made it!");
// } else {
// 	var answer = prompt("are we there yet?");
// }


// version 1

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// } 

// alert("yes we are there!");



// or version 2

// var answer = prompt("are we there yet?");

// while(answer.indexOf("yes") === -1) {
// 	var answer = prompt("are we there yet?");
// }

// alert("yes we are there!")


// FOR LOOPS

//print all # between -10 and 19
// for(var i = -10; i <= 19; i++) {
// 	console.log(i);
// }

//print all even # between 10 and 40
// for(var i = 10; i <= 41; i += 2) {
// 	if(i % 2 === 0) {
// 		console.log(i);
// 	}
// }

//print all odd # between  300 and 333
// for(var i = 300; i <= 333; i += 1) {
// 	if(i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

//print all numbers divisible by 5 AND 3 between 5 and 50
// for(var i = 5; i <= 50; i += 1) {
// 	if(i % 5 === 0 && i % 3 === 0) {
// 		console.log(i);
// 	}
// }


//FUNCTIONS


//ARGUMENTS
// function square(num) {
// 	console.log(num * num);
// }
// square(10); // 100
// square(3); // 9
// square(4); // 16

// MULTIPLE ARGUMENTS
// function area(length, width) {
// 	console.log(length * width);
// }
// area(9, 2); // 18


// function greet(person1, person2, person3) {
// 	console.log("hi " + person1);
// 	console.log("hi " + person2);
// 	console.log("hi " + person3);
// }
// greet("harry" , "ron", "hermione");


//isEven() FUNCTION true or false

// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// isEven(2); // true (only runs seperately per line)
// isEven(1); // false

// OR SHORTCUT

// function isEven(num) {
// 	return num % 2 === 0;
// }

// isEven(2); // true (only runs seperately per line)
// isEven(1); // false

//factorial() returns factorial # example is 4!

//factorial(4); 1 x 2 x 3 x 4 OR 4 x 3 x 2 x 1

// function factorial(num) {
// 	var result = 1;
// 	for(var i = 2; i <= num; i++) { 
// 		result = result * i; // or result *= i;
// 	}
	
// 	return result;
// }

// factorial(4); //output is 24


//KEBAB TO SNAKE  replace "-" w/ "_" in strings
// function kebabToSnake(str) {
// 	var newStr = str.replace(/-/g , "_");
// 	return newStr;
// }

// kebabToSnake("hello-sup-world");




