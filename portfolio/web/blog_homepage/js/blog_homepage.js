//////메뉴 토글슬라이드/////
$(function () {
    $(".headC").click(function () {
        $(".headB").stop().slideToggle("fast");
    });

    $(".headD").click(function () {
        $(".headD-menu").stop().slideToggle("fast");
    });
});




/////쪽수/////////////////
$(function () {
    $(".page1").click(function () {
        $(".page2").css("font-weight", "100");
        $(".page2").css("border-width", "1px");
        $(this).css("font-weight", "bold");
        $(this).css("border-width", "2px");
        $(".table01").css("display", "inherit");
        $(".table02").css("display", "none");
    });

    $(".page2").click(function () {
        $(".page1").css("font-weight", "100");
        $(".page1").css("border-width", "1px");
        $(this).css("border-width", "2px");
        $(this).css("font-weight", "bold");
        $(".table01").css("display", "none");
        $(".table02").css("display", "inherit");
    });
});


////////////목차클릭
$(function () {
    var $word = $(".secB-2-1 table tr td:first-child");
    $word.click(function () {
        //목차 볼드
        $(".secB-2-1 table tr td:first-child").css("font-weight", "100");
        $(this).css("font-weight", "bold");

        //아래 페이지 넘김
        var saveclass = $(this).attr('class');
        var extractListNumber = saveclass.substring(saveclass.length - 2);
        console.log(extractListNumber);
        $(".secB-2-2 > div").addClass("hidden");
        $(".secB-2-2 div.word" + extractListNumber).removeClass("hidden");

        //날짜 저장

        var savetopdate = $(this).next().next().text();
        $(".secB-2-2 div.word" + extractListNumber + " .date").text(savetopdate);


    });
});

//////레프트 메뉴///////////

$(document).ready(function () {

    // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
    var floatPosition = parseInt($("#leftmenu").css('top'));
    // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );


    $(window).scroll(function () {
        // 현재 스크롤 위치를 가져온다.
        var scrollTop = $(window).scrollTop();

        console.log("scrollTop :" + scrollTop);

        var newPosition = scrollTop * 0.5 + floatPosition + "px";
        var afterPosition = scrollTop - 100 + floatPosition + "px";

        console.log("newposition :" + newPosition);



        /* 애니메이션 없이
         $("#floatMenu").css('top', newPosition);
         */
        if (scrollTop <= 200) {
            $("#leftmenu").stop().animate({
                "top": newPosition
            }, 500);

        } else {
            $("#leftmenu").stop().animate({
                "top": afterPosition
            }, 500);

        }



    });

});

///슬라이드다운
$(function () {
    $(".opencategory").click(function () {
        $(".opencategory").css("font-weight", "100");
        $(".opencategory").next().css("display", "none");
        $(this).css("font-weight", "600");
        $(this).next().stop().slideToggle();
    });


})
