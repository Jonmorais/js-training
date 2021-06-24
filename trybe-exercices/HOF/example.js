// First Example

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// Second Example

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// Scalability

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven);
repeat(3, isOdd);

// Other Example

let str = '';

const wakeUp = () => 'Acordando!!'
const coffee = () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'

const doingThings = (func) => func(str);

console.log(doingThings(wakeUp));
console.log(doingThings(coffee));
console.log(doingThings(sleep));
