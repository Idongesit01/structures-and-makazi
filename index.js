$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      lazyLoad: true,
      dots:false,
      responsive: {
        0: {
          items: 1   
        },
        300:{
            items:1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        },
        1400:{
            items:3
        },
        2000: {
          items: 4
        }
      }
    });
  });
