// 클로저 이해하기
// 클로저는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수

// increae함수와 getCount 함수는 createCounterCourse 실행 컨텍스트의
// 렉시컬 환경을 기억하고 있는 클로저가 된다.

function createCounterCourse(){ // 컨텍스트
    let count = 0;  
    return{
        increase : function(){  //increase = 클로저
            count++;
        },
        getCount : function(){  //getCount = 클로저
            return count;
        }
    };
}

const counter1 = createCounterCourse();
const counter2 = createCounterCourse();

counter1.increase();
counter1.increase();          //값이 초기화가 아닌 누적이 된다
console.log('counter 1의 값 : ' + counter1.getCount());

counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());