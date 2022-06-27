// const 에러 유형 - 모두 실행 안된다.

const URL = 'http://js.com';        //대문자는 기호상수
// var URL = 'http://js.com';       
URL = 'https://www.naver.com';       

if(true){
    const URL2 = 'http://js.com';
    // var URL2 = 'http://js.com';
}

console.log(URL2);