import { Ship } from "./ship.js";

const Gameboard = () => {
  let board = [];
  let missedAttacksList = [];

  const fleet = {
    carrier: Ship(5),
    battleship: Ship(4),
    cruiser: Ship(3),
    destroyer: Ship(2),
  };

  // generates co-ordinates for the board
  function createBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([`${i}, ${j}`]);
      }
    }
  }

  // places ship at chosen co-ordinates
  function placeShip(ship, x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      throw new Error("Invalid co-ordinates.");
    }

    ship.placementX = x;
    ship.placementY = y;

    let placement = `${x}, ${y}`;
    board[placement] = ship;
  }

  function recieveAttack() {

  }

  return {
    board,
    placeShip,
    missedAttacksList,
    createBoard,
    placeShip,
    fleet,
    recieveAttack,
  };
};

let newGameboard = Gameboard();

newGameboard.placeShip(newGameboard.fleet.carrier, 2, 4);
export { Gameboard };
