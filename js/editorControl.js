let dsData = {
    listaLigada: {
        codeHeader: "(lista) => {",
        func: startLinkedList
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

function moveP5Btns(){
    let btns = document.getElementsByClassName("p5Btn")
    let btnsDiv = document.getElementById("sketchBtns")
    for(let node of btns)
        btnsDiv.appendChild(node)
}

window.onload = () => {
    let ds = getDS()
    configByDS(ds)
    window.customSketch()
    moveP5Btns()
}

function updateCustomFunc(){
    let textAreaValue = document.getElementById("textarea").value
    let prefix = dsData[getDS()].codeHeader
    let suffix = "}"
    let funcCode = prefix + textAreaValue + suffix
    window.nextFunc = eval(funcCode)
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
        update(element.value)
    }
}