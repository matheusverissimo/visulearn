class Fila {

    constructor(p5, arr, w, h){
        this.p5 = p5,
        this.w = w
        this.h = h
        this.vetor = arr
    }

    inserir(valor){
        this.vetor.push(valor)
    }

    remover(){
        return this.vetor.shift()
    }

    display(){
        let itemsW = this.w / this.vetor.length
        let itemsH = 70

        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(20)

        for(let i = 0; i < this.vetor.length; i++){
            let x = i * itemsW + 10
            let y = this.h / 2 - 20

            if(i == 0 || i == this.vetor.length - 1){
                this.p5.push()
                this.p5.strokeWeight(3)
                this.p5.stroke(this.p5.color('#4d1e4d'))
                this.p5.fill(this.p5.color('#4d1e4d'))
            }
            this.p5.rect(x, y, itemsW - 20, itemsH)
            if(i == 0 || i == this.vetor.length - 1){
                this.p5.pop()
                this.p5.push()
                this.p5.fill(this.p5.color('white'))
            }
            this.p5.text(this.vetor[i], x + itemsW / 2 - 10, y + itemsH / 2)
            if(i == 0 || i == this.vetor.length - 1){
                this.p5.pop()
                this.p5.text(i == 0 ? "Início" : "Fim", x + itemsW / 2 - 10, y + itemsH + 20)
            }
        }
    }
}