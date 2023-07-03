import { Ship } from './ship.js'

const Gameboard = (shipSize) => {
    const board = Array.from(Array(10).keys())
    const ships = []
    const missedAttacksList = []
    const newShip = Ship(shipSize)

    function placeShip(ship, x, y){
        if (x < 0 || x >= 10 || y < 0 || y >= 10){
            throw new Error('Invalid co-ordinates.')
        }

    }

    return { board, ships, placeShip, missedAttacksList, createShip }
}

export { Gameboard }