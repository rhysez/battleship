const Ship = (name, size) => {
  let placement = null;
  let hits = 0;
  let sunk = false;
  function hit() {
    this.hits += 1;
  }
  function isSunk() {
    this.hits === size
      ? (this.sunk = true, console.log(`${name} has sunk!`))
      : (this.sunk = false);
  }
  return { name, size, hits, sunk, hit, isSunk, placement };
};

export { Ship };
