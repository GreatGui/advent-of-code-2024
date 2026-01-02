import { readTxtFile } from "../../utils/fileReader";

const sum = (a, b) => parseInt(a) + parseInt(b)
const mult = (a, b) => parseInt(a) * parseInt(b)
const combine = (a, b) => a + b

function react(result, rest, totals) {
  if (rest.length < 1) {
    return totals.some((total) => total.value == result)

    if (exist) {
      console.log('exist', exist)
    }

    return !!exist
  }

  const arr = []

  for(let i = 0; i < totals.length; i++) {
    arr.push({ value: sum(totals[i].value, rest[0]).toString(), log: `${totals[i].log} + ${rest[0]}` })
    arr.push({ value: mult(totals[i].value, rest[0]).toString(), log: `${totals[i].log} * ${rest[0]}` })
    arr.push({ value: combine(totals[i].value, rest[0]).toString(), log: `${totals[i].log} || ${rest[0]}` })
  }

  rest.shift()

  return react(result, rest, arr)
}

function isCorrect(result, arr) {
  const newArray = [...arr]

  let total = newArray[0]
  newArray.shift()

  return react(result, newArray, [{ value: total, log: total }])
}

export default async () => {
  let total = 0
  const inputText = await readTxtFile('/inputs/input-7.txt')

  const input = inputText.split('\n')

  total = input.reduce((acc, row) => {
    const [res, calc] = row.split(': ')
    const result = parseInt(res)

    const numbs = calc.split(' ')

    if (isCorrect(result, numbs)) {
      // console.log('result', result, numbs)

      return acc + result
    }

    return acc
  }, 0)

  return total
}
