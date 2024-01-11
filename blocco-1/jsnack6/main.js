// prompts the user to sumbit a number
let numberRequest = prompt("Submit a number")
//prints the number submitted by the user into console
console.log(numberRequest)

function cubeOf(numberRequest){
    let cube = (numberRequest) * (numberRequest) * (numberRequest) 
    console.log(cube)
}

cubeOf(numberRequest)