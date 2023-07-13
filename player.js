import { Gameboard } from './gameboard.js'

const Player = () => {
    const gameboard = Gameboard()
    let isTurn = true

    // returns a random number between 1 and 99 - working
    function returnRandomCoord(){
        let randomIndex = Math.floor(Math.random() * gameboard.board.length)
        return randomIndex
    }

    // takes enemy parameter (player or computer variable) - working
    function attack(enemy, coord){
        enemy.gameboard.recieveAttack(coord)
    }
      
    return { gameboard, isTurn, returnRandomCoord, attack }
}

const computer = Player()
const player = Player() 

player.gameboard.createBoard()
computer.gameboard.createBoard()
computer.gameboard.placeShip(computer.gameboard.fleet.destroyer, 15)
player.gameboard.placeShip(player.gameboard.fleet.destroyer, 10)

player.attack(computer, 15)
computer.attack(player, computer.returnRandomCoord())
player.attack(computer, 15)
computer.attack(player, computer.returnRandomCoord())




