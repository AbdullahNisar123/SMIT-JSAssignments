/*
Question: 1

Write a program that takes input a name from user & greet the 
user like this
*/

// Answer:

// let userName = prompt('Enter your name?')
// alert(`Hello ${userName}`)

/*
Question: 2

Write a program to take input a number from user & display 
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by 
default.

*/

// Answer:

// 





/*
Question: 3

Write a program to take “city” name as input from user. If user 
enters “Karachi”, welcome the user like this: “Welcome to city 
of lights”


*/



// Answer:

// let city = prompt('Enter city');

// if (city === "karachi") alert(`Welcome to city of lights, ${city}`)
// else alert(`welcome to ${city}`)





/*

Question: 4

Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is 
female, give the message: Good Morning Ma’am

*/


// Answer:

// let gender = prompt("What is your gender?")

// if (gender === "male") alert("Good Morning Sir")
// else if (gender === "female") alert("Good Morning Ma'am")



/*

Question: 5

Write a program to take input color of road traffic signal from 
the user & show the message according to this table

Red: vehicles must stop

Yellow: vehicles should get ready to move

Green: vehicles can move now
*/


// Answer:

// let signalColor = prompt("What is the Color of the taffic signal?");

// if (signalColor === "red") alert("Vehicles must stop")
// else if (signalColor === "yellow") alert("Vehicles must stop");
// else if (signalColor === "green") alert("Vehicles can move now")



/*

Question: 6

Write a program to take input max age & current age from 
user. If the current age is less than or equal to max age,.
 show the message “You are welcome”

*/


// Answer:

// let currentAge = prompt("Enter your current");
// let maxAge = prompt("Enter your maximum age");

// if (currentAge <= maxAge) alert("Your are welcome")
// else alert("You are not welcome")


/*

Question: 7

Write a program to take input remaining fuel in car (in litres) 
from user. If the current fuel is less than 0.25litres, show the 
message “Please refill the fuel in your car”

*/


// Answer:

// let remainFuel = prompt("What is you current fuel in litres")
// if (remainFuel < 0.25) alert("Please refil the fuel in your car")
// else alert("You can ride your car")


/*

Question: 9

Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute grade as 
per following table:

*/

// Answer: 

// let obtained = +prompt("Your obtain marks is?")
// let total = +prompt("Your total marks is?")
// let percentage =  obtained / total * 100;
// let grade;
// let remarks
// if(percentage >= 80 && percentage < 100) grade = "A-one" , remarks = "Excellent"
// else if (percentage >= 70) grade = "A" , remarks = "Good"
// else if (percentage >= 60) grade = "B" , remarks = "You need to improve"
// else if (percentage < 60) grade = "Fail" , remarks = "Sorry"


// document.write("<h1>Marks Sheet</h1>")
// document.write("<br/>")
// document.write("<br/>")
// document.write(`<p>Total marks: ${total}</p>`)
// document.write(`<p>Obtained marks: ${obtained}</p>`)
// document.write(`<p>Percentage: ${percentage}</p>`)
// document.write(`<p>Grade: ${grade}</p>`)
// document.write(`<p>Remarks: ${remarks}</p>`)



/*

Question: 10

Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Take input 
from users, the following: 
a. Name of item1 
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.


*/


// Answer:

// let item1Name = prompt("Name of item 1")
// let item2Name = prompt("Name of item 2")
// let item1Price = +prompt("Price of item 1")
// let item2Price = +prompt("Price of item 2")
// let item1Quant = +prompt("what is the Quantity of item 1")
// let item2Quant = +prompt("what is the Quantity of item 2")
// let ShippingCharges = +prompt("Shipping Charges?")
// let Total = (item1Price * item1Quant) + (item2Price * item2Quant) + ShippingCharges
// let disPercentage;
// if (Total > 2000 ) disPercentage = 10 
// let disPrice = Total / disPercentage
// document.write("<h1>Shopping Cart</h1>")
// document.write("<br/>")
// document.write("<br/>")
// document.write(`<p>Price of ${item1Name} is ${item1Price}</p>`)
// document.write(`<p>Quantity of ${item1Name} is ${item1Quant}</p>`)
// document.write(`<p>Price of ${item2Name} is ${item2Price}</p>`)
// document.write(`<p>Quantity of ${item2Name} is ${item2Quant}</p>`)
// document.write("<br/>")
// document.write(`<p>Shipping Charges: ${ShippingCharges}</p>`)
// document.write("<br/>")
// document.write(`<p>Total cost of your order is ${Total} PKR</p>`)
// document.write(`<p>Discounted Price is ${Total - disPrice} PKR</p>`)




/*

Question: 11

Guess game:
Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer”.

*/

// let secretNum = 5;
// let guessNum = +prompt("Guess the Scret number, rang is 1 to 10")

