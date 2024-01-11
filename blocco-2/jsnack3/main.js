// generating an array of 30 random numbers
const numbersArray = []
for (let i = 0; i < 30; i++) {
    numbersArray.push(i)
}

console.log("Generated array:" , numbersArray)

// calculating the sum of numbers at odd position
let sumOfOdd = 0

for (let i = 0; i < numbersArray.length; i++){
    if (i % 2 !== 0)
    sumOfOdd += numbersArray[i]
}

console.log(sumOfOdd)