var allQuestions = [
    { id: 1, title: '2+2', answer: '4' },
    { id: 2, title: '2*3', answer: '6' },
    { id: 3, title: '7**2', answer: '49' },
    { id: 4, title: '12/4', answer: '3' },
    { id: 5, title: '100/25', answer: '4' },
    { id: 6, title: '100*2', answer: '200' },
    { id: 7, title: 'Capital of Iran?', answer: 'Tehran' },
]

var score = 0;
var maniAnswer=""
allQuestions.forEach(function (question) {
    maniAnswer = prompt(question.title + '?')
    if (maniAnswer === question.answer) { 
        score++
    }
})

alert('Score: ' + score)