class Graph {

    constructor(p5, numberOfNodes, width, height){
        this.p5 = p5
        this.width = width
        this.height = height
        this.nodes = []
        for(let i = 0; i < numberOfNodes; i++){
            this.addNode(this.p5.ceil(this.p5.random(5, 20)))
        }
    }

    addNode(value){
        let x = this.p5.map(this.p5.random(0, this.width), 0, this.width, this.width/4, 3 * this.width/4)
        let y = this.p5.map(this.p5.random(0, this.height), 0, this.height, 50, this.height - 50)
        let validPos = true

        for(let j = 0; j < this.nodes.length; j++){
            let dist = this.p5.dist(x, y, this.nodes[j].x, this.nodes[j].y)
            if(dist < 150){
                validPos = false
            }
        }

        if(validPos)
            this.nodes.push(new GraphNode(
                this.p5.ceil(x), 
                this.p5.ceil(y),
                this.p5.ceil(value)
                ))
        else this.addNode(value)
    }

    display(){
        this.displayLines()
        this.displayNodes()
    }

    displayLines(){
        for(let node of this.nodes){
            for(let connection of node.connections){
                this.p5.push()
                this.p5.line(node.x, node.y, connection.x, connection.y)
                this.p5.pop()
            }
        }
    }
    
    displayNodes(){
        for(let i = 0; i < this.nodes.length; i++){
            let currentNode = this.nodes[i]
            this.p5.push()
            this.p5.fill(150)
            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
            this.p5.ellipse(currentNode.x, currentNode.y, currentNode.value * 3)
            this.p5.fill(255)
            this.p5.text(currentNode.value, currentNode.x, currentNode.y)
            this.p5.pop()
        }
    }

    connectNodesRandomly(){
        let maxConnections = this.p5.floor(this.p5.random(2, 4))
        for(let i = 0; i < this.nodes.length; i++){
            let currentNode = this.nodes[i]
            for(let j = 0; j < this.p5.floor(this.p5.random(1, maxConnections)); j++){
                let connectionIndex = this.p5.floor(this.p5.random(0, this.nodes.length))
                if(connectionIndex == i)
                    continue
                currentNode.connect(this.nodes[connectionIndex])
            }
        }
    }
}

class GraphNode {

    constructor(x, y, value){
        this.x = x
        this.y = y
        this.value = value
        this.connections = []
        this.visited = false
    }

    connect(node){
        this.connections.push(node)
        node.connections.push(this)
    }
}