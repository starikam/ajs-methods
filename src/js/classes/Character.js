export default class Character {
  #types = [
    'Bowerman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Неверная длинна имени. Имя должно быть от 2 до 10 символов.');
    }

    if (this.#types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Неверный тип персонажа. Тип может быть только: ${this.#types.split(',')}`);
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень погибшего персонажа.');
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж погиб.');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
