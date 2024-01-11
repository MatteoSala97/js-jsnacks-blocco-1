const array = []
let sum = 0
//Creating loop 10 times
for (let i = 0; i < 3; i++) {

  //  prompts the user to type a number
  let numberRequest = prompt("Please enter a random number:")

  // converts the input into a number
  array.push(Number(numberRequest))
  console.log(`User entered: ${numberRequest}`)
}
  
for (let i = 0; i < array.length; i++){
  sum += array[i]
}
console.log(array)
console.log(`The sum of all user's submitted numbers is: ${sum}`)
