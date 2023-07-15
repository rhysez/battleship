import { Ship } from "./ship.js";
import { element, elements} from './game.js'

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

        element.fillCellColor(coords)
        element.fillCellColor(coords + 1)
        element.fillCellColor(coords + 2)
        element.fillCellColor(coords + 3)
        element.fillCellColor(coords + 4)

        console.log(
          `---${ship.name} has been placed at ${coords}, ${coords + 1}, ${
            coords + 2
          }, ${coords + 3}, ${coords + 4}---`
        );
        break;

      case ship.size == 4:
        board[coords] = ship;
        board[coords + 1] = ship;
        board[coords + 2] = ship;
        board[coords + 3] = ship;

        element.fillCellColor(coords)
        element.fillCellColor(coords + 1)
        element.fillCellColor(coords + 2)
        element.fillCellColor(coords + 3)
      
        console.log(
          `---${ship.name} has been placed at ${coords}, ${coords + 1}, ${
            coords + 2
          }, ${coords + 3}---`
        );
        break;

      case ship.size == 3:
        board[coords] = ship;
        board[coords + 1] = ship;
        board[coords + 2] = ship;

        element.fillCellColor(coords)
        element.fillCellColor(coords + 1)
        element.fillCellColor(coords + 2)

        console.log(
          `---${ship.name} has been placed at ${coords}, ${coords + 1}, ${
            coords + 2
          }---`
        );
        break;

      case ship.size == 2:
        board[coords] = ship;
        board[coords + 1] = ship;

        element.fillCellColor(coords)
        element.fillCellColor(coords + 1)

        console.log(
          `---${ship.name} has been placed at ${coords}, ${coords + 1}---`
        );
        break;
    }
  }

  // could refactor this to search for sunk == true in fleet object
  function gameOver() {
    fleet.carrier.sunk == true &&
    fleet.battleship.sunk == true &&
    fleet.cruiser.sunk == true &&
    fleet.destroyer.sunk == true
      ? console.log("-----GAME OVER!-----")
      : null;
  }

  function recieveAttack(coords) {
    switch (true) {
      case board[coords] == fleet.carrier:
        fleet.carrier.hit();
        fleet.carrier.isSunk();
        console.log(
          `Shot fired at ${coords}: Carrier took a hit! Total hits are now ${fleet.carrier.hits}`
        );
        if (fleet.carrier.sunk === true){
          console.log(`Carrier has sunk!`)
        }
        break;

      case board[coords] == fleet.battleship:
        fleet.battleship.hit();
        fleet.battleship.isSunk();
        console.log(
          `Shot fired at ${coords}: Battleship took a hit! Total hits are now ${fleet.battleship.hits}`
        );
        if (fleet.battleship.sunk === true){
          console.log(`Battleship has sunk!`)
        }
        break;

      case board[coords] == fleet.cruiser:
        fleet.cruiser.hit();
        fleet.cruiser.isSunk();
        console.log(
          `Shot fired at ${coords}: Cruiser took a hit! Total hits are now ${fleet.cruiser.hits}`
        );
        if (fleet.cruiser.sunk === true){
          console.log(`Cruiser has sunk!`)
        }
        break;

      case board[coords] == fleet.destroyer:
        fleet.destroyer.hit();
        fleet.destroyer.isSunk();
        console.log(
          `Shot fired at ${coords}: Destroyer took a hit! Total hits are now ${fleet.destroyer.hits}`
        );
        if (fleet.destroyer.sunk === true){
          console.log(`Destroyer has sunk!`)
        }
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
