let TeamA = document.querySelectorAll(".teamAImg")[0];
let TeamB = document.querySelectorAll(".teamBImg")[0];
let TeamAScore = document.querySelectorAll(".teamAScore")[0];
let TeamBScore = document.querySelectorAll(".teamBScore")[0];
let winnerName = document.querySelectorAll(".winnerName")[0];
let rock = "images/rock.png";
let paper = "images/paper.png";
let scissors = "images/scissors.png";

function play() {
    let num1 = Math.ceil(Math.random() * 3);
    let num2 = Math.ceil(Math.random() * 3);

    // select items
    if (num1 === 1) {
        TeamA.src = rock
    } 
    else if (num1 === 2) {
        TeamA.src = paper
    }
    else if (num1 === 3) {
        TeamA.src = scissors
    }


    // add img according to the item
    if (num2 === 1) {
        TeamB.src = rock
    } 
    else if (num2 === 2) {
        TeamB.src = paper
    }
    else if (num2 === 3) {
        TeamB.src = scissors
    }

    // check the winner and update score
    if (num1 === 1 && num2 === 3 || num1 === 2 && num2 === 1 || num1 === 3 && num2 === 2) {
        TeamAScore.innerHTML = Number(TeamAScore.innerHTML) + 1;
        winnerName.innerHTML = "Team A wins";

    }
    if (num2 === 1 && num1 === 3 || num2 === 2 && num1 === 1 || num2 === 3 && num1 === 2) {
        TeamBScore.innerHTML = Number(TeamBScore.innerHTML) + 1;
        winnerName.innerHTML = "Team B wins";
    }
    else if (num1 === 1 && num2 === 1 || num1 === 2 && num2 === 2 || num1 === 3 && num2 === 3) {
        winnerName.innerHTML = "It's a draw";
    }
}