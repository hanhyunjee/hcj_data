// js는 기본적으로 전역과 함수 단위로 스코프(범위)를 생성한다
                        // 스코프 = 전역이냐 지역변수냐
// 위치에 따라 전역과 지역으로 나누어짐
                        //let = 함수 안에있으면 지역 밖에 있으면 전역

var a = 10;
console.log(a);

function print(){
    var b = 20;
    if(true){
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

