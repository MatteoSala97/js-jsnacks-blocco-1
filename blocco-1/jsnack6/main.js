// prompts the user to sumbit a number
let numberRequest = prompt("Submit a number:")
//prints the number submitted by the user into console
console.log(numberRequest)

function cubeOf(numberRequest){
    let cube = (numberRequest) * (numberRequest) * (numberRequest) 
    console.log(cube)
}


// Ho creato 2 funzioni che adempiano alla richiesta dell'esercizio secondo i due modi in cui ho interpretato la consegna.


cubeOf(numberRequest)

// prompts the user to input a number
let numberRequestSecondary = Number(prompt("Submit a number:"))

// prints the cube number of all the numbers up until the number given by the user
for (let i = 1; i <= numberRequestSecondary; i++) {
    let cubo = i * i * i
    console.log("Cubic of", i, "is:", cubo)
}