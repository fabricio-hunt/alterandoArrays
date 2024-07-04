/*Método 1: Usando o método concat()
O método concat() é a maneira mais direta de concatenar dois ou mais arrays.

javascript
Copiar código
// Definindo dois arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenando os arrays
let arrayConcatenado = array1.concat(array2);

console.log(arrayConcatenado); // Saída: [1, 2, 3, 4, 5, 6]
Método 2: Usando o operador spread (...)
O operador spread (...) permite espalhar os elementos de um array em outro.

javascript
Copiar código
// Definindo dois arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenando os arrays usando spread
let arrayConcatenado = [...array1, ...array2];

console.log(arrayConcatenado); // Saída: [1, 2, 3, 4, 5, 6]
Método 3: Usando um loop
Você também pode concatenar arrays usando um loop, embora essa abordagem seja menos comum.

javascript
Copiar código
// Definindo dois arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenando os arrays usando um loop
for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
}

console.log(array1); // Saída: [1, 2, 3, 4, 5, 6]
Método 4: Usando o método Array.prototype.push.apply()
Esse método usa a função apply() para concatenar arrays.

javascript
Copiar código
// Definindo dois arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenando os arrays usando apply
Array.prototype.push.apply(array1, array2);

console.log(array1); // Saída: [1, 2, 3, 4, 5, 6]
Exemplo prático com mais de dois arrays
Vamos concatenar três arrays para mostrar como esses métodos funcionam com mais de dois arrays.

javascript
Copiar código
// Definindo três arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Usando concat()
let concatenado1 = array1.concat(array2, array3);
console.log(concatenado1); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando spread
let concatenado2 = [...array1, ...array2, ...array3];
console.log(concatenado2); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando loop
let concatenado3 = [...array1];
for (let i = 0; i < array2.length; i++) {
    concatenado3.push(array2[i]);
}
for (let i = 0; i < array3.length; i++) {
    concatenado3.push(array3[i]);
}
console.log(concatenado3); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando apply
let concatenado4 = [...array1];
Array.prototype.push.apply(concatenado4, array2);
Array.prototype.push.apply(concatenado4, array3);
console.log(concatenado4); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Esses são alguns dos métodos mais comuns para concatenar arrays em JavaScript. */