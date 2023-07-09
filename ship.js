const Ship = (size) => {
    let hits = 0
    let sunk = false
    function hit(){
        this.timesHit += 1
    }
    function isSunk(){
        this.hits === this.size ? this.sunk = true : this.sunk = false
    }
    return { size, hits, sunk, hit, isSunk }
}

const ships = {
    carrier: Ship(5),
    battleship: Ship(4),
    cruiser: Ship(3),
    destroyer: Ship(2)
}

export { Ship, ships }
