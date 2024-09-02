import { Ship } from '../src/ship.js'
import { Gameboard } from '../src/gameboard.js'

describe('Ship object tests', () => {
    let newShip = Ship(2)
    // pass
    test('checks newShip variable is defined', () => {
        expect(newShip).toBeDefined
    })
    // pass
    test('checks newShip.size is equal to 2', () => {
        expect(newShip.size).toEqual(2)
    })
    // pass
    test('checks newShip.sunk is falsy', () => {
        expect(newShip.sunk).toBeFalsy
    })
    // pass
    test('checks hit() returns hits += 1', () => {
        function hit(){
            newShip.hits += 1
        }
        hit()
        expect(newShip.hits).toBe(1)
    })
    // pass
    test('checks isSunk() returns either true or false for sunk', () => {
        newShip.hits = 2
        function isSunk(){
            newShip.hits === newShip.size ? newShip.sunk = true : newShip.sunk = false
        }
        isSunk()
        expect(newShip.sunk).toBe(true)
    })
})

describe('Gameboard object tests', () => {
    let newGameboard = Gameboard()
    // pass
    test('checks there are 10 items in board', () => {
        expect(newGameboard.board.length).toBe(10)
    })

    test('ships object returns correct ship', () => {
        expect(fleet.carrier).toBe(Ship(5))
    })
})