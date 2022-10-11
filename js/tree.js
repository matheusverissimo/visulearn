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
            this.raiz = new TreeNode(this.p5, value, null, this)
            this.raiz.tree = this
        }
        else
            this.raiz.adicionarFilho(value)
    }

    display(){
        //TODO: TERMINAR ISSO AQUI PARA NAO NECESSITAR DE REFERENCIA PARA O PAI NA HORA DO DISPLAY
        this.raiz.display(null, 0, 1, this.width, this.height)
        // this.raiz.displayLine()
        // this.raiz.displayNode()
    }
}

class TreeNode{
    
    // construtor padrão para montar a árvore
    constructor(p5, value, parent, tree){
        this.p5 = p5
        this.valor = value
        this.parent = parent
        this.direita = null
        this.esquerda = null
        this.level = parent != null ? parent.level + 1 : 0
        this.destaque = false
        
        this.tree = tree
        
        if(this.tree.levels[this.level] != undefined){
            this.tree.levels[this.level].push(this)
        }else{
            this.tree.levels[this.level] = []
            this.tree.levels[this.level].push(this)
        }
    }

    // função para determinar x e y de um nó
    adjustPos(){
        let lrFlag 
        if(this.parent == null)
            lrFlag = 1
        else
            lrFlag = this.parent.esquerda == this ? -1 : 1

        let parentX = this.parent != null ? this.parent.x : 0
        this.x = parentX + (lrFlag * (this.tree.width / this.p5.pow(2, this.level + 1)))
        this.y = this.tree.height / 10 + (this.level * (this.tree.height / 10))
    }

    adicionarFilho(value){
        if(value > this.valor)
            if(this.direita == null)
                this.direita = new TreeNode(this.p5, value, this, this.tree)
            else
                this.direita.adicionarFilho(value)

        if(value < this.valor)
            if(this.esquerda == null)
                this.esquerda = new TreeNode(this.p5, value, this, this.tree)
            else
                this.esquerda.adicionarFilho(value)
    }

    getXY(parentX, level, lrFlag, treeW, treeH){
        return [
            parentX + (lrFlag * (treeW / this.p5.pow(2, level + 1))),
            treeH / 10 + (level * (treeH / 10))
        ]
    }

    display(parentX, level, lrFlag, treeW, treeH){
        this.displayLines(parentX, level, lrFlag, treeW, treeH)
        this.displayNode(parentX, level, lrFlag, treeW, treeH)
    }

    getX(parentX, level, lrFlag, treeW){
        return parentX + (lrFlag * (treeW / this.p5.pow(2, level + 1)))
    }

    getY(level, treeH){
        return treeH / 10 + (level * (treeH / 10))
    }

    displayLines(parentX, level, lrFlag, treeW, treeH){
        let myX
        if(parentX != null)
            myX = this.getX(parentX, level, lrFlag, treeW, treeH)
        else
            myX = treeW / 2
        let myY = this.getY(level, treeH)
        if(parentX != null)
            this.p5.line(myX, myY, parentX, myY - (treeH / 10))
        if(this.esquerda != null)
            this.esquerda.displayLines(myX, level + 1, -1, treeW, treeH)
            
        if(this.direita != null)
            this.direita.displayLines(myX, level + 1, 1, treeW, treeH)
    }

    displayNode(parentX, level, lrFlag, treeW, treeH){
        let myX
        if(parentX != null)
            myX = this.getX(parentX, level, lrFlag, treeW, treeH)
        else
            myX = treeW / 2
        let myY = this.getY(level, treeH)
        this.p5.push()
        this.p5.ellipse(myX, myY, 30)
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(16)
        if(this.destaque)
            this.p5.fill(0, 0, 255)
        this.p5.text(this.valor, myX, myY)
        this.p5.pop()
        if(this.esquerda != null)
            this.esquerda.displayNode(myX, level + 1, -1, treeW, treeH)
            
        if(this.direita != null)
            this.direita.displayNode(myX, level + 1, 1, treeW, treeH)
    }
}