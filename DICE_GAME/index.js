

  
// Random Number 1 to 6 for player1
const firstRandomNum = Math.floor(Math.random() * 6)+1

// img/dice??.png for player1
const firstDiceImage = 'images/assets/dice' + firstRandomNum + '.png'

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

// Random Number 1 to 6 for player2
const secondRandomNum = Math.floor(Math.random() * 6)+1

// img/dice??.png for player2
const secondDiceImage = 'images/assets/dice' + secondRandomNum + '.png'

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

//logic 
if(firstRandomNum>secondRandomNum){
    document.querySelector('h1').innerHTML='Player 1  Wins !'
}
else if(firstRandomNum<secondRandomNum){
    document.querySelector('h1').innerHTML='Player 2  Wins !'
}
else {
    document.querySelector('h1').innerHTML='Draw! '
}
