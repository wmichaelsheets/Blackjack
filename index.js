let firstCard = 10
let secondCard = 3
let cards = [firstCard, secondCard] //array

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame () {

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    //console.log(hasBlackJack)
    //console.log(isAlive)

    messageEl.textContent = message

}

function newCard() {
    console.log("Drawing a new card from the deck")
    let thirdCard = 4
    sum += thirdCard
    renderGame()
}