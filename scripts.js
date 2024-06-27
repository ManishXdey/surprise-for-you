const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const congratulationsContainer = document.getElementById('congratulationsContainer');
const artworkContainer = document.getElementById('artworkContainer');
const welcomeContainer = document.getElementById('welcome');

const questionElement = document.getElementById('question');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const feedbackElement = document.getElementById('feedback');

const correctSound = document.getElementById('correctSound');
const celebrationSound = document.getElementById('celebrationSound');
const congratulationSound = document.getElementById('congratulationSound');
const iLoveYouButton = document.getElementById('iLoveYouButton');

const questions = [
    {
        question: "Mecho bhoot is?",
        options: ["Pagol", "Smart handsome Dashing"],
        correct: "Pagol"
    },
    {
        question: "Where does Mecho bhoot live?",
        options: ["Sakchunni's Heart", "Gairkata"],
        correct: "Sakchunni's Heart"
    },
    {
        question: "When we first get to know each others Presence?",
        options: ["9th September", "23 December"],
        correct: "9th September"
    },
    {
        question: "When we first hugged?",
        options: ["2 February", "28 January"],
        correct: "28 January"
    },
    {
        question: "What was the first movie we watched together in hall?",
        options: ["Nam na jana movie", "Fighter"],
        correct: "Nam na jana movie"
    }
];

let currentQuestionIndex = 0;

startButton.addEventListener('click', () => {
    welcomeContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
});

option1Button.addEventListener('click', () => selectAnswer(option1Button.innerText));
option2Button.addEventListener('click', () => selectAnswer(option2Button.innerText));

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    option1Button.innerText = currentQuestion.options[0];
    option2Button.innerText = currentQuestion.options[1];
    feedbackElement.classList.add('hidden');
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    feedbackElement.classList.remove('hidden');
    
    if (selectedOption === currentQuestion.correct) {
        feedbackElement.innerText = 'Right answer baby, now next question!';
        correctSound.play();
    } else {
        feedbackElement.innerText = 'Wrong answer, but I love you anyway! Now next question!';
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 2000);
    } else {
        setTimeout(() => {
            questionContainer.classList.add('hidden');
            congratulationsContainer.classList.remove('hidden');
            congratulationSound.play();
            const congratsImage = document.querySelector('.congratulationsImage img');
            setTimeout(() => {
                congratsImage.classList.add('zoom');
            }, 500);
        }, 2000);
    }
}

iLoveYouButton.addEventListener('click', () => {
    congratulationsContainer.classList.add('hidden');
    artworkContainer.classList.remove('hidden');
    celebrationSound.play();
});
