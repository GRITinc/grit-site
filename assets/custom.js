/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
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

var productImg = document.createElement("img");
productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0046/1363/6209/files/JB_GritTriplexFwfood_7cb490d9-a334-44ba-8ea6-84cd9533eb48.jpg?v=1541395751');
//var productImgRef = $('.hero__inner .hero__btn');
//$(productImg).insertBefore(productImgRef);
// var productImgRef = $('.hero__inner .hero__btn');
// $(productImg).insertBefore(productImgRef);


var nudgeIcon = document.createElement("i");
nudgeIcon.setAttribute('class', 'nudge-icon');
$(nudgeIcon).insertBefore(productImgRef);

// Removes default checkout button in side nav checkout drawer
$('.slideshow__heading-cta.btn').hide();

var kickstarterLink = document.createElement('a');
kickstarterLink.setAttribute('href', "https://www.kickstarter.com/projects/gritsnacks/grit-the-perfect-protein-snack");
kickstarterLink.setAttribute('class', "get-grit");
$(kickstarterLink).html('Get Grit on <span class="kickstarter">Kickstarter</span>');

var searchForm = $('.navigation__container form[role="search"]');
$(kickstarterLink).insertBefore(searchForm);

var brandPromise = $("#shopify-section-1476381658595 .hero__inner .rte-setting.mega-subtitle");
var checkoutPane = $(".cart-drawer__content .cart-drawer__content-container .text-center");
$(kickstarterLink).clone().insertAfter(brandPromise);
$(kickstarterLink).clone().prependTo(checkoutPane);


$('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');

$('#contact_form').on('input', '#NewsletterEmail', ()=> {
  if ( $('#contact_form #NewsletterEmail').val() !== "" ) {
    $('.btn--newsletter__submit').css('visibility', 'visible');
  }
});