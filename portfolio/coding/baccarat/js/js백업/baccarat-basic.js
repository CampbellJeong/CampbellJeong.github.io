var totalbet = 0;
var totalbetmini=0;
var ttt = 0;

//칩클릭하면 베팅액 증가
$(function () {
    $(".2kchip").click(function () {
        console.log("2kchip 눌림");
        totalbet += 2000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
    });
    $(".10kchip").click(function () {
        console.log("10kchip 눌림");
        totalbet += 10000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
    });
    $(".50kchip").click(function () {
        console.log("50kchip 눌림");
        totalbet += 50000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
    });
});


//베트 버튼 클릭 하면 베팅액 적용
$(function () {
    $("#playerbet").click(function () {
        totalbetmini=totalbet/10000;
        $(".playerbetamount").val(totalbetmini);

        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());

        $(".betamounttotal").val(ttt);



        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;


    });
    $("#bankerbet").click(function () {
        totalbetmini=totalbet/10000;
        $(".bankerbetamount").val(totalbetmini);
        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());

        $(".betamounttotal").val(ttt);
        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
    });
    $("#tiebet").click(function () {
        totalbetmini=totalbet/10000;
        $(".tiebetamount").val(totalbetmini);
        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());
        realttt=Number(ttt).toFixed(1);

        $(".betamounttotal").val(realttt);
        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        console.log(ttt);
    });




});




//콤마찍는 것
function comma2(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/*
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//
$(document).on("keyup", "input:text[numberOnly]", function () {
    $(this).number(true);
});
//


function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}*/
