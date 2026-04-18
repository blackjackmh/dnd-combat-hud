/**
 * D&D 5e Ruleset Lookup Tool
 * Quick searches across spell, monster, and class data
 */

const fs = require('fs');
const path = require('path');

// Load JSON data
function loadData() {
  const dataDir = __dirname;
  return {
    spells: JSON.parse(fs.readFileSync(path.join(dataDir, 'spells.json'), 'utf8')),
    monsters: JSON.parse(fs.readFileSync(path.join(dataDir, 'monsters.json'), 'utf8')),
    classes: JSON.parse(fs.readFileSync(path.join(dataDir, 'classes.json'), 'utf8')),
  };
}

// Search spells
function searchSpells(query) {
  const data = loadData();
  return data.spells.results.filter(spell =>
    spell.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search monsters
function searchMonsters(query) {
  const data = loadData();
  return data.monsters.results.filter(monster =>
    monster.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search classes
function searchClasses(query) {
  const data = loadData();
  return data.classes.results.filter(cls =>
    cls.name.toLowerCase().includes(query.toLowerCase())
  );
}

// CLI usage
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('D&D 5e Ruleset Lookup');
  console.log('Usage: node lookup.js <type> <query>');
  console.log('Types: spell, monster, class');
  console.log('Example: node lookup.js spell fireball');
  process.exit(0);
}

const [type, ...queryParts] = args;
const query = queryParts.join(' ');

try {
  switch (type.toLowerCase()) {
    case 'spell':
      const spells = searchSpells(query);
      console.log(`\nSpells matching "${query}":`);
      spells.forEach(s => console.log(`  - ${s.name}`));
      break;
    case 'monster':
      const monsters = searchMonsters(query);
      console.log(`\nMonsters matching "${query}":`);
      monsters.forEach(m => console.log(`  - ${m.name}`));
      break;
    case 'class':
      const classes = searchClasses(query);
      console.log(`\nClasses matching "${query}":`);
      classes.forEach(c => console.log(`  - ${c.name}`));
      break;
    default:
      console.log(`Unknown type: ${type}`);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
