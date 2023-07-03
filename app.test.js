const newShip = require('./app')

// pass
test('checks timesHit starts at 0', () => {
    expect(newShip.timesHit).toStrictEqual(0)
}) 
