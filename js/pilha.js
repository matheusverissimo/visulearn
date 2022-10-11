class Pilha {

    constructor(p5, arr, width, height){
        this.p5 = p5
        this.arr = arr
        this.w = width
        this.h = height
    }

    adicionar(valor){
        this.arr.push(valor)
    }

    remover(){
        return this.arr.pop()
    }

    display(){
        let itemsW = 100
        let itemsH = this.h / this.arr.length - 20

        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(20)

        for(let i = 0; i < this.arr.length; i++){
            let x = this.w / 2 - itemsW / 2
            let y = this.h - (i * (this.h / this.arr.length) + itemsH)
            this.p5.rect(x, y, itemsW, itemsH)
            this.p5.text(this.arr[i], x + itemsW / 2, y + itemsH / 2)

            if(i == this.arr.length - 1)
                this.p5.text("Topo", x + itemsW + 30, y + itemsH / 2)
        }
    }
}