let king = "https://media.istockphoto.com/id/458126511/photo/playing-card-king-of-spades.jpg?s=612x612&w=0&k=20&c=izZIfVQt5rsQXvnpVQdSW8erqOgZdbOQsq8IZ2E3zpg="

let queen = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/1200px-Queen_of_spades2.svg.png"

let jack = "https://media.istockphoto.com/id/124676510/photo/close-up-of-jack-of-spades-playing-card.jpg?s=612x612&w=0&k=20&c=JepUaNknZV_d4_keuzKZWWTmUTt--t85FH9d3t0HrWc="

let cardsImgs = document.querySelectorAll("img")
let cardsArr = [king, queen, jack]
let score = document.querySelectorAll("span")[0]
let msg = document.querySelectorAll("h1")[0]

// let scoreToNum = Number(score.innerHTML)
function play(cartName) {
    let randomNum1 = Math.floor(Math.random() * 3)
    let userSelect = cardsArr[randomNum1];
    let remainingCards = [...cardsArr];
    let index = remainingCards.indexOf(userSelect)
    remainingCards.splice(index, 1)

    // check on which card user clicked on
    let nextCard = 0

    for (let i = 0; i < cardsImgs.length; i++) {
        if (cartName == cardsImgs[i].id) {
            cardsImgs[i].src = cardsArr[randomNum1]
        } else {
            cardsImgs[i].src = remainingCards[nextCard]
            nextCard++;
        }
    }

    if(userSelect == king){
       score.innerHTML = Number(score.innerHTML) + 10
    }
    else if(userSelect == queen){
        score.innerHTML = Number(score.innerHTML) + 5
    }
    else if(userSelect == jack){
        score.innerHTML = Number(score.innerHTML) - 5
    }

    if(Number(score.innerHTML) >= 30){
       msg.innerHTML =`Congratulations! <br /> You have successfully completed the game with ${score.innerHTML}`
    }
    console.log(score.innerHTML)
}