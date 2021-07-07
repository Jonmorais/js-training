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

const dragonAttack = () => {
  return Math.trunc(Math.random() * (dragon.strength - 14)) + 15;
}

// console.log(`The dragon hits: ${dragonDamage()} health points`);

const warriorAttack = () => {
  return Math.trunc(Math.random() * (warrior.strength - 14)) + 15;
}

// console.log(`The warrior hits: ${warriorDamage()} health points`);

// let actualMana = mage.mana;
// const manaCalc = () => {
//   if (mage.mana - 15 > 0) {
//     actualMana = actualMana - 15;
//   } else {
//     actualMana = 'You have no mana left!';
//   }
//   return actualMana;
// }

// console.log(manaCalc())

const mageMana = mage.mana;
const minDmg = mage.intelligence;
const maxDmg = minDmg * 2;
const mageAttack = (mage) => {
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.trunc((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

// const mageAttack = {
//   mageDamage: Math.trunc(Math.random() * (2 * mage.intelligence - mage.intelligence + 1)) + mage.intelligence,
//   mageManaLeft: manaCalc()
// }

// console.log(mageAttack)

// const mageDamageAndManaSpent = () => {
//   // return `The mage hits: ${mageTurn.mageDamage} health points, he has ${mageTurn.mageManaLeft} mana points left.`
// }

// console.log(mageDamageAndManaSpent())

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  monsterTurn: (monsterAttack) => {
    const dragonDamage = monsterAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};
