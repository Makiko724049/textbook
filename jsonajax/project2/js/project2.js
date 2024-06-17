(function () {

    // 住所検索のボタン
    const btn = document.querySelector('#search-btn')
    const form = document.querySelector('#contact-form')
    const requestUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='
    const request = new XMLHttpRequest
    const zippattern = /^[0-9-]{7,8}$/

    btn.addEventListener('click', () => {
        // 郵便番号が入力されていない場合
        if (form.zipcode.value === '') {
            alert('郵便番号が入力されていません')
            return
        }

        if (!zippattern.test(form.zipcode.value)) {
            alert('郵便番号のフォーマットが違います')
            return
        }

        const url = requestUrl + form.zipcode.value

        request.open('GET', url)

        request.onload = () => {
            const address = JSON.parse(request.responseText)
            console.log(address)

            if (!address.results) {
                alert('住所が見つかりませんでした')
                return
            }

            console.log(address.results[0].address1)

            setAddress(address)

        }

        request.send()

    }) //click

    function setAddress(address) {
        form.pref.value = address.results[0].address1
        form.city.value = address.results[0].address2 + address.results[0].address3
    }

})()



/*
(function () {

    // 住所検索のボタン
    const btn = document.querySelector('#search-btn')
    const form = document.querySelector('#contact-form')
    const requestUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='
    const request = new XMLHttpRequest
    const zippattern=/^[0-9-]{7,8}$/

    btn.addEventListener('click', () => {
        if(form.zipcode.value===''){
           alart('悠文番号が入力されていません')
           return
        }
        
        const url = requestUrl + form.zipcode.value

        request.open('GET', url)

        request.onload = () => {
            const address = JSON.parse(request.responseText)
            console.log(address)
            if(!address.results){
                alert('住所が見つかりませんでした')
                return
            }
            console.log(address.results[0].address1)

            setAddress(address)

        }

        request.send()

    }) //click

    function setAddress(address) {
        form.pref.value = address.results[0].address1
        form.city.value = address.results[0].address2 + address.results[0].address3
    }

})()







/*

(function () {


    const btn = document.querySelector('#search-btn');
    const form = document.querySelector('#contact-form')
    const requestUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='
    const request = new XMLHttpRequest()


    btn.addEventListener('click', () => {
        const url = requestUrl + form.zipcode.value

        request.open('GET', 'url')

        request.onload = () => {
            const addless = JSON.parse(request.responseText)
            const address = JSON.parse(request.responseText)
            console.log(addless);
            setAdless(addless)
        }
        request.send()
    })
    function setAdless(addless) {
        form.pref.value = addless.request[0].addless1
        form.city.value = addless.request[0].addless2+addless.request[0].addless3      
    }

})()

/*
function outputHtml(data) {
    let htmlStr = '';
    data.forEach(car => {
        let colorStr = car.colors.join();
        htmlStr += `<p>${car.name}は${car.brand}の${car.type}タイプの車です。<br>色の展開: ${colorStr}</p>`;
    });
    info.insertAdjacentHTML('beforeend', htmlStr);
}
    */
