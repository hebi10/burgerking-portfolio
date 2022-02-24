$(document).ready(function(){
    $(window).resize(function(){ 
        if($(window).width() > 1280){
            var main = $('.bxslider').bxSlider({ 
                touchEnabled : (navigator.maxTouchPoints > 0),
                mode: 'horizontal', 
                auto: false,	
                controls : true,	
                nextSelector: '.btn_next',
                prevSelector: '.btn_prev',
                nextText: 'arrow_forward_ios',
                prevText: 'arrow_back_ios_new',
                autoControls: true,
                pager:true,
                pause: 3000,
                autoDelay: 0,	
                speed: 750,
                stopAutoOnclick:true,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 500,
                slideMargin: 28
            });
        }else if($(window).width() > 768 && 1279 > $(window).width()){
            var main = $('.bxslider').bxSlider({ 
                touchEnabled : (navigator.maxTouchPoints > 0),
                mode: 'horizontal', 
                auto: false,	
                controls : true,	
                nextSelector: '.btn_next',
                prevSelector: '.btn_prev',
                nextText: 'arrow_forward_ios',
                prevText: 'arrow_back_ios_new',
                autoControls: true,
                pager:true,
                pause: 3000,
                autoDelay: 0,	
                speed: 750,
                stopAutoOnclick:true,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 370,
                slideMargin: 28
            }); 
        }else{
            var main = $('.bxslider').bxSlider({ 
                touchEnabled : (navigator.maxTouchPoints > 0),
                mode: 'horizontal', 
                auto: false,	
                controls : true,	
                nextSelector: '.btn_next',
                prevSelector: '.btn_prev',
                nextText: 'arrow_forward_ios',
                prevText: 'arrow_back_ios_new',
                autoControls: true,
                pager:true,
                pause: 3000,
                autoDelay: 0,	
                speed: 750,
                stopAutoOnclick:true,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 360
            }); 
        }
    }).resize();
    
    $(".bx-stop").click(function(){	
        main.stopAuto(); 
        $(".bx-stop").hide(); 
        $(".bx-start").show(); 
        return false; 
    }); 

    $(".bx-start").click(function(){
        main.startAuto(); 
        $(".bx-start").hide(); 
        $(".bx-stop").show(); 
        return false; 
    }); 

    $(".bx-start").hide();
});
