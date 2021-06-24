// Crie uma função que receba um número e retorne seu fatorial.

let result = 1;
const fatorial = number => {
  for (let i = number; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(fatorial(10));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
  let phraseArray = phrase.split(' ');
  let longest = 0;
  let result = '';
  for (const word of phraseArray ) {
    if (word.length > longest) {
      longest = word.length;
      result = word;
    }
  }
  return result;    
}

console.log(longestWord('Olá, mundo: Qual será a maior palavra desta frase? Paralelepipedo ? Papagaio ? Amoeba ?'))