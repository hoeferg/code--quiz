const generateBtn = document.querySelector("#generate-quiz");
// This generates the quiz when the button is pushed
const startCard = document.querySelector("#start-quiz");
// This is not used anywhere at this moment
const $time = document.querySelector(".time");
// This is used to start and stop the timer
const $submitAnswer = document.querySelector("#next");
// This was for the next button. It is currently not being used
const questionDiv = document.querySelector("#question");
// The question cards
const $score = document.querySelector("#score")
// The time left at the end 
const $form = document.querySelector("#form")
const submitBtn = document.getElementById("button")
let questionCard = 0
// sets the array value
let secondsLeft = 101
// Sets the time for the questions
let timerInterval;
// let $score = timerInterval
// not sure if this is needed




let questions = [
    {
        topic: "What are we learning?",
        choices: ["JavaScript", "HTML", "CSS", "all the above"],
        answer: "all the above"
    },
    {
        topic: " What is the window object?",
        choices: ["browser", "chrome", "window in the browser", "google"],
        answer: "window in the browser"
    },
    {
        topic: " How do we access a webpage's content?",
        choices: ["url", "html", "booleans", "document"],
        answer: "document"
    },
    {
        topic: "How can we set an element's attribute?",
        choices: ["css", "javascript", "booleans", "setAttribute()"],
        answer: "setAttribute()"
    },
    {
        topic: "What two arguments does setInterval() take?",
        choices: ["setInterval", "milliseconds", "both of the above", "none of the above"],
        answer: "both of the above"
    },
    {
        topic: " How can we listen for an event on an element and then react by performing an action?",
        choices: ["addEventListener", "functions", "JavaScript", "console.log"],
        answer: "addEventListener"
    },
]
// list of questions

function generateQuiz() {
    startCard.setAttribute("style", "display:none")
    $time.setAttribute("style", "display:block")
    generateBtn.setAttribute("style", "display:none")
    setTime()
    render()
}
// Once the quiz is started this sets the start page to inviable, shows the time and hides the start button

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        $time.textContent = "Time: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}
// This sets the time for the quiz. Time is subtracted when the set interval function is called. When the time equals 0 the function stops.

function render() {
    questionDiv.innerHTML = "";
    questionDiv.textContent = questions[questionCard].topic
    for (let i = 0; i < questions[questionCard].choices.length; i++) {
        let userChoices = questions[questionCard].choices[i]
        let choiceButton = document.createElement("button")
        choiceButton.textContent = userChoices
        choiceButton.setAttribute("data-value", userChoices)
        choiceButton.addEventListener("click", submitAnswer)
        questionDiv.appendChild(choiceButton)
    }
}
// This allows the questions to switch. It creates a loop that creates a button that will have the possible answers. When the button is clicked, it activates the submit answers function. 

// function sendMessage

function quizEnd() {
    clearInterval(timerInterval);
}
// This clears the time when the quiz end function is called


function submitAnswer() {
    console.log(this.dataset.value)
    if (questionCard < questions.length) {
        render()
        if (this.dataset.value === questions[questionCard].answer) {
            // This checks if tha answer is right
        }
        questionCard++
        if (secondsLeft === 0 || questionCard === questions.length - 1) {
            quizEnd()
            displayMessage()
        }
        // This makes the game end when the timer = 0 or there are no more cards.
    }
    else {
        secondsLeft = secondsLeft - 5
        if (secondsLeft === 0) {
            quizEnd()
            displayMessage()
        }
        // This takes away 5 seconds when the question is wrong
    }
}

//  function localStorageHandler() {
// update the current score list in LocalStorage because the value has changed
//     localStorage.setItem(`score`, JSON.stringify(secondsLeft));
// }

function displayMessage() {
    let score = secondsLeft
    questionDiv.setAttribute("style", "display:none");
    document.getElementById("score").innerHTML = `Your score is ${score}`
    $score.removeAttribute("class");
    $form.removeAttribute("class");
}
// This displays the score at the end of the game

function formSubmit() {
    console.log("formSubmit")
    let $input = document.querySelector("input");
    const highScore = { score: secondsLeft, initials: $input.value };
    let highScoreCloudInfo = JSON.parse(localStorage.getItem("highScoreInfo")) || []
    highScoreCloudInfo.push(highScore);
    localStorage.setItem("highScoreInfo", JSON.stringify(highScore));
}
//  saves form information to local memory

submitBtn.addEventListener('click', formSubmit);
// submit forms to high scores
generateBtn.addEventListener("click", generateQuiz);
// This is the activator that trigger the game to start.





