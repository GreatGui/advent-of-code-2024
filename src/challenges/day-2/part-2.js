import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  const inputText = await readTxtFile('/inputs/input-2.txt');

  const input = inputText.split('\n')

  function compare(arr, incress) {
    let retry = true

    return arr.every((item, index) => {
      if (index == 0)  {
        return true
      }

      const diff = item - arr[index - 1]

      if (incress) {
        if (diff > 0 && diff < 4)  {
          return true
        }
      } else {
        if (diff < 0 && diff > -4)  {
          return true
        }
      }

      if (retry) {
        retry = false

        return true
      }

      return false
    })
  }

  function isSafe(arr, index1 = 0, index2 = 1) {
    if (arr[index1] > arr[index2]) {
      return compare(arr, false)
    } else if (arr[index1] < arr[index2]) {
      return compare(arr, true)
    }
      
    return isSafe(arr, index2, index2 + 1)
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
