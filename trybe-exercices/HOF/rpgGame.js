const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.trunc(Math.random() * (dragon.strength - 14)) + 15;
}

console.log(`The dragon hits: ${dragonDamage()} health points`);

const warriorDamage = () => {
  return Math.trunc(Math.random() * (warrior.strength - 14)) + 15;
}

console.log(`The warrior hits: ${warriorDamage()} health points`);

let actualMana = mage.mana;
const manaCalc = () => {
  if (mage.mana - 15 > 0) {
    actualMana = actualMana - 15;
  } else {
    actualMana = 'You have no mana left!';
  }
  return actualMana;
}

// console.log(manaCalc())

const mageTurn = {
  mageDamage: Math.trunc(Math.random() * (2 * mage.intelligence - mage.intelligence + 1)) + mage.intelligence,
  mageManaLeft: manaCalc()
}

// console.log(mageTurn)

const mageDamageAndManaSpent = () => {
  return `The mage hits: ${mageTurn.mageDamage} health points, he has ${mageTurn.mageManaLeft} mana points left.`
}

console.log(mageDamageAndManaSpent())
