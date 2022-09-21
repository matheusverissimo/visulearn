let canvasContainer = document.getElementById("canvasContainer")
let canvasW = canvasContainer.offsetWidth
let canvasH = canvasContainer.offsetHeight - 45

function startArray(){
  var sketch = function(p){
    p.list = null

    p.setup = function() {
      p.createCanvas(canvasW, canvasH)
      let arr = [3,8,5,3,8,1,3,9,7,6]
      list = new Array_(p, arr, canvasW, canvasH)

      // Para setar funcao custom
      window.nextFunc = () => {}
      window.customData = {}
      window.setUpdateCustomFunc = false
      list.setCustomUpdateFunc(window.nextFunc, window.customData)
      
      //Para controlar se o update é automatico baseado no framerate
      window.autoUpdate = true
      let autoUpdateBtnc =  p.createButton('Atualizar automaticamente')
      autoUpdateBtnc.class("p5Btn")
      autoUpdateBtnc.mousePressed(()=> {
        window.autoUpdate = !window.autoUpdate
      })

      //
      let controlledUpdateBtn = p.createButton('Próximo Passo')
      controlledUpdateBtn.class("p5Btn")
      controlledUpdateBtn.mousePressed(() => {
        list.nextStep()
      })

      p.frameRate(5)
    }
    
    p.draw = function() {
      //Para setar funcao custom
      if(window.setUpdateCustomFunc){
        list.setCustomUpdateFunc(window.nextFunc, window.customData)
        window.setUpdateCustomFunc = false
      }
      p.background(255)
      list.display()
      if(!list.isComplete() && window.autoUpdate)
        list.nextStep()
    }
  }

  let myp5 = new p5(sketch)
}

function startBuscaArray(func, data){
  var sketch = function(p){
    p.list = null

    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight)
      let arr = []
      for(let i = 0; i < 15; i++)
        arr.push(p.ceil(p.random(0,50)))
      arr.push(15)
      list = new Array_(p, arr, p.windowWidth, p.windowHeight)
      list.setCustomUpdateFunc(func, data)
      p.frameRate(3)
    }

    p.draw = function() {
      p.background(255)
      list.display()
      if(!list.isComplete())
        list.nextStep()
    }
  }

  let myp5 = new p5(sketch)
}

function startSearchInTree(func, data){

  var sketch = function(p){
    
    let tree
    
    p.setup = function (){
      p.createCanvas(p.windowWidth, p.windowHeight)
     
      tree = new Tree(p, 900, 700)
      for(let i = 0; i < 20; i++){
        tree.addValue(p.floor(p.random(1, 50)))
      }
      tree.setCustomFunc(func, data)
    }
    
    p.draw = function (){
      p.background(255)
      tree.display()
    }

    p.keyPressed = function (){
      if(p.keyCode == 68 && !tree.isSearchComplete())
        tree.customFuncNextStep()
    }
  }

  let myp5 = new p5(sketch)
}

function startHeap(func, data){
  var sketch = function(p){
  
    let heap

    p.setup = function (){
      p.createCanvas(p.windowWidth, p.windowHeight)

      heap = new MaxHeap(p)

      for(let i = 0; i < 20; i++){
        heap.add(p.floor(p.random(1, 20)))
      }
      p.background(255)
      heap.displayAsTree(0, 0, p.windowWidth, p.windowHeight)
      console.log(heap)
    }

    // p.draw = () => {
    // }
  }
  let myp5 = new p5(sketch)
}

function startGraph(func, data) {
  var sketch = function(p){
  
    let graph

    p.setup = function (){
      p.createCanvas(p.windowWidth, p.windowHeight)

      graph = new Graph(p, 8, p.windowWidth - 200, p.windowHeight - 200)
      graph.connectNodesRandomly()
      graph.display()

      console.log(graph.nodes.map(n => n.connections))
    }
  }
  let myp5 = new p5(sketch) 
}

function startLinkedList() {
  var sketch = function(p){

    window.No = (val) => new Node(val)
  
    let list
    let nextBtn

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)

      let arr = [2,6,4,7,3,8,1,6,2]

      list = new LinkedList(p, canvasW, canvasH, false)
      list.setDisplayArrayFromArr(arr)

      nextBtn = p.createButton("Executar")
      nextBtn.class("p5Btn")
      //nextBtn.position(10, 400, 'relative')

      window.nextFunc = () => {}

      nextBtn.mousePressed(() => {
        window.nextFunc(list)
      })
    }
    
    p.draw = function (){
      p.background(255)
      list.display()
    }
  }
  let myp5 = new p5(sketch) 
}