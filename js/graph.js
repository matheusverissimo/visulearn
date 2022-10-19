class Graph {

    constructor(p5, numberOfNodes, width, height){
        this.p5 = p5
        this.width = width
        this.height = height
        this.nodes = []
        this.minDist = 150
        this.p5.angleMode(this.p5.DEGREES)
    }

    getPosFromXY(x, y){
        let angle = 0
        let offset = this.p5.createVector(-this.minDist, 0)
        let nextPos
        while(true){
            nextPos = this.p5.createVector(x, y).add(offset.rotate(angle))
            let validPos = true
            for(let j = 0; j < this.nodes.length; j++){
                let dist = this.p5.dist(nextPos.x, nextPos.y, this.nodes[j].x, this.nodes[j].y)
                if(dist < this.minDist){
                    validPos = false
                }
            }
    
            if(nextPos.x < 20 || nextPos.x > this.width - 20 || nextPos.y < 20 || nextPos.y > this.height - 20)
                validPos = false
            
            if(validPos)
                break
            else {
                angle += 10
                if(angle > 360){
                    nextPos = null
                    break;
                }
            }
        }

        return nextPos
    }

    addNode(value){
        let pos
        if(this.nodes.length == 0)
            this.nodes.push(new GraphNode(
                this.p5.ceil(this.width / 2), 
                this.p5.ceil(this.height/ 2),
                this.p5.ceil(value)
                ))
        else {
            for(let i = 0; i < this.nodes.length; i++){
                pos = this.getPosFromXY(this.nodes[i].x, this.nodes[i].y)
                if(pos != null)
                    break
            }
            this.nodes.push(new GraphNode(
                this.p5.ceil(pos.x), 
                this.p5.ceil(pos.y),
                this.p5.ceil(value)
                ))
        }
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
            this.p5.ellipse(currentNode.x, currentNode.y, currentNode.value * 5)
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