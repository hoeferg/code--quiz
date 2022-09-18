const generateBtn = document.querySelector("#generate-quiz");
const startCard = document.querySelector("#start-quiz");
const questionCard = document.querySelector("#question");
const $time = document.querySelector(".time")
let questions = [
    {
        title: "Commonly used data types DO NOt include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statements is enclosed within ________.",
        choices: ["quotes", "curly brackets", "parentheses", "square bracket"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within__________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: "all the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal /bash", "for loops", "console log"],
        answer: "console log"
    },
]

function generateQuiz() {
    startCard.setAttribute("style","display:none")
}



// need start button to interact when clicked. It needs to start a timer and presents with a timer

// A way to tell when the answer is right or wrong

// When it's wrong the timer is reduced.

// When the question is answered the next question is shown

// When all the questions are answered or timer reaches 0 then the game is over

// Then you need to put your initials and save score
generateBtn.addEventListener("click", generateQuiz);