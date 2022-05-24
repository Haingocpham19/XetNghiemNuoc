$(document).ready(function() {
    // Sự kiện click chuyển tab menu
    $('.tab-container:first').show();
    $('.tab-navigation li:first').addClass('active');
    //$('.tab-container.tab-news.detail').show();
    //$('.tab-container:first').hide();

    $('.tab-navigation li').click(function(event) {
        index = $(this).index();
        $('.tab-navigation li').removeClass('active');
        $(this).addClass('active');
        $('.tab-container').hide();
        $('.tab-container').eq(index).show();
    })

    // Sự kiện chuyển tab advantage
    $('.adv-container:first').css('display', 'flex');
    $('.adv-navigation li:first').addClass('active');
    $('.adv-navigation li').click(function(event) {
        index = $(this).index();
        $('.adv-navigation li').removeClass('active');
        $(this).addClass('active');
        $('.adv-container').hide();
        $('.adv-container').eq(index).css('display', 'flex');
    })
    $(".header-slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        lazyLoad: "ondemand",
    });

    $(".pack-content").slick({
        infinite: true,
        arrows: true,
        prevArrow: '<span class="arrow-prev"></span>',
        nextArrow: '<span class="arrow-next"></span>',
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    })
    $(".news-slide").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    })

    $(".relate-slide").slick({
        infinite: true,
        arrows: true,
        prevArrow: '<span class="btn-prev"></span>',
        nextArrow: '<span class="btn-next"></span>',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    })
})


function ShowHidePassword(index){
    document.querySelector(`.input-${index} svg`).addEventListener('click', function(){
        document.querySelector(`.input-${index} svg`).classList.remove('active');
        document.querySelector(`.input-${index} .eyes-close-${index}`).classList.add('active');
        document.querySelector(`.input-${index} input`).type = "text";
    });
    document.querySelector(`.input-${index} .eyes-close-${index}`).addEventListener('click', function(){
        document.querySelector(`.input-${index} svg`).classList.add('active');
        document.querySelector(`.input-${index} .eyes-close-${index}`).classList.remove('active');
        document.querySelector(`.input-${index} input`).type = "password";
    });
}

ShowHidePassword(1);
// ShowHidePassword(2);
// ShowHidePassword(3);