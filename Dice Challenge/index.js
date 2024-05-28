let randomNumber1, randomNumber2;
let ready = false;

function rotateDice(duration) {
    return new Promise((resolve, reject) => {
        let image1 = document.querySelectorAll("img")[0];
        let image2 = document.querySelectorAll("img")[1];

        let rotationInterval = setInterval(function() {
            randomNumber1 = Math.floor(Math.random() * 6) + 1;
            randomNumber2 = Math.floor(Math.random() * 6) + 1;
            image1.setAttribute("src", `images/dice${randomNumber1}.png`);
            image2.setAttribute("src", `images/dice${randomNumber2}.png`);
        }, 100); // Change this value to adjust the speed of rotation

        setTimeout(function() {
            clearInterval(rotationInterval);
            resolve();
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