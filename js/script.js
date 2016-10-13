$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {

        freeMode: true,
        slidesPerView: "auto",
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        pagination: '.swiper-pagination',
        paginationHide: true,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            650: {
                freeMode: false,
                scrollbar: false,
                slidesPerView: 1,
                spaceBetweenSlides: 30

            }
        }
    });
    $('.burger-menu').click(function (e) {
        e.preventDefault();
        $(this)
            .parent('.header__menu')
            .find('.header__menu__nav')
            .slideToggle();
    });
    jQuery('#scrollup img').mouseover(function () {
        jQuery(this).animate({opacity: 0.65}, 100);
    }).mouseout(function () {
        jQuery(this).animate({opacity: 1}, 100);
    }).click(function () {
        window.scroll(0, 0);
        return false;
    });

});



