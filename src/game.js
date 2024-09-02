import { Player } from "./player.js";

// run with npx-live-server from root dir

const Game = () => {
  const player = Player();
  const computer = Player();
  let isGameOver = false;

  const setUpPlayersAndBoards = () => {
    player.gameboard.createBoard();
    computer.gameboard.createBoard();
  };

  // uses pre-set co-ordinates for now
  const placePlayerShip = (coords, ship) => {
    player.gameboard.placeShip(ship, element, coords);
    for (let i = 0; i < ship.size; i++) {
      element.fillCellColor(coords + i);
    }
  };

  const placeComputerShips = () => {
    computer.gameboard.placeShip(computer.gameboard.fleet.carrier, 10);
    computer.gameboard.placeShip(computer.gameboard.fleet.battleship, 30);
    computer.gameboard.placeShip(computer.gameboard.fleet.cruiser, 40);
    computer.gameboard.placeShip(computer.gameboard.fleet.destroyer, 80);
  };

  const makeAttack = (coord) => {
    player.attack(computer, coord);
 
    switch (true){
      case newGame.computer.gameboard.board[coord] === newGame.computer.gameboard.fleet.carrier:
        element.computerCells[coord].style.backgroundColor = "crimson"
        break;
      
      case newGame.computer.gameboard.board[coord] === newGame.computer.gameboard.fleet.battleship:
        element.computerCells[coord].style.backgroundColor = "crimson"
        break;

      case newGame.computer.gameboard.board[coord] === newGame.computer.gameboard.fleet.cruiser:
        element.computerCells[coord].style.backgroundColor = "crimson"
        break

      case newGame.computer.gameboard.board[coord] === newGame.computer.gameboard.fleet.destroyer:
        element.computerCells[coord].style.backgroundColor = "crimson"
        break

      default:
        element.computerCells[coord].style.backgroundColor = "aqua"
    }

    setTimeout(() => {
      computer.attack(player, computer.returnRandomCoord());
    }, 2000);
  };

  return {
    player,
    computer,
    isGameOver,
    setUpPlayersAndBoards,
    placeComputerShips,
    makeAttack,
    placePlayerShip,
  };
};

const newGame = Game();

const elements = () => {
  const playerGameboard = document.getElementById("playerGameboard");
  const computerGameboard = document.getElementById("computerGameboard");
  const cell = document.getElementsByClassName("cell");
  const results = document.getElementById('results');

  let playerCells = []
  let computerCells = []

  const appendResult = (outcome) => {
    let result = document.createElement('div')
    result.textContent = outcome
    results.appendChild(result)
  }

  const fillCellColor = (id) => {
    let getCell = document.getElementById(id);
    getCell.style.backgroundColor = "lightgreen";
  };

  const renderPlayerGameboard = () => {
    for (let i = 0; i < newGame.player.gameboard.board.length; i++) {
      let newCell = document.createElement("div");
      element.playerGameboard.appendChild(newCell);
      newCell.textContent = newGame.player.gameboard.board[i];
      newCell.classList.add("cell");
      newCell.id = i;
      playerCells.push(newCell)
    }
  };

  const renderComputerGameboard = () => {
    for (let i = 0; i < newGame.computer.gameboard.board.length; i++) {
      let newCell = document.createElement("div");
      element.computerGameboard.appendChild(newCell);
      newCell.textContent = newGame.computer.gameboard.board[i];
      newCell.classList.add("cell");
      newCell.id = `${i} computer`;
      computerCells.push(newCell)
    }
  };

  return {
    playerGameboard,
    computerGameboard,
    cell,
    results,
    playerCells,
    computerCells,
    appendResult,
    fillCellColor,
    renderPlayerGameboard,
    renderComputerGameboard,
  };
};

const element = elements();

export { newGame, Game, element, elements };

// game flow testing
// stage 1 - create boards
newGame.player.gameboard.createBoard();
newGame.computer.gameboard.createBoard();
// stage 2 - render boards
element.renderPlayerGameboard();
element.renderComputerGameboard();
// stage 3 - place ships
let carrierCoords = prompt('Place your carrier between 1 - 99 (takes 5 spaces):')
newGame.placePlayerShip(parseInt(carrierCoords), newGame.player.gameboard.fleet.carrier);

let battleshipCoords = prompt('Place your battleship between 1 - 99 (takes 4 spaces):')
newGame.placePlayerShip(parseInt(battleshipCoords), newGame.player.gameboard.fleet.battleship)

let cruiserCoords = prompt('Place your cruiser between 1 - 99 (takes 3 spaces):')
newGame.placePlayerShip(parseInt(cruiserCoords), newGame.player.gameboard.fleet.cruiser)

let destroyerCoords = prompt('Place your destroyer between 1 - 99 (takes 2 spaces):')
newGame.placePlayerShip(parseInt(destroyerCoords), newGame.player.gameboard.fleet.destroyer)

newGame.placeComputerShips();

for (let i = 0; i < element.computerCells.length; i++){
  element.computerCells[i].addEventListener('click', () => {
    newGame.makeAttack(i)
  })
}
