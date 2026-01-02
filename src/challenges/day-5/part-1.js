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
    let isWrong = false

    items.forEach((order) => {
      if (isWrong) {
        return
      }

      const orderRules = rulesFormatted.filter(rule => rule.l === order)

      isWrong = orderRules.some(rule => bag.includes(rule.r))

      console.log('orderRules', orderRules, isWrong)
      
      bag.push(order)
    })

    if (!isWrong) {
      const index = Math.floor(items.length / 2)

      total += parseInt(items[index])
    }
  });

  return total;
};
