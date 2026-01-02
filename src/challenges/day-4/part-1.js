import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  let total = 0;
  const inputText = await readTxtFile('/inputs/input-4.txt');

  const input = inputText.split('\n');

  function hasXmas(arr, x, y) {
    let total = 0
    let col = y

    if (col + 3 < arr[x].length) {
      if (arr[x][col + 1] === 'M' && arr[x][col + 2] === 'A' && arr[x][col + 3] === 'S') {
        total++
      }
    }

    if (col - 3 >= 0) {
      if (arr[x][col - 1] === 'M' && arr[x][col - 2] === 'A' && arr[x][col - 3] === 'S') {
        total++
      }
    }

    if (x + 3 < arr.length) {
      if (arr[x + 1][col] === 'M' && arr[x + 2][col] === 'A' && arr[x + 3][col] === 'S') {
        total++
      }
    }

    if (x - 3 >= 0) {
      if (arr[x - 1][col] === 'M' && arr[x - 2][col] === 'A' && arr[x - 3][col] === 'S') {
        total++
      }
    }

    if (col + 3 < arr[x].length && x + 3 < arr.length) {
      if (arr[x + 1][col + 1] === 'M' && arr[x + 2][col + 2] === 'A' && arr[x + 3][col + 3] === 'S') {
        total++
      }
    }

    if (col + 3 < arr[x].length && x - 3 >= 0) {
      if (arr[x - 1][col + 1] === 'M' && arr[x - 2][col + 2] === 'A' && arr[x - 3][col + 3] === 'S') {
        total++
      }
    }

    if (col - 3 >= 0 && x + 3 < arr.length) {
      if (arr[x + 1][col - 1] === 'M' && arr[x + 2][col - 2] === 'A' && arr[x + 3][col - 3] === 'S') {
        total++
      }
    }

    if (col - 3 >= 0 && (x - 3) >= 0) {
      if (arr[x - 1][col - 1] === 'M' && arr[x - 2][col - 2] === 'A' && arr[x - 3][col - 3] === 'S') {
        total++
      }
    }

    return total
  }

  for(let x = 0; x < input.length; x++) {
    for(let y = 0; y < input[x].length; y++) {
      if (input[x][y] === 'X') {
        total += hasXmas(input, x, y)
      }
    }
  }

  return total;
};
