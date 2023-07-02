'use strict'

const Ship = (length) => {
    let timesHit = []
    const hit = () => {
        timesHit.push(1) // using a number instead of array returns 0, issue with scope/closure 
        console.log(timesHit)
    }
    let isSunk = false
    return { length, timesHit, hit, isSunk }
}

let newShip = Ship(2)
console.log(newShip)

module.exports = add, newShip

