var ran;
var count;
const nameAndCountArray = [];

var isGameRunning = true;

function guess() {
    if (!isGameRunning) {
        alert('게임이 종료된 상태입니다. 재시작해주세요.');
        return;
    }
    var num1 = document.getElementById("user").value;

    if (num1 == "") {
        alert('숫자를 입력하세요');
    }
    else if (num1 == ran) {
        var area = document.getElementById("area");
        area.innerHTML = "정답입니다";
        document.getElementById("guesses").value = ("시도한 횟수는 " + (count) + "번 입니다.");
        var name = prompt('정답입니다! 이름을 입력하세요 : ');
        ranking(count, name);
        isGameRunning = false;
    }
    else {
        if (ran > num1) {
            document.getElementById("result").value = (num1 + "보다 큽니다.");
        }
        else {
            document.getElementById("result").value = (num1 + "보다 작습니다.");

        }
    }

    document.getElementById("guesses").value = ("시도한 횟수는 " + (count++) + "번 입니다.");
}

function gameReset() {
    isGameRunning = true;
    ran = Math.floor(Math.random() * 100 + 1);
    count = 1;
    document.getElementById("area").innerHTML = "";
    document.getElementById("result").value = "";
    document.getElementById("guesses").value = "";
    document.getElementById("user").value = "";
}

function ranking(count, name) {

    var nameAndCount = {
        name: name,
        count: count
    };

    nameAndCountArray.push(nameAndCount);
    nameAndCountArray.sort(NumberCompare);

    var rankingElem = document.getElementById("ranking");
    var printArray = [];
    for(var i=0; i<nameAndCountArray.length; i++) {
        if (i >= 5) {
            break;
        }
        printArray.push((i + 1) + '등 : ' + nameAndCountArray[i].name +" "+ nameAndCountArray[i].count + '회');
    }
    rankingElem.innerHTML = printArray.join("<br/>");
}

function NumberCompare(a, b) {
    return a.count - b.count;
}


window.onload = function () {
    document.getElementById("resetbtn").addEventListener('click', function () {
        gameReset();
    });
    gameReset();
}

