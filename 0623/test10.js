//for - .length

const hometow = [ 
    {name: '남준', place: '일산', city: '고양'}, 
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'},
];

for(var i=0; i<hometow.length; i++){
    var h=hometow[i];
    if(!h || !h.city) continue;         //!h= h에 존재하는게 없으면 (null)
    
    console.log(i+"번째 실행입니다");

    if(h.name=='호석'){
        console.log(h.name+'의 고향은 '+h.city+' '+h.place+'입니다');
        break;
    }
}