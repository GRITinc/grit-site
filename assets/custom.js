/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here..
/******
var firstDelay = 3200;
var letterDelay = 300;
var styleText = (letter)=> {
  $(letter).css('font-weight', '300');
  $(letter).css('font-size', '8rem');
  $(letter).css('font-family', 'Acier BAT');
}

if ( $('#grit-superfoods.template-index').length !== 0 ) {
  setTimeout(function() {
  	$('#intro-black .slideshow__heading.h1').show();
  }, 500); 
  	setTimeout(function() {
      $('.letter.leave:eq(0)').hide();
      
      setTimeout(function() {
        $('.letter.leave:eq(1)').hide();
      
        setTimeout(function() {
          $('.letter.leave:eq(2)').hide();
          
          	setTimeout(function() {
              $('.letter.leave:eq(3)').hide();
				
              setTimeout(function() {
                $('.letter.leave:eq(4)').hide();

              }, letterDelay);

            }, letterDelay);
          
        }, letterDelay);
        
      }, letterDelay);
    
    }, firstDelay);
  
  	setTimeout(function() {
      styleText('.letter.stay:eq(0)');
      
      setTimeout(function() {
      	styleText('.letter.stay:eq(1)');
      
        setTimeout(function() {
          styleText('.letter.stay:eq(2)');

          setTimeout(function() {
            styleText('.letter.stay:eq(3)');
          }, letterDelay);

        }, letterDelay);
        
      }, letterDelay);
      
    }, firstDelay + (letterDelay * 6));	
  
}
**/


var heroBtn = "<button class='hero__btn'>GET GRIT</button>";
$('.slideshow__text-content').eq(1).append(heroBtn);
$('.hero__btn').on('click', function() {
  window.location.href = "https://gritsnacks.com/collections/grit-high-performance-snacks";
  console.log("leggo");
});

var nudgeIcon = document.createElement("i");
nudgeIcon.setAttribute('class', 'nudge-icon');
$(nudgeIcon).insertBefore('.hero__btn');

// Removes default checkout button in side nav checkout drawer
$('.slideshow__heading-cta.btn').hide();

// var kickstarterLink = document.createElement('a');
// kickstarterLink.setAttribute('href', "https://www.kickstarter.com/projects/gritsnacks/grit-the-perfect-protein-snack");
// kickstarterLink.setAttribute('class', "get-grit");
// $(kickstarterLink).html('Get Grit on <span class="kickstarter">Kickstarter</span>');
var attentionSpan = document.createElement('h2');
var searchForm = $('.navigation__container form[role="search"]');
//$(attentionSpan).html("Due to high demand, we're in the kitchen replenishing our inventory!");
//$(attentionSpan).insertBefore(searchForm);

var brandPromise = $("#shopify-section-1476381658595 .hero__inner .rte-setting.mega-subtitle");
var checkoutPane = $(".cart-drawer__content .cart-drawer__content-container .text-center");
// $(kickstarterLink).clone().insertAfter(brandPromise);
// $(kickstarterLink).clone().prependTo(checkoutPane);


$('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');

$('#contact_form').on('input', '#NewsletterEmail', ()=> {
  if ( $('#contact_form #NewsletterEmail').val() !== "" ) {
    $('.btn--newsletter__submit').css('visibility', 'visible');
  }
});

//stickybits('.product__content-header', {useFixed: true})

$(document).ready(function() {
  $('.image-bar__item.image-bar__item--1555750070656-1, #shopify-section-1555750070656 .image-bar__flex.image-bar__2-column, .image-bar__item.image-bar__item--1555750070656-1.landing-page__button').css('cursor', 'pointer').on('click', function(e) {
    e.preventDefault();
    $('.testimonials-video').toggleClass('is-visible');
  });
  $('.testimonials-video').toggleClass('is-visible');
  
  $('.nutrition-modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.nutrition-facts').toggleClass('is-visible');
  });
  $('.testimonials-modal-toggle, #shopify-section-1555750070656').on('click', function(e) {
    e.preventDefault();
    $('.testimonials-video').toggleClass('is-visible');
    $('#shopify-section-header').toggle();
  });
  $('.slideshow-modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.slideshow').toggleClass('is-visible');
  });
  $('.modal-close, .modal-overlay').on('click', function(e) {
    e.preventDefault();
    $('.modal').removeClass('is-visible');
    $('#shopify-section-header').show();
  });
  $('.modal').removeClass('is-visible');
  $('#shopify-section-header').show();
});

