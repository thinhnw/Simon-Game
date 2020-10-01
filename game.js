let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

let gameStarted = false;
let level = 0;

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
}

$(".btn").click(function(event) {

    if (!gameStarted) return; 
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    let currentLevel = userClickedPattern.length;
    checkAnswer(currentLevel); 
});

function playSound(name) {
    
    let sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
}

function animatePress(currentColour) {
    
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}



$("body").keydown(function(event) {
    if (event.key != 'a') return;
    if (!gameStarted) {
        gameStarted = true;
        $("body").removeClass("game-over");
        nextSequence();
    }
});

function checkAnswer(currentLevel) {
    
    if (userClickedPattern[currentLevel-1] != gamePattern[currentLevel-1]) {
        playSound("wrong");
        $("body").addClass("game-over");
        startOver();
        return;
    }

    if (currentLevel == level) {
        setTimeout(function() {
            userClickedPattern = [];
            nextSequence();
        }, 1000);
    }

}

function startOver() {

    level = 0;
    gameStarted = false;
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text("Press A to Restart");
}

