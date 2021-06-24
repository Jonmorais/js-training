// Exercice 1

const employeesRegister = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_')
  return { fullName, email: `${email}@trybe.com`}
}
console.log(employeesRegister('Jonathan de Morais'))

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employeesRegister))

// Exercice 2

const check = (bet, result) => bet === result;

const raffle = (bet, callback) => {
  const result = Math.trunc(Math.random() * 6);
  return callback(bet, result) ? 'Congrats! You WIN!' : 'Try again :)';
}

console.log(raffle(4, check))

// Other solution
//const result = Math.trunc(Math.random() * 6);
// if(number === result) {
//   answer = 'Parabéns você ganhou';
// } else {
//   answer = 'Tente Novamente';
// }
// console.log(result);
// return answer;