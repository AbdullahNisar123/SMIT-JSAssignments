/*
1. Create an Object:

Create an object called car with properties: make, model, year, and color. Assign appropriate values to each property.

*/


// Answer:

// let car = {
//     make:"Pak Suzuki Motors",
//     modul:"Mehran",
//     year:1989,
//     color: "white"
// }
// console.log(car)



/*
2. Accessing Object Properties:
Given the following object:

const user = {
    name: "John",
    age: 30,
    email: "john.doe@example.com"
};
Write code to print out the user's name and email to the console.

*/


// Answer:

// let user = {
//     name:"John",
//     age:39,
//     email: "john.doe@exaple.com"
// };
// console.log("user name is:",user.name)
// console.log("user email is:",user.email)


/*

3. Update Object Property:
Using the object car you created earlier, update the color property to red and log the updated object to the console.


*/


// Answer:

// let car = {
//     make:"Pak Suzuki Motors",
//     modul:"Mehran",
//     year:1989,
//     color: "white"
// }

// car.color = "red"
// console.log(car)





/*

4. Adding New Properties to an Object:
Add a new property price to the car object, and assign it a value of 20000. Print the updated object.


*/


// Answer:

// let car = {
//     make:"Pak Suzuki Motors",
//     modul:"Mehran",
//     year:1989,
//     color: "white"
// }

// car.price = 2000000;
// console.log(car)





/*
5. 
Create an object called person with properties firstName and lastName. print first name + last name.

*/


// Answer:

// let person = {
//     firstName: "Abdullah",
//     lastName: "Nisar"
// }

// console.log(`${person.firstName} ${person.lastName}`)


/*
7. Selecting Multiple Elements:
Write a JavaScript function that selects all the paragraphs (<p>) on a webpage and change their text to something else.


*/


// Answer:

// let pEle = document.querySelectorAll("p");

// for(let i = 0; i < pEle.length; i++){
// pEle[i].innerHTML = "hello JavaScript"
// }




/*
8. Looping Through NodeList:
Using document.querySelectorAll(), select all the list items (<li>) with the class menu-item and log each one to the console.
*/

// Answer:

// let liEle = document.querySelectorAll(".menu-item")

// for(let i = 0 ; i < liEle.length; i++){
//     console.log(liEle[i].innerHTML)
// }

/*
9. Manipulating Text Content:
Select all the <h2> tags on the page and change their text content to "Updated Title".

*/


// Answer:



// let h2Ele = document.querySelectorAll("h2")
// for(let i = 0 ; i < h2Ele.length ; i ++){
//     h2Ele[i].innerHTML = "Updated Title"
// }



