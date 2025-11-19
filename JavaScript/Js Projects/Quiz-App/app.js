// console.log("Javascript running -->")

// Quiz Data -->
let quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Computer Style Sheet",
            "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript",
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["javascript", "script", "js", "scripting"],
        answer: "script",
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Online Notation",
            "Java Object Notation",
            "JavaScript Object Notation",
            "Joined Server Objects Name",
        ],
        answer: "JavaScript Object Notation",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["// Comment", "!-- Comment --", "** Comment **", "# Comment"],
        answer: "// Comment",
    },
    {
        question: "Which method is used to print something in the console?",
        options: [
            "console.print()",
            "log.console()",
            "console.log()",
            "print.console()",
        ],
        answer: "console.log()",
    },
    {
        question: "Which HTML tag is used to link external JavaScript?",
        options: ["link", "js", "script src=''", "style"],
        answer: "script src=''",
    },
];


// Global Variables -->
let quiz = false;
let currentQuesIndex = 0;
let score = 0;
// let currentQues = currentQuesIndex;

// HTML Element in Js  -->
let mainQuizContainer = document.querySelector(".main")
let startScreen = document.querySelector(".startScreen")
let resultScreen = document.querySelector(".resultScreen")
let result = document.querySelector(".score")

// console.log(result)

// Functions -->

// restart quiz -->
const restartQuiz = () => {
    console.log("mai chl raha hon")
    currentQuesIndex = 0;
    score = 0;

    // console.log(currentQuesIndex)
    // window.location.reload()
    resultScreen.classList.add("hidden")
    startScreen.classList.add("hidden")
    mainQuizContainer.classList.remove("hidden")
    showData()
}

// show results -->
const showResult = () => {
    mainQuizContainer.classList.add("hidden")
    resultScreen.classList.remove("hidden")
    result.innerHTML = `You Score ${score} out of ${quizData.length}`
}

// dalay 1s 
const delayData = () => {
    setTimeout(() => {
        showData()
    }, 1000)
}

// main ui data -->
const showData = () => {
    // console.log(currentQuesIndex)
    if (currentQuesIndex < quizData.length) {
        let currentQues = quizData[currentQuesIndex]
        mainQuizContainer.innerHTML = `
    <div class="quiz-app-container">
            <h1 >
                Javascript Quiz 4
            </h1>

            <h3>Question ${currentQuesIndex + 1} out ${quizData.length}</h3>

            <div class="question">
                <h1 id="question">
                    ${currentQues.question}
                </h1>
            </div>

            <div class="buttons">
                <button onclick="checkAns(this)" class="btn">${currentQues.options[0]}</button>
                <button onclick="checkAns(this)" class="btn">${currentQues.options[1]}</button>
                <button onclick="checkAns(this)" class="btn">${currentQues.options[2]}</button>
                <button onclick="checkAns(this)" class="btn">${currentQues.options[3]}</button>
            </div>
        </div>`
    } else {
        showResult()
    }
}

// answer check  -->
const checkAns = (e) => {
    // console.log("mai chl raha hon -->",e.innerHTML)
    // console.log(e)
    // console.log("mai chl raha hon -->",event.target.innerHTML)
    // let userAns = event.target.innerHTML;
    let userAns = e.innerHTML;

    if (userAns == quizData[currentQuesIndex].answer) {
        e.style.backgroundColor = "green"
        score++;

        console.log(score)
        currentQuesIndex++;
        delayData()

    } else {
        e.style.backgroundColor = "red"
        currentQuesIndex++;
        delayData()

    }
}

// start quiz  -->
const startQuiz = () => {
    // console.log("mai chl raha hon")
    quiz = true;

    // console.log(quiz)
    startScreen.classList.add("hidden")
    showData()
}