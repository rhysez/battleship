import { Gameboard } from './gameboard.js'

const Ship = (size) => {
    let hits = 0
    let sunk = false
    function hit(){
        this.timesHit += 1
        console.log(this.timesHit)
    }
    function isSunk(){
        this.hits === this.size ? this.sunk = true : this.sunk = false
    }
    return { size, hits, sunk, hit, isSunk }
}

export { Ship }
