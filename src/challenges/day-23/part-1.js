import { readTxtFile } from "../../utils/fileReader";

const all = new Set()

function hasOtherConnection(item1, item2, arr) {
  const hasOne = arr.filter((list) => list.includes(item1))

  if (hasOne.length < 2) {
    return false
  }

  // console.log('One', hasOne)

  const hasTwo = arr.filter((list) => list.includes(item2))

  // console.log('hasTwo', hasTwo)

  const correct = hasOne.map((list) => {
    const [net1, net2] = list.split('-')

    const other = net1 === item1 ? net2 : net1

    const exist = hasTwo.some((line) => {
      return line.includes(other)
    })

    if (exist) {
      return list
    }
  }).filter(item => item)

  console.log('correct', item1, '-', item2, correct)
  
  if (correct.length > 1) {
    correct.forEach(element => {
      all.add(element)
    });
  }

  return correct.length > 1
}

export default async () => {
  let total = 0
  all.clear()
  const inputText = await readTxtFile('/inputs/input-23.txt')

  const input = inputText.split('\n')

  const networkWithT = input.filter((network) => {
    if (!network.includes('t')){
      return
    }

    const [net1, net2] = network.split('-')

    if (hasOtherConnection(net1, net2, input)) {
      return network
    }
  })

  console.log(networkWithT, all)
  
  total = (all.size) / 2

  return total
}
