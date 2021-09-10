// 1 - Dada uma matriz, transforme em um array.

const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui

  const xablau = (accumulator, element, index, array) =>
    accumulator.concat(element);

  const matrixArray = arrays.reduce(xablau, []);

  return matrixArray;
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
