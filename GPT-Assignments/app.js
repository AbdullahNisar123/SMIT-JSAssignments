/*
Question: 1

Task 1: Grading System
Write a JavaScript program that takes a student's marks as input and determines the grade based on the following conditions:

90-100 → "A+ (Excellent)"
80-89 → "A (Very Good)"
70-79 → "B (Good)"
60-69 → "C (Satisfactory)"
50-59 → "D (Needs Improvement)"
Below 50 → "F (Fail)"
Use an if-else statement to implement this logic.

*/

// Answer:

// let marks = +prompt("what is your marks")
// let totalmarks = 600;
// let grade;
// let precentage = marks / totalmarks * 100
// if(precentage >= 90 && precentage <= 100){
//     grade = "A+ Excellent"
// }else if(precentage >= 80){
//     grade = "A Very Good"
// }else if(precentage >= 70){
//     grade = "B Good"
// }else if(precentage >= 60){
//     grade = "C Satisfactory"
// }else if(precentage >= 50){
//     grade = "D Need Improvement"
// }else if (precentage < 50 ){
//     grade = "F Fail"
// }
// console.log(totalmarks)
// console.log(marks)
// console.log(precentage)
// console.log(grade)



/*
Question: 2

Task 2: Array Operations
Create an array of five programming languages: ["JavaScript", "Python", "C++", "Java", "Ruby"].
Add "Swift" at the end of the array using push().
Remove the first element using shift().
Use splice() to replace "Java" with "TypeScript".
Display the final array in the console.

*/

// Answer:

// let languages = ["JavaScript","Python","C++","Java","Ruby"]

// languages.push("Swift");
// languages.shift();
// languages.splice(3,1,"TypeScript")
// console.log(languages)


/*
Question: 3

Task 3: Multiplication Table
Write a JavaScript program that prints the multiplication table from 1 to 5 using nested loops.

*/

// Answer:


// for(let i = 1; i <= 5 ; i++){
//     for(let j = 1; j <= 10; j++){
//         document.write(`${i} x ${j} = ${i*j}` + "<br />")
//     }
// }



/*
Question: 4

Write a program to calculate and print the sum of all elements using nested loops.


*/

// Answer:


// let numbers = [[2, 4, 6],[1, 3, 5],[7, 8, 9]]
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     let insideArr = numbers[i]
//     for(let j = 0; j < insideArr.length; j++){
//         sum = sum + insideArr[j]
//     }
// }
// console.log(sum)


/*
Question: 5

Task 4: Printing a Chessboard Pattern
Write a JavaScript program that prints an 8x8 chessboard pattern using "#" and " " (spaces).

Use a nested loop where:
The outer loop iterates through 8 rows.
The inner loop prints 8 characters ("#" and " " alternately) in each row.
Each row should start with an alternating character.

# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #  
 # # # # 

*/

// Answer:


// for (let i = 1; i <= 8; i++) {

//     for (let j = 1; j <= 8; j++) {
//         if (i % 2 === j % 2) document.write(" W ")
//         else document.write(" B ")
//     }
//     document.write("<br />")
// }




/*
Question: 6

Task 6: Find Prime Numbers Between 1 and 50
Write a JavaScript program that finds and prints all prime numbers between 1 and 50.

A prime number is a number that is only divisible by 1 and itself (e.g., 2, 3, 5, 7, 11).
Use a nested loop where:
The outer loop iterates through numbers 1 to 50.
The inner loop checks whether the current number is divisible by any number other than 1 and itself.
If the number is prime, print it.


*/

// Answer:


// for (let i = 2; i <= 50; i++) {

//     let isprime = true

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isprime = false;
//             break;
//         }
//     }
//     if (isprime) {
//         console.log(i)
//     }
// }



/*
Question: 7


7. Reverse an Array (Without reverse())
Write a function that reverses an array manually without using reverse().


*/

// Answer:

// let num = [1, 2, 3, 4, 5]
// let tem = []

// console.log(num)
// for (let i = 1; i <= num.length; i++) {
//     tem.push(num.pop())
// }
// console.log(tem, "after")


/*
Question: 8


Write a function that finds the common elements between two arrays.

*/

// Answer:

// let arr1 = ['apple', 'banana', 'mango'];
// let arr2 = ['grape', 'banana', 'mango', 'kiwi'];
// let common = []


// for (let i = 0; i < arr2.length; i++) {
//     if (arr1[i] === arr2[i]){
//         common.push(arr1[i])
//     }
// }
// console.log(arr1,arr2)
// console.log(common)



















// let students = ['imran', 'imran', 'imran', 'abdullah', 'aslam', 'imran', 'adnan'];

// let matcCount = 0;
// let reqName = "imran"
// let reqIndex = 4
// for (let i = 0; i < students.length; i++) {
//     if (students[i] === reqName && matcCount < reqIndex) {
//         matcCount++
//         if (matcCount === reqIndex) {
//             console.log(`${reqName} is at index ${i}`)
//             break;
//         }
//     }
// }
// console.log(students)



//                    data and time questions

/*
question: 1

Write a JavaScript program to display the current date and time in the format: YYYY-MM-DD HH:MM:SS.

*/

// Answer:

// let dateTime = document.querySelectorAll("h2")[0]

// dateTime.innerHTML = Date()

/*
question: 2

Display time in 12-hour format (AM/PM)
*/

// Answer:

// let time = document.querySelectorAll("h3")[0]


// function getTime (){
//     let now = new Date()
//     now.setHours(14)
//     let hours = now.getHours()
//     let minutes = now.getMinutes()
//     let seconds = now.getSeconds()
//     let ampm = hours >= 12 ? "PM" : "AM"
//     hours = hours % 12 || 12;

//     return `${hours}:${minutes}:${seconds} ${ampm}`;
// }
// let result = getTime()
// console.log(result)
// time.innerHTML = getTime()
/*
question: 3

Calculate Days Between Two Dates

Task: Write a function that finds the difference (in days) between two given dates.

*/

// Answer:

// let date1 = document.querySelectorAll("input")[0]
// let date2 = document.querySelectorAll("input")[1]
// let msg = document.querySelectorAll("h3")[0]
// function check() {
//     let seconds1 = new Date(date1.value).getTime()
//     let seconds2 = new Date(date2.value).getTime()
//     let minseconds = seconds2 - seconds1
//     let remmainDays = minseconds / (1000 * 60 * 60 * 24)
//     msg.innerHTML = remmainDays

// }
/*
question: 4

Age Calculator
Task: Let the user enter their birthdate and calculate their exact age (years, months, days).

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let msg = document.querySelectorAll("h3")[0]

// function check() {
//     let birthday = new Date(userInput.value).getTime()
//     let now = new Date().getTime()
//     let milliseconds = now - birthday;
//     let years = Math.floor(milliseconds / 31536000000)
//     let months = Math.floor(years * 12)
//     let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))
//     msg.innerHTML = `I am ${years} years, ${months} months and ${days} days ago`

// }


