$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            900: {
                freeMode: false,
                slidesPerView:'none',
                scrollbar: false
            }
        }
    });
    $('.burger-menu').click(function(e){
        e.preventDefault();
        $(this)

            .parent('.header__menu')
            .find('.header__menu__nav')
            .slideToggle();
    })
    jQuery('#scrollup img').mouseover(function () {
        jQuery(this).animate({opacity: 0.65}, 100);
    }).mouseout(function () {
        jQuery(this).animate({opacity: 1}, 100);
    }).click(function () {
        window.scroll(0, 0);
        return false;
    });

});



