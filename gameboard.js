import { Ship } from './ship.js'

const Gameboard = () => {
    let board = []
    let ships = []
    let missedAttacksList = []

    // generates co-ordinates for the board
    function createBoard(){ 
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                board.push([`${i}, ${j}`])
            }
        }
        console.log(board)
    }

    function placeShip(ship, x, y){
        if (x < 0 || x >= 10 || y < 0 || y >= 10){
            throw new Error('Invalid co-ordinates.')
        }

    }

    return { board, ships, placeShip, missedAttacksList, createBoard, placeShip }
}

let newGameboard = Gameboard()

newGameboard.createBoard()
export { Gameboard }