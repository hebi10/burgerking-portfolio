$(document).ready(function(){
    scroll_top_btn();
    nav_arrow_btn();
    nav_menu_btn();
    footer_arrow_btn();
    nav_menu_active();
    nav_story_active();
});

function scroll_top_btn(){
    $('.top_button').on('click',function(){
        $('html, body').animate({scrollTop: '0'}, 300);
    });
};

function nav_menu_btn(){
    $('.mobile_icon div span').on('click',function(){
        $('nav').addClass('active');
        $('body').css('overflow','hidden');
    });

    $('nav ul>li:nth-child(1) span').on('click',function(){
        $('nav').removeClass('active');
        $('body').css('overflow','visible');
    });
};

function nav_arrow_btn(){
    $('nav ul>li>a span').on('click',function(e){
        if($(window).width() < 1264){
            e.preventDefault();
        }
    });

    $('nav ul>li>a span').on('click',function(){
        $(this).parent().next().toggleClass('active');
        $(this).parent().find('span').toggleClass('active');
    });
};

function footer_arrow_btn(){
    $('footer ul li h2 button').on('click',function(){
        $(this).parent().next().toggleClass('active');
        $(this).toggleClass('active');
    });
};

function nav_menu_active(){
    $('nav ul li:nth-child(4) ol li').eq(1).click(function(){
        $.cookie('cookie_menu','discount');
    });
    $('nav ul li:nth-child(4) ol li').eq(2).click(function(){
        $.cookie('cookie_menu','premium');
    });
    $('nav ul li:nth-child(4) ol li').eq(3).click(function(){
        $.cookie('cookie_menu','whopper');
    });
    $('nav ul li:nth-child(4) ol li').eq(4).click(function(){
        $.cookie('cookie_menu','junior');
    });
    $('nav ul li:nth-child(4) ol li').eq(5).click(function(){
        $.cookie('cookie_menu','All_Day_King');
    });
    $('nav ul li:nth-child(4) ol li').eq(6).click(function(){
        $.cookie('cookie_menu','Side');
    });
    $('nav ul li:nth-child(4) ol li').eq(7).click(function(){
        $.cookie('cookie_menu','Dessert');
    });
    $('nav ul li:nth-child(4) ol li').eq(8).click(function(){
        $.cookie('cookie_menu','dogpper');
    });


    $('footer ul li:nth-child(2) ol li').eq(0).click(function(){
        $.cookie('cookie_menu','discount');
    });
    $('footer ul li:nth-child(2) ol li').eq(1).click(function(){
        $.cookie('cookie_menu','premium');
    });
    $('footer ul li:nth-child(2) ol li').eq(2).click(function(){
        $.cookie('cookie_menu','whopper');
    });
    $('footer ul li:nth-child(2) ol li').eq(3).click(function(){
        $.cookie('cookie_menu','junior');
    });
    $('footer ul li:nth-child(2) ol li').eq(4).click(function(){
        $.cookie('cookie_menu','All_Day_King');
    });
    $('footer ul li:nth-child(2) ol li').eq(5).click(function(){
        $.cookie('cookie_menu','Side');
    });
    $('footer ul li:nth-child(2) ol li').eq(6).click(function(){
        $.cookie('cookie_menu','Dessert');
    });
    $('footer ul li:nth-child(2) ol li').eq(7).click(function(){
        $.cookie('cookie_menu','dogpper');
    });
}

function nav_story_active(){
    $('nav>ul>li:nth-child(6)>a').on('click',function(e){
        e.preventDefault();
    });
}