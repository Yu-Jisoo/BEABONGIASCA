$(document).ready(function(){
    topbutton();
    // headerScroll();
    respRollingBanner();
    returnPageBtn();

    panelControl("header > div:nth-of-type(2) > div input");
    panelControl("header > div:nth-of-type(2) button");
    panelControl(".detailContainer > div:nth-of-type(2) form :last-child div:last-child input");
    panelControl(".7 > div:nth-child(3) > div > form > input");
    panelControl(".formBox > div:nth-child(3) > div:nth-child(2) > form > div > input");
    panelControl("#mnavPanel > ul li b");
    panelControl(".cartContainer > div > div:nth-child(1) > form > fieldset:nth-child(3) > div.bottomContent > input.btn.box.gray");
    introPopup();
    
    beaSlider('.newInCarosuel',4,300,10,false,true,false);
    beaSlider('.diaSlider',1,550,0,false,true,null,false);
    beaSlider('.hjSlider',1,550,0,false,true,null,false);

    toggleWish();
    toggleCart();
    toggleFilter(".filter h3");
    
    accOrComponent(".orAccComponent li b");
    accOrComponent(".detailContainer > div:nth-of-type(2) > ul li h3");
    accOrComponent("ul.accComponent li h3");

    hoverReplacer(".listContainer > ul li a img");
    hoverReplacer(".collectionContainer > div ul li a img");
    hoverReplacer(".hJContainer > div > ul li a img");
    hoverReplacer(".indexContainer > :nth-child(2) > ul li a img");

    detailThumbPager();
    customSelect(".customSelect");
    sizeGuideToggle();

    checkboxAll();

    qtyControl();

    videosControl();

    accountAdd();

    cartRadio();
    onlyNumber();

    createRing();

    inputValid();

    policyToggle();
    footerTopAcc();
    $(".videoBox").fitVids();
});

function topbutton(){
    var btn = $('#topbutton');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
}
// function headerScroll(){
//     $(function(){
//         var $header = $('header'); //헤더를 변수에 넣기
//         var $page = $('header'); //색상이 변할 부분
//         var $window = $(window);
//         var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
        
//         $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
//           pageOffsetTop = $page.offset().top;
//         });
        
