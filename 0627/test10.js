// ES6에 추가된 화살표 함수
// function대신 사용

const double = x => x + x;

// * 기존 방식
// function double(x){
//     x+x;
// }

console.log(double(2));

console.log('------------------------');


const add = (a,b) => a+b;

// * 기존 방식
// function add(a,b){
//     return a + b;
// }

console.log(add(1,2));

console.log('------------------------');

const sum = (...args) => {
    let total = 0;
    for(let i=0; i<args.length; i++){
        total +=args[i];
    }
    return total;
}
console.log(sum(1,2,3));

console.log('------------------------');

setTimeout(()=>{
    console.log('화살표 함수')
}, 10);