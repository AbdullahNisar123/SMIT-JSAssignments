//                                    Start Assignment 26 - 34


/*
Question 2

 Write a program that takes a negative integer from user & 
display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number 

*/

// Answer:

/*
Question 3

 Write a program that takes a positive floating point number 
from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number

*/

// Answer:


// let user = +prompt("enter floating point number")
// console.log("Number: ",user)
// console.log("Round Off ", Math.round(user))
// console.log("Floor ", Math.floor(user))
// console.log("Ceil ", Math.ceil(user))
/*
Question 4

Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number

*/

// Answer:
// let user = +prompt("enter floating point number")
// console.log("Number: ",Math.ceil(user))
// console.log("Round Off ", Math.round(user))
// console.log("Floor ", Math.ceil(user))
// console.log("Ceil ", Math.floor(user))

/*
Question 5

 Write a program that displays the absolute value of a number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

// Answer:
// let user = +prompt("enter a number to get the absolute value")

// console.log(user - user - user)



/*
Question 6

 Write a program that simulates a dice using random() method
of JS Math class. Display the value of dice in your browser.

*/

// Answer:
// let random = Math.ceil(Math.random() * 6)

// console.log("Dice value: ", random)

/*
Question 7

 Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser.

*/

// Answer:


// let randomNum = Math.ceil(Math.random() * 2)
// if(randomNum == 1){
//     console.log("Heads")
// }else{
//     console.log("Tails")
// }
// console.log(randomNum)
/*
Question 8

Write a program that shows a random number between 1 and
100 in your browser.

*/

// Answer:

// let num = Math.ceil(Math.random() * 100);

// console.log("random number between 1 and 100: ",num);


/*
Question 9

Write a program that asks the user about his weight. Parse the
user input and display his weight in your browser. Possible user
inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms

*/

// Answer:

// let user = prompt("please enter your Weight")

// if(isNaN(user)){
//     alert("Invalid input. Please enter a valid number.")
// }
// else{
//     alert(`Your Weight is ${Number(user).toFixed(1)} kilograms.`)
// }


/*
Question 10

 Write a program that stores a random secret number from 1
to 10 in a variable. Ask the user to input a number between 1
and 10. If the user input equals the secret number, congratulate
the user.

*/

// Answer:

// let secretNum = Math.ceil(Math.random() * 10);
// let userInput = +prompt("Enter a Number between 1 to 10")

// if(userInput == secretNum){
//     alert("Congratulations! You guessed the correct number.")
// }
// else{
//     alert("Sorry, you guessed wrong. The correct number was " + secretNum)
// }

/*
Question 11

Write a program that displays current date and time in your
browser.

*/

// Answer:


// let now = new Date();
// console.log(now);
/*
Question 12

Write a program that alerts the current month in words. For
example December.

*/

// Answer:

// let now = new Date()
// let month = now.getMonth()

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// alert("current month: " + months[month])
// console.log(month)

/*
Question 13

Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show Sun.

*/

// Answer:
// let now = new Date()
// let day = now.getDay()

// if (day == 1) alert("Mon")
// else if (day == 2) alert("Tue")
// else if (day == 3) alert("Wed")
// else if (day == 4) alert("Thu")
// else if (day == 5) alert("Fri")
// else if (day == 6) alert("Sat")
// else if (day == 0) alert("Sun")


/*
Question 14

Write a program that displays a message “It’s Fun day” if its
Saturday or Sunday today.

*/

// Answer:
// let now = new Date();
// let days = now.getDay()
// if(days == 0 || days == 6){
//     alert("It's Fun day")
// }else{
//     alert("It's not Fun day")
// }

/*
Question 15

Write a program that shows the message “First fifteen days of the
month” if the date is less than 16th of the month else shows “Last
days of the month”.


*/

// Answer:
// let now = new Date()
// let days = now.getDate()
// if (days < 16) alert("First fifteen days of the month")
// else if (days > 16) alert("Second 15 days of the month")
// console.log(days)
/*
Question 16

Write a program that determines the minutes since midnight, Jan.
1, 1970 and assigns it to a variable that hasn't been declared
beforehand. Use any variable you like to represent the Date object.


*/

// Answer:
// let now = new Date();
// let milliSeconds = now.getTime()
// let minutes = milliSeconds / 1000
// console.log(milliSeconds)
// console.log(minutes)

/*
Question 17

 Write a program that tests whether it's before noon and alert “Its
AM” else “its PM”.


*/

// Answer:

// let now = new Date()
// let hours = now.getHours();
// if(hours < 12) {
//     alert("Its AM")
// }

// else {
//     alert("Its PM")
// }

// console.log(hours)


/*
Question 18

Write a program that creates a Date object for the last day of the
last month of 2020 and assigns it to variable named laterDate

*/

// Answer:

// let lastDay = new Date("dec 31, 2020")

// console.log(lastDay)

/*
Question 19

Create a date object of the starting date of this Ramadan and alert
the number of days past since 1st Ramadan?
Note: 1st Ramadan was on march 2, 2025

*/

// Answer:

// let firstRamadan = new Date("march 2,2025");
// let now = new Date()

// let timeDiff = now - firstRamadan
// console.log(Math.floor(timeDiff /( 1000 *60*60*24)))



/*
Question 20

Write a program that displays in your browser the seconds that
elapsed between the reference date and the beginning of 2015.

*/

// Answer:

// let now = new Date()
// let startDate = new Date("jan 1, 2015")

// let timeDiff = now - startDate
// console.log(Math.floor(timeDiff / 1000))


/*
Question 21

Create a Date object for the current date and time. Extract the
hours, reset the date object an hour ahead and finally display the
date object in your browser.

*/

// Answer:

// let now = new Date()
// let Hour = now.getHours()
// console.log(Hour + 1)


/*
Question 22

Write a program that creates a date object and show the date
in an alert box that is reset to 100 years back?

*/

// Answer:


// let now = new Date()
// now.setFullYear(now.getFullYear() - 100)
// console.log(now)




/*
Question 23

Write a program to ask the user about his age. Calculate and
show his birth year in your browser.

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let msgBox = document.querySelectorAll(".detail")[0]

// function get () {
//     let userAge = userInput.value;
//     let birthYear = new Date().getFullYear() - userAge;
//     msgBox.innerHTML = `
//     <p>Your age is: ${userAge}</p>
//     <p>Your birth Year is: ${birthYear}</p>
//     `
// }

/*
Question 24

Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 decimal
places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)

Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
&
Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let billDev = document.querySelectorAll(".bill")[0]
// let now = new Date()
// let Month = now.getMonth()
// let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
// let unitsUse = 400;
// let perUnit = 12
// let lateCharges = 500
// function generate(){
//     userName = userInput.value;
//     billDev.innerHTML = `
//         <h2>Current Month Bill </h2>
//         <P>Customer Name : <b>${userName}</b></P>
//         <P>Month: <b>${monthName[Month]}</b></P>
//         <P>Number of units: <b>${unitsUse}</b></P>
//         <P>Charges per unit: <b>${perUnit}</b></P>
//         <P>Net Amount Payable (within Due Date): <b>${unitsUse*perUnit}</b></P>
//         <P>late Payment surcharge: <b>${lateCharges}</b></P>
//         <P>Gross Amount Payable (after Due Date): <b>${unitsUse*perUnit+lateCharges}</b></P>
//     `
// }



//                             End Assignment 26 - 34