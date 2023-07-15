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
  const placePlayerCarrier = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.carrier, coords);
    element.fillCellColor(coords);
    element.fillCellColor(coords + 1);
    element.fillCellColor(coords + 2);
    element.fillCellColor(coords + 3);
    element.fillCellColor(coords + 4);
    console.log(
      `---Player Carrier has been placed at ${coords}, ${coords + 1}, ${
        coords + 2
      }, ${coords + 3}, ${coords + 4}---`
    );
  };

  const placePlayerBattleship = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.battleship, coords);
    element.fillCellColor(coords);
    element.fillCellColor(coords + 1);
    element.fillCellColor(coords + 2);
    element.fillCellColor(coords + 3);
    console.log(
      `---Player Battleship has been placed at ${coords}, ${coords + 1}, ${
        coords + 2
      }, ${coords + 3}---`
    );
  };

  const placePlayerCruiser = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.cruiser, coords);
    element.fillCellColor(coords);
    element.fillCellColor(coords + 1);
    element.fillCellColor(coords + 2);
    console.log(
      `---Player Cruiser has been placed at ${coords}, ${coords + 1}, ${
        coords + 2
      }, ${coords + 3}---`
    );
  };

  const placePlayerDestroyer = (coords) => {
    player.gameboard.placeShip(player.gameboard.fleet.destroyer, coords);
    element.fillCellColor(coords);
    element.fillCellColor(coords + 1);
    console.log(
      `---Player Destroyer has been placed at ${coords}, ${coords + 1}---`
    );
  };

  const placeComputerShips = () => {
    computer.gameboard.placeShip(computer.gameboard.fleet.carrier, 10);
    console.log(
      `---Computer Carrier has been placed at ${10}, ${11}, ${12}, ${13}, ${14}---`
    );
    computer.gameboard.placeShip(computer.gameboard.fleet.battleship, 30);
    console.log(
      `---Computer Battleship has been placed at ${30}, ${31}, ${32}, ${33}---`
    );
    computer.gameboard.placeShip(computer.gameboard.fleet.cruiser, 40);
    console.log(
      `---Computer Cruiser has been placed at ${40}, ${41}, ${42}, ${43}---`
    );
    computer.gameboard.placeShip(computer.gameboard.fleet.destroyer, 80);
    console.log(`---Computer Destroyer has been placed at ${80}, ${81}---`);
  };

  const makeAttack = (coord) => {
    player.attack(computer, coord);
    // doesn't work - FIX
    if (typeof newGame.computer.gameboard.board[coord] === 'object'){
      element.computerCells[coord].style.backgroundColor = "orange"
    } else {
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
    getCell.style.backgroundColor = "red";
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
let placeCarrier = prompt('Place your carrier between 1 - 99 (takes 5 spaces):')
newGame.placePlayerCarrier(parseInt(placeCarrier));

let placeBattleship = prompt('Place your battleship between 1 - 99 (takes 4 spaces):')
newGame.placePlayerBattleship(parseInt(placeBattleship));

let placeCruiser = prompt('Place your cruiser between 1 - 99 (takes 3 spaces):')
newGame.placePlayerCruiser(parseInt(placeCruiser));

let placeDestroyer = prompt('Place your destroyer between 1 - 99 (takes 2 spaces):')
newGame.placePlayerDestroyer(parseInt(placeDestroyer));

newGame.placeComputerShips();

for (let i = 0; i < element.computerCells.length; i++){
  element.computerCells[i].addEventListener('click', () => {
    newGame.makeAttack(i)
  })
}
