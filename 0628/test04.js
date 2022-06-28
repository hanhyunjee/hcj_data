class Chart{
    constructor(width, heihgt) {
        this.width = width;
        this.heihgt = heihgt;
    }
    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width, heihgt){
        super(width, heihgt);
    }
    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.heihgt}barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();