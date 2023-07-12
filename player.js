import { Ship } from './ship.js'
import { Gameboard } from './gameboard.js'

const Player = (enemy) => {
    const gameboard = Gameboard()
    function attack(coord){
        enemy.gameboard.board[coord] = 'KIA'
        console.log(`Attacking cell ${coord}`)
    }
    return { gameboard, attack }
}

const computer = Player() // computer targets player // adding 'player' argument returns error
const player = Player(computer) // player targets computer


console.log(computer.gameboard.createBoard())
console.log(computer.gameboard.board)
console.log(player.attack(10))
console.log(computer.gameboard.board)