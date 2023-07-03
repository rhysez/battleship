'use strict'

const Ship = (size) => {
    let timesHit = 0
    let sunkStatus = false
    function hit(){
        this.timesHit += 1
        console.log(this.timesHit)
    }
    function isSunk(){
        this.timesHit == this.size * 2 ? this.sunkStatus = true : this.sunkStatus = false
    }
    return { size, timesHit, sunkStatus, hit, isSunk }
}

