function fetchLocalStorage() {
    return JSON.parse(localStorage.getItem(`highScoreInfo`))
}

highScoreInfo.push(fetchLocalStorage)