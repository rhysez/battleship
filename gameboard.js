import { Ship } from "./ship.js";

const Gameboard = () => {
  let board = [];
  let missedAttacksList = [];

  const fleet = {
    carrier: Ship("Carrier", 5),
    battleship: Ship("Battleship", 4),
    cruiser: Ship("Cruiser", 3),
    destroyer: Ship("Destroyer", 2),
  };

  function createBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([`${i}, ${j}`]);
      }
    }
  }

  function placeShip(ship, coords) {
    ship.placement = coords;
    board[coords] = ship;
    console.log(`---${ship.name} has been placed at ${coords}---`);
  }

  function gameOver() {
    fleet.carrier.hits == 5 &&
    fleet.battleship.hits == 4 &&
    fleet.cruiser.hits == 3 &&
    fleet.destroyer.hits == 2
      ? console.log("-----GAME OVER!-----")
      : null;
  }

  function recieveAttack(coords) {
    switch (true) {
      case board[coords] == fleet.carrier:
        fleet.carrier.hit();
        fleet.carrier.isSunk();
        break;

      case board[coords] == fleet.battleship:
        fleet.battleship.hit();
        fleet.battleship.isSunk();
        break;
      
      case board[coords] == fleet.cruiser:
        fleet.cruiser.hit();
        fleet.cruiser.isSunk();
        break;
      
      case board[coords] == fleet.destroyer:
        fleet.destroyer.hit();
        fleet.destroyer.isSunk();
        break;

      default:
        console.log(`Shot fired at ${coords}: Missed attack!`);
        missedAttacksList.push(coords);
        console.log(`Missed co-ordinates list: ${missedAttacksList}`);
    }
    
    gameOver();
  }

  return {
    board,
    placeShip,
    missedAttacksList,
    createBoard,
    placeShip,
    fleet,
    gameOver,
    recieveAttack,
  };
};

export { Gameboard };
