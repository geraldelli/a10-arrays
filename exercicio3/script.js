// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const array1 = [79,25,-91,3,-12]
console.log('Array1 =',array1);
array1.push(44)
console.log('Copia Array1 =',array1);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const array2 = [56,4,-9,7,-87]
console.log('Array2 =',array2);
array2.pop()
console.log('Copia Array2 =',array2);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const array3 = [-34,-8,32,1,-24]
console.log('Array3 =',array3);
array3.splice(1,1)
console.log('Copia Array3 =',array3);


