/* All answear options*/
const option0 = document.querySelector('.option0'),
      option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3');

/*All our options */
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answerTracker = document.getElementById('answer-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');


const questions = [
    {
        question: 'How to find percentage in JavaScript ?',
        options: [
            "You can't do this in JavaScript",
            "Oprerator: %",
            "Multiply by percentage and devide by 100",
            "Call a method findPercentage()"
        ],
        rightAnswer: 2 
    },
    {
        question: 'Result of "13" + 7 is ...',
        options: [
            "20",
            "137",
            "undefined",
            "Error"
        ],
        rightAnswer: 1 
    },
    {
        question: "Using JavaScript You can't code...",
        options: [
            "badly",
            "games",
            "sites",
            "desctop apps"
        ],
        rightAnswer: 0 
    },
]

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option0.innerHTML = questions[indexOfQuestion].options[0];
    option1.innerHTML = questions[indexOfQuestion].options[1];
    option2.innerHTML = questions[indexOfQuestion].options[2];
    option3.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;

}

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage === questions.length){
        quizOver();
    }else {
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item ===randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion();
            }else {
                indexOfQuestion = randomNumber;
                load()
            }
        }
        if(completedAnswers == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion)
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
}

btnTryAgain.addEventListener('click', () => {
    window.location.reload();
})

const checkAnswer = (el) => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('You have to choose one answer.')
    }else {
        randomQuestion();
        enableOptions();
    }
}

const disabledOptions = () => {
    optionElements.forEach(element => {
        element.classList.add('disabled')
        if(element.dataset.id == questions[indexOfQuestion].rightAnswer){
            element.classList.add('correct')
        }
    })
}

const enableOptions = () => {
    optionElements.forEach(element => {
        element.classList.remove('disabled', 'correct', 'wrong')
    })
}

const answerTrack = () => {
    questions.forEach( () => {
        const div = document.createElement('div');
        answerTracker.appendChild(div)
    })
}

for(option of optionElements) {
    option.addEventListener('click' , e => checkAnswer(e))
}

const updateAnswerTracker = (status) => {
    answerTracker.children[indexOfPage -1].classList.add(`${status}`)
}

btnNext.addEventListener('click', validate);

window.addEventListener('load', () => {
    answerTrack();
    randomQuestion();
})
      
