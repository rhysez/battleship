const Ship = require('./app')

test('checks timesHit is a number', () => {
    expect(Ship.timesHit).toStrictEqual(0)
})