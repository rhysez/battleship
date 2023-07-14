import { Player } from './player.js'

const newGame = () => {
    const player = Player()
    const computer = Player()

    player.gameboard.createBoard()
    computer.gameboard.createBoard()

    console.log(player.gameboard.board)
}

newGame()

