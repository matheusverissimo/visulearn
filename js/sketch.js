let canvasContainer = document.getElementById("canvasContainer")
let canvasW = canvasContainer.offsetWidth
let canvasH = canvasContainer.offsetHeight - 45

function startArray(){
  var sketch = function(p){
    let array
    p.setup = function() {
      canvasH -= 35
      p.createCanvas(canvasW, canvasH)
      let arr = [3,8,5,3,8,1,3,9,7,6]
      array = new Array_(p, arr, canvasW, canvasH, true)

      // Para setar funcao custom
      window.nextFunc = () => {}
      window.customData = {}
      
      let autoUpdateBtnc =  p.createButton('Executar automaticamente')
      autoUpdateBtnc.class("placeBot")
      autoUpdateBtnc.mousePressed(()=> {
        if(p.isLooping()){
          p.noLoop()
          console.log("a")
          autoUpdateBtnc.html('Executar automaticamente')
        }
        else{
          p.loop()
          console.log("b")
          autoUpdateBtnc.html('Parar execução')
        }
      })

      //Para chamar manualmente o update
      let controlledUpdateBtn = p.createButton('Executar')
      controlledUpdateBtn.class("placeBot")
      controlledUpdateBtn.mousePressed(() => {
        window.nextFunc(array.array, window.customData)
        array.updateListItems()
        p.redraw()
      })

      //Para ordenar automaticamente
      let unsortBtn = p.createButton('Desordenar')
      unsortBtn.class('placeTop')
      unsortBtn.mousePressed(() => {
        array.shuffle()
        p.redraw()
      })

      //Para pegar input do usuario
      let vetorInputado = []
      let inputVetor = p.createInput()
      inputVetor.class('placeTop')
      inputVetor.attribute('placeholder', 'Valores')
      inputVetor.input(() => {
        let stringArr = inputVetor.value().split(",")
        let numArr = stringArr.map(s => parseInt(s)).filter(Boolean)
        if(numArr.length > 0)
          vetorInputado = numArr
        else 
          vetorInputado = []
        array = new Array_(p, vetorInputado, canvasW, canvasH, true)
        p.redraw()
      })

      //Para ordenar automaticamente
      let sortBtn = p.createButton('Ordenar')
      sortBtn.class('placeTop')
      sortBtn.mousePressed(() => {
        array.sort()
        p.redraw()
      })

      p.frameRate(3)
      p.noLoop()
    }
    
    p.draw = function() {
      p.background(255)
      if(p.isLooping()){
        window.nextFunc(array.array, window.customData)
        array.updateListItems()
      }
      array.display()
    }
  }

  let myp5 = new p5(sketch)
}

function startTree(){
  canvasH -= 35
  var sketch = function(p){

    //Define a função para criar novo nó
    window.No = (valor) => {
      return new TreeNode(p, valor)
    }
    
    let tree
    // array pra inicializar a arvore por default
    let initArray = [30,10,42,5,7,23,14,9,34,22,28,19,11,48,38,39,44,33]
    
    p.setup = function (){
      p.createCanvas(canvasW, canvasH)
      
      tree = new Tree(p, canvasW, canvasH)
      for(let i = 0; i < initArray.length; i++){
        tree.addValue(initArray[i])
      }

      let valor

      let removerBtn = p.createButton('Remover')
      removerBtn.class('placeTop')
      removerBtn.mousePressed(() => {
        tree.remove(valor)
        p.redraw()
      })

      // Valor a ser inserido ou removido via controle
      let inserirInput = p.createInput()
      inserirInput.class('placeTop')
      inserirInput.attribute('placeholder', 'Valor')
      inserirInput.input(() => {
        valor = parseInt(inserirInput.value())
      })

      // Botao para inserir valor do input
      let inserirBtn = p.createButton('Inserir')
      inserirBtn.class('placeTop')
      inserirBtn.mousePressed(() => {
        tree.addValue(valor)
        p.redraw()
      })

      //botao para executar codigo passado pelo usuario
      let updateBtn = p.createButton("Executar")
      updateBtn.class("placeBot")

      window.nextFunc = () => {}
      window.customData = {}

      updateBtn.mousePressed(() => {
        window.nextFunc(tree.raiz, window.customData)
        p.redraw()
      })

      p.noLoop()
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
    }
  }
  let myp5 = new p5(sketch)
}

