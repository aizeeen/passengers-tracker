// document.getElementById("count-el").innerText = 5;

// initialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked 
// change the count-el to reflect the new count 

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    // for testing ,, console.log(" clicked")
    count = count + 1 
   countEl.innerText = count 
    
}

function save() {
    console.log(count)
}

let name = "iheb"
let greeting = "hi,my name is"
let MyGreeting = name + "" + greeting 
console.log(MyGreeting)