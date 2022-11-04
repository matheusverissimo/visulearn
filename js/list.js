class LinkedList {

    constructor(p5, width, height, doubleLinked){
        this.p5 = p5
        this.width = width
        this.height = height
        this.doubleLinked = doubleLinked
        this.cabeca = null
    }

    remover(valor){
        let currentNode = this.cabeca
        let previousNode = null
        while(true){
            if(currentNode.valor == valor){
                if(previousNode != null)
                    previousNode.proximo = currentNode.proximo ?? null
                if(this.doubleLinked)
                    if(currentNode.proximo != null)
                        currentNode.anterior = previousNode
                if(currentNode == this.cabeca){
                    this.cabeca = currentNode.proximo
                }
                break;
            } else {
                previousNode = currentNode
                currentNode = currentNode.proximo
            }
        }
    }

    inserirNaCauda(valor){
        let novoNo = this.doubleLinked ? new DoubleLinkedNode(valor) : new Node(valor)
        let currentNode = this.cabeca
        while(currentNode.proximo != null)
            currentNode = currentNode.proximo
        currentNode.addProximo(novoNo)
        if(this.doubleLinked)
            novoNo.addAnterior(currentNode)
    }

    setDisplayArrayFromArr(arr){
        if(arr.length < 1)
            return
        this.cabeca = this.doubleLinked ? new DoubleLinkedNode(arr[0]) : new Node(arr[0])

        let currentNode = this.cabeca

        for(let i = 1; i < arr.length; i++){
            if(!this.doubleLinked){
                currentNode.addProximo(new Node(arr[i]))
                currentNode = currentNode.proximo
            } else {
                currentNode.addProximo(new DoubleLinkedNode(arr[i]))
                currentNode.proximo.addAnterior(currentNode)
                currentNode = currentNode.proximo
            }
        }
    }

    arrayFromListNode(){
        let arr = []
        let currentNode = this.cabeca
        while(currentNode != null){
            arr.push(currentNode.valor)
            currentNode = currentNode.proximo
        }
        return arr
    }

    display(){
        this.doubleLinked ? this.displayDLinked() : this.displayLinked()
    }

    displayLinked(){
        let arr = this.arrayFromListNode()
        let spacing = this.p5.floor(this.width / (arr.length + 1))
        let arrowOffset = 10
        let boxWidth = this.width / (arr.length * 3)
        if(boxWidth > 40)
            boxWidth = 40

        for(let i = 0; i < arr.length; i++){
            this.p5.push()

            let x = spacing * (i + 1)
            let y = this.height / 2

            let xNext = spacing * (i + 2)
            let xPrev = spacing * i

            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
            this.p5.textSize(20)

            //ponteiro prox
            let xBoxProx = x - (boxWidth / 2) + boxWidth
            this.p5.rect(xBoxProx, y - (boxWidth / 2), boxWidth, boxWidth)
            //seta para prox
            if(i < arr.length - 1){
                this.p5.line(xBoxProx + (boxWidth / 2), y, xNext - (boxWidth/2), y)
                this.p5.line(
                    xNext - (boxWidth/2) - arrowOffset, 
                    y - arrowOffset, 
                    xNext - (boxWidth/2), 
                    y)
                this.p5.line(
                    xNext - (boxWidth/2) - arrowOffset, 
                    y + arrowOffset, 
                    xNext - (boxWidth/2), 
                    y)
            }

            this.p5.rect(x - (boxWidth / 2), y - (boxWidth / 2), boxWidth, boxWidth)
            this.p5.text(arr[i], x, y)

            //se é o primeiro nó
            if(i == 0){
                this.p5.text("Cabeça", x, y + 35)
            }

            this.p5.pop()
        }
    }

    displayDLinked(){
        let arr = this.arrayFromListNode()
        let spacing = this.p5.floor(this.width / (arr.length + 1))
        let arrowOffset = 10
        let boxWidth = this.width / (arr.length * 3)
        if(boxWidth > 30)
            boxWidth = 30

        for(let i = 0; i < arr.length; i++){
            this.p5.push()

            let x = spacing * (i + 1)
            let y = this.height / 2

            let xNext = spacing * (i + 2)
            let xPrev = spacing * i

            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
            this.p5.textSize(20)

            //ponteiro anterior
            let xBoxPrev = x - (boxWidth / 2) - boxWidth
            this.p5.rect(xBoxPrev, y - (boxWidth / 2), boxWidth, boxWidth)

            //ponteiro prox
            let xBoxProx = x - (boxWidth / 2) + boxWidth
            this.p5.rect(xBoxProx, y - (boxWidth / 2), boxWidth, boxWidth)
            //seta para anterior
            if(i > 0){
                this.p5.line(xBoxPrev + (boxWidth / 2), y, xPrev + boxWidth, y)
                this.p5.line(xBoxPrev + (boxWidth / 2), y, xBoxPrev + (boxWidth / 2) - arrowOffset, y - arrowOffset)
                this.p5.line(xBoxPrev + (boxWidth / 2), y, xBoxPrev + (boxWidth / 2) - arrowOffset, y + arrowOffset)
                this.p5.line(xPrev + boxWidth, y, xPrev + boxWidth + arrowOffset, y + arrowOffset)
                this.p5.line(xPrev + boxWidth, y, xPrev + boxWidth + arrowOffset, y - arrowOffset)
            }

            this.p5.rect(x - (boxWidth / 2), y - (boxWidth / 2), boxWidth, boxWidth)
            this.p5.text(arr[i], x, y)

            //se é o primeiro nó
            if(i == 0){
                this.p5.text("Cabeça", x, y + 35)
            }

            this.p5.pop()
        }
    }
}

class Node {

    constructor(value){
        this.valor = value
        this.proximo = null
    }

    addProximo(node){
        this.proximo = node
    }
}

class DoubleLinkedNode {

    constructor(value){
        this.valor = value
        this.anterior = null
        this.proximo = null
    }

    addAnterior(node){
        this.anterior = node
    }
    
    addProximo(node){
        this.proximo = node
    }
}