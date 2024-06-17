let user = {
    name: '太郎',
    age: 20,
    email: 'taro@yamada.co.jp',
    address: 'Tokyo',
    likes: ['野球', 'カレー', '映画'],
    // `r2-d2': 'ロボット',
    blogs: [
        {
            title: '今日は沖縄に来ています',
            likes: 20,
        },
        {
            title: 'きれいな海に泳ぎに来ました',
            likes: 15,
        },
    ],
    login: function () {
        console.log('ログインしました');
    },
    logLikes: function () {
        this.likes.forEach(function (value, i) {
            console.log(`${i + 1}位 ${value}`)
        })
    },
    logBlogs() {
        this.blogs.forEach(blog => {
            console.log(`${blog.title} いいね:${blog.likes}`)
        })
    }
}
console.dir(user);
console.log(user.name);
console.log(user[`name`]);
console.log(user[`r2 - d2`]);

user.age = 25;
//user.dir(user);
user.login();

this.likes
user.logLikes();



const blogs = [
    {
        title: '今日は沖縄に来ています',
        likes: 20,
    },
    {
        title: 'きれいな海に泳ぎに来ました',
        likes: 15,
    },
];

user.logBlogs()


const userOne = {
    user: `太郎`,
    age: 24
}
const userTwo = userOne
userTwo.age = 30
console.log(userOne)

