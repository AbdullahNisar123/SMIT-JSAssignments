///                      Assignment 12-13 Start


/*
Question: 1

Write a program to check whether the given input number is
divisible by 3 or else show a message “Number is not divisible
by 3”


*/

// Answer:

// let num = +prompt("Give the number ")

// if ((num % 3) === 0) alert("Your Number is divisible by 3")
// else alert("Your Number is not divisible by 3")



/*
Question: 2

Write a program that checks whether the given input is an even
number or an odd number.


*/



// Answer:

// let num = +prompt("Give the number")

// if ((num % 2) === 0) alert("Give number is Even")
//     else alert("Give number is Old")


/*
Question: 3

Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young"


*/

// Answer:

// let age = +prompt("What is your age?")
// if (age > 18 ) alert("Old enough")
//     else alert("Too young")


/*
Question: 4

Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output


*/

// Answer:

// let myName = "abdullah"
// let userName = prompt("what is your name?")
// if(userName === myName) alert("Hey We have same name")



/*
Question: 5

Write a program to check whether the given input number is
divisible by 3 or not by using Switch Case statements. Show a
message “Number is not divisible by 3” or “Number is divisible
by 3”.


*/

// Answer:


// if ((num % 3) === 0) alert("Your Number is divisible by 3")
// else alert("Your Number is not divisible by 3")




/*
Question: 6

. Write a program that takes a character(number or string) in a
variable & checks whether the given input is a number,
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)


*/

// Answer:

// let char = prompt("Enter a character:").charAt(0); 
// let ascii = char.charCodeAt(0); 

// if (ascii >= 48 && ascii <= 57) {
//     alert(`${char} is a number.`);
// } else if (ascii >= 65 && ascii <= 90) {
//     alert(`${char} is an uppercase letter.`);
// } else if (ascii >= 97 && ascii <= 122) {
//     alert(`${char} is a lowercase letter.`);
// } else {
//     alert(`${char} is neither a letter nor a number.`);
// }



/*
Question: 7

Write a program to create a calculator for +, -, *, /, % using
switch case statements. (number1, number2 and operator will
be input)
*/

// Answer using IF ELSE:

// let num1 = +prompt("Give the number")
// let num2 = +prompt("Give the another number")
// let operator = prompt("what operation you want +, -, *, /, %")

// if (operator === "+") alert(num1 + num2)
// else if (operator === "-") alert(num1 - num2)
// else if (operator === "*" || operator === "x") alert(num1 * num2)
// else if (operator === "/") alert(num1 / num2)
// else if (operator === "%") alert(num1 % num2)


// Answer using switch case:

// let num1 = +prompt("Give the number")
// let num2 = +prompt("Give the another number")
// let operator = prompt("what operation you want +, -, *, /, %")

// switch (operator) {
//     case ("+"):
//         alert(num1 + num2)
//         break;
//     case ("-"):
//         alert(num1 - num2)
//         break;
//     case ("*"):
//         alert(num1 * num2)
//         break;
//     case ("x"):
//         alert(num1 * num2)
//         break;
//     case ("/"):
//         alert(num1 / num2)
//         break;
//     case ("%"):
//         alert(num1 % num2)
//         break;

//     default:
//         alert("You enter wrong operation")
//         break;
// }




/*
Question: 8

Write a program that takes time as input from user in 24 hours
clock format like: 1900 = 7pm. Implement the following case
using if, else & else if statements

*/

// Answer:

// let time = +prompt("what is the time in 24 hours")
// if (time >= 2100 && time <= 2359) alert("Good night")
// else if (time >= 1700 && time <= 2100 ) alert("Good evening")
// else if (time >= 1200 && time <= 1700) alert("Good afternoon")
// else if (time >= 1 && time< 1200) alert("Good Morning")



/*
Question: 9

Write a program that takes a calendar year in YYYY format in
a variable. Check & notify the user whether it is a leap year or
not.

*/

// Answer:







/*
Question: 10

Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give
message “ Please enter your password”
ii. Check if both passwords are same. If they are same,
show message “Correct! The password you entered
matches the original password”. Show “Incorrect
password” otherwise.


*/

