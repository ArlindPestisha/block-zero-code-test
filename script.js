//All the HTML elements
const activePlayer = document.querySelector('.active-player')
const resetGame = document.querySelector('.reset')
const gameSquares = document.querySelectorAll('.game-square')


// game variables

let gameIsLive = true;
let xIsNext = true;


// event Handlers
const handleReset = (e) => {
    console.log(e)
}

const handleSquareClick = (e) => {
    console.log(e)
}


//event listeners

resetGame.addEventListener('click', handleReset)

for (const gameSquare of gameSquares) {
    gameSquare.addEventListener('click', handleSquareClick)
}