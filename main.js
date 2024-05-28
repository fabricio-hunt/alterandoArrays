//push(): Este método adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array. Por exemplo:
let frutas = ['maçã', 'banana'];
frutas.push('laranja');
console.log(frutas); // ['maçã', 'banana', 'laranja']
 //pop(): Este método remove o último elemento de um array e retorna esse elemento. Este método altera o comprimento do array. Por exemplo:
 let frutas = ['maçã', 'banana', 'laranja'];
 let ultimaFruta = frutas.pop();
 console.log(ultimaFruta); // 'laranja'
 console.log(frutas); // ['maçã', 'banana']
 //shift(): Este método remove o primeiro elemento de um array e retorna esse elemento. Este método altera o comprimento do array. Por exemplo:
 let frutas = ['maçã', 'banana', 'laranja'];
 let primeiraFruta = frutas.shift();
 console.log(primeiraFruta); // 'maçã'
 console.log(frutas); // ['banana', 'laranja']
