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
  const placePlayerCarrier = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.carrier, coords);
    element.fillCellColor(coords)
    element.fillCellColor(coords + 1)
    element.fillCellColor(coords + 2)
    element.fillCellColor(coords + 3)
    element.fillCellColor(coords + 4)
  };

  const placePlayerBattleship = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.battleship, coords);
    element.fillCellColor(coords)
    element.fillCellColor(coords + 1)
    element.fillCellColor(coords + 2)
    element.fillCellColor(coords + 3)
  };

  const placePlayerCruiser = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.cruiser, coords);
    element.fillCellColor(coords)
    element.fillCellColor(coords + 1)
    element.fillCellColor(coords + 2)
  };

  const placePlayerDestroyer = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.destroyer, coords);
    element.fillCellColor(coords)
    element.fillCellColor(coords + 1)
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
    placePlayerCarrier,
    placePlayerBattleship,
    placePlayerCruiser,
    placePlayerDestroyer,
    placeComputerShips,
    makeAttack,
  };
};

const newGame = Game();

const elements = () => {
  const playerGameboard = document.getElementById("playerGameboard");
  const computerGameboard = document.getElementById("computerGameboard");
  const cell = document.getElementsByClassName('cell');

  const fillCellColor = (id) => {
    let getCell = document.getElementById(id)
    getCell.style.backgroundColor = "red" 
  }

  const renderPlayerGameboard = () => {
    for (let i = 0; i < newGame.player.gameboard.board.length; i++){
      let newCell = document.createElement('div')
      element.playerGameboard.appendChild(newCell)
      newCell.textContent = newGame.player.gameboard.board[i]
      newCell.classList.add('cell')
      newCell.id = i
    }
  };

  const renderComputerGameboard = () => {
    for (let i = 0; i < newGame.computer.gameboard.board.length; i++){
      let newCell = document.createElement('div')
      element.computerGameboard.appendChild(newCell)
      newCell.textContent = newGame.computer.gameboard.board[i]
      newCell.classList.add('cell')
      newCell.id = `${i} computer`
    }
  };

  return {
    playerGameboard,
    computerGameboard,
    cell,
    fillCellColor,
    renderPlayerGameboard,
    renderComputerGameboard,
  };
};

const element = elements();

export { newGame, Game, element, elements }

// game flow testing
// stage 1 - create boards
newGame.player.gameboard.createBoard()
newGame.computer.gameboard.createBoard()
// stage 2 - render boards
element.renderPlayerGameboard()
element.renderComputerGameboard()
// stage 3 - place ships
newGame.placePlayerCarrier(5)
newGame.placePlayerBattleship(12)
newGame.placePlayerCruiser(50)
newGame.placePlayerDestroyer(75)
newGame.placeComputerShips()



