const convertBttn = document.getElementById("convert-bttn")
const inputNum = document.getElementById("input-num")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")




function convert(num, rule, convertion1, convertion2) {
    let meters_feet = (Number(num) * rule).toFixed(3)
    let feet_meeter = (Number(num) / rule).toFixed(3)
    return `${num} ${convertion1} = ${meters_feet} ${convertion2} | ${num} ${convertion2} = ${feet_meeter} ${convertion1}`

}





convertBttn.addEventListener("click", function(){
    const userInput = inputNum.value
    console.log(userInput)
    if (userInput === "0" || userInput === "") {
        null
    }else {
        lengthEl.textContent = convert(userInput, 3.281, "meters", "feet")
        volumeEl.textContent = convert(userInput, 0.264, "liters", "gallons")
        massEl.textContent = convert(userInput, 2.204, "kilos", "pounds")
    }})

inputNum.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Allow only numbers
    this.style.width = (this.value.length + 1) + "ch";
})
/*
20 meters = 65.616 feet | 20 feet = 6.096 meters


1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 