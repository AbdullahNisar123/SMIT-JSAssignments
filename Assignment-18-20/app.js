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

///                      Assignment 18-20 END