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
    winner = letter
    if (winner === 'x') {
        activePlayer.innerHTML = `${letterToSymbol(winner)} has won!`
    } else {
        activePlayer.innerHTML = `<span>${letterToSymbol(winner)} has won!</span>`
    }
 }

const gameStatus = () => {
    const cell1 = gameSquares[0].classList[1]
    const cell2 = gameSquares[1].classList[1]
    const cell3 = gameSquares[2].classList[1]
    const cell4 = gameSquares[3].classList[1]
    const cell5 = gameSquares[4].classList[1]
    const cell6 = gameSquares[5].classList[1]
    const cell7 = gameSquares[6].classList[1]
    const cell8 = gameSquares[7].classList[1]
    const cell9 = gameSquares[8].classList[1]

    //console.log(cell1, cell2)

    // Winner status
    if (cell1 && cell1 === cell2 && cell1 === cell3) {
        handleWin(cell1)
    } else if (cell4 && cell4 === cell5 && cell4 === cell6) {
        handleWin(cell4)
    } else if (cell7 && cell7 === cell8 && cell7 === cell9) {
        handleWin(cell7)
    } else if (cell1 && cell1 === cell4 && cell1 === cell7) {
        handleWin(cell1)
    } else if (cell2 && cell2 === cell5 & cell2 === cell8) {
        handleWin(cell2)
    } else if (cell3 && cell3 === cell6 & cell3 === cell9) {
        handleWin(cell3)
    } else if (cell1 && cell1 === cell5 && cell1 === cell9) {
        handleWin(cell1)
    } else if (cell3 && cell3 === cell5 & cell3 === cell7) {
        handleWin(cell3)
    } else if (cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8 && cell9) {
        gameIsLive = false
        activePlayer.innerHTML = 'Tie, play again!'
    } else {
        xIsNext = !xIsNext
        if (xIsNext) {
            activePlayer.innerHTML = `${xSymbol} is next`
        } else {
            activePlayer.innerHTML = `<span>${oSymbol} is next</span>`
        }
    }
}    
// event Handlers
const handleReset = (e) => {
    xIsNext = true
    activePlayer.innerHTML = `${xSymbol} is next`
    winner = null
    for (const gameSquare of gameSquares) {
        gameSquare.classList.remove('x')
        gameSquare.classList.remove('o')
    }
}

const handleSquareClick = (e) => {
    const classList = e.target.classList
    
    if(classList[1] === 'x' || classList[1] === 'o'){
        return
    }
    
    if (xIsNext) {
        classList.add('x')
        gameStatus()
    } else {
        classList.add('o')
        gameStatus()
    }
}

//event listeners
resetGame.addEventListener('click', handleReset)

for (const gameSquare of gameSquares) {
    gameSquare.addEventListener('click', handleSquareClick)
}