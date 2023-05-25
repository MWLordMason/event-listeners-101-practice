// Let's also practice the different type of button press type of user events that can occur. 

// First, we'll do the regular click event. On the #circle-one element, set an event listener that when you click it, will turn its background color blue.

let ClickButtonOne = document.getElementById("circle-one")

ClickButtonOne.addEventListener("click", () => {
    ClickButtonOne.style.backgroundColor = "blue"
})

// Next, we'll do the event when any key is pressed on the keyboard. On the #circle-two element, set an event listener that when you press any key on the keyboard, will turn its background color green.

let ClickButtonTwo = document.getElementById("circle-two")

ClickButtonTwo.addEventListener("click", () => {
    ClickButtonTwo.style.backgroundColor = "green"
    })
// Lastly, we'll do the event when the user releases a key on the keyboard. On the #circle-three element, set an event listener that when you release any key on the keyboard, will turn its background color red. 

let ClickButtonThree = document.getElementById("circle-three")

ClickButtonThree.addEventListener("click", () => {
    ClickButtonThree.style.backgroundColor = "red"
    })