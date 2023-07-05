import { Ship } from './ship.js'

const Gameboard = (shipSize) => {
    const board = []
    const ships = []
    const missedAttacksList = []
    const newShip = Ship(shipSize)

    function createBoard(){ // returns 'i is undefined'
        for (i = 0; i < 10; i++){
            for (j = 0; j < 10; i++){
                board = [`${i}, ${j}`] = 'unselected'
                console.log(board)
            }
        }
    }

    function placeShip(ship, x, y){
        if (x < 0 || x >= 10 || y < 0 || y >= 10){
            throw new Error('Invalid co-ordinates.')
        }

    }

    return { board, ships, placeShip, missedAttacksList, newShip, createBoard, placeShip }
}

let newGameboard = Gameboard(2)

newGameboard.createBoard()
export { Gameboard }