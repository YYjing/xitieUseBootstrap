/**
 * Created by Administrator on 2016/2/13 0013.
 */
// 自己写的动画
//顶部固定导航栏
/*;(function () {
    $(window).on('scroll', function () {
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop>0){
            $('#top_nav').addClass('scrollimation')
        }else{
            $('#top_nav').removeClass('scrollimation')
        }
        if(sTop>450){
            $('.wd-manufacture').addClass('scrollimation');
        }
        if(sTop>700){
            $('.wd-introduce').addClass('scrollimation');
        }
        if(sTop>900){
            $('.wd-feature').addClass('scrollimation');
        }
        if(sTop>1500){
            $('.wd-procedure').addClass('scrollimation');
        }
        if(sTop>2250){
            $('.wd-contact').addClass('scrollimation');
        }
        if(sTop>2500){
            $('.wd-contact .footer').addClass('move');
        }
        //if(sTop>1000){
        //    $('.wd-feature').addClass('scrollimation');
        //}
        //if(sTop>)
        console.log(sTop);
    })
})();*/
/*//首屏巨幕延迟动画
;(function () {
    setTimeout(function () {
        $('#wd_header').addClass('scrollimation');
    },500)

})();*/
// 联系我们表单动画
;(function () {
    var placeholder = '';
    $('.contact-form input').on({
        'focus': function () {
            // 表单动画
            placeholder = $(this).attr('placeholder');
            $('.contact-form label').removeClass('move');
            $(this).attr('placeholder', '');
            $(this).prev('label').addClass('move');
        },
        'blur': function () {
            $(this).attr('placeholder',placeholder);
            $('.contact-form label').removeClass('move');
        }
    })
})();
// qq图标进入动画
;(function(){
 $(window).on('scroll', function () {
        var bottomTop = $('#wd-contact .content').position().top-100;
        console.log(bottomTop);
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop>bottomTop){
            $('.wd-contact .footer').addClass('move');
        }
        if(sTop>0){
            $('#top_nav').addClass('scrollimation')
        }else{
            $('#top_nav').removeClass('scrollimation')
        }

    })
})();
// 由于页面缩放，首屏字体和图片尺寸需要变化
;(function(){
    screenResize();
    carouResize();
    function carouResize(){
        var imgWidth = $('#imacImg').width();

        $('#carousel').width(0.9*imgWidth).css('margin-left',-0.45*imgWidth);
          console.log($('#carousel').width())
    };
    function screenResize(){
        var width = document.documentElement.clientWidth;
        if(width < 600){
          $('#wd_header h2').css('font-size', width/9+'px');
          $('#wd_header p').css('font-size', width/15+'px');
          $('.imac-frame .item').css('width', width/15+'px');
          $('#wd_header .video a').css({
            'font-size': width/15+'px',
            'width':0.75*width
        });
        }else{
           $('#wd_header h2').css('font-size', '62px');
           $('#wd_header p').css('font-size', '32px');
           $('#wd_header .video a').css({
            'font-size': '32px',
            'width':'306px'
        });
        }

    };
     $(window).on('resize',function(){
        carouResize();
        screenResize();
     })
})();
// 以上是自己写的动画
;(function(){
    // 导航跳转效果,引入插件singlePageNav
    $('.myNavBar').singlePageNav({
        offset: $('#top_nav').height(),
                filter: ':not(.login)',
                updateHash: true,
    });
    //导航点击后关闭效果,这是bootstrap的插件效果
    $('.navbar-collapse a').on('click',function(){
       $('.navbar-collapse').collapse('hide');
    });
    // 页面滑动的动画效果，引入插件wow.js，需要new和初始化，使用是加类名
    var wow = new WOW()
    wow.init();
})();
;(function(){

})();