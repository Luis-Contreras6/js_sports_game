let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneNumShots = document.querySelector("#teamone-numshots")
let teamOneNumGoals = document.querySelector("#teamone-numgoals")

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

teamOneShoot.addEventListener("click", function () {
let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;
let x = Math.floor(Math.random() * 10);
if (x % 2 == 0) {x = Number(teamOneNumGoals.innerHTML) + 1;
teamOneNumGoals.innerHTML = x;}
teamOneNumShots.innerHTML = newTeamOneNumShots;})
