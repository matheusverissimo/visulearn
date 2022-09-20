(arr, data) => {
    data.selectedItemsIndex = []
    if(data.i >= arr.length){
      data.complete = true
      return
    }

    if (!data.midsorting) {
      data.j = data.i;
    }

    if (data.j > 0 && arr[data.j] < arr[data.j-1]) {
      data.selectedItemsIndex.push(data.j, data.j - 1)
      data.numberOfComparisons++
      data.midsorting = true;

      var temp = arr[data.j-1];
      arr[data.j-1] = arr[data.j];
      arr[data.j] = temp;
      
      data.j--;
    } else {
      data.midsorting = false;
    }

    if (!data.midsorting) {
      data.i++;
    }
}

let data = {i: 1, j: 1, midsorting: false}