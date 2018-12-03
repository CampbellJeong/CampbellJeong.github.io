////베팅 시스템 세팅//
var totalbet = 0;
var totalbetmini = 0;
var ttt = 0;
var currentmoney = 100;
var click2k = 0;
var click10k = 0;
var click50k = 0;
var gameend = 0;
var beforeasset = 0;
var realttt = 0;
//기록지
var recordpaper = new Array()
recordpaper[0] = "recordpaper"
var color;
var gameround = 0;
var recordcolumn = 1;
var recordrow = 1;
////


//베팅액,소지금
var betamounttotal = document.getElementById("betamounttotal");
var totalamountinput = document.getElementById("totalamountinput");
var currentbet = betamounttotal.getAttribute("value");
var currentmoney0 = totalamountinput.getAttribute("value");
var currentmoney = parseFloat(currentmoney0);
currentmoney = parseFloat(currentmoney);


//플,뱅,타이 베팅액

var pbet = Number($('.playerbetamount').val());
var bbet = Number($('.bankerbetamount').val());
var tbet = Number($('.tiebetamount').val());
console.log("플레이어베팅액: " + pbet);
console.log("뱅커베팅액: " + bbet);
console.log("타이베팅액: " + tbet);
console.log("현재베팅하려는 액수" + ttt);
console.log("현재소지금" + currentmoney);

//////////////////////

//칩클릭하면 베팅액 증가
$(function () {
    $(".2kchip").click(function () {
        console.log("2kchip 눌림");
        totalbet += 2000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        currentmoney -= 2000 / 10000;
        if (currentmoney < 0) {
            currentmoney += 2000 / 10000;
            totalbet -= 2000;
            $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
            alert("소지금이 부족합니다.");

        }


        currentmoney = Math.round(currentmoney * 100) / 100 //소수점 지정해줘야함
        $(".totalamountinput").val(currentmoney);
        ////클릭버튼 저장
        click2k++;
        console.log("2k클릭횟수 :" + click2k);
        ////

    });
    $(".10kchip").click(function () {
        console.log("10kchip 눌림");
        totalbet += 10000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        currentmoney -= 10000 / 10000;
        if (currentmoney < 0) {
            currentmoney += 10000 / 10000;
            totalbet -= 10000;
            $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
            alert("소지금이 부족합니다.");

        }
        currentmoney = Math.round(currentmoney * 100) / 100 //소수점 지정해줘야함
        $(".totalamountinput").val(currentmoney);
        ////클릭버튼 저장
        click10k++;
        console.log("10k클릭횟수 :" + click10k);
    });
    $(".50kchip").click(function () {
        console.log("50kchip 눌림");
        totalbet += 50000;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        currentmoney -= 50000 / 10000;
        if (currentmoney < 0) {
            currentmoney += 50000 / 10000;
            totalbet -= 50000;
            $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
            alert("소지금이 부족합니다.");
        }
        currentmoney = Math.round(currentmoney * 100) / 100 //소수점 지정해줘야함
        $(".totalamountinput").val(currentmoney);
        ////클릭버튼 저장
        click50k++;
        console.log("50k클릭횟수 :" + click50k);
    });
    $("#allin").click(function () {


        var allinConfirm = confirm('정말로 올인하시겠습니까?');
        if (allinConfirm) {

            console.log("올인 작동");
            totalbet += currentmoney * 10000;
            currentmoney -= totalbet / 10000;
            if (currentmoney < 0) {
                alert("소지금이 부족합니다.");
                currentmoney += totalbet / 10000;
            }
            $(".totalamountinput").val(currentmoney);
            $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        } else {
            return false;
        }

    });
});



