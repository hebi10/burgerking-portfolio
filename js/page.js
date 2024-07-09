$(document).ready(function() {
  setupModals();
  loadMainBanner();
  configureNoticeEvent();
  applyScrollTransform();
  startNoticeRolling();
  configureNoticePageControl();
  activateQuestions();
  setupPageControlButtons();
  activateMenuChoice();
  setupEventHandlers();
  setupEventPage();
  setupNewsPage();
});

function setupModals() {
  const popUp = $('.modalWrap');
  const closeBtn = $('.modalWrap .closeBtn');
  const onedayBtn = $('.modalWrap .onedayBtn');

  const handlePopup = {
      setStorageForDate: () => {
          const date = new Date();
          localStorage.setItem('popupDate', JSON.stringify(date.getTime()));
          console.log('Popup date set to:', localStorage.getItem('popupDate'));
      },
      isPopupHidden: () => {
          const now = new Date().getTime();
          const popupDate = JSON.parse(localStorage.getItem('popupDate'));
          console.log('Current time:', now);
          console.log('Popup date from storage:', popupDate);
          if (popupDate !== null) {
              const oneDayInMillis = 24 * 60 * 60 * 1000;
              const isHidden = now - popupDate < oneDayInMillis;
              console.log('Is popup hidden:', isHidden);
              return isHidden;
          }
          return false;
      },
      handleClose: () => {
          popUp.removeClass('hidden');
      },
      handleOnedayClose: () => {
          popUp.removeClass('hidden');
          handlePopup.setStorageForDate();
      }
  };

  if (!handlePopup.isPopupHidden()) {
      popUp.addClass('hidden');
  }

  closeBtn.on('click', handlePopup.handleClose);
  onedayBtn.on('click', handlePopup.handleOnedayClose);
}

function configureNoticeEvent() {
  $('.notice>div:nth-child(2)>span').click(function() {
      $('.event_show').toggleClass('event_active');
      $('.notice div:nth-child(2)>.material-icons').toggleClass('active');
  });
}

function loadMainBanner() {
  const events = [event_Time_img01, event_Time_img02, event_Time_img03];
  events.forEach((event, index) => setTimeout(event, 500 + 1000 * index));
}

function event_Time_img01() {
  $('.event div>img:nth-of-type(1)').animate({ opacity: "1" }, 2000);
}

function event_Time_img02() {
  $('.event div>img:nth-of-type(2)').animate({ opacity: "1" }, 2000);
}

function event_Time_img03() {
  $('.event div>img:nth-of-type(3)').animate({ opacity: "1" }, 2000);
}

function applyScrollTransform() {
  $(window).scroll(function() {
      handleScrollTransform('[data-scroll="transform_L"]', 1.5);
      handleScrollTransform('[data-scroll="transform_R"]', 1.3);
      handleScrollTransform('[data-scroll="leftRightArea"]', 1.7, true);
  });
}

function handleScrollTransform(selector, factor, isChildren) {
  $(selector).each(function() {
      const isActive = $(window).scrollTop() > ($(this).offset().top - $(window).height() / factor);
      if (isChildren) {
          $(this).children().css('transition-delay', (index) => `${index * 0.1}s`);
          $(this).children().toggleClass('active', isActive);
      } else {
          $(this).toggleClass('active', isActive);
      }
  });
}

function startNoticeRolling() {
  const height = $(".rolling_Event>ul>li").height();
  const max = height * $(".rolling_Event>ul>li").length;
  let move = 0;

  function noticeRolling() {
      move += height;
      $(".rolling").animate({ "top": -move }, 600, function() {
          if (move >= max) {
              $(this).css("top", 0);
              move = 0;
          }
      });
  }

  setInterval(noticeRolling, 4000);
  $(".rolling").append($(".rolling li").first().clone());
}

function configureNoticePageControl() {
  const pageCount = $('.list_page ol').length;
  for (let i = 1; i < pageCount; i++) {
      $('.page_control ul').append('<li>' + (i + 1) + '</li>');
  }

  $('.page_control ul li').on('click', function() {
      const pageNum = $(this).index();
      $('.page_control ul li').removeClass('active');
      $(this).addClass('active');
      $('.list_page ol').removeClass('active').eq(pageNum).addClass('active');
  });
}