function startGraph() {
  canvasH -= 35
  var sketch = function(p){
  
    let graph

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)

      let arr = [20,21,12,9,12,3,5,7]

      graph = new Graph(p, canvasW, canvasH)
      for(let e of arr)
        graph.addNode(e)
      graph.connectNodesRandomly()

      //Funcao para criar um novo nó e adiciona-lo no grafo
      window.NovoNo = (valor) => {
        graph.addNode(valor)
      }

      //Para pegar input do usuario
      let vetorInputado = []
      let inputVetor = p.createInput()
      inputVetor.class('placeTop')
      inputVetor.attribute('placeholder', 'Nós')
      inputVetor.input(() => {
        let stringArr = inputVetor.value().split(",")
        let numArr = stringArr.map(s => parseInt(s)).filter(Boolean)
        if(numArr.length > 0)
          vetorInputado = numArr
        else 
          vetorInputado = []
        graph.nodes = []
        for(let e of vetorInputado)
        graph.addNode(e)
        graph.display()
        p.redraw()
      })

      //Para conectar os nós aleatóriamente
      let conectarNosBtn =  p.createButton('Conectar nós')
      conectarNosBtn.class("placeTop")
      conectarNosBtn.mousePressed(()=> {
        graph.connectNodesRandomly()
        p.redraw()
      })

      //botao para executar codigo passado pelo usuario
      let updateBtn = p.createButton("Executar")
      updateBtn.class("placeBot")

      window.nextFunc = () => {}
      window.customData = {}

      updateBtn.mousePressed(() => {
        window.nextFunc(graph.nodes, window.customData)
        p.redraw()
      })
    }

    p.draw = function (){
      p.background(255)
      graph.display()
    }
  }
  let myp5 = new p5(sketch) 
}

function startLinkedList() {
  canvasH -= 35
  var sketch = function(p){

    window.No = (val) => new Node(val)
  
    let list
    let nextBtn

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)

      let arr = [2,6,4,7,3,8,1,6,2]
      let valor

      list = new LinkedList(p, canvasW, canvasH, false)
      list.setDisplayArrayFromArr(arr)

      let inserirBtn = p.createButton('Inserir')
      inserirBtn.class('placeTop')
      inserirBtn.mousePressed(() => {
        list.inserirNaCauda(valor)
        p.redraw()
      })

      // Valor a ser inserido ou removido via controle
      let valInput = p.createInput()
      valInput.class('placeTop')
      valInput.attribute('placeholder', 'Valor')
      valInput.input(() => {
        valor = valInput.value()
      })

      let removerBtn = p.createButton('Remover')
      removerBtn.class('placeTop')
      removerBtn.mousePressed(() => {
        list.remover(valor)
        p.redraw()
      })

      nextBtn = p.createButton("Executar")
      nextBtn.class("placeBot")

      window.nextFunc = () => {}
      window.customData = {}

      nextBtn.mousePressed(() => {
        window.nextFunc(list, customData)
        p.redraw()
      })

      let vetorInputado = []
      let inputVetor = p.createInput()
      inputVetor.class('placeBot')
      inputVetor.attribute('placeholder', 'Valores')
      inputVetor.input(() => {
        let stringArr = inputVetor.value().split(",")
        let numArr = stringArr.map(s => parseInt(s)).filter(Boolean)
        if(numArr.length > 0)
          vetorInputado = numArr
        else 
          vetorInputado = []
        list.setDisplayArrayFromArr(vetorInputado)
        p.redraw()
      })

      p.noLoop()
    }
    
    p.draw = function (){
      p.background(255)
      list.display()
    }
  }
  let myp5 = new p5(sketch) 
}

function startDoubleLinkedList() {
  canvasH -= 35
  var sketch = function(p){

    window.No = (val) => new Node(val)
  
    let list
    let nextBtn

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)

      let arr = [2,6,4,8,6,2]
      let val

      list = new LinkedList(p, canvasW, canvasH, true)
      list.setDisplayArrayFromArr(arr)

      let inserirBtn = p.createButton('Inserir')
      inserirBtn.class('placeTop')
      inserirBtn.mousePressed(() => {
        list.inserirNaCauda(valor)
        p.redraw()
      })

      // Valor a ser inserido ou removido via controle
      let valInput = p.createInput()
      valInput.class('placeTop')
      valInput.attribute('placeholder', 'Valor')
      valInput.input(() => {
        valor = valInput.value()
      })

      let removerBtn = p.createButton('Remover')
      removerBtn.class('placeTop')
      removerBtn.mousePressed(() => {
        list.remover(valor)
        p.redraw()
      })

      nextBtn = p.createButton("Executar")
      nextBtn.class("placeBot")

      window.nextFunc = () => {}
      window.customData = {}

      nextBtn.mousePressed(() => {
        window.nextFunc(list, customData)
        p.redraw()
      })

      let vetorInputado = []
      let inputVetor = p.createInput()
      inputVetor.class('placeBot')
      inputVetor.attribute('placeholder', 'Valores')
      inputVetor.input(() => {
        let stringArr = inputVetor.value().split(",")
        let numArr = stringArr.map(s => parseInt(s)).filter(Boolean)
        if(numArr.length > 0)
          vetorInputado = numArr
        else 
          vetorInputado = []
        list.setDisplayArrayFromArr(vetorInputado)
        p.redraw()
      })

      p.noLoop()
    }
    
    p.draw = function (){
      p.background(255)
      list.display()
    }
  }
  let myp5 = new p5(sketch) 
}

