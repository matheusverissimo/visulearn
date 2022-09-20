class Tree {

    constructor(p5, width, height){
        this.p5 = p5
        this.width = width
        this.height = height
        this.root = null
        this.levels = []
        this.customFunc = null
        this.customData = {
            currentNode: this.root,
            complete: false
        }
        this.displayValueToBeSearched = true
        this.searchedValue = this.p5.ceil(this.p5.random(0,50))
    }

    addValue(value){
        if(this.root == null){
            this.root = new TreeNode(this.p5, 1, value, null, this)
            this.root.tree = this
        }
        else
            this.root.addValue(value)
        this.customData.currentNode = this.root
    }

    display(){
        this.highlightCurrentlySelectedNodes()
        this.root.display()
        if(this.displayValueToBeSearched)
            this.displaySearchedValue()
    }

    highlightCurrentlySelectedNodes(){
        if(this.customData.currentNode != null)
            this.customData.currentNode.selected = true
    }

    visit(){
        this.root.visit()
    }

    setCustomFunc(customFunc, customData){
        this.customFunc = customFunc
        this.customData = {...this.customData, ...customData}
    }

    customFuncNextStep(){
        this.removeSelectedFromSelectedNode()
        this.customFunc(this.searchedValue, this.customData)
        this.checkPossibilitiesAfterStep()
    }

    removeSelectedFromSelectedNode(){
        this.customData.currentNode.selected = false
    }

    isSearchComplete(){
        return this.customData.complete
    }

    checkPossibilitiesAfterStep(){
        if(this.customData.currentNode == null)
            this.alertValueNotFound()
        if(this.customData.complete)
            this.checkIfNodeWasFound()
    }

    alertValueNotFound(){
        alert("Value not found on the tree!")
    }

    checkIfNodeWasFound(){
        if(this.customData.currentNode.value == this.searchedValue)
            alert("The value was found!")
    }

    displaySearchedValue(){
        this.p5.push()
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.textSize(32)
        this.p5.text(this.searchedValue, this.width/2, 20)
        this.p5.pop()
    }
}

class TreeNode{
    
    constructor(p5, lrFlag, value, parent, tree){
        this.p5 = p5
        this.value = value
        this.parent = parent
        this.right = null
        this.left = null
        this.level = parent != null ? parent.level + 1 : 0
        this.selected = false
        
        this.tree = tree
        
        if(this.tree.levels[this.level] != undefined){
            this.tree.levels[this.level].push(this)
        }else{
            this.tree.levels[this.level] = []
            this.tree.levels[this.level].push(this)
        }
    }

    adjustPos(){
        let lrFlag 
        if(this.parent == null)
            lrFlag = 1
        else
            lrFlag = this.parent.left == this ? -1 : 1

        let parentX = this.parent != null ? this.parent.x : 0
        this.x = parentX + (lrFlag * (this.tree.width / this.p5.pow(2, this.level + 1)))
        this.y = this.tree.height / 10 + (this.level * (this.tree.height / 10))
    }

    addValue(value){
        if(value > this.value)
            if(this.right == null)
                this.right = new TreeNode(this.p5, 1, value, this, this.tree)
            else
                this.right.addValue(value)

        if(value < this.value)
            if(this.left == null)
                this.left = new TreeNode(this.p5, -1, value, this, this.tree)
            else
                this.left.addValue(value)
    }

    display(){
        this.adjustPos()
        if(this.parent != null){
            this.p5.line(this.parent.x, this.parent.y, this.x, this.y)
        }
        this.p5.push()
        if(this.selected){
            this.p5.strokeWeight(2)
            this.p5.stroke(255, 0, 0)
        }
        this.p5.ellipse(this.x, this.y, 20)
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
        this.p5.text(this.value, this.x, this.y)
        this.p5.pop()
        if(this.left != null)
            this.left.display()
        if(this.right != null)
            this.right.display()
    }

    visit(){
        if(this.left != null)
            this.left.visit()
        console.log(this.value)
        if(this.right != null)
            this.right.visit()
    }
}