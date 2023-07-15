import { Ship } from "./ship.js";
import { element } from "./game.js";

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
    switch (true) {
      case ship.size == 5:
        board[coords] = ship;
        board[coords + 1] = ship;
        board[coords + 2] = ship;
        board[coords + 3] = ship;
        board[coords + 4] = ship;
        break;

      case ship.size == 4:
        board[coords] = ship;
        board[coords + 1] = ship;
        board[coords + 2] = ship;
        board[coords + 3] = ship;
        break;

      case ship.size == 3:
        board[coords] = ship;
        board[coords + 1] = ship;
        board[coords + 2] = ship;
        break;

      case ship.size == 2:
        board[coords] = ship;
        board[coords + 1] = ship;
        break;
    }
  }

  // could refactor this to search for sunk == true in fleet object
  function gameOver() {
    fleet.carrier.sunk == true &&
    fleet.battleship.sunk == true &&
    fleet.cruiser.sunk == true &&
    fleet.destroyer.sunk == true
      ? element.results.textContent = `-----GAME OVER!-----`
      : null;
  }

  function recieveAttack(coords) {
    switch (true) {
      case board[coords] == fleet.carrier:
        fleet.carrier.hit();
        fleet.carrier.isSunk();
        element.appendResult(`Shot fired at ${coords}: Carrier took a hit! Total hits are now ${fleet.carrier.hits}`)

        if (fleet.carrier.sunk === true) {
          element.results.textContent = `Carrier has sunk!`;
        }
        break;

      case board[coords] == fleet.battleship:
        fleet.battleship.hit();
        fleet.battleship.isSunk();
        element.appendResult(`Shot fired at ${coords}: Battleship took a hit! Total hits are now ${fleet.battleship.hits}`)

        if (fleet.battleship.sunk === true) {
          element.results.textContent = `Battleship has sunk!`;
        }
        break;

      case board[coords] == fleet.cruiser:
        fleet.cruiser.hit();
        fleet.cruiser.isSunk();
        element.appendResult(`Shot fired at ${coords}: Cruiser took a hit! Total hits are now ${fleet.cruiser.hits}`)

        if (fleet.cruiser.sunk === true) {
          element.results.textContent = `Cruiser has sunk!`;
        }
        break;

      case board[coords] == fleet.destroyer:
        fleet.destroyer.hit();
        fleet.destroyer.isSunk();
        element.appendResult(`Shot fired at ${coords}: Destroyer took a hit! Total hits are now ${fleet.destroyer.hits}`)

        if (fleet.destroyer.sunk === true) {
          element.results.textContent = `Destroyer has sunk!`;
        }
        break;

      default:
        element.appendResult(`Shot fired at ${coords}: Missed attack!`)
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
