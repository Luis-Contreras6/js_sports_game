let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneNumShots = document.querySelector("#teamone-numshots")
let teamOneNumGoals = document.querySelector("#teamone-numgoals")

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

let reset = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")

teamOneShoot.addEventListener("click", function () {
    let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 20);
    if (x % 2 == 0) {
        x = Number(teamOneNumGoals.innerHTML) + 1;
        teamOneNumGoals.innerHTML = x;
    }
    teamOneNumShots.innerHTML = newTeamOneNumShots;
})

teamTwoShoot.addEventListener("click", function () {
    let newTeamTwoNumShots = Number(teamTwoNumShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 20);
    if (x % 2 == 0) {
        x = Number(teamTwoNumGoals.innerHTML) + 1;
        teamTwoNumGoals.innerHTML = x;
    }
    teamTwoNumShots.innerHTML = newTeamTwoNumShots;
})

reset.addEventListener("click", function () {
    let newNumResets = Number(numResets.innerHTML) + 1;

    teamOneNumShots.innerHTML = 0;
    teamOneNumGoals.innerHTML = 0;
    teamTwoNumShots.innerHTML = 0;
    teamTwoNumGoals.innerHTML = 0;
    numResets.innerHTML = newNumResets;
})
