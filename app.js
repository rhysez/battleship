'use strict'

const Ship = (length) => {
    let timesHit = 0
    const hit = () => {
        timesHit++
        console.log(timesHit)
    }
    let isSunk = false
    return { length, hit, isSunk }
}

const newShip = Ship(2)
console.log(newShip)

module.exports = add, newShip

