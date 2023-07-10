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

  // generates co-ordinates for the board
  function createBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([`${i}, ${j}`]);
      }
    }
  }

  // places ship at chosen co-ordinates
  function placeShip(ship, coords) {
    ship.placement = coords;
    board[coords] = ship;
    console.log(`---${ship.name} has been placed at ${coords}---`);
  }

  function gameOver(){

  }

  // recieves an attack on a ship, otherwise adds coord to
  // missed attack list
  function recieveAttack(coords) {
    if (board[coords] == fleet.carrier) {
      fleet.carrier.hit();
      fleet.carrier.isSunk();
    } else if (board[coords] == fleet.battleship) {
      fleet.battleship.hit();
      fleet.battleship.isSunk();
    } else if (board[coords] == fleet.cruiser) {
      fleet.cruiser.hit();
      fleet.cruiser.isSunk();
    } else if (board[coords] == fleet.destroyer) {
      fleet.destroyer.hit();
      fleet.destroyer.isSunk();
    } else {
      console.log("Shot fired: Missed attack!");
      missedAttacksList.push(coords);
      console.log(`Missed co-ordinates list: ${missedAttacksList}`);
    }
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

let newGameboard = Gameboard();
newGameboard.createBoard();
newGameboard.placeShip(newGameboard.fleet.battleship, 98);
newGameboard.recieveAttack(98);
newGameboard.recieveAttack(98);
newGameboard.recieveAttack(98);
newGameboard.recieveAttack(98);

newGameboard.placeShip(newGameboard.fleet.cruiser, 24)
newGameboard.recieveAttack(24)
newGameboard.recieveAttack(24)
newGameboard.recieveAttack(24)

newGameboard.placeShip(newGameboard.fleet.destroyer, 52);
newGameboard.recieveAttack(52)
newGameboard.recieveAttack(52)

newGameboard.placeShip(newGameboard.fleet.carrier, 5)
newGameboard.recieveAttack(5)
newGameboard.recieveAttack(5)
newGameboard.recieveAttack(5)
newGameboard.recieveAttack(5)
newGameboard.recieveAttack(5)

export { Gameboard };
