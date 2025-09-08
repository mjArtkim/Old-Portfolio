$(function(){ 
    $(".pf-gnb-label").click(function(){
        $("#pf-gnb").fadeToggle();
    }); 
    $("#pf-gnb .depth1-1>a").click(function(){
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
        $(this).next().slideToggle(200);
        $(this).parent().siblings().find(".depth2").slideUp(200);
        return false;
    });
    function beforeYboxOpen(self){
        if(self.hasClass('alertBeforeYbox')){
          alert('Before yBox open');
        }
      };
      
      function yBoxIsOpen(self){
        if(self.hasClass('alertAfterYbox')){
          alert('After yBox open');
        }
      };
});

  
  