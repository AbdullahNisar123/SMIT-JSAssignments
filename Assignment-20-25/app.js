//                                    Start Assignment 20 - 25
/*
Question 1

Write a program that takes two user inputs for first and last
name using prompt and merge them in a new variable titled
fullName. Greet the user using his full name.

*/

// Answer:

// let firstName = prompt("what is your first name?");
// let lastName = prompt("what is your last name?");
// let fullName = firstName + " " + lastName
// alert(`welcome ${fullName}`)

/*
Question 2

 Write a program to take a user input about his favorite mobile
phone model. Find and display the length of user input in your
browser.

*/


// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let msg = document.querySelectorAll("span")[0]
// function search(){
//   let length = userInput.value.length
//   msg.innerHTML = length
// }


/*
Question 3

Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser.

*/


// Answer:

// let word = document.querySelectorAll("span")[0]
// let msg = document.querySelectorAll("span")[1]
// let index = word.innerHTML.indexOf("n")

// msg.innerHTML = index


/*
Question 4

Write a program to find the last index of letter “l” in the word
“Hello World” and display the result in your browser.

*/


// Answer:

// let word = document.querySelectorAll("span")[0]
// let msg = document.querySelectorAll("span")[1]
// let index = word.innerHTML.lastIndexOf("l")

// msg.innerHTML = index


/*
Question 5

Write a program to find the character at 3rd index in the word
“Pakistani” and display the result in your browser.

*/


// Answer:

// let word = document.querySelectorAll("span")[0]
// let msg = document.querySelectorAll("span")[1]
// let findIndex = 3
// msg.innerHTML = word.innerHTML[findIndex]



/*
Question 6

Repeat Q1 using string concat() method.

*/

// Answer:

// let firstName = prompt("what is your first name?");
// let lastName = prompt("what is your last name?");
// let fullName = firstName.concat(" ",lastName)
// alert(`welcome ${fullName}`)



/*
Question 7

Write a program to replace the “Hyder” to “Islam” in the word
“Hyderabad” and display the result in your browser.

*/

// Answer:

// let findWord = "Hyder"
// let replace = "Islam"
// let word = document.querySelectorAll("span")[0]
// let afterReplace = document.querySelectorAll("span")[1]

// let index = word.innerHTML.indexOf(findWord)

// afterReplace.innerHTML =word.innerHTML.slice(0,index) + replace + word.innerHTML.slice(index + findWord.length)



/*
Question 8

Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and football together.”;

*/

// Answer:

// let findWord = "and"
// let replace = "&"
// let word = document.querySelectorAll("span")[0]
// let wordCopy = word.innerHTML.slice(0)
// let afterReplace = document.querySelectorAll("span")[1]

// for (let i = 0; i < wordCopy.length; i++) {
//     if (wordCopy.slice(i, i + findWord.length) == findWord) {
//         wordCopy = wordCopy.slice(0, i) + replace + wordCopy.slice(i + findWord.length)
//     }
// }

// afterReplace.innerHTML = wordCopy





/*
Question 9

Write a program that converts a string “472” to a number 472.
Display the values & types in your browser.

*/

// Answer:

// let value1 = document.querySelectorAll("span")[0]
// let type1 = document.querySelectorAll("span")[1]
// let value2 = document.querySelectorAll("span")[2]
// let type2 = document.querySelectorAll("span")[3]

// type1.innerHTML = typeof value1.innerHTML
// let num = Number(value1.innerHTML)
// value2.innerHTML = num
// type2.innerHTML = typeof num


/*
Question 10

Write a program that take a URL as user input in the
following format: (www.facebook.com / www.yahoo.com ).
Extract the domain name & show in your browser.

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let url = document.querySelectorAll("span")[0]
// let domain = document.querySelectorAll("span")[1]

// function getDomain(){
//     if(userInput.value.startsWith("www.")){
//         url.innerHTML = userInput.value;
//         domain.innerHTML = userInput.value.slice(4)
//     }
//     else{
//         alert("enter the valid value start with www.")
//     }
// }



/*
Question 11

Write a program that takes user input. Convert and show the
input in capital letters.

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let userValue = document.querySelectorAll("span")[0]
// let upperCaseName = document.querySelectorAll("span")[1]

// function upperCase(){
//     userValue.innerHTML = userInput.value;
//     upperCaseName.innerHTML = userInput.value.toUpperCase()
// }


/*
Question 12
Write a program that takes user input. Convert and show the
input in small letters..

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let userValue = document.querySelectorAll("span")[0]
// let lowwerCaseName = document.querySelectorAll("span")[1]

// function lowwerCase (){
//     userValue.innerHTML = userInput.value;
//     lowwerCaseName.innerHTML = userInput.value.toLowerCase()
// }






/*
Question 13
Write a program that takes user input. Convert and show the
input in title case.

*/

