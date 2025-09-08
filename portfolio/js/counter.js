$(function(){
    $('.counter').counterUp({
        time: 1000
    });
    $('.center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true, 
        autoplaySpeed:4000,
        speed:1000 , 
        asNavFor: '.center-nav'
      });

      $('.center-nav').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        asNavFor: '.center',
        autoplaySpeed:4000,
        speed:1000 , 
        responsive: [
          {
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 3
            }
          },
          {
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });
});