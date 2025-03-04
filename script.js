const quizData = [
    { question: "15 × 8", answer: "120" },
    { question: "23 × 7", answer: "161" },
    { question: "Square of 29", answer: "841" },
    { question: "Cube of 13", answer: "2197" },
    { question: "1/4 as a percentage", answer: "25%" },
    { question: "37.5% as fraction", answer: "3/8" },
];

let currentQuestion = {};
let correctAnswer = "";

function generateQuestion() {
    let randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = quizData[randomIndex];
    correctAnswer = currentQuestion.answer;
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();

    // Allow fraction inputs (e.g., "1/4" should match "1/4")
    if (userAnswer.includes("/")) {
        let [num, denom] = userAnswer.split("/").map(Number);
        let [correctNum, correctDenom] = correctAnswer.split("/").map(Number);

        if (num / denom === correctNum / correctDenom) {
            document.getElementById("result").innerText = "✅ Correct!";
            setTimeout(generateQuestion, 2000);
            return;
        }
    }

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = `❌ Incorrect. Correct answer: ${correctAnswer}`;
    }
    setTimeout(generateQuestion, 2000);
}

window.onload = generateQuestion;
