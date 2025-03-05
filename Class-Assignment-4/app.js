let TeamA = document.querySelectorAll(".teamAImg")[0];
let TeamB = document.querySelectorAll(".teamBImg")[0];
let TeamAScore = document.querySelectorAll(".teamAScore")[0];
let TeamBScore = document.querySelectorAll(".teamBScore")[0];
let winnerName = document.querySelectorAll(".winnerName")[0];
let rockImg = "images/rock.png";
let paperImg = "images/paper.png";
let scissorsImg = "images/scissors.png";
let paper = "paper"
let rock = "rock"
let scissor = "scissor"


function play(user) {
    // let num1 = Math.ceil(Math.random() * 3);
    let num1 = user;
    let num2 = Math.ceil(Math.random() * 3);
    // console.log(num1)
    // console.log(num2)
    // select items
    if (num1 === rock) {
        TeamA.src = rockImg
    } 
    else if (num1 === paper) {
        TeamA.src = paperImg
    }
    else if (num1 === scissor) {
        TeamA.src = scissorsImg
    }


    // add img according to the item
    if (num2 === 1) {
        TeamB.src = rockImg
    } 
    else if (num2 === 2) {
        TeamB.src = paperImg
    }
    else if (num2 === 3) {
        TeamB.src = scissorsImg
    }

    // check the winner and update score
    if (num1 === rock && num2 === 3 || num1 === paper && num2 === 1 || num1 === scissor && num2 === 2) {
        TeamAScore.innerHTML = Number(TeamAScore.innerHTML) + 1;
        winnerName.innerHTML = "Team A wins";

    }
    if (num2 === 1 && num1 === scissor || num2 === 2 && num1 === rock || num2 === 3 && num1 === paper) {
        TeamBScore.innerHTML = Number(TeamBScore.innerHTML) + 1;
        winnerName.innerHTML = "Team B wins";
    }
    else if (num1 === rock && num2 === 1 || num1 === paper && num2 === 2 || num1 === scissor && num2 === 3) {
        winnerName.innerHTML = "It's a draw";
    }
}