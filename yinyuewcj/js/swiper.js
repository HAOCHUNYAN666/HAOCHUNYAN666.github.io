var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
});