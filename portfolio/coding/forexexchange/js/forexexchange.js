///유닉스시간 변환 펑션///
function timeConverter(UNIXtime) {
    var a = new Date(UNIXtime);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = year + ' ' + month + ' ' + date + ' ' + hour + ':' + min;
    return time;
}

/////환율 로직 펑션/////
var forexCal=function(currency){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () { //onreadystatechange는 0,1,2,3,4일때 각각 실행
        if (this.readyState == 4) {
            console.log(req.responseText);
            data = JSON.parse(this.responseText); //json의 값을 data에 저장한다.
            // console.log(data);
            var inputbuy = document.getElementById(currency).childNodes[5]; //살때 셀을 저장
            var inputsell = document.getElementById(currency).childNodes[7]; //팔때 셀을 저장
            var inputavg = document.getElementById(currency).childNodes[3]; //매매기준율셀 저장
            
            //환율우대 부분
            var dinputbuy = document.getElementById(currency+"2").childNodes[5]; //살때 셀을 저장
            var dinputsell = document.getElementById(currency+"2").childNodes[7]; //팔때 셀을 저장
            var dinputavg = document.getElementById(currency+"2").childNodes[3]; //매매기준율셀 저장
            //////
            console.log(inputbuy);
            var buydata = data.buy;
            var selldata = data.sell;
            selldata = parseFloat(selldata);
            var avgdata = parseFloat((buydata + selldata) / 2);
            avgdata=Math.round(avgdata*100)/100;
            ////환율우대부분////
            var dminusdata = (buydata - selldata)/2 * dapply; ///환율우대율적용
            console.log(dminusdata);
            var dbuydata = buydata - dminusdata;
            dbuydata=Math.round(dbuydata*100)/100;
            var dselldata = selldata + dminusdata;
            dselldata=Math.round(dselldata*100)/100;
    
            console.log(avgdata);
            /////최종입력/////
            inputbuy.innerHTML = buydata;
            inputsell.innerHTML = selldata;
            inputavg.innerHTML = avgdata;
            ////환율우대부분 최종입력/////
            dinputbuy.innerHTML = dbuydata;
            dinputsell.innerHTML = dselldata;
            dinputavg.innerHTML = avgdata;
        }
    };
    req.open("GET", "http://api.fureweb.com/exchangeRate/"+currency);
    req.send();  
}
/////////////////////////



///환율우대 적용//////
var dapply = 0.9;
$(document).ready(function () {
    $("#d-apply").on("change", function () {
        dapply = this.value;
        console.log(dapply);
        dapply = parseFloat(dapply);
        console.log(typeof (dapply));
        operation();
    });
});


////////환율 코딩/////
var operation = function () {
    //////////USD/////////
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () { //onreadystatechange는 0,1,2,3,4일때 각각 실행
        if (this.readyState == 4) {
            console.log(req.responseText);
            data = JSON.parse(this.responseText); //json의 값을 data에 저장한다.
            // console.log(data);
            var inputbuy = document.getElementById("usd").childNodes[5]; //살때 셀을 저장
            var inputsell = document.getElementById("usd").childNodes[7]; //팔때 셀을 저장
            var inputavg = document.getElementById("usd").childNodes[3]; //매매기준율셀 저장
            var inputupdatedtime = document.getElementById("updatedtime");
            //환율우대 부분
            var dinputbuy = document.getElementById("usd2").childNodes[5]; //살때 셀을 저장
            var dinputsell = document.getElementById("usd2").childNodes[7]; //팔때 셀을 저장
            var dinputavg = document.getElementById("usd2").childNodes[3]; //매매기준율셀 저장
            //////
            console.log(inputbuy);
            var buydata = data.buy;
            var selldata = data.sell;
            selldata = parseFloat(selldata);
            var avgdata = parseFloat((buydata + selldata) / 2);
            ////환율우대부분////
            var dminusdata = (buydata - selldata)/2 * dapply; ///환율우대율적용
            console.log(dminusdata);
            var dbuydata = buydata - dminusdata;
            dbuydata=Math.round(dbuydata*100)/100;
            var dselldata = selldata + dminusdata;
            dselldata=Math.round(dselldata*100)/100;
            var updatedtimedata = data.requestedTime;
            console.log(updatedtimedata);
            var nowtime = timeConverter(updatedtimedata);
            console.log(avgdata);
            /////최종입력/////
            inputbuy.innerHTML = buydata;
            inputsell.innerHTML = selldata;
            inputavg.innerHTML = avgdata;
            inputupdatedtime.innerHTML = nowtime;
            ////환율우대부분 최종입력/////
            dinputbuy.innerHTML = dbuydata;
            dinputsell.innerHTML = dselldata;
            dinputavg.innerHTML = avgdata;
        }
    };
    req.open("GET", "http://api.fureweb.com/exchangeRate/USD");
    req.send();

//////////USD 외 통화들//////////////

forexCal('jpy');
forexCal('eur');
forexCal('cny');
forexCal('aud');
forexCal('cad');
forexCal('gbp');
forexCal('thb');
forexCal('php');
forexCal('twd');
}

operation();