//리셋 버튼시 베팅초기화
$(function () {
    $("#reset").click(function () {
        //칩에 있는돈을  현재소지금으로 복원
        totalbet = Number(totalbet);
        currentmoney = Number(currentmoney);
        currentmoney += totalbet / 10000;

        //클릭수 초기화
        click2k = 0;
        click10k = 0;
        click50k = 0;

        //이미지 디스플레이 논으로 바꿈
        $(".pchip-2kchip").css("display", "none");
        $(".pchip-10kchip").css("display", "none");
        $(".pchip-50kchip").css("display", "none");
        $(".bchip-2kchip").css("display", "none");
        $(".bchip-10kchip").css("display", "none");
        $(".bchip-50kchip").css("display", "none");
        $(".tchip-2kchip").css("display", "none");
        $(".tchip-10kchip").css("display", "none");
        $(".tchip-50kchip").css("display", "none");


        //베팅액란에 있는 돈을 복원//
        pbet = Number(pbet);
        bbet = Number(bbet);
        tbet = Number(tbet);
        
        currentmoney += pbet
        currentmoney += bbet
        currentmoney += tbet


        $(".totalamountinput").val(currentmoney);

        ////
        pbet = 0;
        bbet = 0;
        tbet = 0;
        totalbet = 0;
        totalbetmini = totalbet / 10000; //totalbet은 위에서 설정한 베팅액
        $(".playerbetamount").val(totalbetmini); //플레이어 베팅액에 액수(totalmini) 표시
        $(".bankerbetamount").val(totalbetmini); //뱅커베팅액에 액수(totalmini) 표시
        $(".tiebetamount").val(totalbetmini); //타이 베팅액에 액수(totalmini) 표시
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;

        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());

        $(".betamounttotal").val(ttt);
    });
});


