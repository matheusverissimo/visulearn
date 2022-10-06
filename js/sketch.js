let canvasContainer = document.getElementById("canvasContainer")
let canvasW = canvasContainer.offsetWidth
let canvasH = canvasContainer.offsetHeight - 90

function startArray(){
  var sketch = function(p){
    p.list = null

    p.setup = function() {
      p.createCanvas(canvasW, canvasH)
      let arr = [3,8,5,3,8,1,3,9,7,6]
      list = new Array_(p, arr, canvasW, canvasH, true)

      // Para setar funcao custom
      window.nextFunc = () => {}
      window.customData = {}
      window.setUpdateCustomFunc = false
      window.customFuncWasSet = false
      list.setCustomUpdateFunc(window.nextFunc, window.customData)
      
      //Para controlar se o update é automatico baseado no framerate
      window.autoUpdate = false
      let autoUpdateBtnc =  p.createButton('Atualizar automaticamente')
      autoUpdateBtnc.class("p5Btn")
      autoUpdateBtnc.mousePressed(()=> {
        window.autoUpdate = !window.autoUpdate
      })

      //Para chamar manualmente o update
      let controlledUpdateBtn = p.createButton('Próximo Passo')
      controlledUpdateBtn.class("p5Btn")
      controlledUpdateBtn.mousePressed(() => {
        list.nextStep()
      })

      //Para pegar input do usuario
      let vetorInputado = []
      let inputVetor = p.createInput('')
      inputVetor.class('p5Input')
      inputVetor.input(() => {
        let stringArr = inputVetor.value().split(",")
        let numArr = stringArr.map(s => parseInt(s)).filter(Boolean)
        if(numArr.length > 0)
          vetorInputado = numArr
        else 
          vetorInputado = []
        list = new Array_(p, vetorInputado, canvasW, canvasH, true)
      })

      p.frameRate(2)
    }
    
    p.draw = function() {
      //Para setar funcao custom
      if(window.setUpdateCustomFunc){
        list.setCustomUpdateFunc(window.nextFunc, window.customData)
        window.setUpdateCustomFunc = false
        window.customFuncWasSet = true
      }
      p.background(255)
      list.display()
      if(window.autoUpdate && window.customFuncWasSet)
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

function startTree(){

  var sketch = function(p){
    
    let tree
    
    p.setup = function (){
      p.createCanvas(canvasW, canvasH)
      p.frameRate(1)
      
      tree = new Tree(p, canvasW, canvasH)
      for(let i = 0; i < 20; i++){
        tree.addValue(p.floor(p.random(1, 50)))
      }

      let updateBtn = p.createButton("Próximo")
      updateBtn.class("p5Btn")

      window.nextFunc = () => {}
      window.customData = {}

      updateBtn.mousePressed(() => {
        window.nextFunc(tree.raiz, window.customData)
      })
    }
    
    p.draw = function (){

      

      p.background(255)
      tree.display()
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

function startGraph() {
  var sketch = function(p){
  
    let graph

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)

      let arr = [20,10,13,9,12,3,5]

      graph = new Graph(p, 8, canvasW, canvasH)
      for(let e of arr)
        graph.addNode(e)
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