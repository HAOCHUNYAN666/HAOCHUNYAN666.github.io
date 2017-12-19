$(function () {
    $('#myTab li:nth-of-type(2) a').tab('show')
})

$(function(){

    $('.slide .icon li').not('.up,.down').mouseenter(function(){
        $('.slide .info').addClass('hover');
        $('.slide .info li').hide();
        $('.slide .info li.'+$(this).attr('class')).show();//.slide .info li.qq
    });
    $('.slide').mouseleave(function(){
        $('.slide .info').removeClass('hover');
    });

    $('#btn').click(function(){
        $('.slide').toggle();
        if($(this).hasClass('index_cy')){
            $(this).removeClass('index_cy');
            $(this).addClass('index_cy2');
        }else{
            $(this).removeClass('index_cy2');
            $(this).addClass('index_cy');
        }

    });

});




/*----------------franchise-------------------*/
$(".jiameng .progress>a").bind("click",function(){
    var n= $(this).index();
    $(".jiameng section").eq(n).css("display","block").siblings("section").css("display","none")
})
/*----------------franchise-------------------*/



/*----------------entirety-------------------*/
$(function(){
    $(".entirety .col-md-6 .img").hover(function(){
        $(this).next("div").stop().animate({"margin-top":"-80px"},1000);
    },function(){
        $(this).next("div").stop().animate({"margin-top":"0px"},1000);
    })
})
/*----------------entirety-------------------*/

/*----------------show-------------------*/
$(function(){
    $(".show .col-md-4 a").hover(function(){
        $(this).next("div").stop().animate({"margin-top":"-40px"},1000);
    },function(){
        $(this).next("div").stop().animate({"margin-top":"0px"},1000);
    })
})

$(function(){
    $(".show ul li").bind("click",function(){
        var n= $(this).index();
        $(this).addClass("showcolor").siblings("li").removeClass("showcolor");
        $(".show section").eq(n).css("display","block").siblings("section").css("display","none")
    })
})
/*----------------show-------------------*/