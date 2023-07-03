'use strict'

const Ship = (size) => {
    let timesHit = 0
    function hit(){
        this.timesHit += 1
        console.log(this.timesHit)
    }
    function isSunk(){
        this.timesHit == this.size * 2 ? console.log('Ship sunk') : console.log('Ship not sunk')
    }
    return { size, timesHit, hit, isSunk }
}

let newShip = Ship(2)

module.exports = newShip

