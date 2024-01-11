//declaring array of names
const namesArray = ["Diego", "Mattia", "Samuele", "Luca", "Marco", "Alessandro", "Francesco", "Matteo"]
//declaring array of surnames
const surnamesArray = ["Rossi", "Bianchi", "Verdi", "Ferrari", "Gallo", "Costa", "Russo ", "Marino " ]
// declaring const for html ids
const nameHtml = document.getElementById("name")
const surnameHtml = document.getElementById("surname")
const btnHtml = document.getElementById("btn")
const resultHtml = document.getElementById("resultNameSurname")

//creating a function that picks a random name and surname from the arrays
btnHtml.addEventListener("click", function(){
    const randomName = namesArray[Math.floor(Math.random() * namesArray.length)]
    const randomSurname = surnamesArray[Math.floor(Math.random() * surnamesArray.length)]

    nameHtml.innerHTML = randomName
    surnameHtml.innerHTML = randomSurname
    resultHtml.innerHTML = randomName + " " + randomSurname
})