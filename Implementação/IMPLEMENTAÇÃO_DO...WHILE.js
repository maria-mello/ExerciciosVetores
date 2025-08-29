function bubbleSort(vetor) {
  let n = vetor.length;
  let trocado;

  do { // aq começa o loop
      trocado = false;

      for (let i = 0; i < n - 1; i++) {
          if (vetor[i] > vetor[i + 1]) {
              let auxiliar = vetor[i];
              vetor[i] = vetor[i + 1];
              vetor[i + 1] = auxiliar;
              trocado = true; // Marca que houve troca
          }
      }

      n--; 
  } while (trocado); // aq está o 'while' que verifica se precisa repetir

  return vetor;
}