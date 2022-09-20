(arr, data) => {
    data.selectedItemsIndex = []
    data.selectedItemsIndex.push(data.i)
    if(arr[data.i] == data.value)
        data.complete = true
    else data.i++
}

let data = {value: 15, i: 0}