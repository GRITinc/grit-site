/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

var productImg = document.createElement("img");
productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0046/1363/6209/files/JB_GritTriplexF_1512x.jpg?v=1541158826');
var productImgRef = $('.hero__inner .hero__btn');
$(productImg).insertBefore(productImgRef);
//https://cdn.shopify.com/s/files/1/0046/1363/6209/files/JB_GritSingle2ProductxF.jpg?v=1541389064
var nudgeIcon = document.createElement("i");
nudgeIcon.setAttribute('class', 'nudge-icon');
//var nudgeIconRef = $('.hero__inner .hero__btn');
$(nudgeIcon).insertBefore(productImgRef);