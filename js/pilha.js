class Pilha {

    constructor(p5, arr, width, height){
        this.p5 = p5
        this.vetor = arr
        this.w = width
        this.h = height
    }

    inserir(valor){
        this.vetor.push(valor)
    }

    remover(){
        return this.vetor.pop()
    }

    display(){
        let itemsW = 100
        let itemsH = this.h / this.vetor.length - 10

        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(20)

        for(let i = 0; i < this.vetor.length; i++){
            let x = this.w / 2 - itemsW / 2
            let y = this.h - (i * (this.h / this.vetor.length) + itemsH)
            if(i == this.vetor.length - 1){
                this.p5.push()
                this.p5.strokeWeight(3)
                this.p5.stroke(this.p5.color('#4d1e4d'))
                this.p5.fill(this.p5.color('#4d1e4d'))
            }
            this.p5.rect(x, y, itemsW, itemsH)
            if(i == this.vetor.length - 1){
                this.p5.pop()
                this.p5.push()
                this.p5.fill(this.p5.color('white'))
            }
            this.p5.text(this.vetor[i], x + itemsW / 2, y + itemsH / 2)

            if(i == this.vetor.length - 1){
                this.p5.pop()
                this.p5.text("Topo", x + itemsW + 30, y + itemsH / 2)
            }
        }
    }
}