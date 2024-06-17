//const btn = document.querySelector('#btn');
//const info = document.querySelector('#car-info');
//let counter = 1;

// const cars = [
//   {
//     "name": "カローラ",
//     "type": "セダン",
//     "brand": "TOYOTA"
//   },
//   {
//     "name": "フィット",
//     "type": "コンパクト",
//     "brand": "HONDA"
//   },
//   {
//     "name": "ハイゼット",
//     "type": "軽貨物車",
//     "brand": "ダイハツ"
//   }
// ];

const btn = document.querySelector('#btn');
const info = document.querySelector('#car-info');
const request = new XMLHttpRequest();
let counter = 1;

btn.addEventListener('click', () => {
    request.open('GET', `https://norixx.github.io/jquery_elearing/cars${counter}.json`);
    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            outputHtml(data);
        } else {
            console.log('サーバに接続できましたが、エラーになりました')
        }

    };
    request.onerror = () => {
        console.log('接続エラーです');
    }
    request.send();
    counter++;
    if (counter > 3) {
        btn.setAttribute('disabled', 'disabled');
    }
});

function outputHtml(data) {
    let htmlStr = '';
    data.forEach(car => {
        let colorStr = car.colors.join();
        htmlStr += `<p>${car.name}は${car.brand}の${car.type}タイプの車です。<br>色の展開: ${colorStr}</p>`;
    });
    info.insertAdjacentHTML('beforeend', htmlStr);
}


/*
// インスタンスの作成
const request = new XMLHttpRequest();

btn.addEventListener('click', () => {
    //接続の準備
    //request.open('GET', `https://norixx.github.io/jquery_elearing/cars1.json`)
    request.open('GET', 'https://norixx.github.io/jquery_elearing/cars1.json');

    //データがかえってきた時の処理
    console.log(request)
    request.onload = () => {
        console.log(request.responseText)
        const data = JSON.parse(request.responseText);
        console.log(data)
        outputHtml(data);
    }

    //リクエストの送信
    request.send()

    //カウンタ
    counter++

    if (counter > 3) {
        btn.setAttribute('disabled', 'disabled');
    }


})


//HTMLへの繁栄
function outputHtml(data) {
    let html = car.colors.join();
    data.forEach(car => {
        html += `<p>${car.name}は${car.brand}の${car.type}タイプの車です。<br>色の展開: ${colorStr}</p>`;
        car.name
        car.type
        car.bland

    });
    info.insertAdjacentHTML('beforeend', html);
}
*/


//Fetch API

async function fetchJsonData() {
    try {
        const fetchdData = await fetch(`https://norixx.github.io/jquery_elearing/cars1.json`)
        console.log(fetchdData)
        const data = await fetchdData.json()
        console.log(data)
    } catch (error) {
        console.dir(error.message)
    }
}
fetchJsonData()