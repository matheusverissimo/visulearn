class LinkedList {

    constructor(p5, width, height, doubleLinked){
        this.p5 = p5
        this.width = width
        this.height = height
        this.doubleLinked = doubleLinked
        this.raiz = null
    }

    setDisplayArrayFromArr(arr){
        if(arr.length < 1)
            return
        this.raiz = new Node(arr[0])

        let currentNode = this.raiz

        for(let i = 1; i < arr.length; i++){
            currentNode.addProximo(new Node(arr[i]))
            currentNode = currentNode.proximo
        }
    }

    arrayFromListNode(){
        let arr = []
        let currentNode = this.raiz
        while(currentNode != null){
            arr.push(currentNode.value)
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
                this.p5.text("Raiz", x, y + 30)
            }

            this.p5.pop()
        }
    }
}

class Node {

    constructor(value){
        this.value = value
        this.proximo = null
    }

    addProximo(node){
        this.proximo = node
    }
}