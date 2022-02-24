$(document).ready(function(){
    $('.notice>div:nth-child(2)>span').click(function(){
        $('.event_show').toggleClass('event_active');
        $('.notice div:nth-child(2)>.material-icons').toggleClass('active');
    })
    setTimeout(event_Time_img01,500);
    setTimeout(event_Time_img02,1500);
    setTimeout(event_Time_img03,2500);
    scroll_transform();
    notice_Rolling();
    notice_page_control();
    questions_active();
    page_control_btn();
    menu_choice_active();
    event_active();
    event_page();
    news_page();
});

function event_Time_img01(){
    $('.event div>img:nth-of-type(1)').animate({
        opacity : "1"
    },2000);
}

function event_Time_img02(){
    $('.event div>img:nth-of-type(2)').animate({
        opacity : "1"
    },2000);
}

function event_Time_img03(){
    $('.event div>img:nth-of-type(3)').animate({
        opacity : "1"
    },2000);
}

function scroll_transform(){
    $(window).scroll(function(s){
        $('[data-scroll="transform_L"]').each(function(){
            if($(window).scrollTop() > ($(this).offset().top - $(window).height()/1.5)){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });

        $('[data-scroll="transform_R"]').each(function(){
            if($(window).scrollTop() > ($(this).offset().top - $(window).height()/1.3)){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });

        $('[data-scroll="leftRightArea"] > *').css('transition-delay',function(index){
            return index * 0.1 + 's';
        });

        $('[data-scroll="leftRightArea"]').each(function(){
            if($(window).scrollTop() > ($(this).offset().top - $(window).height()/1.7)){
                $('[data-scroll="leftRightArea"] > *').addClass('active');
            }else{
                $('[data-scroll="leftRightArea"] > *').removeClass('active');
            }
        });
    });
}

function notice_Rolling(){
    var height =  $(".rolling_Event>ul>li").height();
    var num = $(".rolling_Event>ul>li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".rolling").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    setInterval(noticeRolling,4000);
    $(".rolling").append($(".rolling li").first().clone());
}

function notice_page_control(){
    for(i = 1; i < $('.list_page ol').length; i++){
        $('.page_control ul').append('<li>'+ (i+1) +'</li>')
    }
    $('.page_control ul li').on('click',function(){
        $('.page_control ul li').removeClass('active');
        $(this).addClass('active');

        var page_num = $('.page_control ul li.active').index();
        var subpage_data = $('.list_page ol').eq(page_num);
        $('.list_page ol').removeClass('active');
        subpage_data.addClass('active');
    })
}

function questions_active(){
    $('.questions_page .questions ol li').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    })

    $('.questions_page .questions ul li').on('click',function(){
        $('.questions_page .questions ul li').removeClass('active');
        $(this).addClass('active');

        if($('.questions_page ul li.all').hasClass('active')){
            $('.questions_page ol li').css('display','block');
        }else if($('.questions_page ul li.service_Q').hasClass('active')){
            $('.questions_page ol li').css('display','none');
            $('.questions_page ol li.service_Q').css('display','block');
        }else if($('.questions_page ul li.delivery_Q').hasClass('active')){
            $('.questions_page ol li').css('display','none');
            $('.questions_page ol li.delivery_Q').css('display','block');
        }else{
            $('.questions_page ol li').css('display','none');
        }
    })
}

function page_control_btn(){
    var header_height = $('header').innerHeight();

    $('.guide_app_page .page_control ul li').eq(0).on('click',function(){
        $('html, body').animate({scrollTop: $('.guide_app_page .guide_app div:nth-child(1)').offset().top - header_height}, 300);
    });

    $('.guide_app_page .page_control ul li').eq(1).on('click',function(){
        $('html, body').animate({scrollTop: $('.guide_app_page .guide_app div:nth-child(2)').offset().top - header_height}, 400);
    });

    $('.guide_app_page .page_control ul li').eq(2).on('click',function(){
        $('html, body').animate({scrollTop: $('.guide_app_page .guide_app div:nth-child(3)').offset().top - header_height}, 500);
    });

    $('.guide_app_page .page_control ul li').eq(3).on('click',function(){
        $('html, body').animate({scrollTop: $('.guide_app_page .guide_app div:nth-child(4)').offset().top - header_height}, 600);
    });

    $('.guide_app_page .page_control ul li').eq(4).on('click',function(){
        $('html, body').animate({scrollTop: $('.guide_app_page .guide_app div:nth-child(5)').offset().top - header_height}, 700);
    });
};

function menu_choice_active(){
    $('.menu_page ol li:nth-child(n+2)').on('click',function(){
        $('.menu_page ol li:nth-child(1)').removeClass('active');
        $(this).toggleClass('active');
        $('.menu_page .picture>div').css('display','none');
        $('.menu_page .information>div').css('display','none');

        var choice_li = $('.menu_page ol li.active');
        var choice_arr = [];
        for(i = 0; i<choice_li.length;i++){
            var choice_data = $('.menu_page ol li.active').eq(i).attr('data-choice');
            choice_arr.push(choice_data);
        }
        for(i = 0; i<choice_li.length;i++){
            $('.menu_page .picture').children('.'+choice_arr[i]).css('display','block');
            $('.menu_page .information').children('.'+choice_arr[i]).css('display','block');
        }
    })
    $('.menu_page ol li:nth-child(1)').on('click',function(){
        if($('.menu_page ol li:nth-child(1)').hasClass('active') == false){
            $('.menu_page ol li').removeClass('active');
            $(this).addClass('active');
            $('.menu_page .picture div').css('display','block');
            $('.menu_page .picture').css('display','block');
            $('.menu_page .information div').css('display','block');
        }else{
            $(this).toggleClass('active');
            $('.menu_page .picture div').css('display','none');
            $('.menu_page .information div').css('display','none');
        }

        if($('.menu_page .picture_choice li:nth-child(1)').hasClass('active')){
            $('.menu_page .picture div').css('display','block');
            $('.menu_page ol li:not(:nth-child(1))').removeClass('active');
        }

        if($('.menu_page .information_choice li:nth-child(1)').hasClass('active')){
            $('.menu_page .information div').css('display','block');
            $('.menu_page ol li:not(:nth-child(1))').removeClass('active');
        }
    });

    $('.head_banner div:nth-child(2) span').on('click',function(){
        $(this).toggleClass('active');
        if($('.head_banner div:nth-child(2) span').hasClass('active')){
            $('.head_banner div:nth-child(2)').css('height',$('.head_banner div:nth-child(2)>h2').innerHeight())
        }else{
            $('.head_banner div:nth-child(2)').css('height','100%')
        }
    })

    $('.list_choice ul li').on('click',function(){
        $('.menu_page ol li').removeClass('active');
        $('.menu_page ol li:nth-child(1)').addClass('active');
        $('.list_choice ul li').removeClass('active');
        $(this).addClass('active');
        if($('.list_choice ul li').eq(0).hasClass('active')){
            $('section.information').css('display','none');
            $('section.picture').css('display','block');
            $('section.picture>div').css('display','block');
            $('ol.picture_choice').css('display','block');
            $('ol.information_choice').css('display','none');
        }else if($('.list_choice ul li').eq(1).hasClass('active')){
            $('section.picture').css('display','none');
            $('section.information').css('display','block');
            $('section.information>div').css('display','block');
            $('ol.picture_choice').css('display','none');
            $('ol.information_choice').css('display','block');
        }
    })
    
    if($.cookie('cookie_menu') === undefined){
        $('.menu_page ol li:nth-child(1)').addClass('active');
    }else{
        $('.menu_page ol li[data-choice='+ $.cookie('cookie_menu') +']').addClass('active');
        $('section.picture>div').css('display','none');
        $('.menu_page .picture').children('.'+$.cookie('cookie_menu')).css('display','block');
    }

    $.removeCookie('cookie_menu');
}

function event_active(){
    $('.policy div a').eq(0).click(function(){
        $.cookie('cookie_policy','1');
    });
    $('.policy div a').eq(1).click(function(){
        $.cookie('cookie_policy','2');
    });
    $('.policy div a').eq(2).click(function(){
        $.cookie('cookie_policy','3');
    });

    $('.head_banner div:nth-child(2) ul li').on('click',function(){
        $('.head_banner div:nth-child(2) ul li').removeClass('active');
        $(this).addClass('active');
        
        var active_li = $('.head_banner div:nth-child(2) ul li.active').index();
        $('.Terms_of_Use01 div').removeClass('active');
        $('.Terms_of_Use01 div').eq(active_li).addClass('active');
    })

    if($.cookie('cookie_policy') === undefined){
        $('.head_banner ul li').eq(0).addClass('active');
        $('.Terms_of_Use01 div').eq(0).addClass('active');
    }else{
        $('.head_banner div:nth-child(2) ul li').eq($.cookie('cookie_policy')-1).addClass('active');
        $('.Terms_of_Use01 div').eq($('.head_banner div:nth-child(2) ul li.active').index()).addClass('active');
    }

    $.removeCookie('cookie_policy');
}

function event_page(){
    $('.event_imformation li').on('click',function(){
        if($('.event_imformation li').eq(1).hasClass('active')){
            $('.end_event').css('display','none');
            $('.host_event').css('display','block');
        }else if($('.event_imformation li').eq(2).hasClass('active')){
            $('.host_event').css('display','none');
            $('.end_event').css('display','block');
        }else{
            $('.host_event').css('display','block');
            $('.end_event').css('display','block');
        }
    });
}

function news_page(){
    $('.burgerking_news_page ol li').on('click',function(){
        $('.burgerking_news_page ol li').removeClass('active');
        $(this).addClass('active');
    });
    $('.burgerking_news_page ul li').on('click',function(){
        $('.burgerking_news_page ul li').removeClass('active');
        $(this).addClass('active');
    });
    let ul_height = $('.burgerking_news_page ul li').outerHeight(true);
    $('.burgerking_news_page ul').css('height', ul_height*3);
}