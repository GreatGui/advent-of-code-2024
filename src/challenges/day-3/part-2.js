import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  let total = 0;
  let pass = true;
  let nextRest = [];
  const inputText = await readTxtFile('/inputs/input-3.txt');

  const startMul = inputText.split('mul(');

  total = startMul.reduce((acc, mul) => {
    if (!mul.includes(')')) {
      return acc
    }

    const [endMul, ...rest] = mul.split(')')

    nextRest.forEach((item) => {
      if (item.includes('don\'t(')) {
        pass = false
      }

      if (item.includes('do(')) {
        pass = true
      }
    })

    nextRest = rest

    if (!pass) {
      console.log('do', endMul, rest)

      return acc
    }

    if (!endMul.includes(',') || endMul.length > 7) {
      return acc
    }

    const [firstNumb, secondNumb] = endMul.split(',')

    if (!Number.isInteger(parseInt(firstNumb)) || !Number.isInteger(parseInt(secondNumb))) {
      return acc
    }

    return acc + (parseInt(firstNumb) * parseInt(secondNumb))
  }, 0)
  

  return total;
};
