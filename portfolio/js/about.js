$(function(){ 
    //fullpage
    var ftSection = "<div class='section fp-auto-height' id='pf-ft'></div>";
    var ftElement = $("#pf-ft").clone();
    $("#pf-container").append(ftSection);
    $("#pf-ft").append(ftElement);
    $('#pf-container').fullpage({
        anchors: ['About','Name','Vision'],
        navigation: true,
        navigationTooltips: ['About','Name','Vision'],
        slidesNavigation: true,
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            console.log(destination.index);
            //console.log(origin.index, destination.index);
            if(destination.index == 1) {
                $("body").addClass("shadow");
            } else {
                $("body").removeClass("shadow");
            }
        }
    });
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
    
});