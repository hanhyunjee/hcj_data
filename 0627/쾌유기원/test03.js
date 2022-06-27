//ES6에 추가된 나머지 매개변수 이해 - JS만 존재함

function sum(...args){      // 매개변수를 자유롭게 설정하려면 ... 를 사용한다
        let toatal = 0;
        for(let i=0; i<args.length; i++){
            toatal += args[i];
        }
        console.log(args.indexOf(1));  
        return toatal;
}

console.log(sum(1,2,3));    // 매개변수 3개

console.log('--------------------------------')

function sum2(a, b, ...others){
    let toatal = a+b;
    for(let i=0; i<others.length; i++){
        toatal += others[i];
    }
    return toatal;
}
console.log(sum2(1,2));
console.log(sum2(1,2,3,4));

