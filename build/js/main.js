// remove desktop menu at small screens
// window.onload = function () {
//     if (window.innerWidth > 1200) {
//         $('.navigation').removeClass('hide');
//         $('.contact').removeClass('hide');
//     } else {
//         $('header').addClass('mobile');
//     }
// };
$(function() {
    // slider
    $('.work-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });

    // show window size on IE
    // var x = document.querySelector('.window-size');
    // x.textContent = window.innerWidth;
    // window.onresize = function () {
    //     x.textContent = window.innerWidth
    // };

    // lazy load images
    function lazyLoad() {
        var lazyImages = $('.lazyload');
        var inAdvance = 300;

        setTimeout(function () {
            lazyImages.each(function (i,image) {
                var img = $(this);
                if(img.hasClass('lazyload')) {
                    if (img.offset().top < window.innerHeight + window.pageYOffset + inAdvance) {
                        if (img.attr('data-src')) {
                            img.attr('src', img.attr('data-src'));
                        }
                        if (img.attr('data-srcset')) {
                            img.attr('srcset', img.attr('data-srcset')) ;
                        }
                        img.removeClass('lazyload');
                    }
                }
            });
            if (lazyImages.length === 0) {
                window.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener("orientationChange", lazyLoad);
            }
        }, 20);
    }
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);

    // prevent default when click on links
    $('a').click(function (e) { e.preventDefault() });

    // add class mobile to the header when viewport at small screen
    $(window).bind("resize", function () {
        if (window.innerWidth < 1200) {
            $('header').addClass('mobile');
            $('.navigation').addClass('hide');
            $('.contact').addClass('hide');
        } else {
            $('header').removeClass('mobile');
            $('.navigation').removeClass('slide open show hide');
            $('.contact').removeClass('hide');
            $('.overlay').removeClass('show opacity');
        }
    }).trigger('resize');

    var mobileMenu = $('.navigation'),
        mobileLogo = $('.navigation .logo'),
        overlay = $('.overlay');
    // open mobile menu
    $('.menu-toggle').click(function () {
        mobileMenu.addClass('show');
        mobileLogo.addClass('show');
        overlay.addClass('show');
        $('body').css('overflow','hidden');
        setTimeout(function () {
            mobileMenu.addClass('slide');
            mobileMenu.addClass('open');
            overlay.addClass('opacity');
        }, 10);
    });

    // close mobile menu
    window.onclick= function (e) {
        if(e.target.classList.contains('overlay') ||
            e.target.classList.contains('close')) {
            $('body').css('overflow','');
            mobileMenu.removeClass('slide open');
            overlay.removeClass('opacity');
            setTimeout(function () {
                mobileMenu.toggleClass('show hide');
                mobileLogo.removeClass('show');
                overlay.removeClass('show');
            }, 500);
        }
    }
});


//# sourceMappingURL=map/main.js.map
