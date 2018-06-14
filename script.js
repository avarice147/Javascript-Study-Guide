
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



// JAVASCRIPT ARRAYS = group variables listed to keep code DRY

//write printReverse() function that takes array as an argument & prints out elemts in array in reverse order
//note: dont reverse the array itself.

//for NUMBERS 4-1

// function printReverse(arr) {
// 	for(var i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }
// printReverse([1,2,3,4]);
//output is //4 //3 //2 //1

//FOR LETTERS D-A


// function printReverse(arr) {
// 	for(var i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }

// printReverse(["a","b","c","d"]);
//output is //d //c //b //a


//write isUniform() function which takes an array as an argument and returns true if all elements in array are identical
//e.x. isUniform([1,1,1]);  //true


// function isUniform(arr) {
// 	//get first item
// 	var firstItem = arr[0];
// 	//loop going thru each item
// 	for(var i = 0; i <= arr.length - 1; i++) {
// 	// checking to see IF they are equal to firstItem
// 		if(firstItem !== arr[i]) {
// 			return false;
// 		} 
// 	}	return true;
// } 

// isUniform([1,2,1,1]); //false


//write sumArray() function that accepts array of numbers and returns the sum of all numbers in array
//e.x. sumArray([1,2,3]); //6

//FOR LOOP
// function sumArray(arr) {
// 	var sum = 0;
// 	for(var i = 0; i <= arr.length - 1; i++) {
// 	sum = sum + arr[i];
// 	}
// return sum;
// }

// sumArray([1,3,3]); output //7

//FOR EACH
// function sumArray(arr) {
// 	var sum = 0;
// 	arr.forEach(function(element) {
// 	sum += element;
// 	});
// return sum;
// }

// sumArray([1,3,3]); output //7


//write max() function that accepts an array of numbers and returns the maximum number in the array
//e.x. max([1,2,3]); output //3

// FOR LOOP
// function max(arr) {
// 	var max = arr[0]; //use 1st index as MAX
// 	for(var i = 0; i < arr.length; i++) { //run thru loop
// 		if (arr[i] > max) { //if any index is greater than 1st index
// 			max = arr[i]; // max-index becomes max 
// 		}
// 	}
// 	return max; //show max
// }

// max([1,2,3,4,5]);


//movieDatabase
//create and array of movie objects. Each movie should have a title, rating, and haswatched boolean properties. Iterate through the array and print out something looks like (run code below)

//FOR EACH method
// var movies = [
// 		{
// 			title: "Matrix",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "Inception",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "V for Vendetta",
// 			rating: "5 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "American Pie",
// 			rating: "1 Stars",
// 			hasWatched: false
// 		}
// ]

// movies.forEach(function(movie) { //loop
// 	if(movie.hasWatched){
// 	console.log("you have watched " + "\"" + movie.title + "\"" + " - " + movie.rating);	
// 	} else {
// 	console.log("you have not seen " + "\"" + movie.title + "\"" + " - " + movie.rating);
// 	}

// });

//OR ANOTHER way FOR EACH method

// var movies = [
// 		{
// 			title: "Matrix",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "Inception",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "V for Vendetta",
// 			rating: "5 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "American Pie",
// 			rating: "1 Stars",
// 			hasWatched: false
// 		}
// ]

// movies.forEach(function(movie) { //loop
// 	var result = "you have watched ";
// 	var result2 = "you have not watched ";
// 	if(movie.hasWatched){
// 	result = result + "\"" + movie.title + "\"" + " - " + movie.rating;
// 		console.log(result);	
// 	} else {
// 	result2 = result2 + "\"" + movie.title + "\"" + " - " + movie.rating;
// 		console.log(result2);
// 	}

// });


//ANOTHER WAY AND MORE EFFICIENT WAY FOR EACH method

// var movies = [
// 		{
// 			title: "Matrix",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "Inception",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "V for Vendetta",
// 			rating: "5 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "American Pie",
// 			rating: "1 Stars",
// 			hasWatched: false
// 		}
// ]

// movies.forEach(function(movie) { //loop
// 	var result = "you have "; // <--- copy and past form here to ...
// 		if(movie.hasWatched){
// 		result += "watched ";		
// 		} else {
// 		result += "not watched ";
// 		}
// 			result += "\"" + movie.title + "\"" + " - " + movie.rating; // <------ ... to here to make a new function
// 			console.log(result);

// });


// //after writing out this efficient way lets make a  make a fucntion to clean it up

// function buildString(movie) {
// 	var result = "you have "; 
// 		if(movie.hasWatched){
// 		result += "watched ";		
// 		} else {
// 		result += "not watched ";
// 		}
// 			result += "\"" + movie.title + "\"" + " - " + movie.rating;
// 			return result;
// }

// //then have to change movies.forEach by adding function into method and print out by using console.log(function name);.

// movies.forEach(function(movie) {
// 	console.log(buildString(movie));
// });



// //FOR LOOP 

// var movies = [
// 		{
// 			title: "Matrix",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "Inception",
// 			rating: "4 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "V for Vendetta",
// 			rating: "5 Stars",
// 			hasWatched: true
// 		},

// 		{
// 			title: "American Pie",
// 			rating: "1 Stars",
// 			hasWatched: false
// 		}
// ]

// // for(var i = 0; i < movies.length; i++) { //build for loop and if statement
// // 	var result = "you have ";
// // 	if(movies[i].hasWatched) {
// // 	result += "watched ";
// // 	} else {
// // 	result += "not watched ";
// // 	}
// // 		result += "\"" + movies[i].title + "\"" + " - " + movies[i].rating;
// // 		console.log(result);
// // }