$( document ).ready(function() {
  //$('.image-bar__flex.image-bar__2-column:last-of-type').eq(0).append('<a class="landing-page__button text-title" href="https://gritsnacks.com/collections/grit-high-performance-snacks">GET GRIT</button>');
  //$('.image-bar__flex.image-bar__2-column:last-of-type').eq(1).append('<a class="landing-page__button text-title">Workouts</button>');
  //$('.image-bar__flex.image-bar__2-column:last-of-type').eq(1).append('<a class="landing-page__button text-title">Reviews</button>');
  if( typeof product_variants_removed != undefined ) {  //this prevents variants of products with less than 1 in inventory from being displayed
    var $addToCartForm = $('form[action="/cart/add"]');
    if (window.MutationObserver && $addToCartForm.length) {
    	var config = { childList: true, subtree: true };
        product_variants_removed.forEach(function(item){
          $('.single-option-selector option').filter(function() { return $(this).text() === item; }).remove();
        });    
    }
  }
  
  
  if ( $('.product__image-container') ) { //remove ! to enable slideshow
   $('.carousel input').first().attr('checked', 'checked')
  }
  
  $('#grit-superfoods .modal.slideshow .modal-body').on('mousedown', function(e) {
   	$('.swipe-notice').hide(); 
  })
  
  if ( $('.template-product') ) {
    var today = new Date().getHours();
    var sum;
  	var views = function(operand, limit) {
      sum = Math.floor(Math.random() * 11 + operand);
      console.log(sum);
      return sum > limit ? sum : '';
    };
    $('.fire-message .view-count').html(views(4, 4));
 
    if ( $('.fire-message .view-count').html() === "" || (today >= 2 && today <= 5) || $('.product__add-to-cart-button').prop('disabled') ) {
      $('.fire-message').hide();
    }
  }
  
  if ( $('#hero-video_container') ) {
    setTimeout(function() {
     $('#video').get(0).play();
      $('#product-loop').get(0).play();
      console.log('video play')
    }, 6000);
  }
  

});

setTimeout(function() {
  $('.btn.btn-default').css('background', '#000');
  $('.swell-tab').css({'font-size': '2.3rem', 'left': '24px', 'bottom': '0px', 'border-radius': '.3125rem', 'height': '52px', 'width': '52px', 'padding': '1.5rem 0'});
  $('#swell-bootstrap .rewards-popup-img-top .main-block .tab-holder').css("overflow", "hidden");
}, 3000);

localStorage.getItem('gritCookieConsent') === 'agree' ?  $('#sticky-cookie-warning').addClass('hide') : $('#sticky-cookie-warning').removeClass('hide')
$('#cookie-consent').on('click', ()=> {
    localStorage.setItem('gritCookieConsent', 'agree');
    $('#sticky-cookie-warning').addClass('hide');                       
});

//TO DO
// Add TM supercript to instances of High Performance Snack, Rejuvenation Snack and Nutrition for Achievers
var subtotal;
var shipping__text = $('.shipping');
var shippingDiscountLimit = 59.99;
var overwriteShippingText = function(price) {
  if (price > shippingDiscountLimit) {
    $(shipping__text).html('Free');
  } else {
    $(shipping__text).html('$3.99');
  }
};
$('.cart__table').on('DOMSubtreeModified', 'tbody', function() {
  subtotal = parseFloat( $('.cart-footer__subtotal').html().replace("$", "") );
  overwriteShippingText(subtotal);
})
 