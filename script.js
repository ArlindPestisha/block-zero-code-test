//All the HTML elements
const activePlayer = document.querySelector('.active-player')
const resetGame = document.querySelector('.reset')
const gameSquares = document.querySelectorAll('.game-square')

// game constants
const xSymbol = '×'
const oSymbol = '○'

// game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

//Functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol
const handleWin = (letter) => {
    gameIsLive = false
    winner = cell1
    if (cell1 === 'x') {
        activePlayer.innerHTML = `${letterToSymbol(cell1)} has won!`
    } else {
        activePlayer.innerHTML = `<span>${letterToSymbol(cell1)} has won!</span>`
    }
 }

const gameStatus = () => {
    const cell1 = gameSquares[0].classList[2]
    const cell2 = gameSquares[1].classList[2]
    const cell3 = gameSquares[2].classList[2]
    const cell4 = gameSquares[3].classList[2]
    const cell5 = gameSquares[4].classList[2]
    const cell6 = gameSquares[5].classList[2]
    const cell7 = gameSquares[6].classList[2]
    const cell8 = gameSquares[7].classList[2]
    const cell9 = gameSquares[8].classList[2]

    //console.log(cell1, cell2)

    // Winner status
    if (cell1 && cell1 === cell2 && cell1 === cell3) {
        
    }
}

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
        gameStatus()
        xIsNext = !xIsNext
    } else {
        classList.add('o')
        gameStatus()
        xIsNext= !xIsNext
    }
}

//event listeners
resetGame.addEventListener('click', handleReset)

for (const gameSquare of gameSquares) {
    gameSquare.addEventListener('click', handleSquareClick)
}