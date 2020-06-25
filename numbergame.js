var ran = Math.floor(Math.random() * 100 + 1)

function guess() {
    var num1 = document.getElementById("user").value;

    if(num1 == ""){
        alert('숫자를 입력하세요');
    }
    else if(num1 == ran){
        var area = document.getElementById("area");
        area.innerHTML="정답입니다";
    }
}