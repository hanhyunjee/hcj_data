//const의 정상적인 실행 예제
//const는 기호상수로 값이 바뀌지 않는다
//재할당은 가능하지만 새로운 객체로 할당은 하지 못하고 
//객체 내부의 상태만 변경할 수 있다.

const CONST_USER = {name : 'jay', age : 30};
console.log(CONST_USER.name, CONST_USER.age);

console.log('-----------------------');

CONST_USER.name = 'jay2';   // 틀 내부의 멤버변수이므로 변경 가능
CONST_USER.age = '31';

console.log(CONST_USER.name, CONST_USER.age);

CONST_USER = {name : 'bbo'}; // {}는 새로운 객체 할당이므로 실행되지 않음

const myName = 'kim';       // 실행 되지 않음
myName = 'Lee';