$(function() {
    $('.work-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
    // Start show window size on IE
    // var x = document.querySelector('.window-size');
    // x.textContent = window.innerWidth;
    // window.onresize = function () {
    //     console.log(x);
    //     x.textContent = window.innerWidth
    // };

    // lazy load images
    // function lazyLoad() {
    //     var lazyImages = document.querySelectorAll('.lazyload');
    //     var inAdvance = 300;
    //
    //     setTimeout(function () {
    //         lazyImages.forEach(function (image) {
    //             if(image.classList.contains('lazyload')) {
    //                 if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
    //                     if (image.dataset.src) {
    //                         image.src = image.dataset.src;
    //                     }
    //                     if (image.dataset.srcset) {
    //                         image.srcset = image.dataset.srcset;
    //                     }
    //                     image.classList.remove('lazyload');
    //                     image.classList.add('loaded');
    //                 }
    //             }
    //         });
    //         if (lazyImages.length === 0) {
    //             window.removeEventListener('scroll', lazyLoad);
    //             window.removeEventListener('resize', lazyLoad);
    //             window.removeEventListener("orientationChange", lazyLoad);
    //         }
    //     }, 20);
    // }
    // lazyLoad();
    // window.addEventListener('scroll', lazyLoad);
    // window.addEventListener('resize', lazyLoad);
    // window.addEventListener("orientationChange", lazyLoad);

    // Start prevent default when click on links
    $('a').click(function (e) { e.preventDefault() });
});