$(function(){
    $("nav ul li").mouseenter(function(){
        $(this).addClass("nav_current").siblings("li").removeClass("nav_current");
        $(this).mouseleave(function(){
            $(this).removeClass("nav_current");
        })
    })
})

$(function(){
    $("footer .container .row .col-md-6 ul li a").mouseenter(function(){
        $(this).addClass("footera");
        $(this).mouseleave(function(){
            $(this).removeClass("footera");
        })
    })
})
/*--屏幕飘雪---*/
