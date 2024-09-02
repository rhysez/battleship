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
        Toastify({
          text: "Carrier took a hit!",
          className: "info",
          style: {
            background: "#d6383a",
            fontWeight: "bold",
          }
        }).showToast();

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
        Toastify({
          text: "Battleship took a hit!",
          className: "info",
          style: {
            background: "#d6383a",
            fontWeight: "bold",
          }
        }).showToast();

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
        Toastify({
          text: "Cruiser took a hit!",
          className: "info",
          style: {
            background: "#d6383a",
            fontWeight: "bold",
          }
        }).showToast();

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
        Toastify({
          text: "Destroyer took a hit!",
          className: "info",
          style: {
            background: "#d6383a",
            fontWeight: "bold",
          }
        }).showToast();

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
        Toastify({
          text: "Miss!",
          className: "info",
          style: {
            background: "gray",
            fontWeight: "bold",
          }
        }).showToast();
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
