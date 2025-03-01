/*
take name from user
check if user not give name return msg 
make it titlecasename from user
show on Dom 
*/

// let inputEle = document.querySelectorAll("input")[0]
// let pELe = document.querySelectorAll(".errormsg")[0]
// let olEle = document.querySelectorAll("ol")[0]
// let errorMsg = "Plz enter you name "
// function titleCase() {
//     let userName = inputEle.value;
//     if (!userName) {
//         pELe.innerHTML = errorMsg;
//         return;
//     }
//     let splitname = userName.split(" ")
//     let titleCaseNames = []
//     for (let i = 0; i < splitname.length; i++) {
//         let eachName = splitname[i]
//         let firstChr = eachName[0].toUpperCase()
//         let restChr = eachName.slice(1).toLowerCase()
//         let titleCase = `${firstChr}${restChr}`
//         titleCaseNames.push(titleCase)
//     }
//     let titleCaseName = titleCaseNames.join(" ")
//     olEle.innerHTML += `<li>${titleCaseName}</li>`;
//     console.log(titleCaseName)

// }










/*
generate random numbers 1 to 6 
then make condition to change img src accouding to the number
*/

// let imgEle = document.querySelectorAll('img')[0]
// function spinDisc() {
//     let num = Math.ceil(Math.random() * 6)
//     if (num === 1) {
//         imgEle.src = "/images/disc1.png"
//     }
//     else if (num === 2) {
//         imgEle.src = "/images/disc2.png"
//     }
//     else if (num === 3) {
//         imgEle.src = "/images/disc3.png"
//     }
//     else if (num === 4) {
//         imgEle.src = "/images/disc4.png"
//     }
//     else if (num === 5) {
//         imgEle.src = "/images/disc5.png"
//     }
//     else if (num === 6) {
//         imgEle.src = "/images/disc6.png"
//     }
//     console.log(num)
// }




// let para = "Lorem ipsum dolor sit amet World War II consectetur adipisicing elit. Illum fuga excepturi esse! Vitae World War II eveniet impedit iure  erosimilique, World War II ab voluptatibus dolores quisquam World War II optio eaque rerum, explicabo a molestias id World War II unde!"

// let findword = "World War II"
// let replaceword = "the Second World War"

// for( let i = 0 ; i < para.length; i++){
//     if(para.slice(i,i + findword.length) === findword){
//         para = para.slice(0,i) + replaceword + para.slice(i + findword.length)
//     }
// }
// console.log(para)