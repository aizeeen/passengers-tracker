// document.getElementById("count-el").innerText = 5;

// initialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked 
// change the count-el to reflect the new count 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    // for testing ,, console.log(" clicked")
    count += 1
   countEl.innerText = count 
    
}
 

function save() {
    let entries = count + " - " 
    saveEl.textContent += entries 
    countEl.textContent = 0 
    count = 0 

    
}
//i hate css