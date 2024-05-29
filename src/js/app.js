import Bowerman from './classes/Bowerman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Daemon from './classes/Undead';
import Undead from './classes/Zombie';
import Zombie from './classes/Daemon';

const bowerman = new Bowerman('Dima');
const swordsman = new Swordsman('Petya');
const magician = new Magician('Ivan');
const daemon = new Daemon('Emacs');
const undead = new Undead('Sam');
const zombie = new Zombie('Edik');

function friends() {}

friends(bowerman, swordsman, magician, daemon, undead, zombie);