//베트 버튼 클릭 하면 베팅액 적용
$(function () {
    $("#playerbet").click(function () {
        beterror();
        totalbetmini = totalbet / 10000; //totalbet은 위에서 설정한 베팅액
        $(".playerbetamount").val(totalbetmini); //플레이어 베팅액에 액수(totalmini) 표시
        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());
        realttt = Math.round(ttt * 100) / 100;
        $(".betamounttotal").val(realttt);
        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        pbet = totalbetmini;

        //클릭횟수대로 이미지
        if (click2k <= 10 & click2k > 0) {
            $(".pchip-2kchip").attr("src", "images/2k-" + click2k + ".png");
            $(".pchip-2kchip").css("display", "inherit");

        } else if (click2k > 10) {
            $(".pchip-2kchip").attr("src", "images/2k-10.png");
            $(".pchip-2kchip").css("display", "inherit");
        }

        if (click10k <= 10 & click10k > 0) {
            $(".pchip-10kchip").attr("src", "images/10k-" + click10k + ".png");
            $(".pchip-10kchip").css("display", "inherit");
        } else if (click10k > 10) {
            $(".pchip-10kchip").attr("src", "images/10k-10.png");
            $(".pchip-10kchip").css("display", "inherit");
        }
        if (click50k <= 10 & click50k > 0) {
            $(".pchip-50kchip").attr("src", "images/50k-" + click50k + ".png");
            $(".pchip-50kchip").css("display", "inherit");
        } else if (click50k > 10) {
            $(".pchip-50kchip").attr("src", "images/50k-10.png");
            $(".pchip-50kchip").css("display", "inherit");
        }

        //클릭수 초기화
        click2k = 0;
        click10k = 0;
        click50k = 0;

    });
    $("#bankerbet").click(function () {
        beterror();
        totalbetmini = totalbet / 10000;
        $(".bankerbetamount").val(totalbetmini); //뱅커 베팅액에 액수표시
        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());
        realttt = Math.round(ttt * 100) / 100;
        $(".betamounttotal").val(realttt);
        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        bbet = totalbetmini;

        //클릭횟수대로 이미지
        if (click2k <= 10 & click2k > 0) {
            $(".bchip-2kchip").attr("src", "images/2k-" + click2k + ".png");
            $(".bchip-2kchip").css("display", "inherit");
        } else if (click2k > 10) {
            $(".bchip-2kchip").attr("src", "images/2k-10.png");
            $(".bchip-2kchip").css("display", "inherit");
        }
        if (click10k <= 10 & click10k > 0) {
            $(".bchip-10kchip").attr("src", "images/10k-" + click10k + ".png");
            $(".bchip-10kchip").css("display", "inherit");
        } else if (click50k > 10) {
            $(".bchip-10kchip").attr("src", "images/10k-10.png");
            $(".bchip-10kchip").css("display", "inherit");
        }
        if (click50k <= 10 & click50k > 0) {
            $(".bchip-50kchip").attr("src", "images/50k-" + click50k + ".png");
            $(".bchip-50kchip").css("display", "inherit");
        } else if (click50k > 10) {
            $(".bchip-50kchip").attr("src", "images/50k-10.png");
            $(".bchip-50kchip").css("display", "inherit");
        }

        //클릭수 초기화
        click2k = 0;
        click10k = 0;
        click50k = 0;
    });
    $("#tiebet").click(function () {
        beterror();
        totalbetmini = totalbet / 10000;
        $(".tiebetamount").val(totalbetmini); //타이 베팅액에 액수표시
        ttt = parseFloat($(".playerbetamount").val()) + parseFloat($(".bankerbetamount").val()) + parseFloat($(".tiebetamount").val());
        realttt = Math.round(ttt * 100) / 100;

        $(".betamounttotal").val(realttt);
        totalbet = 0;
        $("#chip h3").text("₩ " + comma2(totalbet)).innerHTML;
        tbet = totalbetmini;

        //클릭횟수대로 이미지
        if (click2k <= 10 & click2k > 0) {
            $(".tchip-2kchip").attr("src", "images/2k-" + click2k + ".png");
            $(".tchip-2kchip").css("display", "inherit");
        } else if (click2k > 10) {
            $(".tchip-2kchip").attr("src", "images/2k-10.png");
            $(".tchip-2kchip").css("display", "inherit");
        }
        if (click10k <= 10 & click10k > 0) {
            $(".tchip-10kchip").attr("src", "images/10k-" + click10k + ".png");
            $(".tchip-10kchip").css("display", "inherit");
        } else if (click10k > 10) {
            $(".tchip-10kchip").attr("src", "images/10k-10.png");
            $(".tchip-10kchip").css("display", "inherit");
        }
        if (click50k <= 10 & click50k > 0) {
            $(".tchip-50kchip").attr("src", "images/50k-" + click50k + ".png");
            $(".tchip-50kchip").css("display", "inherit");
        } else if (click50k > 10) {
            $(".tchip-50kchip").attr("src", "images/50k-10.png");
            $(".tchip-50kchip").css("display", "inherit");
        }

        //클릭수 초기화
        click2k = 0;
        click10k = 0;
        click50k = 0;
    });

});
//////////////////베팅시스템 결합////


$(function () {
    $("footer").click(function () {


    });


});

//콤마찍는 것
function comma2(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//////////////


//변수선언
var cardlist = ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'KC', 'KD', 'KH', 'KS', 'QC', 'QD', 'QH', 'QS'];
var score = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var playercard1;
var playercard2;
var playercard3;
var bankercard1;
var bankercard2;
var bankercard3;


///////함수정의///////////////////////////////////
//바카라 룰
function rule() {
    alert("- 플레이어, 뱅커, 타이(비김)에 베팅할 수 있습니다.\n- 게임이 시작되면 일정한 로직에 의하여 뱅커와 플레이어 각각에 카드 2~3장이 주어집니다.\n- 카드들의 숫자를 모두 더한 값의 마지막 자리수가 높은 쪽이 승리합니다. (예: 4+7=1, 2+5+10=7)\n(단, 그림카드는 0, 에이카드는 1의 숫자를 가집니다.)\n(본 게임에서는 페어와 슈퍼식스에 베팅할 수 없습니다.)\n\n\n- You can bet Player, Banker, Tie(draw).\n- After game begin, as per a logic, Banker and Player have each 2~3 cards.\n- Sum all number of received cards, then compete with last digit. Having higher number of last digit will be winner. (ex: 4+7=1, 2+5+10=7)\n(Picture cards have number 0, A cards have number 1.)\n(Betting Pair and Super six is not available in this game.)\n\n-Written by JSH-");

}




