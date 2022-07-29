/*# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.*/

const array1 = [74,-21,4,-3,500]
const array2 = ['teclado','mouse','monitor','gabinete','headphone']
const array3 = [99,'abacaxi',true,-2,'zebra', false]

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);

console.log('Imprima o primeiro item do primeiro array =',array1[1]);
console.log('Imprima o segundo item do segundo array =',array2[2]);
console.log('Imprima o terceiro item do terceiro array =',array3[3]);

console.log(array1.includes(74));
console.log(array3.includes(1));