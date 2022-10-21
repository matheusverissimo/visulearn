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
        this.table = []
        for(let i = 0; i < tamanho; i++)
            this.table.push([])
    }

    inserir(valor){
        let i = this.hashfunc(valor)
        this.table[i].push(valor)
    }

    remover(valor){
        let i = this.hashfunc(valor)
        let j = this.table[i].indexOf(valor)
        if(j > -1)
            this.table[i].splice(j, 1)
    }

    display(){
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(20)

        let w = (this.w / this.table.length)
        if(w > 50)
            w = 50
        let yOffset = 0
        let allW = w * this.table.length
        for(let i = 0; i < this.table.length; i++){
            this.p5.push()
            this.p5.fill('#4d1e4d')
            let x = (i * w) + this.w / 2 - allW / 2 
            let y = w
            this.p5.rect(x, y + yOffset, w, w)
            this.p5.fill('white')
            this.p5.text(i, x + w / 2, (y + w / 2) + yOffset)
            this.p5.pop()
            for(let j = 0; j < this.table[i].length; j ++){
                let xItem = x 
                let yItem = ((j + 2) * y) + 3
                this.p5.rect(xItem, yItem + yOffset, w, w - 4)
                this.p5.text(this.table[i][j], xItem + w / 2, (yItem + w / 2) + yOffset)
            }
        }
    }
}