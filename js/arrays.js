class Array_ {
    
    /*
        Parametros:
            1 - Objeto do p5
            2 - O array de inteiros
            3 - Modo (Ordenação ou busca) - "sort" / "search"
    */

    constructor(p, array, width, height, increaseItemsSizeByValue){
        // P5
        this.p5 = p
        // Array
        this.array = array
        
        this.width = width
        this.height = height
        // Lista que os valores renderizados
        this.listItems = []
        // Espaçamento entre os itens da lista
        this.spacing = 5
        // Largura dos itens da lista
        this.itemsWidth = (this.width / this.array.length) - this.spacing
        // Direção da lista (Horizontal ou Vertical)
        this.direction = "H"
        // Altura dos itens deve ser relativa ao valor
        this.increaseItemsSizeByValue = increaseItemsSizeByValue
        // Função de update customizada
        this.customUpdateFunc = null
        /*
        Propriedade que guardará dados arbitrários que devem ser mantidos entre 
        os steps da função de ordenação customizada (ex.: indexes de loops, indexes 
        dos itens sendo comparados e swapados, etc.)
        */
        this.updateFuncData = {}
        //Para mostrar a quantidade de vezes que a função foi chamada
        this.shouldDisplayComparisons = false
        this.numberOfComparisons = 0

        this.maxValue = p.max(array)
        this.updateListItems()
    }

    display(){
        this.p5.push()
        if(this.shouldDisplayComparisons)
            this.displayComparisons()
        this.p5.translate(this.width/2 - this.getWidth()/2, this.height/2)
        if(this.direction == "V"){
            this.p5.translate(this.getWidth() / 2, - (this.getWidth() / 2))
            this.p5.angleMode(this.p5DEGREES)
            this.p5.rotate(90)
        }
        for(let i of this.listItems) i.display()
        this.p5.pop()
    }

    sort(){
        this.array.sort()
        this.updateListItems()
    }

    shuffle(){
        for (let i = this.array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        }
        this.updateListItems()
    }

    getItemsWidth(){
        var w = 0
        for(let i of this.listItems) w += i.getWidth()
        return w
    }

    getItemsHeight(){
        var h = 0
        for(let i of this.listItems) h += i.getHeight()
        return h
    }

    getWidth(){
        return (this.listItems.length * this.itemsWidth) + ((this.listItems.length - 1) * this.spacing)
    }

    updateListItems(){
        this.listItems = []
        for(let i = 0; i < this.array.length; i++){
            this.listItems.push(new Item(this.p5, i * (this.itemsWidth + this.spacing), this.array[i], this.itemsWidth, this.maxValue, this.increaseItemsSizeByValue, this.height))
        }
    }

    resetCustomFuncData(){
        this.updateFuncData = {}
    }

    nextStep(){
        this.customUpdateFunc(this.array, this.updateFuncData)
        this.updateListItems()
        this.numberOfComparisons++
    }

    displayComparisons(){
        this.p5.push()
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(32)
        this.p5.text(this.numberOfComparisons, this.width/2, 30)
        this.p5.pop()
    }
    
    /* A função recebida deve receber dois parametros, o array a ser ordenada e um objeto com os dados que devem 
    ser persistidos e manipulados durante os steps */
    setCustomUpdateFunc(sortFunction, aditionalData){
        this.resetCustomFuncData()
        this.customUpdateFunc = sortFunction
        this.updateFuncData = { ...this.updateFuncData, ...aditionalData}
        this.sortAlg = "custom"
    }
}

class Item {

    constructor(p, x, value, width, maxValue, increaseSizeByValue, maxHeight){
        this.p5 = p
        this.selected = false
        this.value = value
        this.maxValue = maxValue
        this.x = x
        this.height = 30
        if(increaseSizeByValue){
            let highestSize = (maxHeight / 100) * 75
            this.height = (this.value / this.maxValue) * highestSize
        }
        this.y = -(this.height/2)
        this.width = width

        // Define cor (range verde -> vermelho)
        this.color = p.floor(this.value * (255 / this.maxValue))
    }

    display(){
        this.p5.push()
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        if(this.selected){
            this.p5.stroke(0, 0, 255)
            this.p5.strokeWeight(2)
        }
        this.p5.fill(this.color, 255 - this.color, 0)
        this.p5.rect(this.x, this.y, this.width, this.height)
        this.p5.fill(0)
        this.p5.strokeWeight(0)
        this.p5.text(this.value.toString(), this.x + this.width / 2, this.y + this.height/2)
        this.p5.pop()
    }

    getWidth(){
        return this.width
    }

    getHeight(){
        return this.height
    }
}