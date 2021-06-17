// Crie uma função que receba um número e retorne seu fatorial.

let result = 1;
const fatorial = number => {
  for (let i = number; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(fatorial(10));