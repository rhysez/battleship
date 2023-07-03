const newShip = require('./app')

// pass
test('checks timesHit starts at 0', () => {
    expect(newShip.timesHit).toStrictEqual(0)
}) 
// pass
test('checks sunkStatus is falsey', () => {
    expect(newShip.sunkStatus).toBe(false)
})
// pass
test('checks size is correct', () => {
    expect(newShip.size).toBe(2)
})
// pass
test('checks isSunk returns correct calculation', () => {
    expect(newShip.isSunk()).toBeFalsy()
})