let sum = 0

for (let i = 0; i < 10; i++) {

  //  prompts the user to type a number
  let numberRequest = prompt("Please enter a random number:")
  
  sum += Number(numberRequest)
  console.log(`User submitted: ${numberRequest}`)
}

console.log(`Sum of all numbers: ${sum}`)