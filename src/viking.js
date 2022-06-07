// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let vikingHit = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return vikingHit;
  }

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let saxonHit = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return saxonHit;
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings have won the war of the century!';
    }
  }

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
}

// tests - <3
const myWar = new War();
myWar.addViking(new Viking('Freya', 200, 100));
myWar.addViking(new Viking('Ivor', 200, 100));

console.log(myWar.vikingArmy);
console.log(myWar.vikingArmy[0].battleCry());

myWar.addSaxon(new Saxon(200, 100));
myWar.addSaxon(new Saxon(200, 100));

console.log(myWar.saxonArmy);
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.vikingArmy[0].battleCry());
console.log(myWar.saxonArmy);
console.log(myWar.saxonAttack());
console.log(myWar.showStatus());
console.log(myWar.vikingArmy[0].battleCry());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
