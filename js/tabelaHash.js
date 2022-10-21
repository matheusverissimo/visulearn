class HashTable {

    constructor(p5, w, h){
        this.p5 = p5
        this.w = w
        this.h = h
        this.hashfunc = null
        this.table = []
    }

    setHashFunc(func){
        this.hashfunc = func
    }

    setTableSize(tamanho){
        for(let i = 0; i < tamanho; i++)
            this.table.push([])
    }

    inserir(valor){
        let i = this.hashfunc(valor)
        this.table[i].push(valor)
    }

    display(){
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(20)

        let w = (this.w / this.table.length) - 40
        let yOffset = 50
        let allW = w * this.table.length
        for(let i = 0; i < this.table.length; i++){
            this.p5.push()
            this.p5.fill('#4d1e4d')
            let x = (i * w) + this.w / 2 - allW / 2 
            let y = yOffset
            this.p5.rect(x, y, w, w)
            this.p5.fill('white')
            this.p5.text(i, x + w / 2, y + w / 2)
            this.p5.pop()
            for(let j = 0; j < this.table[i].length; j ++){
                let xItem = x 
                let yItem = (j + 2) * y + 3
                this.p5.rect(xItem, yItem, w, w - 4)
                this.p5.text(this.table[i][j], xItem + w / 2, yItem + w / 2)
            }
        }
    }
}