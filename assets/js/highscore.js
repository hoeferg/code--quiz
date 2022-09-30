const scoresEl = document.querySelector('#scores')

function fetchLocalStorage() {
    var scores= JSON.parse(localStorage.getItem(`highScoreCloudInfo`)) || []
    for (let index = 0; index < scores.length; index++) {
        var li = document.createElement('li')
        li.textContent = `Initials: ${scores[index].initials} - Scores: ${scores[index].score}`
    console.log(scores[index])
    scoresEl.appendChild(li)
    }
}

fetchLocalStorage()
