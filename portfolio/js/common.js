$(function(){ 
    //fullpage
    var ftSection = "<div class='section fp-auto-height' id='pf-ft'></div>";
    var ftElement = $("#pf-ft").clone();
    $("#pf-container").append(ftSection);
    $("#pf-ft").append(ftElement);
    $('#pf-container').fullpage({
        anchors: ['Story', 'Skill', 'Drawing','Ceramic','WebDesign', 'Contact'],
        navigation: true,
        navigationTooltips: ['Story','Skill','Drawing & Modeling', 'Ceramic','Web Design', 'Contact'],
        slidesNavigation: true,
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            // console.log(destination.index);
            console.log(direction,destination.index);
            if(destination.index == 0) {
                $("body").addClass("shadow");
            }
             else if(origin.index == 0) {
                $("body").removeClass("shadow");
            }
            if(destination.index == 1) {
                $("body").addClass("shadow");
            }
             else if(origin.index == 1) {
                $("body").removeClass("shadow");
            }
            if(destination.index == 5) {
                $("body").addClass("shadow");
            }
             else if(origin.index == 5) {
                $("body").removeClass("shadow");
            }
        },
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