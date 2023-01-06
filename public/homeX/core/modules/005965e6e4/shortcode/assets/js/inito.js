(function($, fnFrontend) {
    "use strict";



    var Frel = {

        init: function() {

            var widgets = {
                'frel-hero-header.default': Frel.frel_all_functions,
                'frel-info-list.default': Frel.frel_all_functions,
                'frel-about.default': Frel.parallaxMaster,
                'frel-info-rating.default': Frel.infoRatingCarousel,
                'frel-services.default': Frel.serviceShortcode,
                'frel-experience.default': Frel.experienceShortcode,
                'frel-project-sticky.default': Frel.projectStickyShortcode,
                'frel-support-block.default': Frel.supportBlockShortcode,
                'frel-triple-blog.default': Frel.tripleBlogShortcode,
                'frel-check-list.default': Frel.ImgToSVG,
                'frel-accordion.default': Frel.accordionFunction,
                'frel-location-list.default': Frel.locationListFunction,
                'frel-main-slider-with-content.default': Frel.mainSliderWithContnetFunction,
                'frel-introduce.default': Frel.introduceFunction,
                'frel-principles.default': Frel.principlesFunction,
                'frel-counter-with-content.default': Frel.counterWithContentFunction,
                'frel-counter-with-rating.default': Frel.counterWithContentFunction,
                'frel-project-sticky-modern.default': Frel.projectStickyShortcode,
                'frel-services-classic.default': Frel.ImgToSVG,
                'frel-triple-blog-modern.default': Frel.tripleBlogShortcode,
                'frel-hero-header-modern.default': Frel.frel_all_functions,
                'frel-principles-modern.default': Frel.frel_all_functions,
                'frel-service-query.default': Frel.serviceQueryFunction,
                'frel-full-custom-list.default': Frel.serviceQueryFunction,
                'frel-about-with-rating.default': Frel.frel_all_functions,
                'frel-single-testimonial.default': Frel.frel_all_functions,
                'frel-project-sticky-full.default': Frel.projectStickyShortcode,
                'frel-kenburnsy.default': Frel.kenburnsyShortcode,
                'frel-arrow-link.default': Frel.ImgToSVG,
                'frel-alpha-slider.default': Frel.alphaSliderFunction,
            };

            $.each(widgets, function(widget, callback) {
                fnFrontend.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
        },

        frel_all_functions: function() {
            Frel.ImgToSVG();
            Frel.BgImg();
            Frel.lightGallery();
        },

        alphaSliderFunction: function() {
            Frel.BgImg();
            $('.industify_slider_alpha').each(function() {
                var images = $(this);
                var autoplaySwitch = images.data('autoplay-switch');
                var effect = images.data('effect');
                var autoplayTime;
                if (autoplaySwitch === 'enabled') {
                    autoplayTime = images.data('autoplay-time');
                } else {
                    autoplayTime = 80000;
                }
                var imagesSlider = new Swiper(images, {
                    centeredSlides: false,
                    slideToClickedSlide: false,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    preloadImages: false,
                    lazyLoading: false,
                    autoplay: {
                        delay: autoplayTime,
                        disableOnInteraction: false
                    },
                    initialSlide: 0,
                    navigation: {
                        nextEl: images.find('.fn_next'),
                        prevEl: images.find('.fn_prev'),
                    },
                    effect: effect,
                    coverflowEffect: {
                        rotate: 30,
                        slideShadows: false,
                    },
                    flipEffect: {
                        rotate: 30,
                        slideShadows: false,
                    },
                    cubeEffect: {
                        slideShadows: false,
                    },
                    loop: true,
                    pagination: {
                        el: images.find('.swiper-pagination'),
                        type: 'progressbar',
                    },
                    speed: 1000
                });
            });
        },


        ImgToSVG: function() {

            jQuery('img.industify_w_fn_svg').each(function() {
                var $img = jQuery(this);
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function(data) {
                    var $svg = jQuery(data).find('svg');
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                    }
                    $img.replaceWith($svg);

                }, 'xml');

            });
        },

        BgImg: function() {

            var div = $('*[data-bg-img]');
            div.each(function() {
                var element = $(this);
                var attrBg = element.attr('data-bg-img');
                var dataBg = element.data('bg-img');
                if (typeof(attrBg) !== 'undefined') {
                    element.css({
                        backgroundImage: 'url(' + dataBg + ')'
                    });
                }
            });
        },
        lightGallery: function() {
            if (jQuery().lightGallery) {
                // FIRST WE SHOULD DESTROY LIGHTBOX FOR NEW SET OF IMAGES

                var gallery = jQuery('.fn_cs_lightgallery');

                gallery.each(function() {
                    var element = jQuery(this);
                    element.lightGallery(); // binding
                    if (element.length) {
                        element.data('lightGallery').destroy(true);
                    } // destroying
                    jQuery(this).lightGallery({
                        selector: ".lightbox",
                        thumbnail: 1,
                        loadYoutubeThumbnail: !1,
                        loadVimeoThumbnail: !1,
                        showThumbByDefault: !1,
                        mode: "lg-fade",
                        download: !1,
                        getCaptionFromTitleOrAlt: !1,
                    });
                });
            }
        },
        parallaxMaster: function() {
            var scene = jQuery('#scene');
            scene.parallax();
            Frel.BgImg();
        },
        infoRatingCarousel: function() {
            var owl = jQuery('.fn_cs_info_rating .owl-carousel');
            owl.each(function() {
                var el = jQuery(this);
                el.owlCarousel({
                    loop: false,
                    margin: 10,
                    nav: true,
                    autoWidth: true,
                    dots: false
                });
            });
            Frel.ImgToSVG();
            Frel.BgImg();
            Frel.lightGallery();
            Frel.infoRatingCalc();
        },
        infoRatingCalc: function() {
            var rating = jQuery('.fn_cs_info_rating');
            rating.each(function() {
                var el = jQuery(this);
                var tagline = el.find('.tagline_holder');
                var spanHeight = el.find('.tagline_holder span').outerWidth() + 15;
                tagline.css({
                    height: spanHeight + 'px'
                });
            });

        },
        miniBoxesForShortcodes: function() {

            var el = jQuery('.fn_cs_miniboxes');

            if (el.length) {
                el.each(function(index, element) {
                    var child = jQuery(element).find('.fn_cs_minibox');
                    child.css({
                        height: 'auto'
                    });
                    var W = jQuery(window).width();
                    if (W > 460) {
                        var elementHeights = child.map(function() {
                            return jQuery(this).outerHeight();
                        }).get();
                        var maxHeight = Math.max.apply(null, elementHeights);
                        child.css({
                            height: maxHeight + 'px'
                        });
                    }
                });
            }

        },
        miniSBoxesForShortcodes: function() {

            var el = jQuery('.fn_cs_sminiboxes');

            if (el.length) {
                el.each(function(index, element) {
                    var child = jQuery(element).find('.fn_cs_sminibox');
                    child.css({
                        height: 'auto'
                    });
                    var W = jQuery(window).width();
                    if (W > 1200) {
                        var elementHeights = child.map(function() {
                            return jQuery(this).outerHeight();
                        }).get();
                        var maxHeight = Math.max.apply(null, elementHeights);
                        child.css({
                            height: maxHeight + 'px'
                        });
                    }
                });
            }

        },
        serviceShortcode: function() {
            Frel.ImgToSVG();
            Frel.miniBoxesForShortcodes();
        },
        experienceShortcode: function() {
            Frel.BgImg();
        },
        projectStickyShortcode: function() {
            Frel.miniSBoxesForShortcodes();
            Frel.ImgToSVG();
            Frel.BgImg();
        },
        supportBlockShortcode: function() {
            Frel.ImgToSVG();
            Frel.supportBlockBgCalc();
        },
        supportBlockBgCalc: function() {
            var sBlock = jQuery('.fn_cs_support_block .support_block');
            sBlock.each(function() {
                var el = jQuery(this);
                var height = el.outerHeight() - 30;
                el.find('.img_wrap span').css({
                    borderTopWidth: height + 'px'
                });
            });
        },
        tripleBlogShortcode: function() {
            Frel.ImgToSVG();
            Frel.BgImg();
        },
        accordionFunction: function() {
            if ($().fn_cs_accordion) {
                var acc = $('.fn_cs_accordion');
                acc.each(function() {
                    $(this).fn_cs_accordion({
                        showIcon: false, //boolean	
                        animation: true, //boolean
                        closeAble: true, //boolean
                        slideSpeed: 500 //integer, miliseconds
                    });
                });
            }
            Frel.ImgToSVG();
        },
        locationListFunction: function() {
            Frel.ImgToSVG();
            Frel.BgImg();
        },
        mainSliderWithContnetFunction: function() {
            jQuery('.fn_cs_main_slider_with_content').each(function() {
                var images = jQuery(this).find('.inner');
                var autoDelay = jQuery(this).data('autoplay-delay');
                var imagesSlider = new Swiper(images, {
                    centeredSlides: false,
                    slideToClickedSlide: false,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    navigation: {
                        nextEl: images.find('.fn_next'),
                        prevEl: images.find('.fn_prev'),
                    },
                    effect: 'slide',
                    loop: true,
                    fadeEffect: {
                        crossFade: true
                    },
                    pagination: {
                        el: images.find('.swiper_pagination'),
                        type: 'custom',
                        renderCustom: function(swiper, current, total) {
                            if (current < 10) {
                                current = '0' + current;
                            }
                            if (total < 10) {
                                total = '0' + total;
                            }
                            return '<span><span class="current">' + current + '</span> / <span class="total">' + total + '</span></span>';
                        },
                    },
                    autoplay: {
                        delay: autoDelay,
                        disableOnInteraction: false,
                    },
                });
            });
            Frel.ImgToSVG();
            Frel.BgImg();
        },
        introduceFunction: function() {
            Frel.lightGallery();
            Frel.introduceCalcFunction();
        },
        introduceCalcFunction: function() {
            jQuery('.fn_cs_introduce_wrap').each(function() {
                var el = jQuery(this);
                var introW = el.find('.fn_cs_introduce').outerWidth();
                var wings = el.find('span.wing12, span.wing22');
                if (wings.length) {
                    wings.css({
                        borderRightWidth: (Math.floor((introW * 0.7)) - 40) + 'px'
                    });
                }
            });
        },
        isotopeFunction: function() {
            var masonry = jQuery('.fn_cs_masonry');
            if (jQuery().isotope) {
                masonry.each(function() {
                    jQuery(this).isotope({
                        itemSelector: '.fn_cs_masonry_in',
                        masonry: {

                        }
                    });
                });
            }
        },
        principlesFunction: function() {
            Frel.isotopeFunction();
        },
        counterWithContentFunction: function() {
            var element = jQuery('.fn_cs_counter');
            element.each(function() {
                var el = jQuery(this);
                el.waypoint({
                    handler: function() {
                        if (!el.hasClass('stop')) {
                            el.addClass('stop').countTo({
                                refreshInterval: 50,
                                formatter: function(value, options) {
                                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                                },
                            });
                        }
                    },
                    offset: '90%'
                });
            });
            Frel.BgImg();
            Frel.lightGallery();
            Frel.ImgToSVG();
        },
        principlesModernFunction: function() {
            Frel.ImgToSVG();
            Frel.BgImg();
            Frel.miniBoxesForShortcodes();
            Frel.principleModernShapeCalc();
        },
        principleModernShapeCalc: function() {
            var inner = $('.fn_cs_principles_modern .inner');
            inner.each(function() {
                var el = $(this);
                var shape = el.find('.shape2');
                shape.css({
                    borderLeftWidth: Math.floor(el.outerWidth() - 30) + 'px'
                });
            });
        },
        serviceQueryFunction: function() {
            var owl = jQuery('.fn_cs_service_query .owl-carousel');
            owl.each(function() {
                var el = jQuery(this);
                var columnCount = el.closest('.fn_cs_service_query').data('column-count');
                var count = 4;
                if ($.isNumeric(columnCount)) {
                    count = columnCount;
                }
                var count14, count12, count48;
                switch (count) {
                    case 5:
                        count14 = 5;
                        count12 = 4;
                        count48 = 2;
                        break;
                    case 4:
                        count14 = 4;
                        count12 = 3;
                        count48 = 2;
                        break;
                    case 3:
                        count14 = 3;
                        count12 = 3;
                        count48 = 2;
                        break;
                    case 2:
                        count14 = 2;
                        count12 = 2;
                        count48 = 2;
                        break;
                    case 1:
                        count14 = 1;
                        count12 = 1;
                        count48 = 1;
                        break;
                }
                el.owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: false,
                    items: 4,
                    dots: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: count48
                        },
                        1200: {
                            items: count12
                        },
                        1400: {
                            items: count14
                        }
                    }
                });
                var prev = el.parent().parent().find('.owl_control .fn_prev');
                var next = el.parent().parent().find('.owl_control .fn_next');
                prev.on('click', function() {
                    el.trigger('prev.owl');
                    return false;
                });
                next.on('click', function() {
                    el.trigger('next.owl');
                    return false;
                });
                Frel.ImgToSVG();
            });
            Frel.ImgToSVG();
            Frel.BgImg();
        },
        kenburnsyShortcode: function() {
            var kenburns = jQuery('.fn_cs_kenburnsy');
            kenburns.each(function() {
                var element = jQuery(this);
                var duration = element.data('interval');
                element.kenburnsy({
                    fullscreen: true,
                    duration: duration,
                });
            });
        }
    };

    $(window).on('elementor/frontend/init', Frel.init);


    $(window).on('elementor/frontend/init', Frel.miniBoxesForShortcodes);
    $(window).on('resize', function() {
        Frel.miniBoxesForShortcodes();
        Frel.miniSBoxesForShortcodes();
        Frel.supportBlockBgCalc();
        Frel.introduceCalcFunction();
        Frel.isotopeFunction();
        Frel.principleModernShapeCalc();
        setTimeout(function() {
            Frel.miniBoxesForShortcodes();
            Frel.miniSBoxesForShortcodes();
            Frel.supportBlockBgCalc();
            Frel.introduceCalcFunction();
            Frel.isotopeFunction();
            Frel.principleModernShapeCalc();
        }, 700);
    });
    $(window).on('load', function() {
        Frel.miniBoxesForShortcodes();
        Frel.miniSBoxesForShortcodes();
        Frel.supportBlockBgCalc();
        Frel.introduceCalcFunction();
        Frel.isotopeFunction();
        Frel.principleModernShapeCalc();
    });

})(jQuery, window.elementorFrontend);