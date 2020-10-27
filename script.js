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
    const classList = e.target.classList
    const location = classList[1]
    
    if(classList[2] === 'x' || classList[2] === 'o'){
        return
    }
    
    if (xIsNext) {
        classList.add('x')
        xIsNext = !xIsNext
    } else {
        classList.add('o')
        xIsNext= !xIsNext
    }
}




//event listeners

resetGame.addEventListener('click', handleReset)

for (const gameSquare of gameSquares) {
    gameSquare.addEventListener('click', handleSquareClick)
}