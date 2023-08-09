// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cards = []
let hasBlackJack = false;
let sum = 0;
let isAlive = false;
let message = ""

let player = {
    name : "Arul",
    chips : 150

}
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent=player.name+ ": $"+player.chips 

function getRandomCard(){
   let getRandomCardNumber = Math.floor(Math.random()*13 + 1)
   if(getRandomCardNumber === 1){
    return 11
   }else if(getRandomCardNumber >10){
    return 10
   }else{
   return getRandomCardNumber
   }
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}
function renderGame(){
    sumEl.textContent= "Sum: " + sum;
    cardsEl.textContent= "Cards: "
    for(let i = 0; i<cards.length; i++){
    cardsEl.textContent += cards[i]+" ";
    }
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "Woohoo you have got blackjack."
        hasBlackJack = true
    }else{
        message = "You lost"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive === true && hasBlackJack===false){
    
    let card = getRandomCard();

    sum += card
    cards.push(card)
    // console.log(cards)
    renderGame()
    }
}