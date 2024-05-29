import Bowerman from '../classes/Bowerman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';
import Character from '../classes/Character';

test.each([
  [
    new Bowerman('Dima'),
    {
      name: 'Dima',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Swordsman('Petya'),
    {
      name: 'Petya',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Magician('Ivan'),
    {
      name: 'Ivan',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    new Undead('Sam'),
    {
      name: 'Sam',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Zombie('Edik'),
    {
      name: 'Edik',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Daemon('Emacs'),
    {
      name: 'Emacs',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
])('create new characters', (character, expected) => {
  expect(character).toEqual(expected);
});

test('error short name', () => {
  expect(() => {
    new Bowerman('T');
  }).toThrow();
});

test('error long name', () => {
  expect(() => {
    new Bowerman('Testestetse');
  }).toThrow();
});

test('error other type', () => {
  expect(() => {
    new Character('Max', 'admin');
  }).toThrow();
});

test('levelUp success', () => {
  const dima = new Bowerman('Dima');
  dima.health = 50;
  dima.levelUp();
  expect(dima).toEqual({
    name: 'Dima',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('levelUp death', () => {
  const dima = new Bowerman('Dima');
  dima.health = 0;
  expect(() => {
    dima.levelUp();
  }).toThrow();
});

test('damage 20 points', () => {
  const dima = new Bowerman('Dima');
  dima.damage(20);
  expect(dima.health).toBe(85);
});

test('damage death', () => {
  const dima = new Bowerman('Dima');
  dima.damage(200);
  expect(() => {
    dima.damage(200);
  }).toThrow();
});