function activateQuestions() {
  $('.questions_page .questions ol li').on('click', function() {
      $(this).toggleClass('active');
  });

  $('.questions_page .questions ul li').on('click', function() {
      $('.questions_page .questions ul li').removeClass('active');
      $(this).addClass('active');

      const category = $(this).attr('class').split(' ')[0];
      if (category === 'all') {
          $('.questions_page ol li').show();
      } else {
          $('.questions_page ol li').hide().filter(`.${category}`).show();
      }
  });
}

function setupPageControlButtons() {
  const headerHeight = $('header').innerHeight();

  $('.guide_app_page .page_control ul li').each(function(index) {
      $(this).on('click', function() {
          $('html, body').animate({
              scrollTop: $(`.guide_app_page .guide_app div:nth-child(${index + 1})`).offset().top - headerHeight
          }, 300 + index * 100);
      });
  });
}

function activateMenuChoice() {
  $('.menu_page ol li:nth-child(n+2)').on('click', handleMenuChoiceClick);
  $('.menu_page ol li:nth-child(1)').on('click', handleMenuAllClick);
  $('.head_banner div:nth-child(2) span').on('click', handleHeadBannerClick);
  $('.list_choice ul li').on('click', handleListChoiceClick);

  if ($.cookie('cookie_menu') === undefined) {
      $('.menu_page ol li:nth-child(1)').addClass('active');
  } else {
      activateMenuChoiceFromCookie($.cookie('cookie_menu'));
      $.removeCookie('cookie_menu');
  }
}

function handleMenuChoiceClick() {
  $('.menu_page ol li:nth-child(1)').removeClass('active');
  $(this).toggleClass('active');
  updateMenuDisplay();
}

function handleMenuAllClick() {
  const allActive = $(this).hasClass('active');
  $('.menu_page ol li').removeClass('active');
  $('.menu_page .picture div, .menu_page .information div').toggle(!allActive);
  $(this).toggleClass('active', !allActive);
}

function updateMenuDisplay() {
  const activeChoices = $('.menu_page ol li.active').map(function() {
      return $(this).data('choice');
  }).get();

  $('.menu_page .picture div, .menu_page .information div').hide();
  activeChoices.forEach(choice => {
      $(`.menu_page .picture .${choice}, .menu_page .information .${choice}`).show();
  });
}

function handleHeadBannerClick() {
  $(this).toggleClass('active');
  const newHeight = $(this).hasClass('active') ?
      $('.head_banner div:nth-child(2)>h2').innerHeight() : '100%';
  $('.head_banner div:nth-child(2)').css('height', newHeight);
}

function handleListChoiceClick() {
  const index = $(this).index();
  const sections = ['section.picture', 'section.information'];
  const controls = ['ol.picture_choice', 'ol.information_choice'];

  $('.menu_page ol li').removeClass('active').eq(0).addClass('active');
  $('.list_choice ul li').removeClass('active');
  $(this).addClass('active');

  sections.forEach((section, i) => $(section).toggle(i === index));
  controls.forEach((control, i) => $(control).toggle(i === index));
}

function activateMenuChoiceFromCookie(choice) {
  $('.menu_page ol li[data-choice=' + choice + ']').addClass('active');
  $('.menu_page .picture div').hide();
  $(`.menu_page .picture .${choice}`).show();
}

function setupEventHandlers() {
  $('.policy div a').each(function(index) {
      $(this).click(function() {
          $.cookie('cookie_policy', (index + 1).toString());
      });
  });

  $('.head_banner div:nth-child(2) ul li').on('click', function() {
      const index = $(this).index();
      $('.head_banner div:nth-child(2) ul li, .Terms_of_Use01 div').removeClass('active');
      $(this).addClass('active');
      $('.Terms_of_Use01 div').eq(index).addClass('active');
  });

  const policyIndex = $.cookie('cookie_policy') || 1;
  activateEventPolicy(policyIndex);
  $.removeCookie('cookie_policy');
}

function activateEventPolicy(index) {
  $('.head_banner div:nth-child(2) ul li').eq(index - 1).addClass('active');
  $('.Terms_of_Use01 div').eq(index - 1).addClass('active');
}

function setupEventPage() {
  $('.event_imformation li').on('click', function() {
      const activeIndex = $(this).index();
      const isActive = activeIndex === 1;
      $('.end_event').toggle(!isActive);
      $('.host_event').toggle(isActive || activeIndex === 0);
  });
}

function setupNewsPage() {
  $('.burgerking_news_page ol li, .burgerking_news_page ul li').on('click', function() {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
  });

  const ulHeight = $('.burgerking_news_page ul li').outerHeight(true);
  $('.burgerking_news_page ul').css('height', ulHeight * 3);
}
