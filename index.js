function map(collection, callback) {
  const result = []

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i]
    result.push(callback(element))
  }

  return result
}

const array = [1, 2, 3, 4, 5]
const incrementedArray = map(array, element => { return element + 1 })
const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
]
const transformedAutobots = map(autobots, autobot => {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true
  })
})