//         $window.on('scroll', function(){ //스크롤시
//           var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
//           $header.toggleClass('down', scrolled); //클래스 토글
//         });
//     });
// }\
function respRollingBanner(){
    $('.respRollingBanner > p').clone().appendTo('.respRollingBanner');
}
function returnPageBtn(){
    $('.returnPage').click(function(){
        history.back();
    })
}
function panelControl(target){
    var panelName = null; 
    var popName = null; 
    $(target).click(function(){ 
        panelName = $(this).attr('data-panel'); 
        $("#" + panelName).addClass("active"); 
    });
    $(target).click(function(){ 
        popName = $(this).attr('data-popname'); 
        $("#" + popName).addClass("active"); 
    });
    $(".closeBtn").click(function(){ 
        $("#" + panelName).removeClass("active"); 
        $("#" + popName).removeClass("active"); 
    });
    $(".close").click(function(){ 
        $("#" + panelName).removeClass("active"); 
    });
}
function introPopup(){
    $("#introPop .closeBtn").click(function(){
        parent().removeClass("active");
    });
}
function beaSlider(target,maxsV,slideW,slideM,pagerV,conV,pagerC,adapHVal){
    $(target).bxSlider({
        maxSlides: maxsV,
        slideWidth: slideW,
        slideMargin: slideM,
        pager: pagerV,
        controls: conV,
        pagerCustom: pagerC,
        adaptiveHeight: adapHVal,
        shrinkItems: true,
        moveSlides: 1
    });
}
function toggleWish(){
    var toggleStatus = false;

    $(".wishIcon").click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $(this).css("background-image","url('../images/icon_toggleWish_on.png')");
        }else{
            $(this).css("background-image","url('../images/icon_toggleWish_off.png')");
        }
    });
}
function toggleCart(){
    $(".cartIcon").click(function(){
        $(this).css("background-image","url('../images/icon_toggleCart_on.png')");
        $("#cartPanel").addClass("active");
    });
    $(".closeBtn").click(function(){ 
        $("#cartPanel").removeClass("active"); 
        $(".cartIcon").css("background-image","url('../images/icon_toggleCart_off.png')");
    });
}
function accOrComponent(target){
    var allAcc = $(target);

    allAcc.click(function(){
        $(this).toggleClass("active");
        $(this).siblings().slideToggle();
    });
}
function toggleFilter(target){
    $(target).click(function(){
        $(this).parent().toggleClass("active");
    });
}
function hoverReplacer(target){
    var currentImgName = '';
    $(target).on("mouseenter",function(){
        currentImgName = $(this).attr("src");
        var hoverImgName = currentImgName.replace(".jpg","_h.jpg");
        $(this).attr("src",hoverImgName);
        // $(this).css("object-fit","cover");
    }).on("mouseleave",function(){
        $(this).attr("src",currentImgName);
        // $(this).css("object-fit","contain");
    });
}
function detailThumbPager(){
    var slider = $(".detailSlider").bxSlider({
        controls: false,
        pagerCustom: ".thumbNailPager",
        adaptiveHeight: true,
        infiniteLoop:false
    });
    $(".thumbNailPager").bxSlider({
        maxSlides: 6,
        minSlides: 1,
        slideWidth: 80,
        slideMargin: 10,
        wrapperClass: 'thumbPagerBox',
        moveSlides: 1,
        shrinkItems: true,
        pager: false,
        touchEnabled: false,
        infiniteLoop:false,
        hideControlOnEnd: true
    });

    $(".thumbPagerBox div.bx-viewport .thumbNailPager li a").click(function(){
        $(".thumbPagerBox div.bx-viewport .thumbNailPager li a").removeClass('active');
        $(this).addClass('active');
    });

    $(".bx-prev").on('click touchstart',function(){
        slider.goToPrevSlide();
    });
    $(".bx-next").on('click touchstart',function(){
        slider.goToNextSlide();
    });
}
function customSelect(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
    $(target + " li").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
}
function sizeGuideToggle(){
    $(".detailContainer > div:nth-of-type(2) form div:nth-of-type(2) .sizeGuideBox h3 span").click(function(){
        $(this).toggleClass("active");
    });
}
function checkboxAll(){
    $('.denyBtn').click(function(){
		$('.switchToggle li input:checkbox').is(':checked');
		$('input:checkbox').prop('checked',false);
	});
    $('.allowBtn').click(function(){
		$('.switchToggle li input:checkbox').is(':checked');
		$('input:checkbox').prop('checked',true);
	});
}
function qtyControl(){
    function updateTotalPrice(){
        var total = 0;

        $('#cartPanel > div form > ul li').each(function(){
            var priceText = $(this).find('strong').text().replace('€', '').replace(',', '');
            var itemPrice = parseFloat(priceText);
            var currentNumb = parseInt($(this).find('.qty').val());
            total += itemPrice * currentNumb;           
        });

        $('#cartPanel > div form > div mark').text('€' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }

    $('.add, .minimize').click(function(){
        var numbInput = '';
        var currentNumb = 0;

        numbInput = $(this).siblings(".qty");
        console.log('numbInput');
        currentNumb = parseInt(numbInput.val());

        if($(this).hasClass('add')){
            if(currentNumb < 10){
                currentNumb++;
            }
        }else if($(this).hasClass('minimize')){
            if(currentNumb > 1){
                currentNumb--;
            }
        }

        numbInput.val(currentNumb);
        updateTotalPrice();
    });

    $('.remove').click(function(){
        $(this).closest('li').remove();
        
        if($('#cartPanel li').length === 0){
            $('#cartPanel > p').addClass('active');
        }
        
        updateTotalPrice();
    });

}
function videosControl(){
    // 1. li click -> $(this) -> variable 에 저장해두기 (var currentli = null;)
    // 2. $(this)-> currentLi 저장된상태 -> currentLi 안에 닫기버튼
    // 3. 2번의 닫기버튼을 클릭했을때 currentLi 불러서 removeClass("active");
    var currentli = null;                                                        
    var toggleStatus = false;
    $(".hBlindBox li").click(function(){
        currentli = $(this);
        currentli.toggleClass("active");
        toggleStatus = !toggleStatus;
        console.log(toggleStatus);
        switch(toggleStatus){
            case true:
                $(this).find("video").trigger('play');
                break;
            case false:
                $(this).find("video").trigger('pause').get(0).currentTime = 0;
                break;
        }
    });
}
function accountAdd(){
    $(".myAccountContainer > div form:last-child fieldset legend a").click(function(){
        $(".myAccountContainer > div form:last-child fieldset:last-child").addClass("active");
    });
    $(".myAccountContainer > div form:last-child fieldset:last-child input:nth-of-type(2)").click(function(){
        $(".myAccountContainer > div form:last-child fieldset:last-child").removeClass("active");
    });
}
function cartRadio(){
    var name = null;
    
    $(".cartContainer input[type=radio]").click(function(){
        $("div[id$='Box']").removeClass('active');
        name = $(this).attr('id');
        
        if($(this).prop('checked',true)){
            $('#' + name + 'Box').addClass('active');
        }else if($(this).prop('checked',false)){
            $('#' + name + 'Box').removeClass('active');
        }
    });

    $("#ship").click(function(){
        $('.cartContainer > div > div:nth-child(2) > div.poLT16 > span:nth-child(4)').text('Enter shipping Address');
        $(this).closest('form').attr('action','cart_Step3_ship.html');
    });
    $("#pickup").click(function(){
        $('.cartContainer > div > div:nth-child(2) > div.poLT16 > span:nth-child(4)').text('Free');
        $(this).closest('form').attr('action','cart_Step3_pickup.html');
    });
    $("#standard").click(function(){
        $('.cartContainer > div > div:nth-child(2) > div.poLT16 > span:nth-child(4)').text('Standard Post(With Signature) - €15,30');
        $('.cartContainer > div > div:nth-child(2) > div:nth-child(4) > strong').text('€2,035,00');
        $(this).closest('form').attr('action','cart_Step4_ship_standard.html');
    });
    $("#express").click(function(){
        $('.cartContainer > div > div:nth-child(2) > div.poLT16 > span:nth-child(4)').text('Express Post - €31,55');
        $('.cartContainer > div > div:nth-child(2) > div:nth-child(4) > strong').text('€2,051.55');
        $(this).closest('form').attr('action','cart_Step4_ship_express.html');
    });
}
function onlyNumber(){
    $(".onlyNumber").on("keyup", function() {
        $(this).val($(this).val().replace(/[^0-9]/g,""));
     });
//? 숫자만 입력되게끔 oiniput? 추가하는 방식으로도 해보기
}
function createRing(){
    $('.hJCreateRingContainer ul li input.next').click(function(){
        $('.open').removeClass('active');
        $(this).parents('li').next().find('.open').addClass('active');
    });
    $('.hJCreateRingContainer ul li input.prev').click(function(){
        $('.open').removeClass('active');
        $(this).parents('li').prev().find('.open').addClass('active');
    });

    $('.hJCreateRingContainer ul li input.popup').click(function(){
        $('#createRingPopup').addClass('active');
    });
    $('#createRingPopup > input').click(function(){
        $('#createRingPopup').removeClass('active');
    });
    
    slider1 = $('.createRingFirstSlider').bxSlider({
        maxSlides: 1,
        slideWidth: 308,
        slideMargin: 0,
        pager: true,
        controls: false,
        pagerCustom: '.customFirstPager',
        adaptiveHeight: false,
        touchEnabled: false
    });
    slider2 = $('.createRingSecondSlider').bxSlider({
        maxSlides: 1,
        slideWidth: 308,
        slideMargin: 0,
        pager: true,
        controls: false,
        pagerCustom: '.customSecondPager',
        adaptiveHeight: false,
        touchEnabled: false
    });
    $(".hJCreateRingContainer ul li input.next").click(function(){   
        slider1.reloadSlider();
        slider2.reloadSlider();
    });
    $(".hJCreateRingContainer ul li input.prev").click(function(){   
        slider1.reloadSlider();
        slider2.reloadSlider();
    });
}
function inputValid(){
    $('.number').on('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
        var $input = $(this);
        var $span = $input.next('span');
        var maxlength = parseInt($input.attr('maxlength'), 10);
        if ($input.val().length !== maxlength) {
            $span.addClass("active");
        } else {
            $span.removeClass("active");
        }
    });
    $("input[type='email'],input[type='text']").on('input',function(){
        var $input = $(this);
        var $span = $input.next('span');
        if ($input.attr('type') === 'email') {
            if (!$input.val().includes('@')) {
                $span.addClass("active");
            } else {
                $span.removeClass("active");
            }
        }else if($input.attr('type') === 'text'){
            $span.removeClass("active");
        }
    });
    $("#code").on('input',function(){
        var $input = $(this);
        var $span = $input.next('span');
        if ($input.val().length == 6) {
                $span.removeClass("active");
            } else {
                $span.addClass("active");
            }
    });
    $('form input[type="button"]:not(.returnPage)').on('click', function(){
        var $fieldset = $(this).closest('fieldset');
        $fieldset.find('input[type="text"]').each(function(){
            var $input = $(this);
            var $span = $input.next('span');
            if ($input.val().trim()) {
                $span.removeClass("active");
            } else {
                $span.addClass("active");
            }
        });
        if($(this).attr("data-popname")){
            if(($fieldset.find("input+span").hasClass("active"))){
                return false;
            }else{
                var popupName = "#" + $(this).attr("data-popname");
                $(popupName).addClass("active");
            }
        }else{
            return false;
        }
    });
    $('form [type="submit"]').on('click', function(e){
        var $fieldset = $(this).closest('fieldset');
        $fieldset.find('input[type="text"]').each(function(){
            var $input = $(this);
            var $span = $input.next('span');
            if ($input.val()==='') {
                $span.addClass("active");
            } else {
                $span.removeClass("active");
            }
        });
    });
    $('form [type="submit"]').on('click', function(e){
        var $ul = $(this).siblings('ul');
        $ul.find('input[type="text"]').each(function(){
            var $input = $(this);
            var $span = $input.next('span');
            if ($input.val()==='') {
                $span.addClass("active");
            } else {
                $span.removeClass("active");
            }
        });
    });
};
function policyToggle(){
    $('.footerContainer.policy div aside h2').click(function(){
        var winWidth = $(window).width();

        if (winWidth >= 1024) {

        } else {
            $(this).children('a').attr("href","javascript:void(0)");
            $(this).toggleClass("active");
            $(this).siblings('ul').slideToggle();
        }

    });
}
function footerTopAcc(){
    $('.footerContainer > ul > li.active').click(function(){
        $(this).parent().toggleClass("active");
        $(this).siblings().slideToggle();
    });
}