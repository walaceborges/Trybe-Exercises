// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui


  const xablau = ((accumulator, element, index, array) => {
      return accumulator + element;
  })

  const reduceA = names.reduce(xablau).split('');

  const filterA = reduceA.filter((element,index,array) => {
      return element.toLowerCase() === 'a';
  })

  return filterA.length;
}


console.log(containsA());
assert.deepStrictEqual(containsA(), 20);