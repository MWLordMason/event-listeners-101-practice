// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will turn the background color to green.
    // 2) An event listener that, when the element is double-clicked, will turn the background color to blue.

    let CellOne = document.getElementById("cell-one")

    CellOne.addEventListener("click", () => {
        CellOne.style.backgroundColor = "green"
    })

    CellOne.addEventListener("dblclick", () => {
        CellOne.style.backgroundColor = "blue"
    })

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

    let CellTwo = document.getElementById("cell-two")

    CellTwo.addEventListener("mouseover", () => {
        CellTwo.style.border = "2px solid green"
    })

    CellTwo.addEventListener("mouseout", () => {
        CellTwo.style.border = "2px solid black"
    })


// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

    let CellThree = document.getElementById("cell-three")

    CellThree.addEventListener("click", () => {
        CellThree.innerText = "Stop clicking me!"
    })

    CellThree.addEventListener("contextmenu", () => {
        CellThree.innerText = "No right clicking either!!"
    })