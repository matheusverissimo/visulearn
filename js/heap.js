class MaxHeap {

    constructor(p5){
        this.p5 = p5
        this.heap = []
    }

    getMax(){
        return this.heap[1]
    }

    add(value){
        this.heap.push(value)

        if(this.heap.length > 0){
            let lastIndex = this.heap.length - 1

            while(lastIndex > 1 && this.heap[Math.floor(lastIndex/2) < this.heap[lastIndex]]){
                [this.heap[Math.floor(lastIndex/2)], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[Math.floor(lastIndex/2)]]
                lastIndex = Math.floor(lastIndex/2)
            }
        }
    }

    displayAsTree(x, y, width, height){
        let heapHeight = this.p5.floor(Math.log2(this.heap.length)) + 1
        let levelHeight = height / heapHeight
        let lastLvl = 0
        let lvlX = 0
        this.p5.push()
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.translate(x + width / 2, y)
        for(let i = 0; i < this.heap.length; i++){
            let level = this.p5.floor(Math.log2(i + 1))
            if(level != lastLvl){
                lastLvl = level
                lvlX = -(level * levelHeight/2)
            }
            this.p5.ellipse(lvlX, levelHeight * level + 60, 50)
            this.p5.text(this.heap[i], lvlX, levelHeight * level + 60)

            this.p5.line()
            lvlX += 70
        }
        this.p5.pop()
    }

    /*
        level = index
    */
}