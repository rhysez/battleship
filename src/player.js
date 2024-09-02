import { Gameboard } from './gameboard.js'
import { element } from './game.js'
import Toastify from "toastify-js";

const Player = () => {
    const gameboard = Gameboard()
    let isTurn = true

    // returns a random number between 1 and 99 - working
    function returnRandomCoord(){
        let randomIndex = Math.floor(Math.random() * gameboard.board.length)
        if (element.playerCells[randomIndex].style.backgroundColor === "lightgreen"){
            element.playerCells[randomIndex].style.backgroundColor = "crimson"
        } else { 
            element.playerCells[randomIndex].style.backgroundColor = "aqua"
        }
        return randomIndex
    }

    // takes enemy parameter (player or computer variable) - working
    // can take returnRandomCoord() in coord parameter - working
    function attack(enemy, coord){
        enemy.gameboard.recieveAttack(coord)
    }
      
    return { gameboard, isTurn, returnRandomCoord, attack }
}

export { Player }





