import Swiper from 'swiper';
import simplebar from 'simplebar';
import slick from 'slick-carousel';
import '../../node_modules/jquery-zoom/jquery.zoom.min';

function scrollHeader() {
  const $header = $('.header');
  const addClass = 'header--scroll';

  if($(this).scrollTop() > 70) {
    $header.addClass(addClass);
  }
  else {
    $header.removeClass(addClass);

  }
}
function burgerMenu() {
  const $burgerBtn = $('.burger__link');
  const $burgerNavWrapper = $('.burger__inner-wrapper');
  const $addBurgerNavClass = 'burger__inner-wrapper--active';
  const $burgerLinks = $('.burger__inner-wrapper a');

  function addBurgerClass() {
    $burgerNavWrapper.toggleClass($addBurgerNavClass);
  }

  function closeBurger() {
    $burgerNavWrapper.removeClass($addBurgerNavClass);
  }

  $burgerBtn.click(addBurgerClass);
  $burgerLinks.click(closeBurger);
}
function langDropDown() {

  const $langParentList = $('.lang-list');
  const $langListBtn = $('.lang-list__result');
  const $langList = $('.lang-list__list');
  const $langListItem = $('.lang-list__list a');
  const $addListItemClass = 'lang-list__list--active';
  let value;

  function openLangList() {
    $langList.toggle();
  }

  function changeLang() {
    value = $(this).text();
    $(this).parents($langParentList).find($langListBtn).text(value);
    if (window.innerWidth > 1199) {
      $langList.hide();
    }
    if($(this).hasClass($addListItemClass) === false) {
      $langListItem.removeClass($addListItemClass);
      $(this).addClass($addListItemClass);
    }
  }

  function noTarget(e) {
    if (!$langParentList.is(e.target) && $langParentList.has(e.target).length === 0) {
      $langList.hide();
    }
  }

  function windowSize() {
    if (window.innerWidth < 1199) {
      $langList.show();
    } else {
      $(document).mouseup(noTarget)
    }
  }

  windowSize();

  $(window).resize(
    windowSize
  );
  $langListBtn.click(openLangList);
  $langListItem.click(changeLang);
}

const swiper = new Swiper('.first-screen .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.license__slider').slick({
  dots: true,
  arrow: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        infinite: true,
        arrow: false,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrow: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrow: false,
      }
    }
  ]
});

$(document).ready(function(){
  $('.license__zoom')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({magnify: 1.4})
  ;
});

$(document).ready(
  langDropDown(),
  burgerMenu()
);

$(document).scroll(
  scrollHeader
);
