(value,  data) => {
    if(data.currentNode.value == value)
        data.complete = true
    else if(data.currentNode.value < value)
        data.currentNode = data.currentNode.right
    else if(data.currentNode.value > value)
        data.currentNode = data.currentNode.left
}