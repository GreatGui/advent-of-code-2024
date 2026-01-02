import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  const inputText = await readTxtFile('/inputs/input-1.txt');

  const input = inputText.split('\n')

  const left = []
  const right = []

  input.forEach((item) => {
    const [first, second] = item.split('   ')

    left.push(parseInt(first))
    right.push(parseInt(second))
  })

  const total = left.reduce((acc, item) => {
    const points = item * right.filter(r => r === item).length

    return acc + points
  }, 0)

  return total
}
