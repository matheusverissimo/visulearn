let dsData = {
    listaLigada: {
        codeHeader: "(lista) => {",
        func: startLinkedList
    },
    vetor: {
        codeHeader: "(vetor, dados) => {",
        func: startArray
    },
    grafo: {
        codeHeader: "(grafo) => {",
        func: startGraph
    },
    arvore: {
        codeHeader: "(arvore, dados) => {",
        func: startTree
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

function configByDS(ds) {
    setCodeHeader(ds)
    setSketchFunc(ds)
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