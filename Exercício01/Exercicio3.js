// 3. Média dos elementos

let tempos = [12, 15, 10, 14, 13];
let somaTempos = 0;
for (let i = 0; i < tempos.length; i++) {
    somaTempos += tempos[i];
}
let media = somaTempos / tempos.length;
console.log("Média dos tempos:", media);
