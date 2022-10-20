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
        let w = this.w / this.table.length
        for(let i = 0; i < this.table.length; i++){
            let x = (i * w)
            let y = 20
            this.p5.rect(x, y, w, w)
            this.p5.text(i, x + w / 2, y + w / 2)
        }
    }
}