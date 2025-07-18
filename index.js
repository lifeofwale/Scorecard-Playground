let time = document.getElementById("match-time");
let seconds = 60;

document.getElementById("start-count").addEventListener("click", startCount);

function startCount () {
    
    let myInterval = setInterval (() => {
    seconds--
    time.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(myInterval);      // stop the interval
        time.textContent = "Time’s up!";
      }
}, 1000);}


let homeScoreEl = document.getElementById("home");
let awayScoreEl = document.getElementById("away");
let homeScore  = 0;
let awayScore  = 0;

document.getElementById("one").addEventListener("click", plusOneHome);
document.getElementById("two").addEventListener("click", plusTwoHome);
document.getElementById("three").addEventListener("click", plusThreeHome);
document.getElementById("oneA").addEventListener("click", plusOneAway);
document.getElementById("twoA").addEventListener("click", plusTwoAway);
document.getElementById("threeA").addEventListener("click", plusThreeAway);

function plusOneHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore; 
}
function plusOneAway(){
    awayScore += 1
    awayScoreEl.textContent = awayScore; 
}

function plusTwoHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore; 
}
function plusTwoAway(){
    awayScore += 2
    awayScoreEl.textContent = awayScore; 
}


function plusThreeHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore; 
}
function plusThreeAway(){
    awayScore += 3
    awayScoreEl.textContent = awayScore; 
}