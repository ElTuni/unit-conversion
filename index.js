const convertBttn = document.getElementById("convert-bttn")
const inputNum = document.getElementById("input-num")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")




function convert(num, rule) {
    
    let meters_feet = (Number(num) * rule).toFixed(3)
    let feet_meeter = (Number(num) / rule).toFixed(3)
    return `${num} meters = ${meters_feet} feet | ${num} feet = ${feet_meeter} meters`

}





convertBttn.addEventListener("click", function(){
    lengthEl.textContent = convert(inputNum.value, 3.281)
    volumeEl.textContent = convert(inputNum.value, 0.264)
    massEl.textContent = convert(inputNum.value, 2.204)
})

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