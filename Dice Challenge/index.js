let randomNumber1, randomNumber2;

function rotateDice(duration) {
    return new Promise((resolve) => {
        let image1 = document.querySelectorAll("img")[0];
        let image2 = document.querySelectorAll("img")[1];

        // Starts a new interval that will repeatedly be called every 100 milliseconds
        // The interval is stored in the rotationInterval variable so it can be stopped later.
        let rotationInterval = setInterval(function() {
            // generate random numbers between 1 and 6
            randomNumber1 = Math.floor(Math.random() * 6) + 1;
            randomNumber2 = Math.floor(Math.random() * 6) + 1;

            image1.setAttribute("src", `images/dice${randomNumber1}.png`);
            image2.setAttribute("src", `images/dice${randomNumber2}.png`);
        }, 100); // Change this value to adjust the speed of rotation

        setTimeout(function() {
            clearInterval(rotationInterval); //Stops the interval
            resolve(); // Resolve the Promise (the rotation is done). Any function attached with .then() will be called.
        }, duration);
    });
}


function determineWinner() {
    let resultElement = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        resultElement.textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultElement.textContent = "Player 2 wins! 🚩";
    } else {
        resultElement.textContent = "It's a tie!";
    }
}



document.addEventListener("click", function() {
    rotateDice(1000).then(() => {
        determineWinner();
    });
});