class Graph {

    constructor(p5, width, height){
        this.p5 = p5
        this.width = width
        this.height = height
        this.nodes = []
        this.minDist = 100
        this.borderMinDist = 30
        this.p5.angleMode(this.p5.DEGREES)
    }

    getPosFromXY(x, y, indicadorRotacao){
        let angle, angleAdd
        if(indicadorRotacao){
            angle = 0
            angleAdd = 10
        } else {
            angle = 180
            angleAdd = -10
        }
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
    
            if(nextPos.x < this.borderMinDist || nextPos.x > this.width - this.borderMinDist 
                || nextPos.y < this.borderMinDist || nextPos.y > this.height - this.borderMinDist)
                validPos = false
            
            if(validPos)
                break
            else {
                angle += angleAdd
                if(angle > 360 || angle < -180){
                    nextPos = null
                    break;
                }
            }
        }

        return nextPos
    }

    addNode(value){
        let indicadorRotacao = value % 2 == 0
        let pos
        if(this.nodes.length == 0)
            this.nodes.push(new GraphNode(
                this.p5.ceil(this.width / 2), 
                this.p5.ceil(this.height/ 2),
                this.p5.ceil(value)
                ))
        else {
            if(value > this.nodes[0].valor) // Para dar uma falsa aleatoriedade, se o no for maior que o primeiro, procura a pos invertido
                for(let i = 0; i < this.nodes.length; i++){
                    pos = this.getPosFromXY(this.nodes[i].x, this.nodes[i].y, indicadorRotacao)
                    if(pos != null)
                        break
                }
            else 
                for(let i = this.nodes.length - 1; i >= 0; i--){
                    pos = this.getPosFromXY(this.nodes[i].x, this.nodes[i].y, indicadorRotacao)
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
            for(let vizinho of node.vizinhos){
                this.p5.push()
                this.p5.line(node.x, node.y, vizinho.x, vizinho.y)
                this.p5.pop()
            }
        }
    }
    
    displayNodes(){
        for(let i = 0; i < this.nodes.length; i++){
            let currentNode = this.nodes[i]
            this.p5.push()
            currentNode.visitado ? this.p5.fill('#4d1e4d') : this.p5.fill(150)
            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
            this.p5.ellipse(currentNode.x, currentNode.y, this.p5.log(currentNode.valor + 2) * 10)
            this.p5.fill(255)
            this.p5.text(currentNode.valor, currentNode.x, currentNode.y)
            this.p5.pop()
        }
    }

    disconnectAllNodes(){
        for(let no of this.nodes)
            no.vizinhos = []
    }

    connectNodesRandomly(){
        this.disconnectAllNodes()
        let maxConnections = this.p5.ceil(this.nodes.length / 3)
        for(let i = 0; i < this.nodes.length; i++){
            let currentNode = this.nodes[i]
            for(let j = 0; j < this.p5.floor(this.p5.random(1, maxConnections)); j++){
                let connectionIndex = this.p5.floor(this.p5.random(0, this.nodes.length))
                if(connectionIndex == i)
                    continue
                currentNode.conectar(this.nodes[connectionIndex])
            }
        }
    }
}

class GraphNode {

    constructor(x, y, value){
        this.x = x
        this.y = y
        this.valor = value
        this.vizinhos = []
        this.visitado = false
    }

    conectar(node){
        this.vizinhos.push(node)
        node.vizinhos.push(this)
    }
}