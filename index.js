let firstCard = 10
let secondCard =7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame () {
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
sumEl.textContent = "Sum: " + sum
}