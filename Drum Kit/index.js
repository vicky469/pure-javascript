// Detecting Button Press
const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
   var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}  

// Detecting Keyboard Press
addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Invalid key");
            break;
    }
}

function buttonAnimation(currentKey) {
    // the button we want to animate
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // pressed class is defined in styles.css
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


