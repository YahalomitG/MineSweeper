'use strict'

function createBorad(){
var size = gSize
const board = []
for( var i = 0; i < size; i++){
    board.push([])
}

}


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`
            strHTML += `<td class="${className}" onclick="cellClicked(this,${i} , ${j} )" oncontextmenu=" onCellMarked(event)"> ${cell.minesAroundCount}</td>`
        }
        strHTML += '</tr>'
    }
    // strHTML += '</tbody></table>'

    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


