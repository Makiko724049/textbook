// (function(data){ ... })(data)

(function () {

    const request = new XMLHttpRequest()
    const list = document.querySelector('#list')

    request.open('GET', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')

    request.onload = () => {

        const data = JSON.parse(request.responseText)

        outputHtml(data)
    }

    request.send()

    function outputHtml(data) {
        let html = ''
        data.forEach(photo => {
            html += `<div class="list-item">
          <p>${photo.id}</p>
          <p><img src="${photo.thumbnailUrl}" alt=""></p>
          <p style="font-weight:bold">${photo.title}</p>
        </div>`
        })

        list.insertAdjacentHTML('afterbegin', html)

    }

})()





/*即時関数
(function () {

    const request = new XMLHttpRequest();
    const info = document.querySelector('#list');

    request.open('GET', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');

    request.onload = () => {
        const data = JSON.parse(request.responseText);
        outputHtml(data);
        console.log(data);
    }

    request.send();

})

function outputHtml(data) {
    let html = '';
    data.forEach(photo => {
        html += ' <div class="list-item">
        <p>${photo.id}</p>
        <p><img src="${photo.thumbnailUrl"}"></img></p>


/*
const request = new XMLHttpRequest();
const info = document.querySelector('#list');
const item = document.querySelector('#list-item');



window.addEventListener('DOMContentLoaded', function () {

    console.log('ページが読み込まれました！');

    request.open('GET', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');

    request.onload = () => {
        const data = JSON.parse(request.responseText);
        outputHtml(data);
        console.log(request.responseText);
    }

    request.send();

});

function outputHtml(data) {
    let htmlStr = '';
    data.forEach(htmlList => {
        htmlStr += '<img src="' + htmlList.url + '" alt=""' >
        //`<p>ID番号：${htmlList.id}</p>`;
        //'<img>${htmlList.url}</img>'
        //    `<p>${htmlList.title}</p>`;
    }
    );
    info.insertAdjacentHTML('beforeend', htmlStr);
    //item.insertAdjacentHTML('beforeend', htmlStr);
}
    */