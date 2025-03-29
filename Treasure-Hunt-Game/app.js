let cells = document.querySelectorAll(".grid-item")
let hint = document.querySelectorAll(".hint")[0]
let count = document.querySelectorAll(".count")[0]
let msg = document.querySelectorAll(".msg")[0]
let treasureIndex, lastGuess = null;

restart()
function play(userInput) {
    if (count.innerHTML == 0) {
        msg.innerHTML = "Game Over! Try again"
        cells[userInput - 1].style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/emotion-faces/32/no_treasure_pirate_face_faces_emoji_emojis--512.png")';
        cells[userInput - 1 ].style.backgroundSize = "cover";
        setTimeout(function () {
            cells[userInput - 1 ].style.backgroundImage = 'none';
            restart()
        }, 3000)
    } else {
        count.innerHTML = count.innerHTML - 1
    }

    if (userInput === treasureIndex + 1) {
        cells[treasureIndex].style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/11281/11281165.png")';
        cells[treasureIndex].style.backgroundSize = "cover";
        msg.innerHTML = "Congratulations! You found the treasure!"
        setTimeout(function () {
            cells[treasureIndex].style.backgroundImage = 'none';
            restart()
        }, 3000)
        return
    }
    else {
        if (lastGuess !== null) {
            let previousDistance = Math.abs(lastGuess - (treasureIndex + 1));
            let currentDistance = Math.abs(userInput - (treasureIndex + 1));
            
            if (currentDistance < previousDistance) {
                hint.innerHTML = "Hint: 🔥 Warmer!";
            } else {
                hint.innerHTML = "Hint: ❄️ Colder!";
            }
        } else {
            hint.innerHTML = "Hint: 🔎 Keep searching!";
        }
        lastGuess = userInput;
    }
}
function restart() {
    treasureIndex = Math.floor(Math.random() * cells.length);
    lastGuess = null;
    
    count.innerHTML = 10;
    hint.innerHTML = "Hint: 🔎 Keep searching!";
    msg.innerHTML = "Welcome to the treasure hunt!";

}