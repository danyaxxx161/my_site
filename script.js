const quizData = [
    {
        question: "Ты Викча??",
        a: "НЕТ",
        b: "ДА",
        c: "Я это я",
        correct: "b",
    },
    {
        question: "Ты точно викча?",
        a: "ДА",
        b: "БЕСТРЕЕ ДАЛЬШЕ",
        c: "НЕТ",
        correct: "a",
    },
    {
        question: "какой у тебя год рождения??",
        a: "2008",
        b: "2009",
        c: "2011",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered coreectly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