// Answer:

// let userInput = document.querySelectorAll("input")[0]
// let userValue = document.querySelectorAll("span")[0]
// let titleCaseName = document.querySelectorAll("span")[1]

// function titleCase (){
//     let toArray = userInput.value.split(" ")
//     let titleCaseArray = []
//     for(let i = 0 ; i < toArray.length;i++){
//         let firstchr = toArray[i][0].toUpperCase()
//         let restchr = toArray[i].slice(1).toLowerCase()
//         let tileName = firstchr + restchr
//         titleCaseArray.push(tileName)
//     }
//     titleCaseName.innerHTML = titleCaseArray.join(" ")
//     userValue.innerHTML = userInput.value
// }




/*
Question 14

Write a program that converts the variable num to string.
          var num = 35.36 ;
Remove the dot to display “3536” display in your browser.

*/

// Answer:

// let num = 35.36
// let result;

// result = num.toString()
// console.log(result)
// console.log(result.replace(".",""))




/*
Question 15

Write a program to display the value of x in your browser if a=”3” 
and b=”3”?

*/

// Answer:

// let a = "3"
// let b = "3"
// let x = a + b
// console.log(x)



/*
Question 16

Write a program to display the value of y in your browser if a=”3” 
and b=”3”?

*/

// Answer:

// let a = "3"
// let b = "3"
// let y = a - b
// console.log(y)




/*
Question 17

 Write a program to take user input and store username in a 
variable. If the username contains any special symbol among 
[@ . , !], prompt the user to enter a valid username. For 
character codes of  [@ . , !], refer to ASCII table at the end of 
this document. 
Note: 
ASCII code of ! is 33 
ASCII code of , is 44 
ASCII code of . is 46 
ASCII code of @ is 64

*/

// Answer:

// let userName = document.querySelectorAll("input")[0]
// let displayMsg = document.querySelectorAll("span")[0]


// function Submit(){
//     let invaild = [33,44,46,64]
//     for(let i = 0; i < userName.value.length ; i++){
//         if(invaild.includes(userName.value.charCodeAt(i))){
//             displayMsg.innerHTML = "please enter vailld name"
//         }
//         else{
//             displayMsg.innerHTML = "You enter vaild Name"
//         }
//     }
// }


/*
Question 18

You have an array 
          A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an array. 
After searching, prompt the user whether the given item is 
found in the list or not.  
Note: Perform case insensitive search. Whether the user enters 
cookie, Cookie, COOKIE or coOkIE, program should inform 
about its availability. Example: 

*/

// Answer:

// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = document.querySelectorAll("input")[0]
// let msg = document.querySelectorAll("p")[0]

// function order(){
//     let value = userInput.value.toLowerCase()
//     if(bakery.includes(value)){
//         msg.innerHTML = `${value} is Available at index ${bakery.indexOf(value)} in our bakery`
//     }else{
//         msg.innerHTML =  `${value} is not Available in our bakery`
//     }
// }


/*
Question 19

Write a program to take two input strings. Using string 
comparison, tell which string is greater than other or if they 
both are equal.

*/

// Answer:

// let str1 = document.querySelectorAll("input")[0]
// let str2 = document.querySelectorAll("input")[1]
// let msg = document.querySelectorAll("p")[0]

// function compare(){
//     let campareValue = str1.value.localeCompare(str2.value)
//     console.log(campareValue)
//     if(campareValue == 1){
//         msg.innerHTML = `${str1.value} is greater than ${str2.value}`
//     }else if(campareValue == -1){
//         msg.innerHTML = `${str1.value} is smaller than ${str2.value}`
//     }else if(campareValue == 0){
//         msg.innerHTML = `${str1.value} is equal to ${str2.value}`
//     }
// }


/*
Question 20

Write a program to take password as an input from user. The 
password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number 
c. It must at least 6 characters long 
If the password does not meet above requirements, 
prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII 
table at the end of this document.

*/

// Answer:


let password = document.querySelectorAll("input")[0];
let msg = document.querySelectorAll("p")[0];

function check() {
    msg.innerHTML = ""; 

    let validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

    if (password.value.length < 6) {
        msg.innerHTML += `Password should be at least 6 characters long <br />`;
    }

    if (!validRegex.test(password.value)) {
        msg.innerHTML += `Password should contain only letters and numbers <br />`;
    }

    if (/[0-9]/.test(password.value[0])) {
        msg.innerHTML += `Password should not start with a number`;
    }
}

//                             End Assignment 20 - 25