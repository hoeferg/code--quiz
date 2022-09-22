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
let questionCard = 0
// sets the array value
let secondsLeft = 101
// Sets the time for the questions
let timerInterval;
// let $score = timerInterval
// not sure if this is needed

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
// This allows the question to rotate through till all the questions are shown.
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

function displayMessage() {
    let score = secondsLeft
    questionDiv.setAttribute("style", "display:none")
    document.getElementById("score").innerHTML =`Your score is ${score}`
    $score.setAttribute("style", "display:block")
    $form.setAttribute("style", "display:block")
}
// This displays the score at the end of the game

function formSubmit(event) {
    let $input =document.querySelector("form")[0];
    const highScore = {score: $runningTime, initials: $input.value};
    let highScoreCloudInfo =  JSON.parse(localStorage.getItem("highScoreInfo")) || []
    highScoreCloudInfo.push(highScore);
    localStorage.setItem("highScoreInfo", JSON.stringify(highScoreCloudInfo));
    event.preventDefault();
}
// saves form information to local memory

addEventListener('submit', formSubmit);
// submit forms to highscore
generateBtn.addEventListener("click", generateQuiz);
// This is the activtor that trigger the game to start.





// need start button to interact when clicked. It needs to start a timer and presents with a timer

// A way to tell when the answer is right or wrong

// When it's wrong the timer is reduced.

// When the question is answered the next question is shown

// When all the questions are answered or timer reaches 0 then the game is over

// Then you need to put your initials and save score
