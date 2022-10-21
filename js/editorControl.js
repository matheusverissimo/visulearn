let dsData = {
    listaLigada: {
        codeHeader: "(lista, dados) => {",
        func: "startLinkedList",
        pageInfo: {
            title: "Lista Ligada",
            text: "Uma lista é, na verdade, um conjunto de estruturas chamadas “nós”. </br> Um nó é uma estrutura que armazena a informação a ser gerenciada por uma lista. </br> Cada um dos nós de uma lista ligada, além de conhecer o valor que está sendo armazenado em seu interior, também conhece o elemento posterior a ele: por isso ela é chamada de “lista ligada”, pois os nós são amarrados com essa indicação de qual é o próximo nó. </br> Existem dois principais tipos de listas: ligadas e duplamente ligadas.",
            imageSrc: "./images/listaligada.png",
            apiData: [
                {
                    name: "Classe: Lista",
                    content: [
                        "Estrutura que representa uma lista ligada.",
                        "Sua única propriedade acessível é a \"cabeca\", que é uma referência para o primeiro nó."
                    ]
                },
                {
                    name: "Classe: Nó",
                    content: [
                        "Estrutura que contém um valor e possui uma referência para o próximo nó.",
                        "O seu valor está contido na propriedade \"valor\", e a referência para o próximo está na propriedade \"proximo\"",
                        "Para instânciar um novo nó, basta usar o método No(valor)."
                    ]
                },
                {
                    name: "Parâmetro: lista",
                    content: [
                        "Objeto que referencia a lista renderizada.",
                        "A lista pode ser alterada através do campo\"Valores\"."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
            ]
        }
    },
    listaDuplamenteLigada: {
        codeHeader: "(lista, dados) => {",
        func: "startDoubleLinkedList",
        pageInfo: {
            title: "Lista Duplamente Ligada",
            text: "A lista duplamente ligada, assim como a lista ligada simples, é uma estrutura baseada em nós, com a única diferença que cada nó contém uma referência também para o nó anterior. </br> Para ver mais sobre listas, <a href=\"editor.html?ds=listaLigada\">clique aqui</a>.",
            imageSrc: "./images/dlista.png",
            apiData: [
                {
                    name: "Classe: Lista",
                    content: [
                        "Estrutura que representa uma lista ligada.",
                        "Sua única propriedade acessível é a \"cabeca\", que é uma referência para o primeiro nó."
                    ]
                },
                {
                    name: "Classe: Nó",
                    content: [
                        "Estrutura que contém um valor e possui uma referência para o próximo nó.",
                        "O seu valor está contido na propriedade \"valor\", a referência para o próximo está na propriedade \"proximo\", e a referência para o anterior está na propriedade \"anterior\".",
                        "Para instânciar um novo nó, basta usar o método No(valor)."
                    ]
                },
                {
                    name: "Parâmetro: lista",
                    content: [
                        "Objeto que referencia a lista renderizada.",
                        "A lista pode ser alterada através do campo\"Valores\"."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
            ]
        }
    },
    vetor: {
        codeHeader: "(vetor, dados) => {",
        func: "startArray",
        pageInfo: {
            title: "Vetores",
            text: "Um vetor é uma sequência de variáveis de mesmo tipo e referenciadas por um nome único. As principais características de vetores em são:<ul style='padding-left: 1rem'> <li>Os valores são acessíveis individualmente através de índices;</li><li>Os elementos do vetor ocupam posições contíguas de memória;</li><li>Os vetores têm tamanho predefinido e fixo;</li><li>O índice do primeiro elemento é 0 (zero).</li></ul>",
            imageSrc: "./images/vetores.png",
            apiData: [
                {
                    name: "Parâmetro: vetor",
                    content: [
                        "Contém o objeto do tipo Array com os valores do vetor a ser manipulado. Como por exemplo: [2,8,5,3,8,1,3,9,7,6].",
                        "O acesso aos elementos se dá na seguinte forma: vetor[0] (Para acessar o primeiro elemento).",
                        "O valor inicial pode ser alterado ao inserir os valores númericos inteiros separados por vírgula no campo \"Valores\"."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
            ]
        }
    },
    grafo: {
        codeHeader: "(grafo, dados) => {",
        func: "startGraph",
        pageInfo: {
            title: "Grafos",
            text: "Um grafo consiste de um conjunto finito de nós (ou vértices), com um conjunto de pares não ordenados destes vértices para um grafo não-direcionado, ou um conjunto de pares ordenados para um grafo direcionado. Suas arestas podem ser valoradas ou não. Esse valor pode ser usado para representação de grandezas como peso, comprimento, etc. </br></br> Esse é grafo não-direcionado e de arestas não-valoradas.",
            imageSrc: "./images/grafo.png",
            apiData: [
                {
                    name: "Classe: Nó",
                    content: [
                        "Representa um nó do grafo. Possui as seguintes propriedades:",
                        "valor: Valor númerico contido no nó",
                        "vizinhos: Um vetor contendo os nós vizinhos (conectados).",
                        "visitado: booleano que indica se o nó foi visitado ou não. Destaca a cor do nó no grafo.",
                        "Método conectar(No): Conecta os dois nós, tornando-os vizinhos. Ex.: grafo[0].conectar(grafo[1])"
                    ]
                },
                {
                    name: "Parâmetro: grafo",
                    content: [
                        "Consiste em um vetor contendo todos os nó do grafo.",
                        "Um novo grafo pode ser gerado utilizando o campo \"Nós\", passando os valores dos nós separados por vírgula."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
                {
                    name: "Função: NovoNo(valor)",
                    content: [
                        "Função para adicionar um criar e adicionar no grafo um novo nó com o valor passado por parâmetro."
                    ]
                },
            ]
        }
    },
    arvore: {
        codeHeader: "(noRaiz, dados) => {",
        func: "startTree",
        pageInfo: {
            title: "Árvore Binária de Busca",
            text: "Uma árvore binária de busca é uma estrutura de dados baseada em nós, onde cada nó contém uma chave e duas subárvores à esquerda e a direita. Para todos nós, a chave da subárvore esquerda deve ser menor que a chave desse nó, e a chave da subárvore direita deve ser maior. Todas estas subárvores devem qualificar-se como árvores binárias de busca.",
            imageSrc: "./images/arvore.png",
            apiData:[
                {
                    name: "Classe: No",
                    content: [
                        "Representa um nó da árvore.",
                        "Possui três propriedades acessíveis: ",
                        "• valor: Contém o valor armazenado pelo nó.",
                        "• esquerda: Referência para o filho esquerdo desse nó.",
                        "• direita: Referência para o filho direito desse nó."
                    ]
                },
                {
                    name: "Parâmetro: noRaiz",
                    content: [
                        "Referência para o nó raiz da árvore renderizada."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
                {
                    name: "Função: No(valor)",
                    content: [
                        "Cria e retorna um novo nó.",
                        "Ex.: noRaiz.esquerdo = No(5)"
                    ]
                },
                {
                    name: "Método: No.adicionaFilho(valor)",
                    content: [
                        "Cria um nó com o valor passado por parâmetro e o insere conforme a regra da árvore binária de busca.",
                        "Ex.: noRaiz.adicionarFilho(5)"
                    ]
                },
            ]

        }
    },
    pilha: {
        codeHeader: "(dados) => {",
        func: "startPilha",
        pageInfo: {
            title: "Pilha",
            text: "Pilha é um tipo especial de lista linear em que todas as operações de inserção e remoção são realizadas pela mesma extremidade chamada topo. </br> Pilhas normalmente são implementadas usando vetores ou listas, acrescidos de seus principais métodos. </br> Alguns exemplos do uso de pilhas são, gerenciamento de memória, parsing de sintaxe e cálculo de expressões matemáticas (usando notação polonesa inversa).",
            imageSrc: "./images/pilha.png",
            apiData:[
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
                {
                    name: "Função: inserir(valor)",
                    content: [
                        "Insere o valor passado como parâmetro no topo da pilha."
                    ]
                },
                {
                    name: "Função: remover(valor)",
                    content: [
                        "Remove e retorna o valor no topo da pilha."
                    ]
                },
            ]

        }
    },
    fila: {
        codeHeader: "(dados) => {",
        func: "startFila",
        pageInfo: {
            title: "Fila",
            text: "Fila é uma estrutura de dados que apresenta o seguinte critério: sempre que houver uma remoção, o elemento removido é o que está na estrutura há mais tempo. (FIFO). </br> Filas podem ser implementadas usando vetores ou listas.",
            imageSrc: "./images/fila.png",
            apiData:[
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada."
                    ]
                },
                {
                    name: "Função: enfileirar(valor)",
                    content: [
                        "Adiciona o valor passado como parâmetro no fim da fila."
                    ]
                },
                {
                    name: "Função: remover(valor)",
                    content: [
                        "Remove e retorna o valor no início da fila."
                    ]
                },
            ]

        }
    },
    tabelaHash: {
        codeHeader: "(valor) => {",
        func: "startTabelaHash",
        pageInfo: {
            title: "Tabela de Dispersão (Tabela Hash)",
            text: "Uma tabela de dispersão (ou tabela hash), é uma estrutura de dados que funciona como um vetor de registros, onde cada registro possui um campo especial chamado de <strong>chave</strong>. </br> As chaves são convertidas em um indíce desse vetor, que será mapeado para identificar o local onde aquela chave será inserida. </br> Esse mapeamento de uma chave para um índice é conhecido como <strong>função de espalhamento</strong>. </br> As tabelas hash podem também armazenar listas ou vetores dentro de cada um dos índices, assim, suportando <strong>colisões de chaves</strong>.",
            imageSrc: "./images/hashtable.png",
            apiData:[
            ]

        }
    }
}

function getDS() {
    var url = new URL((window.location.href))
    return url.searchParams.get("ds")
}

function setCodeHeader(ds){
    let codeHeader = document.getElementById("codeHeader")
    codeHeader.innerText = dsData[ds].codeHeader
}

function setSketchFunc(ds){
    window.customSketch = window[dsData[ds].func]
}

function removeActiveBotoes(){
    let botoes = document.getElementsByClassName("list-group-item")
    for(let botao of botoes)
        botao.classList.remove("active")
}

function setApiTextInfo(index, botao){
    let ds = getDS()
    removeActiveBotoes()
    botao.classList.add("active")
    let apiTextInfoDiv = document.getElementById("apiTextInfo")
    apiTextInfoDiv.innerHTML = null
    for(let item of dsData[ds].pageInfo.apiData[index].content){
        let text = document.createElement("p")
        text.innerHTML = item
        apiTextInfoDiv.appendChild(text)
    }
}

function setDSInfo(ds){
    //setando titulo do accordion
    let titleDiv = document.getElementById("tituloDS")
    titleDiv.innerText = dsData[ds].pageInfo.title

    //setando conteudo textual
    let infoDiv = document.getElementById("textoDS")
    infoDiv.innerHTML = dsData[ds].pageInfo.text

    //setando imagem
    let imgDiv = document.getElementById("imgDS")
    imgDiv.setAttribute("src", dsData[ds].pageInfo.imageSrc)

    //setando as explicacoes da API
    let apiListDiv = document.getElementById("apiList")
    for(let [index, item] of dsData[ds].pageInfo.apiData.entries()){
        //criando os botoes da lista
        let botao = document.createElement("button")
        botao.setAttribute("type", "button")
        botao.classList.add("list-group-item", "list-group-item-action", "text-center")
        botao.innerText = item.name
        botao.onclick = function (){ setApiTextInfo(index, botao) }
        apiListDiv.appendChild(botao)
    }
}

function configByDS(ds) {
    setCodeHeader(ds)
    setSketchFunc(ds)
    setDSInfo(ds)
}

function moveP5Inputs(){
    let inputsDiv = document.getElementById("sketchInputs")
    let inputs = document.getElementsByClassName("placeTop")

    for(let input of inputs)
        inputsDiv.appendChild(input)
}

function moveP5Controls(){
    let controlsDiv = document.getElementById("sketchControls")

    let btns = document.getElementsByClassName("placeBot")
    for(let node of btns)
        controlsDiv.appendChild(node)
}

window.onload = () => {
    let ds = getDS()
    configByDS(ds)
    window.customSketch()
    moveP5Inputs()
    moveP5Controls()
}

function updateCustomFunc(){
    let funcTextAreaValue = document.getElementById("funcTextarea").value
    let prefix = dsData[getDS()].codeHeader
    let suffix = "}"
    let funcCode = prefix + funcTextAreaValue + suffix
    
    window.nextFunc = eval(funcCode)

    let dataTextAreaValue = document.getElementById("dataTextarea").value
    eval("window.customData = {" + dataTextAreaValue + "}")
    window.setUpdateCustomFunc = true
}

function tabEditor(element, event) {
    let code = element.value
    if(event.key == "Tab") {
        event.preventDefault()
        let before_tab = code.slice(0, element.selectionStart)
        let after_tab = code.slice(element.selectionEnd, element.value.length)
        let cursor_pos = element.selectionEnd + 1
        element.value = before_tab + "\t" + after_tab
        element.selectionStart = cursor_pos
        element.selectionEnd = cursor_pos
    }
}