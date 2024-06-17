//$(document).ready(function () {
//    alert('jQuery動作テスト');
//});

$('h1').css('color', 'green');
$('.site-header-nav li a').css(`color`, 'blue');

$(`.mv-copy`).next().css('text-decoration', 'underline')

$('.service-card').parent().css('border', '1px solid orange');
$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000');

$('.works-container')
    .css('border', '4px dotted orange')
    .find('.works-thumb').css('opacity', '0.5')
    .next().css('background-color', 'rgba(255 220 0 / .5)')
    .children().css('text-decoration', 'underline');

const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetContainer = $('.tweet-container');
//$tweetContainer.append(tweet);

let display = true;
//on==addEventListener
$('#quick-news-btn').on('click', e => {
    if (display) {
        $('.quick-news-content').wrap('<div class="hidden">');
        $(e.target).text('＋ ニュースを開く');
        display = false;
    } else {
        $('.quick-news-content').unwrap()
        $(e.target).text('× ニュースを閉じる');
        display = true;
    }
});

$('.works-desc').remove();

//$('.works-thumb img').removeAttr('alt');

//console.log($('.works-thumb img').after('alt'));
console.log($('.works-thumb img').attr('alt'));

//$('.works-thumb img').after('alt', 'アンティーク')
console.log($('.works-thumb img').attr('alt', 'アンティーク'));

$('.faq-openclose').on('click', e => {
    console.log('クリックしました');
    $('.faq-openclose').off('click');

    $(e.target).toggleClass('is-open');

    const dd = $(e.target).parent().next()

    //if ($dd.is(':visible')) {
    //    $dd.hide()
    //    $dd.slideUp()
    //} else {
    //    $dd.show()
    //    $dd.slideDown()
    //}

    //$dd.toggle(!$dd.is(':visible'))
    $dd.stop().slideToggle(!$dd.is(':visible'))
    //dd部分（Answer）の表示
    //$dd.show()
});


//1回のみ反応
//$jquery.one('click',()=>{})

//$jquery.click(()=>{})

//.onメソッドのもう１つの使い方
//$jquery.on('イベント名','子孫要素のセレクタ',()=>{})
$(document).on('DOMContentLoaded', () => {
    $('h1').css('font-weight', 'bold')
})

$(document).ready(() => {
    $('.mv-subcopy').css('color', 'orange')
})
// $(関数（（｛｝)
$(function () {
    $('.mv-subcopy').css('color', 'green')
})

$(window).on('load', () => {
    console.log('全てのコンテンツがロードされました')
})

const mouseFollow = $('.mouse-follow')
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

$(window).on('mousemove', e => {
    //console.log(e.clientX, e.clientY)
    //mouseFollow.css({
    //    'left': e.clientX,
    //    'top': e.clientY
    //})
    mouseX = e.clientX;
    mouseY = e.clientX
})

//追従要素の位置をアップデートする関数
//約60FPS
function updeteMouseFollowPosition() {
    //console.log('あいうえお')
    let nowX = lerp(currentX, mouseX)
    let nowY = lerp(currentY, mouseY)

    currentX = nowX;
    currentY = nowY;

    mouseFollow.css({
        'left': nowX,
        'top': 'nowY'
    })
    requestAnimationFrame(updeteMouseFollowPosition)
}
updeteMouseFollowPosition()


//線形補間の関数
//c=current,d=destination,e=easing
function lerp(c, d, e = 0.05) {
    return c + (d - c) * e
}

$('.mv-copy').on('click', e => {
    $(e.target).animate({
        'font-size': '40px'
    }, 1000, 'sing')
});


//$('.pagetop').on('click', () => {
//console.log()
//    $('html').animate({
//        'scrollTop': 0
//    });
//});

$('tweet-show').on('click', () => {
    $('tweed-content-ls16').fadeIn()
})

const tweets = [
    '「DX支援」に当社のサービスがお役に立てるかもしれません。',
    '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
    '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
    'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19');
let counter = 0;
//$tweetContainer.text(tweets[counter]).fadeIn();

//setTimeout(()=>{},3000);
//setInterval(() => {
//    $tweetContent.fadeOut(400, () => {
//       counter++
//        $tweetContent.text(tweets[counter]).fadeIn()
//   })
//}, 3000);

const $serviceList = $('.service-List')
let isInView = false;
//$(Window).scroll()
$(Window).on('scroll', () => {
    if (isInView) return
    console.log('スクロール検知中')
    isInView = $serviceList.inView('topOnly', 150)
    if (isInView) {
        $serviceList.addClass('in-view')
    }
})

//slick
$('.works-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slideToShow: 2,
    speed: 800,
    dots: true,
    responsive: [
        //1000px未満
        {
            breakpoint: 1000,
            settings: {
                slideToShow: 1
            }
        },
    ],
})

$('.works-container').onn('afterChange', function (event, slick, currentSlide) {
    console.log(e)
    console.log(slick)
    console.log(current)
})

$(`.pause`).on(`click`, () => {
    $(`.works-container`).slick('slickPause')
})


//lax.js
$(window).on('load', () => {
    // 2. lax.jsの起動
    lax.init()
    // 3. ドライバーの設定
    lax.addDriver(
        'parallaxY',
        () => {
            //console.log(window.scrollY)
            return window.scrollY
        }
    )
    //要素の追加
    lax.addElements(
        '.lax-target',
        {
            parallaxY: {
                translateY: [
                    ['elInY', 'elOutY'], //ドライバーの値
                    {
                        767: [-80, 60], //要素の値
                        768: [-80, 100]
                    }
                ],
                opacity: [
                    ['elInY', 'elInY+300']
                    [0, 1]
                ],
                width: [
                    ['elInY', 'elInY+200']
                    [0, 1]
                ]
            }
        }
    )

})
