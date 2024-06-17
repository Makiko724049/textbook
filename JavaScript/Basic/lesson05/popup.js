const button = document.querySelector(`button`)
const popup = document.querySelector(`.popup`)
const close = document.querySelector(`.popup-close`)

button.addEventListener(`click`, () => {
    popup.computedStyleMap.display = `block`
})

close.addEventListener(`click`, () => {
    popupClose()
})

popup.addEventListener(`click`, e => {
    if (e.target.classList.contains(`popup`)) {
        popupClose()
    }
})