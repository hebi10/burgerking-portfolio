$(document).ready(function(){ 
    var main = $('.bxslider').bxSlider({ 
        mode: 'horizontal', 
        auto: true,	
        controls : true,	
        nextSelector: '.btn_next',
        prevSelector: '.btn_prev',
        nextText: 'arrow_forward_ios',
        prevText: 'arrow_back_ios_new',
        autoControls: true,
        pager:true,
        pause: 3000,
        autoDelay: 0,	
        slideWidth: 810, 
        speed: 750,
        stopAutoOnclick:true
    }); 
    
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
