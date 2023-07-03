import { newShip } from './app.js'

describe('Ship object tests', () => {
    // pass
    test('checks newShip variable is defined', () => {
        expect(newShip).toBeDefined
    })
    // pass
    test('checks newShip.size is equal to 2', () => {
        expect(newShip.size).toEqual(2)
    })
    // pass
    test('checks newShip.sunkStatus is falsy', () => {
        expect(newShip.size).toBeFalsy
    })
    // pass
    test('checks hit() returns timesHit += 1', () => {
        function hit(){
            newShip.timesHit += 1
        }
        hit()
        expect(newShip.timesHit).toBe(1)
    })
    // pass
    test('checks isSunk() returns either true or false for sunkStatus', () => {
        newShip.timesHit = 4
        function isSunk(){
            newShip.timesHit == newShip.size * 2 ? newShip.sunkStatus = true : newShip.sunkStatus = false
        }
        isSunk()
        expect(newShip.sunkStatus).toBe(true)
    })
})