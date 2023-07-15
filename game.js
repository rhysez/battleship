import { Player } from "./player.js";

// run with npx-live-server from root dir

const Game = () => {
  const player = Player();
  const computer = Player();
  let isGameOver = false

  const setUpPlayersAndBoards = () => {
    player.gameboard.createBoard();
    computer.gameboard.createBoard();
  };

  // uses pre-set co-ordinates for now
  const placePlayerShips = () => {
    player.gameboard.placeShip(player.gameboard.fleet.carrier, 5);
    player.gameboard.placeShip(player.gameboard.fleet.battleship, 20);
    player.gameboard.placeShip(player.gameboard.fleet.cruiser, 30);
    player.gameboard.placeShip(player.gameboard.fleet.destroyer, 60);
  };

  const placeComputerShips = () => {
    computer.gameboard.placeShip(computer.gameboard.fleet.carrier, 10);
    computer.gameboard.placeShip(computer.gameboard.fleet.battleship, 30);
    computer.gameboard.placeShip(computer.gameboard.fleet.cruiser, 40);
    computer.gameboard.placeShip(computer.gameboard.fleet.destroyer, 80);
  };

  const makeAttack = (coord) => {
    player.attack(computer, coord)
    setTimeout(() => {
        computer.attack(player, computer.returnRandomCoord())
    }, 2000)
  };

  return {
    player,
    computer,
    isGameOver,
    setUpPlayersAndBoards,
    placePlayerShips,
    placeComputerShips,
    makeAttack,
  };
};

const newGame = Game();

const elements = () => {
  const playerGameboard = document.getElementById("playerGameboard");
  const computerGameboard = document.getElementById("computerGameboard");

  const renderPlayerGameboard = () => {
    for (let i = 0; i < newGame.player.gameboard.board.length; i++){
      let newCell = document.createElement('div')
      element.playerGameboard.appendChild(newCell)
      newCell.textContent = newGame.computer.gameboard.board[i]
      newCell.classList.add('cell')
      newCell.id = newGame.computer.gameboard.board[i]
    }
  };

  const renderComputerGameboard = () => {
    for (let i = 0; i < newGame.computer.gameboard.board.length; i++){
      let newCell = document.createElement('div')
      element.computerGameboard.appendChild(newCell)
      newCell.textContent = newGame.computer.gameboard.board[i]
      newCell.classList.add('cell')
      newCell.id = newGame.computer.gameboard.board[i]
    }
  };

  return {
    playerGameboard,
    computerGameboard,
    renderPlayerGameboard,
    renderComputerGameboard,
  };
};

const element = elements();

export { newGame, Game, element, elements }

newGame.player.gameboard.createBoard()
newGame.computer.gameboard.createBoard()

element.renderPlayerGameboard()
element.renderComputerGameboard()


