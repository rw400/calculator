// ; is optional in modern javascript, make sure it is consistent
var x = 5.5				//number
console.log(x)			//prints to the terminal, browser
console.log("this is test:)

var x2 = 5.5

var x3 = x + x2
console.log(x3)
console.log("value", x3)

var x = 99				//override x value
console.log(x)			//new x value in console

var x = "this is a string" 		//override again to string
console.log("x", x)

var string = x + "9"		// string concatenation
console.log(string) 

var y = "blockchain"	//string

var z = y + x 
console.log(z)

const firstname = "John"		//cannot override, change
const lastname = "Doe"
const fullname = firstname + " " + lastname
console.log(fullname)

var nnumber_1 = 55				//underscores are fine but not -
var numberNumber = 66			//standard way of defining lowercase then uppercase
var sum = number_1 + numberNumber
console.log(sum)

var difference = number_1 - numberNumber	//subtraction
console.log(difference)

var string1 = "string concatation"
console.log(string1.length) 		// gives length of string

var upperString = string2.toUpperCase()		//Caps all the values
Console.log(upperString)

var lowerString = upperString.toLowerCase() //Lowercase all values
Console.log(lowerString)

function demoFunc() {
	console.log("this is a funciton")
	var a = 22
	var b = 33
	var c = a + b
	Console.log(c)
}

demoFunc()

funciton secondFunction(){
	const x = 3;
	const y = "number"
	const z = x + y		//auto detects as string	 3number is now a string
	console.log("z : ", z)
}
secondFunction()

function awesomeFunction(){
	let firstName = "John"
	let lastName = "Doe"
	let fullName = firstName + lastName	//scoping: ( global , override)
	
	console.log(fullName)
	
	
}



/* 
javascript is dynamically packed language
don't have to define like other languages, ex just put 5


String
Number
	int
	dec			-decimal
	float		-many decimals, more specific

variable types: (fixed)
var
	var x = 5
	var x = 10, fixed now x i 10

CONT
	constant at the top, unchange

let
	work in certain scope, like in a loop
	only works inside loop AND NOT outside loop
	Ex. let x = 5
	dont have to re delare, re define
	
Operators
	+ , - , * , /		basic math operator
	++	incremental operators, increment by 1
	-- 	de-increment by 1
	=		assign value
	==		it has the same value, compare
	===		same value and same type 
	
	






*/