var x = 5;     //숫자형
var y = 'five';    //문자형
var isTrue = true;    //불링형(Boolean)
var empty = null;    //null
var nothing;        //undefined
var sym = Symbol('me');     //Symbol

var item = {
    price : 5000,
    count : 10
};    //객체(Object)

//-------------------- 상위 내용은 데이터의 종류

let fruits = ['apple','orange','kiwi'];    //배열선언
let addFruit = function(fruit){
    fruits.push(fruit);
}    //함수

addFruit('watermelon');    //함수실행
console.log(fruits);    //콘솔출력