// if (secretNum == guessNum){
//     alert("Bingo! Correct answer")
// }
// else if (guessNum + 1 === secretNum || guessNum - 1 === secretNum){
//     alert("Close enough to the correct answer")
// }else alert("Try again")



/*

Question: 12

Write a program to check whether the given number is 
divisible by 3. Show the message to the user if the number is 
divisible by 3

*/

//Answer:

// let num1 = +prompt("Give the number to check is it divisible by 3")

// if ( (num1 % 3) === 0) alert("number is divisible by 3")
//     else alert("number is not divisible by 3")

/*

Question: 13

Names & Total scores of two teams are taken as input. Write 
a program that shows which team has won the game or show if 
there is a tie. (Team A or Team B)

*/

//Answer:

// let team1Name = prompt("what is the name of first team?")
// let team1Score = +prompt("what is the first team score")
// let team2Name = prompt("what is the name of second team?")
// let team2Score = +prompt("what is the second team score")


// if (team1Score > team2Score) alert(`Team ${team1Name} is won the game`)
// else if (team1Score < team2Score) alert(`Team ${team2Name} is won the game`)
// else alert(`The game is tie`)


/*

Question: 14

Take a string, a number and a Boolean in three variables. 
Write a program that checks the type of variables & responds 
accordingly. Like 

*/

//Answer:

// let word = 'pakistan'
// let oldNum = 3
// let isMale = false

// alert(`${word} is a ${typeof word}`)
// alert(`${oldNum} is a ${typeof oldNum}`)
// alert(`${isMale} is a ${typeof isMale}`)


/*

Question: 15

Write a program that checks whether the given input is an 
even number or an odd number

*/

//Answer:

// let num1 = prompt("give the number ")

// if ((num1 % 2) === 0) alert("number is even")
//     else alert("number is old")



/*

Question: 16

Weather in Karachi nowadays is too cool, write a program 
that takes temperature as input and shows a message based on 
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”

*/

//Answer:

// let temp = +prompt("What is the temperature? in C")

// if (temp > 40) alert("It is too hot outside.")
// else if (temp > 30) alert("The weather today is Normal.")
// else if (temp > 20) alert("Today's Weather is cool.")
// else if (temp > 10) alert("OMG! Today's weather is so Cool.")



/*

Question: 17

Write a program to create a calculator for +,-,*, / & % using if 
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.


*/

//Answer:

// let num1 = +prompt("Give the number 1")
// let num2 = +prompt("Give the number 2")
// let operation = prompt("what operation do you want to do (+, -, *, /, %)")

// if (operation === "+") alert("Result:" + num1 + num2)
// else if (operation === "-") alert("Result:" + num1 - num2)
// else if (operation === "*" || operation === "x") alert("Result:" + num1 * num2)
// else if (operation === "/") alert("Result:" + num1 / num2)



/*

Question: 18

Write a program that takes user input day name. If the day is 
Monday, Tuesday, Wednesday, Thursday or Friday, then show 
“It’s a week day”. If the day is Saturday then show “It’s 
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

*/

//Answer:

// let day = prompt("what is the day")

// if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") alert("It's a week day")
// else if (day === "saturday") alert("It's weekend")
// else if (day === "sunday") alert("Yay! It's a holiday")
// else alert("this is not a day name")



/*

Question: 19

Write a program that takes input user’s score, if it’s greater 
than 50, say “You are passed”. Otherwise, show “Try again!

*/

//Answer:

// let score = +prompt("what is your socre ")
// if (score > 50 ) alert("Your are passed")
//     else alert("Try again!")



/*

Question: 20

Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater 
number of 5 and 10 is 10.")

*/

//Answer:

// let num1 = +prompt("Give the number 1")
// let num2 = +prompt("Give the number 2")

// if ( num1 > num2 ){
//     alert(`The greater number of ${num1} and ${num2} is ${num1}`)
// }
// else if (num1 < num2 ){
//     alert(`The greater number of ${num1} and ${num2} is ${num2}`)
// }
// else alert(`The both number ${num1} and ${num2} is equal`)




/*

Question: 21

The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3 
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of 
hello world in different languages)


*/

//Answer:

// let lang = prompt("Give the language code e.g. es, de, en")
// if (lang === "es") alert("Hola mundo")
// else if (lang === "de") alert("Hallo Welt")
// else alert("Hello world")




/*

Question: 22

Write a program to take input a number & tell whether it’s a 
positive or negative number.


*/

//Answer:

// let num1 = prompt("Give the number")

// if (num1 >= 0)alert("Your number is positive")
// else alert("Your number is negative")




/*

Question: 23

The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
Run the program for a few different inputs and show the result
to make sure it works.

*/

//Answer:

// let pet = prompt("which pet do you have?")
// let quantity = +prompt("how many of you have")

// if (quantity > 0 ) alert(`You have ${quantity} ${pet}s`)
// else alert(`You have ${quantity} ${pet}`)




///                      Assignment 8-11 END