// function buildString(movie) {  //make function to clean it up
// 	var result = "you have ";
// 	if(movies[i].hasWatched) {
// 	result += "watched ";
// 	} else {
// 	result += "not watched ";
// 	}
// 	result += "\"" + movies[i].title + "\"" + " - " + movies[i].rating;
// 	return result;
// }


// for(var i = 0; i < movies.length; i++) { //final product inserting function into for loop
// 	console.log(buildString());
// };



//JS METHODS - is functions in a object as a property.

// var ob = {
// 	name: "chuck",
// 	age: 3,
// 	isCool: true,
// 	friends: ["bob", "tina"],
// 	add: function(x, y) { <--- added js method
// 		return x + y;
// 	}

// }
//use to call object like..
//ob

//to call add now ....

//obj.add(10,5);


 //DIFFERENT TYPES OF OBJECTS


 //OBJECT LITERAL E.X.

//  var person = {
//  	firstName: "Michael",
//  	lastName: "Gabucan",
//  	age: 31,
//  	hisFriends: ["josh", "jon", "cesar"],
//  	address: {
//  		street: "14218 econ woods lane",
//  		city: "orlando",
//  		state: "FL"
//  	},
//  	fullName: function() {
//  		return this.firstName + " " + this.lastName;
//  	}

//  };

// console.log(person.fullName());


//OBJECT CONSTRUCTOR E.X.

// var apple = new Object();
// apple.color = "red";
// apple.shape = "round";

// apple.describe = function() {
// 	return "An apple is the color " + this.color + " and the shape " + this.shape;
// }


// console.log(apple.describe());

//if you had more fruits ... theres is more effiecent way using CONSTRUCTOR PATTERN

//CONSTRUCTOR PATTERN

// function fruit(name, color, shape) {
// 	this.name = name;
// 	this.color = color;
// 	this.shape = shape;

// 	this.describe = function() {
// 		return "This " + this.name + " has a color of " + this.color + " and a shape of " + this.shape;
// 	}
// }


// var apple = new fruit("apple", "red", "round");
// var banana = new fruit("banana", "yellow", "long");


// console.log(apple); //access entire object of apple
// console.log(apple.name); //access property to get value of name of apple
// console.log(apple.describe()); //call the method 


//DOM

//5 types of methods selecting elements
// document.getElementById();
// document.getElementByClassName();
// document.getElementByTagName();
// document.querySelector();
// document.querySelectorAll();


// var tag = document.getElementById("tag");
// var tags = document.getElementByClassName("tags")[0];
// console.log(tags[0]);
// var tags = document.getElementByTagName("tags");
// console.log(tags[0]);
// var tag = document.querySelector("#highlight");//gives only first selected element
// var tag = document.querySelectorAll(".bolded")[0];//gives all elements bolded

//a more DRY code alternative is using classes E.X.
// var tag = document.getElementbyId("highlight");
// tag.style.color = "blue";
// tag.style.border = "1px solid red";
// // heres show it should be written using classes...

// .some-class { //define a class in CSS
// 	color: blue;
// 	border: 1px solid red;
// }

// var tag = document.getElementbyId("highlight");
// tag.classList.add("some-class");//add new class to selected element

//tag.classList.remove("some-class"); //remove a class
//tag.classList.toggle("some-class"); // toggle a class

// textContent (EVERYTHING inside a text is gone except text itself be careful)

// var tag = document.querySelector("p");

// //retrieve the textContent from "p" aka paragraph in html
// tag.textContent // This is an awsome paragraph
// //alter the textContent
// tag.textContent = "blah blah blah blah";

//innerHTML (same as textConent except keeps all HTML in element)
//e.x.
//<p>Hello there <strong>world</strong>!!!</p>

// //select p tag
// var tag = document.querySelector("p");

// //manipulate
// tag.innerHTML
// //"Hello there <strong>world</strong>!!!"


//attributes (href or src)
//e.x. 
//<a href="www.google.com">I am a link</a>
//<img src ="logo.png">

//var link = document.querySelector("a");
//link.getAttrubute("href");  //which is www.google.com @ the moment
//TO CHANGE ATTRIBUTE
//link.setAttribute("href", "www.dogs.com");  output is now //<a href="www.dogs.com">I am a link</a>

//TO CHANGE SRC
//var img = document.querySelector("img");
//img.setAttribute("src", "corgi.png"); //out put it now corgi.png for src


//DOM EVENTS

// <button>Click me!</button>
// <p>No one has clicked me</p>

// //SELECT element

// var btn = document.querySelector("button");
// var p = document.querySelector("p");

// //ADD event listener

// btn.addEventListener("click", function() {    
// 	p.textContent = "You have clicked me!";			<--- note: u can add more 
// });

//ANOTHER EXAMPLE:

// <ul>
// 	<li>hello</li>
// 	<li>hello</li>
// 	<li>hello</li>
// </ul>

// var lis = document.querySelectorAll("li");

// for(var i = 0; i < lis.length; i++) {
// 	lis[i].addEventListener("click", function() {
// 		this.style.color = "orange";
// 	});
// }

// OR

// for(var i = 0; i < lis.length; i++) {
// 	lis[i].addEventListener("click", changeLis);

// function changeLis() {
// 	this.style.color = "orange";
// };












