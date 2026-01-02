import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  let total = 0;
  const inputText = await readTxtFile('/inputs/input-5.txt');

  const [rulesText, listOfOrders] = inputText.split('\n\n');
  const rules = rulesText.split('\n')

  const rulesFormatted = rules.map(rule => {
    const [l, r] = rule.split('|')

    return {
      l,
      r,
    }
  })

  listOfOrders.split('\n').forEach(orders => {
    const items = orders.split(',')
    let bag = []
    let isCorrect = false

    items.forEach((order) => {
      if (isCorrect) {
        return
      }

      const orderRules = rulesFormatted.filter(rule => rule.r === order)

      isCorrect = orderRules.some(rule => bag.includes(rule.l))

      console.log('orderRules', orderRules, isCorrect)
      
      bag.push(order)
    })

    if (!isCorrect) {
      console.log('orders', items)

      const index = Math.floor(items.length / 2)

      total += parseInt(items[index])
    }
  });

  return total
}
