const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0){
  return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
 return arr.reduce((a, b) => a + b, 0)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let t = 0; t < arr.length; t++) {
      if (arr[i] + arr[t] === sum) {
        return true;
      } 
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}