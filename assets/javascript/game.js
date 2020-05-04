let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneNumShots = document.querySelector("#teamone-numshots")
let teamOneNumGoals = document.querySelector("#teamone-numgoals")

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

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

