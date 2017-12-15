var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //动画效果
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var mp3=document.querySelector("#mp3");
var mp3btn=document.querySelector("#mp3btn");
mp3btn.addEventListener('click',function () {
    if(mp3.paused){
        mp3.play();
        mp3btn.style.animationPlayState='running';
    }else {
        mp3.pause()
        mp3btn.style.animationPlayState='paused';
    }
})