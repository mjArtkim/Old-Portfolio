$(function(){
    var swiper = new Swiper(".sec2-wrap", {
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });



      var $slider = $('.slider');
      var $progressBar = $('.progress');
      var $progressBarLabel = $( '.slider__label' );
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
        
        $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel.text( calc + '% completed' );
      });
            
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true, 
        autoplaySpeed:5000,
        speed:1000 , 
        asNavFor: '.slider-nav'
      });

      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        autoplay: true, 
        autoplaySpeed:4000,
        speed:1000 , 
        focusOnSelect: true
      });

      

      $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplaySpeed:5000,
        speed:1000 , 
        cssEase: 'linear'
      });
      $(".circle1, .circle2").circleText({
        turn: true,
        padding: 1,
        radius: 75,
        duration: 20,
        repeat: 2,
        background: "transpaernt"
    });

    

    $(".ag-btn").click(function(){
        $(".ag-wrap").show();
    });
    $(".close-btn").click(function(){
        $(".ag-wrap").hide();
        $(this).parent().hide();
    });

   

    $(function() {
        $('img').addTooltip();
      });
      
});