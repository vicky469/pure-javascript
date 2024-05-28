
function determineWinner() {
    let image1 = document.querySelectorAll("img")[0];
    let image2 = document.querySelectorAll("img")[1];
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    image1.setAttribute("src", `images/dice${randomNumber1}.png`);
    image2.setAttribute("src", `images/dice${randomNumber2}.png`);
    let resultElement = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        resultElement.textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultElement.textContent = "Player 2 wins! 🚩";
    } else {
        resultElement.textContent = "It's a tie!";
    }
}

document.addEventListener("click", determineWinner);