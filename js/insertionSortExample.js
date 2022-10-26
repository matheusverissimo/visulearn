(vetor, dados) => {
    dados.selectedItemsIndex = []
    if(dados.i >= vetor.length){
      dados.complete = true
      return
    }

    if (!dados.midsorting) {
      dados.j = dados.i;
    }

    if (dados.j > 0 && vetor[dados.j] < vetor[dados.j-1]) {
      dados.selectedItemsIndex.push(dados.j, dados.j - 1)
      dados.numberOfComparisons++
      dados.midsorting = true;

      var temp = vetor[dados.j-1];
      vetor[dados.j-1] = vetor[dados.j];
      vetor[dados.j] = temp;
      
      dados.j--;
    } else {
      dados.midsorting = false;
    }

    if (!dados.midsorting) {
      dados.i++;
    }
}

let dados = {i: 1, j: 1, midsorting: false}