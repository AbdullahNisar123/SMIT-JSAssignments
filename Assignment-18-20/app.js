///                      Assignment 18-20 Start


/*
Question: 1

Write a program to display the message “Hello World” 5 times
in your browser using for loop


*/

// Answer:

// for(let i = 1; i<= 5; i++){
//     document.write("hello world")
//     document.write("<br />")
// }

/*
Question: 2

Write a program to print numeric counting from 1 to 10.

*/

// Answer:

// for(let i = 1; i<= 10; i++){
//     document.write(i)
//     document.write("<br />")
// }




/*
Question: 3

Write a program to print multiplication table of any number
using for loop. Table number & length should be taken as an
input from user.


*/

// Answer:

// let table = +prompt("whict table you want?")
// let tablelen = +prompt("tell me the length of table")

// for(let i = 1; i<= tablelen; i++){
//     document.write(`${table} X ${i} = ${table * i}`)
//     document.write("<br />")
// }


/*
Question: 4

You have an array
A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
Write each element on new line with the help of for loop.


*/

// Answer:

// let phones = ["Nokia","Samsung","Apple","Sony","Huawei"]

// for(let i = 0; i < phones.length; i++){
//     document.write(phones[i])
//     document.write("<br />")
// }






/*
Question: 5

Write a program to print items of the following array using for
loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


*/

// Answer:


// let fruits = ["apple","banana","mango","orange","streawberry"]
// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i])
//     document.write("<br />")
// }
// for(let i = 0; i < fruits.length; i++){


//     document.write(`Element at index ${i} is ${fruits[i]}`)
//     document.write("<br />")
// }



/*
Question: 6

Write a program to initialize an array of N items by using
prompt. Where N is number of items as entered by the user.


*/

// Answer:


// let items = [];
// let numItem = +prompt("how many items")
// let item;
// for (let i = 1; i <= numItem; i++) {
//     item = prompt("write a item name")
//     items.push(item)

// }
// document.write(`number of items = ${numItem}`)
// document.write("<br />")
// document.write("Items:")
// document.write("<br />")


// for (let i = 0; i < items.length; i++) {
//     document.write(items[i])
//     document.write("<br />")
// }









/*
Question: 7

Generate the following series in your browser. See example
output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

*/

// Answer:

// document.write("Counting:")
// document.write("<br />")
// for(let i = 1; i <=15; i++){
//     document.write(`${i}, `)
// }
// document.write("<br />")


// document.write("Reverse counting:")
// document.write("<br />")
// for(let i = 10; i >=1; i--){
//     document.write(`${i}, `)
// }
// document.write("<br />")

// document.write("Even:")
// document.write("<br />")
// for(let i = 1; i <=20; i++){
//     if(i%2 === 0)document.write(`${i}, `)
// }
// document.write("<br />")


// document.write("Old:")
// document.write("<br />")
// for(let i = 0; i <=20; i++){
//     if(i%2 !== 0) document.write(`${i}, `)

// }
// document.write("<br />")

// document.write("Series")
// document.write("<br />")
// for(let i = 1; i<= 20; i++){
//     if(i%2 === 0)document.write(`${i}K, `)

// }
/*



Question: 8

You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not. Example:


*/

// Answer:

// let bakery = ["cake","apple pie","cookie","chips","patties"]
// let item = prompt("what item do you wnat")
// let found = false
// for(let i = 0; i < bakery.length; i++){
//     if(bakery[i].toLowerCase() === item.toLowerCase()){
//         found = true;
//         alert(`${bakery[i]} is avaliable at index ${i} in our bakery`);
//         break;
//     }
// }
// if (found === false){
//     alert(`${item} is not avaliable in our bakery`);
// }



/*
Question: 9

Write a program to identify the largest number in the given
array.
A = [24, 53, 78, 91, 12]


*/

// Answer:


// let num = [24, 53, 78, 91, 12, 100,101]

// let largest = 10;

// for(let i = 0; i < num.length; i++){
//     if (largest < num[i]){
//         largest = num[i]
//     }
// }
// console.log("largest :"+ largest)



/*
Question: 10

Write a program to identify the smallest number in the given
array.
A = [24, 53, 78, 91, 12]


*/

// Answer:


// let num = [24, 53, 78, 91, 12]
// let smallest = 200

// for(let i = 0; i<num.length; i++){
//     if(num[i] < smallest){
//         smallest = num[i]
//     }
// }
// console.log("number array",num)
// console.log("smallest number :", smallest)


/*
Question: 11

Write a program to identify the largest & the smallest
number in the given array.
A = [24, 53, 78, 91, 12]


*/

// Answer:


// let numbers = [24, 53, 78, 91, 12, 13, 29, 30, 31]
// let smallest = 100
// let largest = 2
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i]
//     }
//     else if (numbers[i] > largest) {
//         largest = numbers[i]
//     }
// }
// console.log("number array", numbers)
// console.log("smallest number is ", smallest)
// console.log("largest number is ", largest)


/*
Question: 12

Write a program to print multiples of 5 ranging 1 to 100


*/

// Answer:

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }



/*
Question: 13

You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

Write a program to generate the following HTML table in your
browser using JS.

*/

// Answer:


/*
Question: 14

Write a program that prints number from start of the array
to desired stop value. Given array:
var scores = [12, 45, 3, 22, 34, 50];
(Hint: take stop value from user)
E.g. if user gives 3 as input value print 12, 45, 3
if user gives 34 as input value print 12, 45, 3, 22, 34

*/

// Answer:

// let scores = [12, 45, 3, 22, 34, 50];
// let userInput = +prompt("what is the end point")
// let result = []
// for (let i = 0; i < scores.length; i++) {
//     result.push(scores[i])
//     if (userInput === scores[i]) {

//         break;
//     }
// }
// console.log(result)


/*
Question: 15

You have an array
A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
Write each element on new line with the help of nested for
loops.

*/

// Answer:


/*
Question: 16

Write a program to repeatedly print the value of the variable
num which is input by user. Value should be decreasing by 0.5
each time, as long as x Value remains positive.

*/

// Answer:

// let num = +prompt("give the number")
// for(let i = num; i >= 0 ; i -= 0.5){
//     console.log(i)
// }



/*
Question: 17

The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each
iteration, it will check if the current number is even or odd, and
report that to the screen (e.g. "2 is even").

*/

// Answer:

// for(let i = 0; i <= 20; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`)
//     }
//     else{
//         console.log(`${i} is Old`)
//     }

// }


/*
Question: 18

Write a program to calculate the product of the odd integers
from 1 to 7.

*/

// Answer:



/*
Question: 19

Write a program that will write out a wedge of stars. The user
will enter the initial number of stars, and the program will write
out lines of stars where each line has one few star than the
previous line. Initial number of stars: 7


*/

// Answer:

// let userInput = +prompt("how many star you want")

// for(let i = userInput; i > 0 ; i--){
//     console.log("*".repeat(i))
// }

/*
Question: 20

Write a program to create the following patterns in your
browser. Take number of lines as an input.

*/

// Answer:

// let userInput = +prompt("how many lines you want")

// for(let i = userInput; i > 0; i--){
//     console.log("*".repeat(4))
// }

// for(let i = userInput; i > 0 ; i--){
//     console.log("*".repeat(i))
// }

// for(let i = 1; i <= userInput ; i++){
//     console.log("*".repeat(i))
// }


///                      Assignment 18-20 END