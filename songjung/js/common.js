$(function(){
    $("#s-gnb").on("mouseover focusin", function(){
        $(".depth2").stop().slideDown(400);
        $(".bg-wh").stop().slideDown(400);
    });
    $("#s-gnb").on("mouseout focusout", function(){
        $(".depth2").stop().slideUp(400);
        $(".bg-wh").stop().slideUp(400);
    });
    $(".bg-wh").on("mouseover", function(){
        $(".depth2").stop().slideDown(400);
        $(this).stop().slideDown(400);
    });
    $(".bg-wh").on("mouseout", function(){
        $(".depth2").stop().slideUp(400);
        $(this).stop().slideUp(400);
    });

    //메뉴 대표 이미지 바꾸기
    var imgNum = 0;
    var imgSrc = "/songjung/images/depth2_bg" + imgNum + ".jpg"
    var imgURL = "";
    $("#s-gnb .depth1").on("mouseover focusin", function(){
        imgNum = $(this).index();
        imgSrc = "/songjung/images/depth2_bg" + imgNum + ".jpg"
        imgURL = "url(" + imgSrc + ")";
        $(".bg-gnb-img").css("background-image", imgURL);
    });

    //lnb 구현
    $(".depth1>a").click(function(){
        //선택한 메뉴 활성화
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
        //서브메뉴 화면에 펼치기(보이기)
        //$(this).next().slideToggle(200);
        //다른 서브메뉴 숨기기
        $(this).parent().siblings().find(".sub-depth2").slideUp(200);
        ;
    });
    $(".depth1>a").click(function(){
        return false;
    });
    $(".m-gnb-label").click(function(){
        //문서 스크롤 제어
        $("body").toggleClass("hidden");
        //모바일 gnb 닫혔을 때 메뉴 초기화
        $("#m-gnb .depth1").removeClass("active");
        $("#m-gnb .depth2").slideUp(200);
    });
    
    
});