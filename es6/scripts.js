"use strict" ;
console.log("its working, yay");

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});  

VanillaTilt.init(document.querySelector(".tilting-logo"), {
  max: 10,
  speed: 800,
});

lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true, 
  'disableScrolling': true,
  'fitImagesInViewport': true,
  'showImageNumberLabel': false,
  'alwaysShowNavOnTouchDevices': true
})