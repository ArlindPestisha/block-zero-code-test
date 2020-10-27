//All the HTML elements
const activePlayer = document.querySelector('.active-player')
const resetGame = document.querySelector('.reset')
const gameSquare = document.querySelectorAll('.game-square')


// game variables

let gameIsLive = true;
let xIsNext = true;


// event Handlers
const handleReset = (e) => {
    console.log(e)
}




//event listeners

resetGame.addEventListener('click', handleReset)