// Answer:

// let correctPass = "abdullah"
// let userPass = prompt("Write your password")
// if (userPass === correctPass) alert("Correct! The password you entered matches the original password")
// else if (userPass === "") alert("Please enter your password")
// else alert("Incorrect password")




/*
Question: 11

Write a program that adds an else statement to the following
script to display “You are not Fahad”
var firstName = "Ali";
if (firstName === "Fahad") {
 document.write("Hello Fahad!");
}

*/

// Answer:


// let firstName = prompt("Your first name is ?");
// if (firstName === "abdullah") {
//     alert("Hello Abdullah!");
// } else {
//     alert("Your are not Abdullah")
// }



/*
Question: 12

This if/else statement does not work. Try to fix it:
 var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
 else
 greeting = "Good evening";
 }


*/

// Answer:


// let greeting;
//  let hour = +prompt("what is the hour?");
//  if (hour < 18) {
//  greeting = "Good day";
//  }
//  else{
//  greeting = "Good evening";
//  }
//  alert(greeting)



/*
Question: 13

Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.


*/

// Answer:

// let num1 = +prompt("Give a number")
// let num2 = +prompt("Give a another number")

// if (num1 > num2) alert(`The greater number of ${num1} and ${num2} is ${num1}`)
// else if (num1 < num2) alert(`The greater number of ${num1} and ${num2} is ${num2}`)
// else alert("both numbers are equal")


/*
Question: 14

Write a program that takes input a number from user & state
whether the number is positive, negative or zero


*/

// Answer:


// let num1 = +prompt("Give a number")

// if (num1 > 0) alert("Your number is positive")
// else if (num1 < 0) alert("Your number is Negative")
// else alert("Your number is 0")


/*
Question: 15

Ask the user what the current hour is. If the hour is between
6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
the hour is between 5 and 8 p.m., tell the user, "It's dinner
time." For any other hours, tell the user, "Sorry, you'll have to
wait, or go get a snack." (Hint: Store the hour in 24 hours clock
format i.e. 14 for 2pm , 15 for 3pm)


*/

// Answer:


// let hour = +prompt("what the current hour is? 24 format")
// if (hour >= 6 && hour <= 9) alert("Breakfast is served")
// else if (hour >= 11 && hour <= 13) alert("Time for lunch")
// else if (hour >= 17 && hour <= 20) alert("It's dinner time")
// else alert("Sorry, you'll have to wait, or go get a snack")



/*
Question: 16

Write a program that stores value in a variable & tell whether
the type of that variable is a "number", "string", "boolean" or
“undefined”


*/

// Answer:


// let value = 50

// alert(typeof value)



/*
Question: 18

Choose the correct comparison operator to display "true",
when:
10 is NOT equal to 8.

*/

// Answer:

// console.log(10 !== 8)




/*
Question: 19

Use a switch statement to rewrite the following JavaScript
code. Prompt the user for the number of a month rather than
setting it to 8:

*/

// Answer:

// let month = +prompt("which month name you want to know?")

// switch (month) {
//     case (1):
//         alert("January")
//         break;
//     case (2):
//         alert("February")
//         break;
//     case (3):
//         alert("March")
//         break;
//     case (4):
//         alert("Aprill")
//         break;
//     case (5):
//         alert("May")
//         break;
//     case (6):
//         alert("June")
//         break;
//     case (7):
//         alert("July")
//         break;
//     case (8):
//         alert("Augest")
//         break;
//     case (9):
//         alert("September")
//         break;
//     case (10):
//         alert("October")
//         break;
//     case (11):
//         alert("November")
//         break;
//     case (12):
//         alert("December")
//         break;
//     default:
//     alert("the month is only 12")
// }


/*
Question: 15

Use a conditional (ternary) operator for this exercise:
If the variable age is a value below 18, the value of the variable
voteable should be "Too young",
otherwise the value of voteable should be "Old enough"


*/

// Answer:

let age = +prompt("What is your age")
alert((age < 18) ? "Too young" : "Old Enough")



///                      Assignment 12-13 END