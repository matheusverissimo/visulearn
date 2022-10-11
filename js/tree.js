class Tree {

    constructor(p5, width, height){
        this.p5 = p5
        this.width = width
        this.height = height
        this.raiz = null
        this.levels = []
        this.customFunc = null
        this.customData = {
        }
    }

    addValue(value){
        if(this.raiz == null){
            this.raiz = new TreeNode(this.p5, value)
            this.raiz.tree = this
        }
        else
            this.raiz.adicionarFilho(value)
    }

    display(){
        this.raiz.display(null, 0, 1, this.width, this.height)
    }
}

class TreeNode{
    
    constructor(p5, value){
        this.p5 = p5
        this.valor = value
        this.direita = null
        this.esquerda = null
        this.destaque = false
    }

    adicionarFilho(value){
        if(value > this.valor)
            if(this.direita == null)
                this.direita = new TreeNode(this.p5, value)
            else
                this.direita.adicionarFilho(value)

        if(value < this.valor)
            if(this.esquerda == null)
                this.esquerda = new TreeNode(this.p5, value)
            else
                this.esquerda.adicionarFilho(value)
    }

    display(parentX, level, lrFlag, treeW, treeH){
        let tree = {
            w: treeW,
            h: treeH
        }
        this.displayLines(parentX, level, lrFlag, tree)
        this.displayNode(parentX, level, lrFlag, tree)
    }

    getCoord(parentX, level, lrFlag, tree){
        let myX
        if(parentX != null)
            myX = parentX + (lrFlag * (tree.w / this.p5.pow(2, level + 1)))
        else
            myX = tree.w / 2
        let myY = tree.h / 10 + (level * (tree.h / 10))
        return [
            myX, myY
        ]
    }

    displayLines(parentX, level, lrFlag, tree){
        let [myX, myY] = this.getCoord(parentX, level, lrFlag, tree)
        if(parentX != null)
            this.p5.line(myX, myY, parentX, myY - (tree.h / 10))
        if(this.esquerda != null)
            this.esquerda.displayLines(myX, level + 1, -1, tree)
        if(this.direita != null)
            this.direita.displayLines(myX, level + 1, 1, tree)
    }

    displayNode(parentX, level, lrFlag, tree){
        let [myX, myY] = this.getCoord(parentX, level, lrFlag, tree)
        this.p5.push()
        this.p5.ellipse(myX, myY, 30)
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(16)
        if(this.destaque)
            this.p5.fill(0, 0, 255)
        this.p5.text(this.valor, myX, myY)
        this.p5.pop()
        if(this.esquerda != null)
            this.esquerda.displayNode(myX, level + 1, -1, tree)
        if(this.direita != null)
            this.direita.displayNode(myX, level + 1, 1, tree)
    }
}