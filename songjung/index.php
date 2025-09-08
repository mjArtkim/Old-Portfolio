<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3">
    <title>SongJoung</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/common_res.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/main_res.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/songjung/images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/songjung/images/android-icon-192x192.png">
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/aosplay.js"></script>

</head>
<body>
    <? include_once("head.html"); ?>
    <div id="main-container">
        <div class="main-visual-container clearfix">
            <h2 class="sound-only">메인비주얼과 텍스트</h2>
            <input type="radio" name="mv-radio" id="mv-radio1" checked>
            <input type="radio" name="mv-radio" id="mv-radio2">
            <input type="radio" name="mv-radio" id="mv-radio3">
            <div class="main-visual-wrap">
                <ul class="main-visual">
                    <li class="mv1"><span class="sound-only">자사호에 차 넣기</span></li>
                    <li class="mv2"><span class="sound-only">보이차소량</span></li>
                    <li class="mv3"><span class="sound-only">물붓기</span></li>
                </ul>
            </div>
            <div class="main-txt-wrap wrap"> 
                <div class="main-txt">
                    <h3 class="main-tiltle">The luxury brand of tea.</h3>
                    <div class="main-desc">
                        <span>중국 전통 보이차를 공수하여 질 좋은 보이차를 안내합니다.</span>
                        <span>자신에게 맞는 보이차를 찾아보고 선택할 수 있는 좋은 선택이 될수 있도록</span>
                        <span>함께 즐기며 건강한 마음의 여유를 느낄 수 있는 송정이 되겠습니다.</span>
                    </div>
                    <div class="mv-controls">
                        <label class="mv-label1" for="mv-radio1">1</label>
                        <label class="mv-label2" for="mv-radio2">2</label>
                        <label class="mv-label3" for="mv-radio3">3</label>
                    </div>
                    <div class="mv-pagination">
                        <label class="mv-label1" for="mv-radio1">1</label>
                        <label class="mv-label2" for="mv-radio2">2</label>
                        <label class="mv-label3" for="mv-radio3">3</label>
                    </div>
                </div>
            </div>
            <ul class="main-biz-right">
                <li class="find">
                    <div class="main-biz-inner">
                    <h3 class="main-h2">Find</h3>
                    <div class="main-br-con">다양한 종류의 차를 보고,<br>
                        자신이 좋아하는 차를 찾을 수<br>
                        있도록 함께 생각하고 권유해드립니다.</div>
                    <a href="puertea.html" class="m-bnt-wh wh">More</a>
                    </div>
                </li>
                <li class="culture">
                    <div class="main-biz-inner">
                    <h3 class="main-h2">Culture</h3>
                    <div class="main-br-con">올바른 음용법과 전통차를<br>
                        즐기는 문화를 함께 공유합니다.</div>
                    <a href="dado.html" class="m-bnt-wh wh">More</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main-biz-container wrap">        
            <div class="main-pg1-wrap clearfix" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                <div class="main-pg1">
                    <h3>What about<br>Puer tea?</h3>
                    <div class="main-pg-con">
                        <span>송정은 중국 전통 보이차를 공급합니다. </span>
                        <span>보이차는 운남성에서 생산된 대엽종의</span>
                        <span>찻잎을 쇄청건조시킨 모차를 원료로 하여</span>
                        발효시킨산차(散茶), 긴압차(緊壓茶)입니다.
                    </div>
                    <div class="more-bnt pg-bnt"><a href="puertea.php">More</a></div>
                </div>
                <img src="images/main_p1.jpg" alt="덩어리형 보이차">
            </div>
            <div class="main-pg2-wrap clearfix" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div class="main-pg2">
                    <h3>How to drink<br>Puer tea?</h3>
                    <div class="main-pg-con">
                        <span>보이차를 제대로 마실 수 있는 음용법은</span>
                        <span>무엇일까. 맛과 향의 요소와 올바르게 우릴 </span>
                        <span>수 있는 방법은 어떤것이 있는지 송정과 함께 공유합니다.</span>
                    </div>
                    <div class="more-bnt pg-bnt"><a href="taest.php">More</a></div>
                </div>
                <img src="images/main_p2.jpg" alt="보이차를 따르는 모습">
            </div>
        </div>
        <div class="container-pg3 clearfix">
            <div class="container-pg3-wrap wrap">
                <div class="main-pg3-inner wrap">
                    <div class="main-pg3-txt" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300">
                        <h3>Which tool<br>
                            should i use?</h3>
                        <div class="main-pg-con">
                            <span>자사호는 자사(紫沙)라는 광석을 캐낸 후</span>
                            <span>물에 개어 빚어 유약을 바르지 않고 구운 도자기입니다.</span>
                            <span>송정은 보이차 뿐만이 아니라 다양한 자사호를 안내하고 있습니다.</span>
                        </div>
                        <div class="m-bnt-wh wh pg-bnt"><a href="jasaho.php">More</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-boss-container wrap">
            <div class="main-boss-wrap clearfix">
                <div class="main-boss-img" data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="300"><span class="sound-only">대표사진</span></div>
                <div class="main-boss-txt">
                    <h3>이동교 대표</h3>
                    <div class="main-boss" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <div class="main-boss-inner">
                            <span class="boss-span1">"나에게 맞는 좋은 보이차를 선택하는 것,</span>
                            <span class="boss-span2">합리적인 선택을 위해한번 더 꼼꼼히 찾아보고 노력하는
                            소비자를 위한 보이차를 건네어 줄 수 있는 송정이 되겠습니다."</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--E:container-->
    <? include_once("foot.html"); ?>

</body>
</html>