class HashTable {

    constructor(p5, w, h){
        this.p5 = p5
        this.w = w
        this.h = h
        this.hashfunc = null
        this.customData = {}
        this.table = []
    }

    setHashFunc(func, customData){
        this.hashfunc = func
        this.customData = customData
    }

    setTableSize(tamanho){
        this.table = []
        for(let i = 0; i < tamanho; i++)
            this.table.push([])
    }

    inserir(valor){
        let i = this.hashfunc(valor, this.customData)
        this.table[i].push(valor)
    }

    remover(valor){
        let i = this.hashfunc(valor, this.customData)
        let j = this.table[i].indexOf(valor)
        if(j > -1)
            this.table[i].splice(j, 1)
    }

    findLargestListSize(){
        let max = 1
        for(let i of this.table)
            if(i.length > max)
                max = i.length
        return max
    }

    display(){
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(18)

        let maxItemSize = 70
        let h = this.h / (this.findLargestListSize() + 1)
        let w = (this.w / this.table.length)
        let itemSize = h < w ? h : w
        if(itemSize > maxItemSize)
            itemSize = maxItemSize
        let yOffset = - itemSize
        let allW = itemSize * this.table.length

        for(let i = 0; i < this.table.length; i++){
            this.p5.push()
            this.p5.fill('#4d1e4d')
            let x = (i * itemSize) + this.w / 2 - allW / 2 
            let y = itemSize
            this.p5.rect(x, y + yOffset, itemSize, itemSize)
            this.p5.fill('white')
            this.p5.text(i, x + itemSize / 2, (y + itemSize / 2) + yOffset)
            this.p5.pop()
            for(let j = 0; j < this.table[i].length; j ++){
                let xItem = x 
                let yItem = ((j + 2) * y) + 3
                this.p5.rect(xItem, yItem + yOffset, itemSize, itemSize - 4)
                this.p5.text(this.table[i][j], xItem + itemSize / 2, (yItem + itemSize / 2) + yOffset)
            }
        }
    }
}