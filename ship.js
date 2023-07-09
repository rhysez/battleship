const Ship = (size) => {
  let placementX = null;
  let placementY = null;
  let hits = 0;
  let sunk = false;
  function hit() {
    this.timesHit += 1;
  }
  function isSunk() {
    this.hits === this.size ? (this.sunk = true) : (this.sunk = false);
  }
  return { size, hits, sunk, hit, isSunk, placementX, placementY };
};

export { Ship };
