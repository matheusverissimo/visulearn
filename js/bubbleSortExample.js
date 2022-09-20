(arr, data) => {
    data.selectedItemsIndex = []
    if(data.i < arr.length){
      if(data.j < arr.length - data.i - 1){
          data.selectedItemsIndex.push(data.j, data.j + 1)
          if(data.comparing) {
              data.comparing = false
              return
          }
          data.numberOfComparisons++
          if(arr[data.j] > arr[data.j + 1]){
              let tmp = arr[data.j]
              arr[data.j] = arr[data.j + 1]
              arr[data.j + 1] = tmp
          }
          data.j++
          data.comparing = true
      } else {
          data.j = 0
          data.i++
      }
    }
    else data.complete = true
}

let data = {
    i: 0, j: 0
}