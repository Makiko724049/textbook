const h1 = document.querySelector(`.copy`)
h1.addEventListener(`copy`, () => {
    console.log(`コピーしましたね`)
})

h1.addEventListener(`selectstart`, () => {
    console.log(`選択しましたね`)
    e.preventDefault()
})



const move = document.querySelector(`.move`)
const square = move.querySelector(`square`)
move.addEventListener(`mousemove`, e => {
    console.log(e.offsetX, e.offsetY)
    square.computedStyleMap.top = e.offsetY + `px`
})

document.addEventListener('scroll', e => {
    console.log(e)
})