function startPilha(){
  canvasH -= 45
  var sketch = function(p){

    let pilha

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)
      let valor
      
      //API Publica da pilha
      window.inserir = (valor) => {
        pilha.inserir(valor)
      }

      window.remover = () => pilha.remover()

      // Controles superiores, para remover e enfileirar

      // Remove valor
      let removeValueBtn = p.createButton('Remover')
      removeValueBtn.class('placeTop')
      removeValueBtn.mousePressed(() => {
        pilha.remover()
        p.redraw()
      })

      // Valor a ser adicionado via controle
      let addValueInput = p.createInput()
      addValueInput.class('placeTop')
      addValueInput.attribute('placeholder', 'Valor')
      addValueInput.input(() => {
        valor = addValueInput.value()
      })

      // Botao para adicionar valor no input
      let addValueBtn = p.createButton('Inserir')
      addValueBtn.class('placeTop')
      addValueBtn.mousePressed(() => {
        pilha.inserir(valor)
        p.redraw()
      })

      // Botão para executar o método do usuário
      nextBtn = p.createButton("Executar")
      nextBtn.class("placeBot")
      
      window.nextFunc = () => {}
      window.customData = {}
      
      nextBtn.mousePressed(() => {
        window.nextFunc(customData)
        p.redraw()
      })

      let arr = [1, 2, 3, 4, 5, 6]
      pilha = new Pilha(p, arr, canvasW, canvasH)
      
      p.noLoop()
    }

    p.draw = function (){
      p.background(255)
      pilha.display()
    }
  }

  let myp5 = new p5(sketch)
}

function startFila(){
  canvasH -= 45
  var sketch = function(p){

    let fila

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)
      let valor
      
      //API Publica da pilha
      window.enfileirar = (valor) => {
        fila.enfileirar(valor)
      }

      window.desenfileirar = () => fila.desenfileirar()

      // Controles superiores, para enfileirar e desenfileirar

      // Remove valor
      let removeValueBtn = p.createButton('Desenfileirar')
      removeValueBtn.class('placeTop')
      removeValueBtn.mousePressed(() => {
        fila.desenfileirar()
        p.redraw()
      })

      // Valor a ser adicionado via controle
      let addValueInput = p.createInput()
      addValueInput.class('placeTop')
      addValueInput.attribute('placeholder', 'Valor')
      addValueInput.input(() => {
        valor = addValueInput.value()
      })

      // Botao para adicionar valor no input
      let addValueBtn = p.createButton('Enfileirar')
      addValueBtn.class('placeTop')
      addValueBtn.mousePressed(() => {
        fila.enfileirar(valor)
        p.redraw()
      })

      // Botão para executar o método do usuário
      nextBtn = p.createButton("Executar")
      nextBtn.class("placeBot")
      
      window.nextFunc = () => {}
      window.customData = {}
      
      nextBtn.mousePressed(() => {
        window.nextFunc(customData)
        p.redraw()
      })

      let arr = [1, 2, 3, 4, 5, 6]
      fila = new Fila(p, arr, canvasW, canvasH)
      
      p.noLoop()
    }

    p.draw = function (){
      p.background(255)
      fila.display()
    }
  }

  let myp5 = new p5(sketch)
}


function startTabelaHash(){
  canvasH -= 34
  var sketch = function(p){

    let hash

    p.setup = function (){
      p.createCanvas(canvasW, canvasH)
      
      let tableSize = 7

      hash = new HashTable(p, canvasW, canvasH)
      hash.setTableSize(tableSize)
      hash.setHashFunc((v)=>{return v % hash.table.length})
      let valor
      
      // Botao para remover valor do input
      let diminuirTabelaBtn = p.createButton('-')
      diminuirTabelaBtn.class('placeTop')
      diminuirTabelaBtn.mousePressed(() => {
        hash.setTableSize(--tableSize)
        p.redraw()
      })

      // Botao para remover valor do input
      let removeBtn = p.createButton('Remover')
      removeBtn.class('placeTop')
      removeBtn.mousePressed(() => {
        hash.remover(valor)
        p.redraw()
      })

      // Valor a ser inserido ou removido via controle
      let inserirInput = p.createInput()
      inserirInput.class('placeTop')
      inserirInput.attribute('placeholder', 'Valor a inserir')
      inserirInput.input(() => {
        valor = inserirInput.value()
      })

      // Botao para inserir valor do input
      let addValueBtn = p.createButton('Inserir')
      addValueBtn.class('placeTop')
      addValueBtn.mousePressed(() => {
        hash.inserir(valor)
        p.redraw()
      })

      // Botao para remover valor do input
      let aumentarTabelaBtn = p.createButton('+')
      aumentarTabelaBtn.class('placeTop')
      aumentarTabelaBtn.mousePressed(() => {
        hash.setTableSize(++tableSize)
        p.redraw()
      })

      //botao para executar codigo passado pelo usuario
      let updateBtn = p.createButton("Definir Função Hash")
      updateBtn.class("placeBot")

      window.nextFunc = () => {}
      window.customData = () => {}

      updateBtn.mousePressed(() => {
        hash.setHashFunc(window.nextFunc, window.customData)
        p.redraw()
      })

      p.noLoop()
    }

    p.draw = function (){
      p.background(255)
      hash.display()
    }
  }

  let myp5 = new p5(sketch)
}
