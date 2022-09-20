const generateBtn = document.querySelector("#generate-quiz");
const startCard = document.querySelector("#start-quiz");
const $time = document.querySelector(".time");
const $submitAnswer = document.querySelector("#next");
const questionDiv = document.querySelector("#question");
let questionCard = 0
let secondsLeft = 101
let timerInterval;


let questions = [
    {
        topic: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        topic: "The condition in an if / else statements is enclosed within ________.",
        choices: ["quotes", "curly brackets", "parentheses", "square bracket"],
        answer: "parentheses"
    },
    {
        topic: "The condition in an if / else statement is enclosed within__________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: "other arrays"
    },
    {
        topic: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: "all the above"
    },
    {
        topic: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        topic: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal /bash", "for loops", "console.log"],
        answer: "console.log"
    },
]

function generateQuiz() {
    startCard.setAttribute("style", "display:none")
    $time.setAttribute("style", "display:block")
    setTime()
    render()
}


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


// function sendMessage

function quizEnd() {
    clearInterval(timerInterval);


}


function submitAnswer() {
    console.log(this.dataset.value)
    if (questionCard < questions.length) {
        render()
    if (this.dataset.value === questions[questionCard].answer) {
    }
        questionCard++
        if (secondsLeft === 0 || questionCard === questions.length - 1) {
            quizEnd()
        }
    }
    else {
        secondsLeft = secondsLeft - 5
        if (secondsLeft === 0) {
            quizEnd()
        }
    }
}

function score() {
    let score = secondsLeft
    alert("Your score is" + score + "!")
}


generateBtn.addEventListener("click", generateQuiz);
// localStorage.setItem("highScore", 0);

// if (score > parseInt(localStorage.getItem("hightScore"))) {
//     localStorage.setItem("hightScore", score);
// }



// need start button to interact when clicked. It needs to start a timer and presents with a timer

// A way to tell when the answer is right or wrong

// When it's wrong the timer is reduced.

// When the question is answered the next question is shown

// When all the questions are answered or timer reaches 0 then the game is over

// Then you need to put your initials and save score

