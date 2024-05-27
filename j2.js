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
     name:"Snow",
     chips: 200
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips + " "


function getrandomcard(){
    let Rc = Math.floor(Math.random()*13) + 1;
/*
    if(Rc== 1){
        return 11
    }else if(Rc ==11 || Rc ==12 || Rc ==13){
        return 10
    }
    return Rc*/

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


/*
let c=[2,3,5]

for(let i=0;i<c.length;i++){
    console.log(c[i])
}

let sen =['a','b','c','e']
let gretEl =document.getElementById("gret")

for (let i=0;i<sen.length;i++){
    gretEl.textContent += sen[i] + " "
}
let p1 =102
let p2 = 107

function trt(){
     return p1  + p2;

}
rt = trt()
var rt 
console.log(rt)

let rv = Math.floor( Math.random()*6) + 1
console.log(rv)

let airbnb = {
    isaval: true,
    location: "theking",
    price: 200,
    tags: ["pr",1,"ww"]
}

console.log(airbnb.price)*/