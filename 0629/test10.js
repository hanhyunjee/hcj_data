// 배열 순환하기 ( forEach )

const arr = [
    {id: 0, name: '혜림', age:6},
    {id: 1, name: '현일', age:3},
    {id: 2, name: '현아', age:5},
    {id: 3, name: '우림', age:2},
];

arr.forEach((el)=>{             //(el)처럼 파라메드만 있고 함수가 없으면 '=>'로 표시해줘야함
    console.log(el.name);
});