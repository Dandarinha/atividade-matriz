/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.*/

console.clear();
let minhaMatriz: number [][] = []; 

let linha: number = 2; 
let coluna: number = 2; 
 
for (let x = 0; x <= linha; x++) {  
    minhaMatriz[x] = [];  
    for (let i =0; i <= coluna ; i++) {  
        minhaMatriz[x][i] = Math.floor(Math.random() * 10);  
    }  
}  
console.log(minhaMatriz); 














