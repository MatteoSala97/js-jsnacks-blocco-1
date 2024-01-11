let sum = 0

for (let i = 0; i < 10; i++) {

  //  prompts the user to type a number
  let numberRequest = prompt("Please enter a random number:")
  
  // sums the numbers up
  sum += Number(numberRequest)
  console.log(`User submitted: ${numberRequest}`)
}
// prints sum to console
console.log(`Sum of all numbers: ${sum}`)