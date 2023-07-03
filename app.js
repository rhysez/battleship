'use strict'

const Ship = (size, cord1, cord2) => {
    let timesHit = 0
    let sunkStatus = false
    function hit(){
        this.timesHit += 1
        console.log(this.timesHit)
    }
    function isSunk(){
        this.timesHit == this.size * 2 ? this.sunkStatus = true : this.sunkStatus = false
    }
    return { size, cord1, cord2, timesHit, sunkStatus, position, hit, isSunk }
}

const Gameboard = () => {
    function placeShip(){
        let newShip = Ship(2, 5, 7)
        return newShip
    }
    function recieveAttack(attack){
        // takes co-ords, if attack hits a ship then send 'hit' function to correct ship
        // not sure if this works yet
        attack >= newShip.cord1 && attack <= newShip.cord2 ? newShip.hit() : this.miss()
    } 

    let missedAttacks = []

    function miss(){
        alert('You missed!')
        missedAttacks.push('miss')
    }

    return { placeShip, recieveAttack, missedAttacks, miss }
}

module.exports = newShip
