/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.*/
console.clear();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var x = 0; x <= linha; x++) {
    minhaMatriz[x] = [];
    for (var i = 0; i <= coluna; i++) {
        minhaMatriz[x][i] = Math.floor(Math.random() * 10);
    }
}
console.log(minhaMatriz);