//어레이에서 카드뽑기
function randomCard(a) {
    return a[Math.floor(Math.random() * a.length)];
}
// 초반 카드 4장 꺼내기
function cardpick() {
    playercard1 = randomCard(cardlist);
    playercard2 = randomCard(cardlist);
    bankercard1 = randomCard(cardlist);
    bankercard2 = randomCard(cardlist);
}
//플레이어카드3 꺼내기
function p3cardpick() {
    playercard3 = randomCard(cardlist);
    if (playercard3 == playercard1 || playercard3 == playercard2 || playercard3 == bankercard1 || playercard3 == bankercard2) {
        console.log("플레이어카드3 중복되어 다시 픽됨");
        p3cardpick();
    } else {
        return false;
    }
}

//뱅커카드3 꺼내기
function b3cardpick() {
    bankercard3 = randomCard(cardlist);
    if (bankercard3 == playercard1 || bankercard3 == playercard2 || bankercard3 == bankercard1 || bankercard3 == bankercard2 || bankercard3 == playercard3) {
        console.log("뱅커카드3 중복되어 다시 픽됨");
        b3cardpick();
    } else {
        return false;
    }
}


//숫자규칙
function numberchange(a) {
    var b = a.charAt(0);
    if (b == "A") {
        return 1;
    } else if (b == 1) {
        return 0;
    } else if (b == "J" || b == "Q" || b == "K") {
        return 0;
    } else {
        return b;
    }
}

//칩클릭안하고 베팅버튼 눌렀을 시
var beterror = function () {
    if (totalbet == 0) {
        alert("먼저 가운데 칩들을 클릭하셔서 베팅액을 설정하십시오.");

    }
}

////모든버튼 enabled////
var buttonEnabled = function () {
    $("#start").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#playerbet").prop("disabled", false);
    $("#bankerbet").prop("disabled", false);
    $("#tiebet").prop("disabled", false);
    $("#allin").prop("disabled", false);
    $(".2kchip").prop("disabled", false);
    $(".10kchip").prop("disabled", false);
    $(".50kchip").prop("disabled", false);

    $("#start").css("cursor", "pointer");
    $("#reset").css("cursor", "pointer");
    $("#playerbet").css("cursor", "pointer");
    $("#bankerbet").css("cursor", "pointer");
    $("#tiebet").css("cursor", "pointer");
    $("#allin").css("cursor", "pointer");
    $(".2kchip").css("cursor", "pointer");
    $(".10kchip").css("cursor", "pointer");
    $(".50kchip").css("cursor", "pointer");



}



////모든버튼 disabled////
var buttonDisabled = function () {
    $("#start").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#playerbet").prop("disabled", true);
    $("#bankerbet").prop("disabled", true);
    $("#tiebet").prop("disabled", true);
    $("#allin").prop("disabled", true);
    $(".2kchip").prop("disabled", true);
    $(".10kchip").prop("disabled", true);
    $(".50kchip").prop("disabled", true);
    console.log("!!!!!!!버튼 비활성화 작동");
    $("#start").css("cursor", "not-allowed");
    $("#reset").css("cursor", "not-allowed");
    $("#playerbet").css("cursor", "not-allowed");
    $("#bankerbet").css("cursor", "not-allowed");
    $("#tiebet").css("cursor", "not-allowed");
    $("#allin").css("cursor", "not-allowed");
    $(".2kchip").css("cursor", "not-allowed");
    $(".10kchip").css("cursor", "not-allowed");
    $(".50kchip").css("cursor", "not-allowed");
}

