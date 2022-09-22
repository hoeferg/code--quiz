function fetchLocalStorage() {
    return JSON.parse(localStorage.getItem(`highScoreInfo`))
}

const highScoreInfo = (fetchLocalStorage())
console.log(highScoreInfo)