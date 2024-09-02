import { Ship } from "./ship.js";
import { element } from "./game.js";
import Toastify from "toastify-js";

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
    for (let i = 0; i < ship.size; i++) {
      board[coords + i] = ship;
    }
  }

  // TODO: Make this do something...
  function gameOver() {
   console.log("game over!")
  }

  function recieveAttack(coords) {
    switch (board[coords]) {
      case fleet.carrier:
        fleet.carrier.hit();
        fleet.carrier.isSunk();

        if (fleet.carrier.sunk === true) {
          Toastify({
            text: "Carrier has sunk!",
            className: "info",
            style: {
              background: "#9238d6",
            }
          }).showToast();
        }
        break;

      case fleet.battleship:
        fleet.battleship.hit();
        fleet.battleship.isSunk();

        if (fleet.battleship.sunk === true) {
          Toastify({
            text: "Battleship has sunk!",
            className: "info",
            style: {
              background: "#9238d6",
            }
          }).showToast();
        }
        break;

      case fleet.cruiser:
        fleet.cruiser.hit();
        fleet.cruiser.isSunk();

        if (fleet.cruiser.sunk === true) {
          Toastify({
            text: "Cruiser has sunk!",
            className: "info",
            style: {
              background: "#9238d6",
            }
          }).showToast();
        }
        break;

      case fleet.destroyer:
        fleet.destroyer.hit();
        fleet.destroyer.isSunk();

        if (fleet.destroyer.sunk === true) {
          Toastify({
            text: "Destroyer has sunk!",
            className: "info",
            style: {
              background: "#9238d6",
            }
          }).showToast();
        }
        break;

      default:
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
    fleet,
    gameOver,
    recieveAttack,
  };
};

export { Gameboard };