///게임엔드 함수
var gameend = function () {
    console.log("게임엔드 함수 실행");
    $(".pchip-2kchip").css("display", "none");
    $(".pchip-10kchip").css("display", "none");
    $(".pchip-50kchip").css("display", "none");
    $(".bchip-2kchip").css("display", "none");
    $(".bchip-10kchip").css("display", "none");
    $(".bchip-50kchip").css("display", "none");
    $(".tchip-2kchip").css("display", "none");
    $(".tchip-10kchip").css("display", "none");
    $(".tchip-50kchip").css("display", "none");

    ///소지금 소수점
    currentmoney = Math.round(currentmoney * 100) / 100;
    $(".totalamountinput").val(currentmoney);

    //이겼는지 졌는지 평가
    //초반 소지금+베팅액
    /*
    if (beforeasset > currentmoney) {
        var losemoney = beforeasset - currentmoney;
        alert(losemoney + "만원을 잃으셨습니다.");
    } else if (beforeasset < currentmoney) {
        var winmoney = currentmoney - beforeasset;
        alert(winmoney + "만원을 따셨습니다.");
    }*/
    //기록지
    /*console.log(gameround);
    console.log(color);
    console.log(recordpaper[0]);
    console.log(recordcolumn);*/

    recordpaper[gameround] = color;

    if (gameround == 1) {
        gameround = gameround;
    } else if (recordpaper[gameround] == recordpaper[gameround - 1]) {
        recordrow += 1;
        if (recordrow == 6) {
            recordcolumn += 1;
            recordrow = 1;
            if (recordcolumn == 16) {
                $(".record ul li").css("border-color", "white");
                recordcolumn = 1;
                recordrow = 1;
            }
        }

    } else {
        recordcolumn += 1;
        recordrow = 1;
        if (recordcolumn == 16) {
            $(".record ul li").css("border-color", "white");
            recordcolumn = 1;
            recordrow = 1;
        }
    }

    console.log("게임라운드"+gameround);

    $(".record ul:nth-child(" + recordcolumn + ")  li:nth-child(" + recordrow + ")").css("border-color", color);
    //버튼 활성화
    buttonEnabled();
};


