let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
}

for (let i = 0; i < 5; ++i) {
    nextSequence();
    console.log(gamePattern);
}