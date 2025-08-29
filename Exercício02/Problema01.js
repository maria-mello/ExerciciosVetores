// Problema 1:
// Com base em uma lista de cinco estudantes, cada um identificado pelo número de matrícula e pela nota obtida, imprima os números de matrícula dos alunos cuja nota seja superior à média da turma.

const estudante = [
    { matricula: '2023001', nota: 7.5 },
    { matricula: '2023002', nota: 6.0 },
    { matricula: '2023003', nota: 8.0 },
    { matricula: '2023004', nota: 5.5 },
    { matricula: '2023005', nota: 9.0 }
  ];
  
  let soma = 0;
  for (let i = 0; i < estudante.length; i++) {
    soma += estudante[i].nota;
  }

  let media = soma / estudante.length;

  for (let i = 0; i < estudante.length; i++) {
    if (estudante[i].nota > media) {
      console.log(estudante[i].matricula);
    }
  }
 

