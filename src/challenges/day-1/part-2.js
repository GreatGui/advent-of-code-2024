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

  left.sort()
  right.sort()

  const total = left.reduce((acc, _item, i) => {
    const diff = Math.abs(left[i] - right[i])

    return acc + diff
  }, 0)

  return total
}
