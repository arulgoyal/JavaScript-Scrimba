// document.getElementById("count-el").innerText = 5 

// let count = 5 + 7

// console.log(count)

// let myAge = 19
// let humanDogRatio = 7 

// let myDogAge = myAge*humanDogRatio

// console.log(myDogAge) 

// function increment(){
//     console.log("The Button Was Clicked")
// }

// let lapCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted +1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapCompleted)

// let countEl = document.getElementById("count-el")

// let count = 0

// function increment() {
//     // console.log("Clicked")
//     count = count + 1
//     // countEl.innerText = count
//     countEl.innerText = count
//     // console.log(count)
// }

// let countEl = document.getElementById("count-el")

// console.log(countEl)

let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").textContent  = count
} 


function save(){
    let prevEntry = count + " - "
    document.getElementById("save-el").textContent += prevEntry
    
    document.getElementById("count-el").textContent  = 0
    count = 0;
}

// let firstName = "Arul"
// let lastName = "Goyal"

// let fullName = firstName + " " + lastName

// console.log(fullName)