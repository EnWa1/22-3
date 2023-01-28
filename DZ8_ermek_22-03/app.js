const riddles = document.querySelectorAll('.riddle');

riddles.forEach(riddle => {
    const answerBtn = riddle.querySelector('.answer-btn');
    const answer = riddle.querySelector('.answer');

    answerBtn.addEventListener('click', function() {
        answer.classList.toggle('show');
        if (answer.classList.contains('show')) {
            answerBtn.innerHTML = "Скрыть ответ";
        } else {
            answerBtn.innerHTML = "Показать ответ";
        }
    });
});