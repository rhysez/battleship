import { Player } from "./player.js";

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

// game flow example
newGame.setUpPlayersAndBoards();
newGame.placePlayerShips()
setTimeout(() => {
    newGame.placeComputerShips()
}, 2000)
setTimeout(() => {
    newGame.makeAttack(10)
}, 4000)