class LinkedList {

    constructor(p5, width, height, doubleLinked){
        this.p5 = p5
        this.width = width
        this.height = height
        this.doubleLinked = doubleLinked
        this.cabeca = null
    }

    setDisplayArrayFromArr(arr){
        if(arr.length < 1)
            return
        this.cabeca = new Node(arr[0])

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
        let arr = this.arrayFromListNode()
        let spacing = this.p5.floor(this.width / (arr.length + 1))
        let arrowOffset = 10
        let radius = 40

        for(let i = 0; i < arr.length; i++){
            this.p5.push()

            let x = spacing * (i + 1)
            let y = this.height / 2

            let xNext = spacing * (i + 2)
            let xPrev = spacing * i

            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
            this.p5.textSize(20)

            //seta para prox
            if(i < arr.length - 1){
                this.p5.line(x, y, xNext - (radius/2), y)
                this.p5.line(
                    xNext - (radius/2) - arrowOffset, 
                    y - arrowOffset, 
                    xNext - (radius/2), 
                    y)
                this.p5.line(
                    xNext - (radius/2) - arrowOffset, 
                    y + arrowOffset, 
                    xNext - (radius/2), 
                    y)
            }

            //seta para anterior
            if(this.doubleLinked && i > 0){
                //this.p5.line(x, y, xNext - (radius/2), y)
                this.p5.line(
                    xPrev + (radius/2), 
                    y, 
                    xPrev + (radius/2) + arrowOffset, 
                    y - arrowOffset)
                    this.p5.line(
                        xPrev + (radius/2), 
                        y, 
                        xPrev + (radius/2) + arrowOffset, 
                        y + arrowOffset)
            }

            this.p5.ellipse(x, y, radius)
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