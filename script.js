
//Global variables - Character and obstacle
let character = document.createElement('img');
character.src = "assets/temple-run.gif";
character.setAttribute("id", "character");
document.getElementById("game").append(character);

let obstacle = document.createElement("img");
obstacle.src = "assets/temple-barrel.png";
obstacle.setAttribute("id", "obstacle");
document.getElementById("game").append(obstacle);

let rock = document.createElement("img");
rock.src = "assets/temple-rock.png";
rock.setAttribute("id", "rock");
document.getElementById("game").append(rock);

//Counter/Score
let counter = document.querySelector('#scoreSpan');
let count = 0;
let intervalCount;

//Hadeel Ammari helped me stop the counter whenever the game is over, and start it from 0 when the user click the start button from the GameOver page.
function counterStart() {
    count++;
    counter.innerText = `Score: ${count}`;
    let finalScore = document.querySelector(".scoreSpan");
    finalScore.innerText = `Score: ${count}`;
}


function stopCount() {
    clearInterval(intervalCount);
    count = 0
    counter.innerText = `Score: ${count}`;
}

//This function starts the game. It goes from the Start Game screen to the Game screen. *I got part of this code from David Reid on Youtube*
function startGame() {
    intervalCount = setInterval(counterStart, 100)
    this.toggleScreen('start-screen', false);
    this.toggleScreen('game',true)
    this.toggleScreen('game-over-screen', false)
    obstacle.style.animationDelay = Math.floor(Math.random() * 5) + "s";
    rock.style.animationDelay = Math.floor(Math.random() * 5) + "s";
    background.style.animation = "backGroundLoop 40s infinite alternate";
    body.style.animation = "colorLoop 40s infinite alternate";
    character.src = "assets/temple-run.gif";
}

function toggleScreen(id, toggle){
    let gameScreen = document.getElementById(id);
    let display = ( toggle ) ? 'block' : 'none';
    gameScreen.style.display = display;
}

obstacle.style.animation = "block 2s infinite linear";
rock.style.animation = "block 2s infinite linear";

//Add another difficulty after 10 seconds, the obstacles are faster
setTimeout(() => {
    obstacle.style.animation = "block 1.3s infinite linear";
  }, 10000);
setTimeout(() => {
    rock.style.animation = "block 1.3s infinite linear";
  }, 10000);

background = document.getElementById("game");
body = document.body

//The function jump() makes the character jump. It utilizes the class .animate that I created in CSS. *Some of this code is from Shawn Beaton on LogRocket*
function jump() {
    character.src = "assets/temple-jump.gif";
    if(character.classList == "animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump,800);
};
function removeJump() {
    character.classList.remove('animate')
    character.src = "assets/temple-run.gif";
}

//Create an event listener. When the user presses the up arrow, the function   jump() is invoked and the character jumps.
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp') {
        jump()
    }
})

//Add a GameOver screen. *I got this code from David Reid on Youtube*
function stop() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('game',false);
    this.toggleScreen('game-over-screen', true);
}

//Checks if the character touches the obstacle and if so, alerts "Game Over" and starts the game again. *I got part of this code from Shawn Beaton on LogRocket*
let gameOver = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    if(obstacleLeft < 30 && obstacleLeft >- 30 && characterTop >= 360 || rockLeft < 5 && rockLeft >- 5 && characterTop >= 360) {
        character.src = "assets/temple-dead.gif";
        body.style.animation = "none";
        stopCount();
        setTimeout(stop, 1000);
    }
}, 10);