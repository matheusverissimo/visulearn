(vetor, dados) => {
    if(dados.i < vetor.length){
      if(dados.j < vetor.length - dados.i - 1){
          if(vetor[dados.j] > vetor[dados.j + 1]){
              let tmp = vetor[dados.j]
              vetor[dados.j] = vetor[dados.j + 1]
              vetor[dados.j + 1] = tmp
          }
          dados.j++
      } else {
          dados.j = 0
          dados.i++
      }
    }
}

let data = {
    i: 0, j: 0
}