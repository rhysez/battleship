const Ship = (name, size) => {
  let placement = null;
  let hits = 0;
  let sunk = false;
  function hit() {
    this.hits += 1;
    console.log(`Shot fired: ${name} took a hit! Total hits are now ${this.hits}`);
  }
  function isSunk() {
    this.hits === size
      ? (this.sunk = true)
      : (this.sunk = false);
  }
  return { name, size, hits, sunk, hit, isSunk, placement };
};

export { Ship };
