import { readTxtFile } from "../../utils/fileReader";

const sum = (a, b) => parseInt(a) + parseInt(b)
const mult = (a, b) => parseInt(a) * parseInt(b)

// const equations = []
// 190 / [] , [10 , 10]
function react(result, rest, totals) {
  if (rest.length < 1) {
    // console.log('exist', totals)
    const exist = totals.find((total) => total.value === parseInt(result))

    if (exist) {
      console.log('exist', exist)
    }

    return !!exist
  }

  const arr = []
  // console.log('totals', totals)

  for(let i = 0; i < totals.length; i++) {
    arr.push({ value: sum(totals[i].value, rest[0]), log: `${totals[i].log} + ${rest[0]}` })
    arr.push({ value: mult(totals[i].value, rest[0]), log: `${totals[i].log} * ${rest[0]}` })
  }
  rest.shift()

  return react(result, rest, arr)
}

function isCorrect(result, arr) {
  // const amount = arr.length > 2 ? ((arr.length - 1) * (arr.length - 2)) : 0
  // const amount = (2 ** (arr.length - 1)) -2
  // let bag = new Set()
  // let max = arr.length - 2;
  // let index = 0
  // let reset = 0
  const newArray = [...arr]

  let total = newArray[0]
  newArray.shift()

  return react(result, newArray, [{ value: total, log: total }, { value: total, log: total }])

  // arr.forEach(element => {
    
  // });

  console.log('responses', responses)
  // console.log('amount', amount, result, arr)
  // 2, 4, 8, 16, 32
  // 0, 2, 6, 14, 30
  // 2, 3, 4, 5, 6
  // const operators = arr.length - 1;

  // for(let x = 0; x < operators; x++) {
  //   let items = ''

  //   for(let y = 0; y < operators; y++) {
  //     if (x == y) {
  //       items+= '*'

  //       continue
  //     }

  //     // if (x > y && y == 0) {
  //     //   items+= '*'

  //     //   continue
  //     // }

  //     items+= '+'
  //   }
  //   console.log('items', x, items)

  //   bag.add(items)
  // }

  // for(let x = 0; x < amount; x++) {
  //   const operators = arr.length - 1;
  //   let items = []

  //   for(let y = 0; y < operators; y++) {
  //     items.push('+')
  //   }
  //   // console.log('max', max, count)

  //   for(let y = 0; y < operators; y++) {
  //     // if (count >= max) {
  //     //   plus = false
  //     //   max = (max - 1) <= 0 ? 0 : --max
  //     //   count = -1
  //     // } else {
  //     //   plus = true
  //     // }

  //     // if (plus) {
  //     //   itens.push(sum)
  //     // } else {
  //     //   itens.push(mult)
  //     // }

  //     for(let z = 1; z <= reset; z++) {
  //       const resetIndex = (index + z) >= operators ? (index + z) - operators : index + z
  //       // console.log('resetIndex', resetIndex, operators)

  //       // if (resetIndex < operators) {
  //         items[resetIndex] = '*'
  //       // }
  //     }

  //     if (index == y) {
  //       // console.log('items', y, items[y])
  //       items[y] = '*'
  //       break
  //     }

  //     // console.log('resetIndex', items)
  //   }
  //   // console.log('index', index, reset, items, operators)
    
  //   reset = index + 1 >= operators ? reset + 1 : reset
  //   index = index + 1 >= operators ? 0 : index + 1

  //   // console.log('index', index, items)

  //   bag.add(items.join(''))
  // }

  // bag.add(new Array(arr.length - 1).fill('+').join(''))
  // bag.add(new Array(arr.length - 1).fill('*').join(''))

  // for(let x = 0; x < amount; x++) {
  //   const operators = arr.length - 1; // 3
  //   const itens = []
  //   let plus = true

  //   // console.log('max', max, count)

  //   for(let y = 0; y < operators; y++) {
  //     if (y == 0) {
  //       if(x < (amount / 2)) {
  //         itens.push(sum)
  //       } else {
  //         itens.push(mult)
  //       }

  //       continue
  //     }

  //     // if (y == operators - 1) {
  //     if (y == 1) {
  //       if(x % 2) {
  //         itens.push(sum)
  //       } else {
  //         itens.push(mult)
  //       }

  //       continue
  //     }


  //     if (!itens.filter((i) => i == sum())) {
  //       itens.push(sum)
  //     } else {
  //       itens.push(mult)
  //     }

  //     count++
  //   }

  //   bag.push(itens)
  // }



  // bag.add(new Array(arr.length - 1).fill((a, b) => sum(a, b)))
  // bag.add(new Array(arr.length - 1).fill((a, b) => mult(a, b)))

  // console.log('bag', bag)
  // [
  //   ['+++', '++*'], [11, 6 , 16, 20]
  //   ['+++', '++*'],
  // ],

  // O MAIS PROXIMO

  // const exist = equations.find(equation => equation.value == arr.length)

  // if (!exist) {
  //   const zIndex = 1;

  //   for(let x = 0; x < amount; x++) {
  //     const operators = arr.length - 1;
  //     let items = []

  //     for(let y = 0; y < operators; y++) {
  //       items.push('+')
  //     }

  //     for(let y = 0; y < operators; y++) {
  //       for(let z = zIndex; z <= reset; z++) {
  //         const resetIndex = (index + z) >= operators ? (index + z) - operators : index + z

  //         items[resetIndex] = '*'
          // for(let a = 0; a <= reset; a++) {

          // }
  //       }

  //       if (index == y) {
  //         items[y] = '*'

  //         break
  //       }
  //     }
      
  //     // zIndex = reset < (operators / 2) ? 1 : zIndex + 1
  //     if ((index + 1) >= operators) {
  //       reset++
  //     }

  //     // reset = index + 1 >= operators ? reset + 1 : reset
  //     index = index + 1 >= operators ? 0 : index + 1

  //     bag.add(items.join(''))
  //   }

  //   bag.add(new Array(arr.length - 1).fill('+').join(''))
  //   bag.add(new Array(arr.length - 1).fill('*').join(''))

  //   equations.push({ value: arr.length, operators: bag })
  // } else {
  //   bag = (exist.operators)
  // }

  // console.log('bag', bag)

  // return bag.values().some((items) => {
  //   // console.log('items', items)
  //   // console.log('total', total)
  //   // for (let x = 0; x < items.length; x++) {
  //     let total = parseInt(arr[0])

  //     for(let y = 1; y < arr.length; y++) {
  //       // console.log('total', total, items[y - 1], parseInt(arr[y]))

  //       if(items[y - 1] == '+') {
  //         total = sum(total, parseInt(arr[y]))
  //       } else {
  //         total = mult(total, parseInt(arr[y]))
  //       }
  //       // total += items[x](parseInt(arr[y - 1]), parseInt(arr[y]))
  //       // console.log('total', total, result)
  //     }

  //     if (result == total) {
  //       return true
  //     }
  //   // }


  //   return false
  // })

  // return false
  // +++
  // ***

  // ++*
  // +*+
  // +**
  // *++
  // *+*
  // **+

  // ++++

  // +++*
  // ++*+
  // +*++
  // +*+*
  // +***
  // +**+
  // ++**

  // *+++
  // *++*
  // *+*+
  // *+**
  // **++
  // **+*
  // ***+

  // ----------------------
  // *+++
  // +*++
  // ++*+
  // +++*
  
  // **++
  // +**+
  // ++**
  // *++*

  // *+*+
  // +*+*

  // ***+
  // +***
  // *+**
  // **+*




  // ****

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
      console.log('result', result, numbs)

      return acc + result
    }

    return acc
  }, 0)

  return total //  2070868551283
}
