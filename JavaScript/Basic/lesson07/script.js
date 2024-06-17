const answers = ['B', 'B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scorePoint = 100 / answers.length;
const result = document.querySelector('.result')
const resultScore = result.querySelector('.result-score')
let score = 0

form.addEventListener('submit', e => {
    // デフォルトイベント(送信)の阻止
    e.preventDefault();

});

form.addEventListener('submit', e => {
    // デフォルトイベント(送信)の阻止
    e.preventDefault();

    // ユーザーの解答
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
    ];

});

form.addEventListener('submit', e => {
    // デフォルトイベント(送信)の阻止
    e.preventDefault();

    // ユーザーの解答
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
    ];

    // 解答忘れチェック
    if (userAnswers.includes('')) {
        alert('解答していない問題があります。');
        return;
    }
    score = 0;
    // アンサーチェック
    userAnswers.forEach((answer, index) => {
        console.log(answer);
        if (answer === answers[index]) {
            score += scorePoint;
        }

    });

    result.classList.remove('d-none')

    let scoreCount = 0

    let timerID = setInterval(() => {

        resultScore.textContent = scoreCount

        if (scoreCount === score) {
            clearInterval(timerID)
            return
        }

        scoreCount++

    }, 10)


    // 点数確認
    // console.log(score)
    // resultScore.textContent = score



    // リセット
    //score = 0;

})

/*
setTimeout(() => {
    console.log(`3秒経ちました`)
}, 3000)
setInterval(() => {
    setTimeout
}, interval); (() => {
    console.log(`3秒経ちました`)
}, 300)

scrollTo(0, 200)
*/
