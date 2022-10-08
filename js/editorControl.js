let dsData = {
    listaLigada: {
        codeHeader: "(lista, dados) => {",
        func: startLinkedList,
        pageInfo: {
            title: "Lista Ligada"
        }
    },
    vetor: {
        codeHeader: "(vetor, dados) => {",
        func: startArray,
        pageInfo: {
            title: "Vetores",
            text: "Um vetor é uma sequência de variáveis de mesmo tipo e referenciadas por um nome único. As principais características de vetores em C são:<ul style='padding-left: 1rem'> <li>Os valores são acessíveis individualmente através de índices;</li><li>Os elementos do vetor ocupam posições contíguas de memória;</li><li>Os vetores têm tamanho predefinido e fixo;</li><li>Ao contrário de Pascal, o índice do primeiro elemento é 0(zero).</li></ul>",
            imageSrc: "./images/vetores.png",
            apiData: [
                {
                    name: "Parâmetro: vetor",
                    content: [
                        "Contém o objeto do tipo Array com os valores do vetor a ser manipulado.",
                        "O valor inicial pode ser alterado ao inserir os valores númericos inteiros separados por vírgula no campo \"valores\"."
                    ]
                },
                {
                    name: "Parâmetro: dados",
                    content: [
                        "Representa o objeto definido pelo usuário, onde os dados definidos são mantidos entre as execuções da função codificada.",
                        "O objeto possui as seguintes propriedades especiais para adicionais itens-controle da renderização:"
                    ]
                },
            ]
        }
    },
    grafo: {
        codeHeader: "(grafo) => {",
        func: startGraph,
        pageInfo: {
            title: "Grafos"
        }
    },
    arvore: {
        codeHeader: "(arvore, dados) => {",
        func: startTree,
        pageInfo: {
            title: "Árvores Binárias de Busca"
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
    window.customSketch = dsData[ds].func
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
    let inputs = document.getElementsByClassName("p5Input")

    for(let input of inputs)
        inputsDiv.appendChild(input)
}

function moveP5Controls(){
    let controlsDiv = document.getElementById("sketchControls")

    let btns = document.getElementsByClassName("p5Btn")
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