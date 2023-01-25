'use strict'

const MINE = '💣'
const NORMAL = '🙂'
const LOSE = '🤯'
const WIN = '😎'
const HINT = '💡'
const LIVE = '❤️'
const FLAG = '🚩'

var gBoard
var gGame
var gLives
var gLevel = {
    size: 4,
    mines: 2
}



function OnInIt() {
    gGame = {
        isOn: true,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }
    gBoard = buildBoard()
    console.table(gBoard);
    renderBoard(gBoard)


}


function buildBoard() {
    var size = gLevel.size
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            const cell = {
                i: i,
                j: j,
                minesAroundCount: 0, // function that gets the mines
                isShown: false,
                isMine: false,
                isMarked: false
            }
            board[i][j] = cell
        }
    }
    board[0][0].isMine = true
    board[1][2].isMine = true
    return board;
}


function setMinesNegsCount(board, rowIdx, colIdx) {
    var minesCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= colIdx.length) continue

        }
    }
    return minesCount
}



function cellClicked(cell, i, j) {
    console.log(cell, i, j);
    if (!gGame.isOn) return
    var currCell = gBoard[i][j]
    if (currCell.isMarked) return

    if (!currCell.isShown) {
        currCell.isShown = true

        if (currCell.isMine) {
            gBoard[i][j].isShown = true


        }

    }

}

function renderLives() {
    document.querySelector('.lives').innerText = LIVE.repeat(gLives)

}

function onCellMarked(ev,) {
    ev.preventDefault()
    console.log('ok');


    // Called when a cell is right- clicked See how you can h ide the context
    // menu on right click
}

function checkGameOver() {

    // Game ends when all mines are marked, and all the other cells are shown

}

function expandShown(board, elCell, i, j) {

    // When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors. NOTE: start with 
    // a basic implementation that only opens the non-mine 1st degree neighbors 
    // BONUS: if you have the time later, try to work more like the real algorithm (see description at the Bonuses section below)

}



