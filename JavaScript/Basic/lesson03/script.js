//関数宣言　
greet() //宣言式の前に関数を記載しても呼び出せる

function greet() {
    console.log('こんにちは')
}

greet()

//関数式
/**
 * 挨拶の言葉を出力する関数
 * @param  string greet 挨拶の文字列 
 * @param  string name 人名 
 */
const speak = function (greet = `こんにちは`, name = `名無しさん`) {
    console.log(`${greet},${name}さん。`)
}

speak('おはようございます', '太郎')
speak('おはようございます')
speak()

//円の面積を求める関数
function calcArea(r) {
    return Math.PI * r ** 2
}
let area = calcArea(5)
console.log(area)

//const calcArea2=(r){}
//const calcArea2=(r)=>{
//eturn Math.PI*r**2
//}
const calcArea2 = r => Math.PI * r ** 2
console.log(calcArea2(8))


const hello = () => '世界の皆さんこんにちは！';
let result = hello();
console.log(result);


const calculator = (price, tax) => {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        total += price[i] + price[i] * tax;
    }
    return total;
}

let priceTable = [100, 80, 200, 50]; //価格表
let totalPrice = calculator(priceTable, 0.1); //関数の呼び出し
console.log(totalPrice); // 合計の表示

//
const funcA = callback => {
    console.log('関数Aを実行しました');
    let value = 20;
    callback(value);
};

const funcB = value => {
    console.log('値: ', value);
};
funcA(funcB)

let train = ['山手線', '中央線', '京浜東北線', '埼京線', '湘南新宿ライン'];

train.forEach(function (value, index) {
    console.log(`JRの路線:`, value, index)
})

const logTrain = (value, index) => {
    console.log(`JRの路線:`, value, index)
}

train.forEach(logTrain)
const newTrain = train.map((value) => `JR` + value)
console.log(newTrain)

let trainHtml = ``
train.forEach(train => {
    trainHtml += `<li>${train}</li>`
})
console.log(trainHtml)

const ul = document.querySelector(`.train`)
console.dir(ul)

ul.innerHTML = trainHtml


