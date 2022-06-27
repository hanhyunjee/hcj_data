//ES6에 새롭게 추가되는 기본 매개변수

function drawChart(width=200, height=400){
    console.log(`${width} X ${height} 차트를 그린다.` );
}
drawChart(100);
drawChart();      //값 없이 실행하면 위에 작성한 기본설정이 출력된다.

console.log('--------------------------------')

function drawChart2(width=200, height=400/2){
    console.log(`${width} X ${height} 차트를 그린다.` );
}
drawChart2(300);
drawChart2();