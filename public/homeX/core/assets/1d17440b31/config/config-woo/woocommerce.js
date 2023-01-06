jQuery(document).ready(function() {

    "use strict";

    jQuery('a.add_to_cart_button').on('click', function() {
        var link = this;

        jQuery(link).closest('.product').find('a img').animate({
            opacity: 0.7
        });
        setTimeout(function() {

            jQuery(link).closest('.product').addClass('added-to-cart-check');

            setTimeout(function() {
                jQuery(link).closest('.product').find('a img').animate({
                    opacity: 1
                });
            }, 1000);
        }, 1000);

        var msgSuccess = jQuery('.cart-wrap').attr('data-success');
        var productName = jQuery(this).parents('li').find('h3').text();
        jQuery('.cart-note').html('<span><strong>' + productName + '</strong> ' + msgSuccess + '</span>');

    });


    if (jQuery().magnificPopup) {
        // lightbox for gallery images
        jQuery('.industify_fn_woo .images').each(function() {
            jQuery(this).magnificPopup({
                delegate: 'a.zoom, .woocommerce-product-gallery__image a',
                type: 'image',
                overflowY: 'auto',
                fixedContentPos: false,
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
                },
                gallery: {
                    enabled: true
                }
            });
        });
    }



    jQuery('body').bind('added_to_cart', cart_note);

    function cart_note() {
        setTimeout(function() {
            jQuery('.industify_fn_topbar .cart-note').stop(true, true).fadeIn(400);

            setTimeout(function() {
                jQuery('.industify_fn_topbar .cart-note').stop(true, true).fadeOut(400);
            }, 2000);
        }, 1200);
    }


    jQuery('.industify_fn_topbar .cart-note').hover(function() {
        clearTimeout();
        jQuery(this).fadeOut(400);
        jQuery(this).parent().find('.cart-nav > div.dropdown_widget_cart').stop(true, true).fadeIn(400);
    });

    //cart dropdown
    jQuery('.industify_fn_topbar div.cart-wrap').hover(function() {
        jQuery(this).find('.cart-nav > div.dropdown_widget_cart').stop(true, true).fadeIn(400);
        clearTimeout();
        jQuery(this).find('.industify_fn_topbar .cart-note').fadeOut(400);
    }, function() {
        jQuery(this).find('.cart-nav > div.dropdown_widget_cart').stop(true, true).delay(100).fadeOut(300);
    });

    jQuery('body').bind('added_to_cart', nav_cart);

    jQuery(document).ready(function() {
        nav_cart();
    });

    function nav_cart() {
        if (!jQuery('.widget_shopping_cart_content .cart_list .empty').length && jQuery('.widget_shopping_cart_content .cart_list').length > 0) {
            jQuery('.cart-wrap').addClass('has-products');
        }
    }



    // experiment
    industify_fn_woo_shopReviews();
    industify_fn_woo_productSingleH();
    jQuery(window).on('resize', function(e) {
        e.preventDefault();
        industify_fn_woo_productSingleH();
    });

});

function industify_fn_woo_shopReviews() {
    "use strict";
    var shopReview = jQuery('a.woocommerce-review-link');
    if (shopReview.length) {
        shopReview.on('click', function(e) {
            e.preventDefault();
            var productID = shopReview.attr('href');
            var top = jQuery(productID).offset().top;
            jQuery('body,html').animate({
                scrollTop: top
            }, 1100);
        });
    }

    // for create own design for empty cart
    var cartEmpty = jQuery('p.cart-empty');
    var returnToShop = jQuery('p.return-to-shop');
    var returnHTML = returnToShop.html();
    var cartEmptyHTML = cartEmpty.html();
    if (cartEmpty.length) {
        returnToShop.empty();
        cartEmpty.empty();
        jQuery('.woocommerce').append('<div class="fn_cart-empty"><span>' + cartEmptyHTML + '</span><span>' + returnHTML + '</span>');
    }
    // for create own design for my-account
    var myAccount = jQuery('.woocommerce-account .woocommerce-MyAccount-content');
    if (myAccount.length) {
        myAccount.parent().wrapInner('<div class="industify_fn_woo_myaccount"><div><div class="inner">');
    }
    // for create own design for my-account -> login
    var logIn = jQuery('.woocommerce form.login');
    var parentTitle = logIn.parent().find('h2');
    if (logIn.length) {
        parentTitle.hide();
        logIn.wrap('<div class="industify_fn_woo_login"><div>').wrapInner('<div class="industify_fn_woo_login_inner"><div>');
    }
}

function industify_fn_woo_productSingleH() {
    "use strict";

    var leftSide = jQuery('.woocommerce div.product div.woocommerce-product-gallery');
    var rightSide = jQuery('.woocommerce div.product div.summary');
    var leftSideH = leftSide.outerHeight();
    var rightSideH = rightSide.height();
    var W = jQuery(window).width();

    if (W > 1200) {
        if (leftSideH > rightSideH) {
            var abc = (leftSideH - rightSideH) / 2;
            rightSide.css({
                paddingTop: abc,
                paddingBottom: abc
            });
        }
    } else {
        rightSide.css({
            paddingTop: '7%',
            paddingBottom: '7%'
        });
    }

}