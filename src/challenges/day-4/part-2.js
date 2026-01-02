import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  let total = 0;
  const inputText = await readTxtFile('/inputs/input-4.txt');

  const input = inputText.split('\n');

  function hasXmas(arr, x, y) {
    let col = y

    if (arr[x - 1][col - 1] === 'M' || arr[x - 1][col - 1] === 'S') {
      if (arr[x + 1][col - 1] === 'M' || arr[x + 1][col - 1] === 'S') {
        if ((arr[x + 1][col + 1] === 'M' || arr[x + 1][col + 1] === 'S') && arr[x - 1][col - 1] != arr[x + 1][col + 1]) {
          if ((arr[x - 1][col + 1] === 'M' || arr[x - 1][col + 1] === 'S') && arr[x - 1][col + 1] != arr[x + 1][col - 1] ) {
            return 1
          }
        }
      }
    }

    return 0
  }

  for(let x = 1; x < input.length -1; x++) {
    for(let y = 1; y < input[x].length - 1; y++) {
      if (input[x][y] === 'A') {
        total += hasXmas(input, x, y)
        console.log(input[x][y], x, y, total)
      }
    }
  }

  return total;
};
