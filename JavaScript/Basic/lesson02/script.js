for (let i = 0; i < 5; i++) {
    console.log('iの値は: ', i);
}
console.log('ループ終了');

const maker = ['TOYOTA', 'HONDA', 'NISSAN'];
//maker[1] //HONDAが取り出せる
console.log(maker);


for (let i = 0; i < maker.length; i++) {
    console.log(maker[i]);
}

let j = 0
while (j < 3) {
    console.log(j)
    j++
}

const age = 18
if (age >= 18) {
    console.log('あなたには選挙権があります')
}

const password = 'abcd'
if (password.length < 8) {
    console.log('パスワードは８文字以上にしてください')
}

if (password.length >= 8) {
    console.log('パスワードの文字数はOKです')
} else {
    console.log('パスワードは８文字以上で入力してください')
}

if (password.length >= 12) {
    console.log('とても強いパスワードです')
}
else if (password.length >= 8) {
    console.log('良いパスワードです')
} else {
    console.log('パスワードは８文字以上で入力してください')
}

const password2 = 'abbbbbbbbc@'
if (password2.length >= 12 && password2.includes('@')) {
    console.log('サクセス：とても強いパスワード')
}
else {
    console.log('エラー：パスワードは８文字以上で且つ、＠を含めてください')
}

if (password2.length >= 12 || password2.includes('@')) {
    console.log('サクセス：とても強いパスワード')
}
else {
    console.log('エラー：パスワードは８文字以上か、＠を含めてください')
}

const isLogin = false
if (!isLogin) {
    console.log('ログインしてください')
}

let scores = [50, 40, 30, 0, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log('あなたのスコア: ', scores[i]);
    if (scores[i] == 100) {
        console.log('100点獲得しました！');
        break;
    }
}

let gread = 'S'
switch (gread) {
    case 'A':
        console.log('満点')
        break
    case 'B':
        console.log('良い')
        break
    case 'C':
        console.log('普通')
        break
    case 'D':
        console.log('頑張りましょう')
        break
    case 'E':
        console.log('落第')
        break
    default:
        console.log('不明');
}

//let size = 25;
if (true) {
    let size = 26;
    console.log('ブロック内 靴のサイズ: ', size);
}
console.log('ブロック外 靴のサイズ: ', size);

var size = 25;
if (true) {
    var size = 26;
    console.log('ブロック内 靴のサイズ: ', size);
}
console.log('ブロック外 靴のサイズ: ', size);

