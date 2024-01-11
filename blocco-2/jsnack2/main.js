//declaring array of names
const namesArray = ["Diego", "Mattia", "Samuele", "Luca", "Marco", "Alessandro", "Francesco", "Matteo"]

//declaring array of surnames
const surnamesArray = ["Rossi", "Bianchi", "Verdi", "Ferrari", "Gallo", "Costa", "Russo ", "Marino " ]

//creating a function that picks a random name and surname from the arrays
const randomName = namesArray[Math.floor(Math.random() * namesArray.length)]
const randomSurnames = surnamesArray[Math.floor(Math.random() * surnamesArray.length)]

//prints the randomized names and surnames
console.log(randomName)
console.log(randomSurnames)