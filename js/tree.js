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
        this.raiz.display(null, 1, 1, this.width)
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

    // display(){
    //     this.adjustPos()
    //     if(this.parent != null){
    //         this.p5.line(this.parent.x, this.parent.y, this.x, this.y)
    //     }
    //     this.p5.push()
    //     if(this.selected){
    //         this.p5.strokeWeight(2)
    //         this.p5.stroke(255, 0, 0)
    //     }
    //     this.p5.ellipse(this.x, this.y, 30)
    //     this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
    //     this.p5.textSize(16)
    //     this.p5.text(this.valor, this.x, this.y)
    //     this.p5.pop()
    //     if(this.esquerda != null)
    //         this.esquerda.display()
    //     if(this.direita != null)
    //         this.direita.display()
    // }

    displayLine(){
        this.adjustPos()
        if(this.parent != null){
            this.p5.line(this.parent.x, this.parent.y, this.x, this.y)
        }
        if(this.esquerda != null)
            this.esquerda.displayLine()
        if(this.direita != null)
            this.direita.displayLine()
    }

    displayNode(){
        this.adjustPos()
        this.p5.push()
        if(this.destaque){
            this.p5.strokeWeight(2)
            this.p5.stroke(0, 0, 255)
        }
        this.p5.ellipse(this.x, this.y, 30)
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(16)
        if(this.destaque)
            this.p5.fill(0, 0, 255)
        this.p5.text(this.valor, this.x, this.y)
        this.p5.pop()
        if(this.esquerda != null)
            this.esquerda.displayNode()
        if(this.direita != null)
            this.direita.displayNode()
    }

    //TERMINAR ISSO AQUI
    display(parentX, level, lrFlag, treeW){
        let myX
        if(parentX != null)
            myX = parentX + (lrFlag * (treeW / this.p5.pow(2, this.level + 1)))
        else
            myX = treeW / 2
        let myY = level * 30 + 10
        if(parentX != null)
            this.p5.line(myX, myY, parentX, myY - 30)
        this.p5.ellipse(myX, myY, 30)
        if(this.esquerda != null)
            this.esquerda.display(myX, level + 1, -1, treeW)
            
        if(this.direita != null)
            this.direita.display(myX, level + 1, 1, treeW)
    }
}