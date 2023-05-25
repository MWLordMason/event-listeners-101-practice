// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!


let greenCell = document.getElementsByClassName("grid-cell green")
let redCell = document.getElementsByClassName("grid-cell red")
let blueCell = document.getElementsByClassName("grid-cell blue")

let leftCell = [greenCell[0], redCell[0], blueCell[0]]

    leftCell[0,1,2].addEventListener("click", () => {
        for(let i = 0; i < redCell.length; i++)
        redCell[i].style.backgroundColor = "red" 
    })

let middleCell = [greenCell[1], redCell[1], blueCell[1]]

    middleCell[0,1,2].addEventListener("click", () => {
        for(let i = 0; i < greenCell.length; i++)
        greenCell[i].style.backgroundColor = "green" 
    })

let rightCell = [greenCell[2], redCell[2], blueCell[2]]

    rightCell[0,1,2].addEventListener("click", () => {
        for(let i = 0; i < blueCell.length; i++)
        blueCell[i].style.backgroundColor = "blue" 
    })