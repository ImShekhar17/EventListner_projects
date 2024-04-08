// keydown and keyup event

// KEYDOWN->>when key down event is fired

// KETUP->> when key up event is released

let container = document.getElementById("container")
let display = document.getElementById("display")

// adding key down
document.addEventListener("keydown", function(e){
    display.style.color = "red"
    display.innerText = e.key + " is keyDown"
})

// adding key up
document.addEventListener("keyup", function(e){
    display.style.color = "green"
    display.innerText = e.key + " is keyUp"
})