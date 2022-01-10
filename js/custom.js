$(document).ready(function(){


    let isClose = true;
    let isClose2 = true;
    let isClose3 = true;


    $('.user li').on("click",function(){

        if(isClose == true){
            $('.user').addClass('on');
            isClose = false;
            $('.user li').show();
        }else{
            $('.user').removeClass('on');
            isClose = true;
            $('.user li').show();

        }
    });


    $('.lang li a').on('click',function(){

        if(isClose3 == true){
    
            $('.lang').addClass('on');
            isClose3 = false;
            $('.lang li a').show();
        }else{
            $('.lang').removeClass('on');
            isClose3 = true;
            $('.lang li a').hide();
            $(this).show();
        }
       });
  


   $('.fa-search').on('click',function(){

    if(isClose2 == true){
    $('.inputBox input').css({'left':-300}).stop().animate({'left':0},400);
    $('.inputBox label').css({'left':-300}).stop().animate({'left':0},400);
    $('.inputBox button').css({'left':-300}).stop().animate({'left':200},400);
    isClose2 = false;
}else{  
    $('.inputBox input').css({'left':0}).stop().animate({'left':-300},400);
    $('.inputBox label').css({'left':0}).stop().animate({'left':-300},400);
    $('.inputBox button').css({'left':200}).stop().animate({'left':-300},400);
    isClose2 = true;
}
});

$('.fa-bars').on('click',function(){
    $('.subMenuGroup').stop().animate({'left':0},500)
});
$('.fa-arrow-circle-left').on('click',function(){
    $('.subMenuGroup').stop().animate({'left':'-100%'},500)
});


$('.header_slider').slick({

autoplay:true,
swipe:true,
pauseOnHover:false,
autoplaySpeed:5000,
speed:1200,
dots:true,
fade:false,
vertical:true

});
 

$('.bestSlide').slick({
autoplay:false,
centerMode:true,
centerPadding:'280px',
slidesToShow:3,
pauseOnHover:true,
focusOnSelect:true,
dots:false,
swipe:false,
arrows:false,
asNavFor: '.bestText'


});

$('.bestText').slick({

    autoplay:false,
    swipe:false,
    pauseOnHover:false,
    dots:false,
    fade:true,
    arrows:false
    
    
    });

    $(window).on("scroll",function(){
        let num = $(this).scrollTop();
        console.log(num);

        let img1 = $('.sec2 .box1');
        let img2 = $('.sec2 .box2');
        let img3 = $('.sec2 .box3');

        if(num >= 500){
            $(img1).addClass('on');
        }else if(num == 0){
            $(img1).removeClass('on')
        }

        if(num >= 670){
            $(img2).addClass('on');
        }else if(num == 0){
            $(img2).removeClass('on')
        }

        if(num >= 800){
            $(img3).addClass('on');
        }else if(num == 0){
            $(img3).removeClass('on')
        }
    });
    

});