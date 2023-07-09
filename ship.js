const Ship = (name, size) => {
  let placement = null
  let hits = 0;
  let sunk = false;
  function hit() {
    this.hits += 1;
  }
  function isSunk() {
    this.hits === this.size ? (this.sunk = true) : (this.sunk = false);
  }
  return { name, size, hits, sunk, hit, isSunk, placement };
};

export { Ship };
