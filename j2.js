let cards =[]
let sum = 0;
let hasblackjack = false
let isalive = false
let message= "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

//player object
let player = {
     name:"You",
     chips: 200
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips + " "


function getrandomcard(){
    let Rc = Math.floor(Math.random()*13) + 1;

    if (Rc>10){
        return 10
    } else if (Rc === 1){
        return 11
    } else{
        return Rc
    }
}

function startgame(){
    if (sum === 0){
    isalive=true
    let firstcard=getrandomcard();
    let secondcard= getrandomcard();
    sum = firstcard + secondcard;
    cards.push(firstcard)
    cards.push(secondcard)
    rendergame()
    }
}

function rendergame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
    console.log(cards[i])
    }
if(sum <= 20){
    message = "Do you want to draw a new card?"
} else if(sum ===21){
    message = "Wohoo! You've got a blackjack!"
    hasblackjack = true
} else{
    message = "You're out of game!"
    isalive = false
}
messageEl.textContent = message;
}


function newcard(){
    console.log("new card")
    if (isalive ===true && hasblackjack === false){
    let card = getrandomcard();
    sum = sum + card;
    cards.push(card)
    rendergame();
    }
}

function reset(){
    sum = 0;
    cards = [];
    isalive = false;
    hasblackjack = false;
    message = "Want to play a round?";
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
}