//스타트로 본게임 시작
$(function () {
    $(".start").stop().click(function () {

        console.log("스타트버튼 작동");
        if (totalbet > 0) {
            alert("3종류의 bet 버튼을 클릭하여 베팅을 완료해주세요.");
        } else {
            buttonDisabled();

            ///카드 내려오기전에 위로감
            $(".playercard1").animate({
                top: '-1000px'
            }, 1000);
            $(".bankercard1").animate({
                top: '-1000px'
            }, 1000);
            $(".playercard2").animate({
                top: '-1000px'
            }, 1000);
            $(".bankercard2").animate({
                top: '-1000px'
            }, 1000);
            $(".playercard3").animate({
                top: '-1000px'
            }, 1000);
            $(".bankercard3").animate({
                top: '-1000px'
            }, 1000);
            /////
            //카드픽
            cardpick();

            if (playercard1 == playercard2 || playercard1 == bankercard1 || playercard1 == bankercard2 || playercard2 == bankercard1 || playercard2 == bankercard2 || bankercard1 == bankercard2) {
                console.log("중복되서 다시실행")
                cardpick();
            }
            console.log("플레이어카드1: " + playercard1);
            console.log("플레이어카드2: " + playercard2);
            console.log("뱅커카드1: " + bankercard1);
            console.log("뱅커카드2: " + bankercard2);

            //5,6번째 카드픽
            p3cardpick();
            b3cardpick();

            console.log("플레이어카드3: " + playercard3);
            console.log("뱅커카드3: " + bankercard3);

            //픽된 카드를 이미지로 나타내줌
            /*var a= document.getElementById('p1');
                a.setAttribute('src','../images/card/'+playercard1+'.jpg');*/
            $(function () {
                setTimeout(function () {
                    $("#p1").attr('src', 'images/card/' + playercard1 + '.jpg');
                    $("#p2").attr('src', 'images/card/' + playercard2 + '.jpg');
                    $("#b1").attr('src', 'images/card/' + bankercard1 + '.jpg');
                    $("#b2").attr('src', 'images/card/' + bankercard2 + '.jpg');
                    $("#p3").attr('src', 'images/card/' + playercard3 + '.jpg');
                    $("#b3").attr('src', 'images/card/' + bankercard3 + '.jpg');
                    $(".resultword").text("게임이 진행중입니다.");
                    $(".resultword").css("color", "white");
                    $(".resultword").css("filter", "drop-shadow(4px 4px 2px black)");

                }, 200);
            });

            //처카드를 점수로 변환
            var p1score = numberchange(playercard1);
            var p2score = numberchange(playercard2);
            var b1score = numberchange(bankercard1);
            var b2score = numberchange(bankercard2);
            var p3score = numberchange(playercard3);
            var b3score = numberchange(bankercard3);

            var playerscore = parseInt(p1score) + parseInt(p2score);
            if (playerscore >= 10) {
                playerscore -= 10;
            }
            var bankerscore = parseInt(b1score) + parseInt(b2score);
            if (bankerscore >= 10) {
                bankerscore -= 10;
            }
            console.log("playerscore: " + playerscore);
            console.log("bankerscore: " + bankerscore);
            ///////////////////







            ////초반 4개의 카드가 내려옴
            $(".playercard1").animate({
                top: '150px'
            }, 1000);
            $(".bankercard1").delay(1000).animate({
                top: '150px'
            }, 1000);
            $(".playercard2").delay(2000).animate({
                top: '150px'
            }, 1000);
            $(".bankercard2").delay(3000).animate({
                top: '150px'
            }, 1000);

            //초반 소지금+베팅액
            beforeasset = currentmoney + totalbet / 10000 + realttt;
        



            //////////////게임 규칙 로직//////////

            ///플레이어 또는 뱅커스코어가 8,9 이면 플뱅 모두 2장으로 승부봄
            if (playerscore > 7 || bankerscore > 7) {
                //////
                playerscore = parseInt(p1score) + parseInt(p2score);
                bankerscore = parseInt(b1score) + parseInt(b2score);
            }


            //플레이어가 0,1,2,3,4,5고, 뱅커가 0,1,2,3,4,5,6 일때,
            else if (playerscore < 6 && bankerscore < 7) {
                //플레이어3카드 하나 내려오는 동작
                console.log("플레이어3카드 내려옴");
                $(".playercard3").delay(4000).animate({
                    top: '150px'
                }, 1000);
                playerscore = parseInt(p1score) + parseInt(p2score) + parseInt(p3score);
                //////플레이어카드 하나가 내려온 뒤, 뱅커의 스코어에 따라가 받을지 말지 결정
                switch (bankerscore) {
                    case 0: //플3카드관계없이 뱅3카드가 내려옴
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 1: //플3카드관계없이 뱅3카드가 내려옴
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 2: //플3카드관계없이 뱅3카드가 내려옴
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 3: //플3카드가 8이 아닌이상 뱅3카드가 내려옴
                        if (playercard3 == 8) {
                            bankerscore = parseInt(b1score) + parseInt(b2score);

                        } else {
                            $(".bankercard3").delay(5000).animate({
                                top: '150px'
                            }, 1000); ///뱅커3카드 내려오는 동작
                            ////
                            bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);

                        }
                        break;
                    case 4: //플3카드가 0,1,8,9가 아닌 이상 뱅3카드가 내려옴
                        if (playercard3 == 0 || playercard3 == 1 || playercard3 == 8 || playercard3 == 9) {
                            bankerscore = parseInt(b1score) + parseInt(b2score);

                        } else {
                            $(".bankercard3").delay(5000).animate({
                                top: '150px'
                            }, 1000); ///뱅커3카드 내려오는 동작
                            ////
                            bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);

                        }
                        break;
                    case 5: //플3카드가 0,1,2,3,8,9가 아닌이상 뱅3카드가 내려옴
                        if (playercard3 == 0 || playercard3 == 1 || playercard3 == 2 || playercard3 == 3 || playercard3 == 8 || playercard3 == 9) {
                            bankerscore = parseInt(b1score) + parseInt(b2score);

                        } else {
                            $(".bankercard3").delay(5000).animate({
                                top: '150px'
                            }, 1000); ///뱅커3카드 내려오는 동작
                            ////
                            bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);

                        }
                        break;
                    case 6: //플3카드가 0,1,2,3,4,5,8,9가 아닌이상 뱅3카드가 내려옴
                        if (playercard3 == 0 || playercard3 == 1 || playercard3 == 2 || playercard3 == 3 || playercard3 == 4 || playercard3 == 5 || playercard3 == 8 || playercard3 == 9) {
                            bankerscore = parseInt(b1score) + parseInt(b2score);

                        } else {
                            $(".bankercard3").delay(5000).animate({
                                top: '150px'
                            }, 1000); ///뱅커3카드 내려오는 동작
                            ////
                            bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);

                        }
                        break;
                    case 7: //플3카드에 관계없이 카드 받지 않음
                        bankerscore = parseInt(b1score) + parseInt(b2score);
                        break;
                    case 8: //플3카드에 관계없이 카드 받지 않음
                        bankerscore = parseInt(b1score) + parseInt(b2score);
                        break;
                    case 9: //플3카드에 관계없이 카드 받지 않음
                        bankerscore = parseInt(b1score) + parseInt(b2score);
                        break;
                }
            }




            //플레이어6,7 일 때,
            else if (playerscore == 6 || playerscore == 7) {
                playerscore = parseInt(p1score) + parseInt(p2score);
                //플레이어스코어가 6,7일때는 2장으로 게임함 (스탠드)
                //뱅커만 3번째 카드를 받을지말지는 아래 뱅커스코어 룰로 결정함.

                switch (bankerscore) {
                    case 0: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 1: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 2: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 3: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 4: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 5: //
                        $(".bankercard3").delay(5000).animate({
                            top: '150px'
                        }, 1000); ///뱅커3카드 내려오는 동작
                        ////
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 6: //
                        ////뱅커스코어6~9면 카드 받지않음
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 7: //
                        ////뱅커스코어6~9면 카드 받지않음
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 8: //
                        ////뱅커스코어6~9면 카드 받지않음
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;
                    case 9: //
                        ////뱅커스코어6~9면 카드 받지않음
                        bankerscore = parseInt(b1score) + parseInt(b2score) + parseInt(b3score);
                        break;

                }
            } else {
                console.log("!else함수 반환, 플뱅스코어 8,9일때 실행");


            }




            //플레이어 뒷자리 숫자 반환
            if (playerscore >= 10) {
                if (playerscore >= 20) {
                    playerscore -= 20;
                } else {
                    playerscore -= 10;
                }

            }
            //////////
            //뱅커 뒷자리 숫자 반환
            if (bankerscore >= 10) {
                if (bankerscore >= 20) {
                    bankerscore -= 20;
                } else {
                    bankerscore -= 10;
                }

            }
            /////////

            console.log("플레이어3카드" + p3score);
            console.log("뱅커3카드" + b3score);

            console.log("!!!!!!!!!!!플레이어최종" + playerscore);
            console.log("!!!!!!!!!!!뱅커최종" + bankerscore);

            //최종집계
            if (playerscore > bankerscore) {
                console.log("플레이어 윈!");
                var result = "pwin";
            } else if (playerscore < bankerscore) {
                console.log("뱅커 윈!");
                var result = "bwin";
            } else {
                console.log("드로우..");
                var result = "draw"
            }

            //////이겼을시 케이스///
            console.log("리절트: " + result);

            switch (result) {
                case "pwin":
                    console.log("pwin");

                    Math.round(pbet * 100) / 100;

                    currentmoney = Number(currentmoney);
                    console.log(typeof (currentmoney));
                    Math.round(currentmoney * 100) / 100;
                    currentmoney += pbet * 2;


                    setTimeout(function () {
                        $(".resultword").text("플레이어 윈!");
                        $(".resultword").css("color", "#2353f1");
                        $(".resultword").css("filter", "none");
                        $(".totalamountinput").val(currentmoney);
                        pbet = 0;
                        bbet = 0;
                        tbet = 0;
                        totalbet = 0;
                        totalbetmini = totalbet / 10000; //totalbet은 위에서 설정한 베팅액
                        $(".playerbetamount").val(pbet); //플레이어 베팅액에 액수(totalmini) 표시
                        $(".bankerbetamount").val(bbet); //뱅커베팅액에 액수(totalmini) 표시
                        $(".tiebetamount").val(tbet); //타이 베팅액에 액수(totalmini) 표시
                        $(".betamounttotal").val(totalbetmini); //타이 베팅액에 액수(totalmini) 표시
                        gameround++;
                        color = "blue";
                        gameend();

                    }, 8000);
                    setTimeout(function () {
                        if (currentmoney <= 0 && totalbet <= 0) {
                            alert("소지금을 모두 잃으셨습니다. 새로고침으로 다시 시작하세요.");
                            currentmoney = 0;
                            $(".totalamountinput").val(currentmoney);
                        }
                    }, 8500);
                    break;
                case "bwin":
                    console.log("bwin");

                    currentmoney += bbet;
                    currentmoney += bbet * 0.95;

                    setTimeout(function () {
                        $(".resultword").text("뱅커 윈!");
                        $(".resultword").css("color", "coral");
                        $(".resultword").css("filter", "none");
                        currentmoney = Math.round(currentmoney * 100) / 100;
                        console.log("Math씌워진 뒤 currentmoney: " + currentmoney);
                        $(".totalamountinput").val(currentmoney);
                        pbet = 0;
                        bbet = 0;
                        tbet = 0;
                        totalbet = 0;
                        totalbetmini = totalbet / 10000; //totalbet은 위에서 설정한 베팅액
                        $(".playerbetamount").val(pbet); //플레이어 베팅액에 액수(totalmini) 표시
                        $(".bankerbetamount").val(bbet); //뱅커베팅액에 액수(totalmini) 표시
                        $(".tiebetamount").val(tbet); //타이 베팅액에 액수(totalmini) 표시
                        $(".betamounttotal").val(totalbetmini); //타이 베팅액에 액수(totalmini) 표시
                        gameround++;
                        color = "red";
                        gameend();


                    }, 8000);
                    setTimeout(function () {
                        if (currentmoney <= 0 && totalbet <= 0) {
                            alert("소지금을 모두 잃으셨습니다. 새로고침으로 다시 시작하세요.");
                            currentmoney = 0;
                            $(".totalamountinput").val(currentmoney);
                        }
                    }, 8500);


                    break;
                case "draw":
                    console.log("draw");

                    currentmoney += tbet;
                    currentmoney += tbet * 8;
                    currentmoney += pbet;
                    currentmoney += bbet;
                    currentmoney = Math.round(currentmoney * 100) / 100;

                    setTimeout(function () {
                        $(".resultword").text("타이!");
                        $(".resultword").css("color", "green");
                        $(".resultword").css("filter", "none");
                        $(".totalamountinput").val(currentmoney);
                        pbet = 0;
                        bbet = 0;
                        tbet = 0;
                        totalbet = 0;
                        totalbetmini = totalbet / 10000; //totalbet은 위에서 설정한 베팅액
                        $(".playerbetamount").val(pbet); //플레이어 베팅액에 액수(totalmini) 표시
                        $(".bankerbetamount").val(bbet); //뱅커베팅액에 액수(totalmini) 표시
                        $(".tiebetamount").val(tbet); //타이 베팅액에 액수(totalmini) 표시
                        $(".betamounttotal").val(totalbetmini); //타이 베팅액에 액수(totalmini) 표시
                        gameround++;
                        color = "green";
                        gameend();
                    }, 8000);
                    setTimeout(function () {
                        if (currentmoney <= 0 && totalbet <= 0) {
                            alert("소지금을 모두 잃으셨습니다. 새로고침으로 다시 시작하세요.");
                            currentmoney = 0;
                            $(".totalamountinput").val(currentmoney);
                        }
                    }, 8500);

                    break;
                default:
                    return false;

            }



            //////////////////////////////스타트안, 이위로 입력
        }
    });
});
//////스타트 카테고리 종료
