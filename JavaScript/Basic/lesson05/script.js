const p = document.querySelector(`.error`)
console.log(p)

const ptags = document.querySelectorAll(`p`)
console.log(ptags)

//ptags.forEach(p => {
console.log(p)
//})

const content = document.querySelector(`.content p`)
console.log(content.innerText)
content.innerText = `上書きしたコンテンツ`
content.textContent = `さらに上書きしたコンテンツ`

content.innerHTML = `<span>もう１回コンテンツを上書き</span>`

const fruits = ['りんご', 'ばなな', 'なし'];
fruits.forEach(fruit => {
    parent.innerHTML += `<p>${fruit}</p>`
}
)
const link = document.querySelector(`a`)
const href = link.getAttribute(`href`)
console.log(href)

const error = document.querySelector(`.error`)
error.setAttribute('style', 'color: red;')

link.setAttribute('href', 'https://yahoo.co.jp');

const title = document.querySelector('.h1dom')
//DataTransferItemList.style.cssText = `padding:50px; background:goldcolor:red`;

//console.log(title.style)
title.style.backgroundColor = 'blue'
title.style.color = ''
title.style.cssText = 'padding: 50px; background: gold; color: red;'

console.log(error.classList.contains('asfa'))

error.classList.remove('error')
error.classList.add('success')


//const messages = document.querySelectorAll('.message > p');
//console.log(messages)
//messages.forEach(message >= {
//
//
//    if(message.textContent.includes('エラー') ) {
//    message.classList.add('error');
//}
//if (message.textContent.includes('サクセス')) {
//    message.classList.add('success');
//}
//})

const messages = document.querySelectorAll('.content > p');

ptags.forEach(p => {

    if (p.textContent.includes('エラー')) {
        p.classList.add('error');
    }
    if (p.textContent.includes('サクセス')) {
        p.classList.add('success');
    }

});

const article = document.querySelector('article');

const articleArr = Array.from(article.children)
console.log(articleArr)
articleArr.forEach(child => {
    child.classList.add('test')
})

// 子孫要素
article.querySelector('h2')

// 親要素
console.log(article.parentElement.parentElement)

// 先祖要素
console.log(article.closest('html'))

//兄弟要素
const hedding = document.querySelector(`article h2`)
console.dir(hedding)
console.log(hedding.nextElementSibling)

const button = document.querySelector('button');
button.addEventListener('click', () => { });

//Todoリスト
//const button = document.querySelector(`button`)
const ul = document.querySelector('ul');
//button.addEventListener(`click`, function () {
//    console.log(`クリックしました`)
//})

const input = document.querySelector(`input[type=text]`)


button.addEventListener('click', () => {
    //  ul.innerHTML += '<li>新しいToDo</li>';
    const li = document.createElement(`li`)
    console.dir(input.value)
    if (input.value !== ``) {
        li.textContent = input.value
        ul.append(li)
        input.value = ``
    }
    else {
        alert(`未入力`)
    }
    //li.textContent = `新しいToDO`
    ul.append(li)
});

//const lists=Document.querySelectorAll(`ul li`)
//lists.forEach(list=>{
//    list.addEventListener(`click,e=>{
//        console.log(e)
//        e.stopPropagation()
//    }`)
//})

ul.addEventListener(`click`, e => {
    console.log(`ulをクリックしました`)
    console.dir(e.target.tagName)
    if (e.target.tagName == `LI`) {

    }
})
