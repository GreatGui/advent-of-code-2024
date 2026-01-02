import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  const inputText = await readTxtFile('/inputs/input-2.txt');

  const input = inputText.split('\n')

  function decrement(arr) {
    return arr.every((item, index) => {
      if (index == 0)  {
        return true
      }

      const diff = arr[index - 1] - item

      if (diff > 0 && diff < 4)  {
        return true
      }

      return false
    })
  }

  function increment(arr) {
    return arr.every((item, index) => {
      if (index == 0)  {
        return true
      }

      const diff = item - arr[index - 1]

      if (diff > 0 && diff < 4)  {
        return true
      }

      return false
    })
  }

  function isSafe(arr, index1 = 0, index2 = 1) {
    if (arr[index1] > arr[index2]) {
      return decrement(arr)
    } else if (arr[index1] < arr[index2]) {
      return increment(arr)
    } else {
      return isSafe(arr, index2, index2 + 1)
    }
  }

  const total = input.reduce((acc, reports) => {
    const report = reports.split(' ').map(item => parseInt(item))

    if (isSafe(report)) {
      return ++acc
    }

    return acc
  }, 0)

  return total
}
