// alert('こんにちは')      ctrl+"/"
/* コメント */

console.log('コンソールに文字が表示されます');

/* 変数　*/
let age = 28;
console.log(age);

age = 35
console.log(age);
/*　定数　*/
const tax = 0.1;
// tax = 0.05; 再代入できない

let data;
console.log(data);

// 文字列
let lastName = '山田';
let firstName = '太郎';
console.log(lastName + firstName);
console.log(123 + firstName);
console.log(firstName[0]);
console.dir(lastName.length); /*.の後ろにプロパティ名*/
console.log(lastName.concat('様')); /*.の後ろにメソッド名*/

let email = 'taro@yamada.co.jp'
console.log(email.indexOf('@'))
console.log(email.slice(2))
let atmark = email.indexOf('@')
console.log(email.slice(0, atmark))
console.log(email.replace('taro', 'jiro'))

const PI = 3.14
let radius = 4
console.log(PI * radius ** 2)

let num = 1
num = num + 1
num += 1 //num = num + 1
console.log(num) //3
num -= 1
console.log(num) //2
num++ //num = num + 1
console.log(num) //3
console.log(num++) //1 console.log 2 n++
console.log(num++) //1 n++ 2 console.log★優先的に+1
num--
console.log(num)

console.log(10 - 'こんにちは')

const author = '山田太郎'
const likes = 25
let result = 'この記事の投稿者：' + author + ' いいねの数：' + likes
console.log(result)

result = `この記事の投稿者：${author} いいねの数：${likes}`
console.log(result)

let fruits = ['apple', 'banana', 'grape']
console.log(fruits)
console.log(fruits[1])
fruits[1] = `cherry`
console.log(fruits)

console.log(fruits.join('★'))
console.log(fruits.concat(['grape', 'kiwi']))
console.log(fruits.push('pineapple'))
console.log(fruits)
console.log(fruits.pop())

/*
// スプレッドオペレーター
const color1 = ['red', 'blue', 'yellow']
const color2 = ['purple', 'Yellow', 'pink']
let colorMixed [...color2, color1]
console.log(colorMixed)
*/

let limit = 50
console.log(limit == '50') //true
console.log(limit === '50') //false
console.log(limit > 50)
console.log(limit <= 50)
console.log(limit != 40)
console.log(typeof true) 