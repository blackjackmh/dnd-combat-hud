/**
 * D&D 5e 2024 Ruleset Search Tool
 * Searches local 2024 PHB ruleset files
 */

const fs = require('fs');
const path = require('path');

// Load JSON data
function loadData(filename) {
  try {
    const dataPath = path.join(__dirname, '2024', filename);
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (err) {
    console.error(`Error loading ${filename}:`, err.message);
    return null;
  }
}

// Search classes
function searchClasses(query) {
  const data = loadData('5e-SRD-Classes.json');
  if (!data || !data.data) return [];

  return data.data.filter(cls =>
    cls.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search subclasses (Colleges, Circles, etc.)
function searchSubclasses(query) {
  const data = loadData('5e-SRD-Subclasses.json');
  if (!data || !data.data) return [];

  return data.data.filter(sub =>
    sub.name.toLowerCase().includes(query.toLowerCase()) ||
    (sub.class && sub.class.name.toLowerCase().includes(query.toLowerCase()))
  );
}

// Search species/races
function searchSpecies(query) {
  const data = loadData('5e-SRD-Species.json');
  if (!data || !data.data) return [];

  return data.data.filter(species =>
    species.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search feats
function searchFeats(query) {
  const data = loadData('5e-SRD-Feats.json');
  if (!data || !data.data) return [];

  return data.data.filter(feat =>
    feat.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search backgrounds
function searchBackgrounds(query) {
  const data = loadData('5e-SRD-Backgrounds.json');
  if (!data || !data.data) return [];

  return data.data.filter(bg =>
    bg.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search equipment
function searchEquipment(query) {
  const data = loadData('5e-SRD-Equipment.json');
  if (!data || !data.data) return [];

  return data.data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search skills
function searchSkills(query) {
  const data = loadData('5e-SRD-Skills.json');
  if (!data || !data.data) return [];

  return data.data.filter(skill =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Search conditions
function searchConditions(query) {
  const data = loadData('5e-SRD-Conditions.json');
  if (!data || !data.data) return [];

  return data.data.filter(cond =>
    cond.name.toLowerCase().includes(query.toLowerCase())
  );
}

// CLI handler
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('D&D 5e 2024 Ruleset Search');
  console.log('Usage: node search-2024.js <type> <query>');
  console.log('\nTypes:');
  console.log('  class       - Search classes (Barbarian, Bard, etc.)');
  console.log('  subclass    - Search subclasses (College of Valor, Circle of Moon, etc.)');
  console.log('  species     - Search races/species');
  console.log('  feat        - Search feats');
  console.log('  background  - Search backgrounds');
  console.log('  equipment   - Search weapons/armor/items');
  console.log('  skill       - Search skills');
  console.log('  condition   - Search conditions');
  console.log('\nExamples:');
  console.log('  node search-2024.js class bard');
  console.log('  node search-2024.js subclass valor');
  console.log('  node search-2024.js feat alert');
  process.exit(0);
}

const [type, ...queryParts] = args;
const query = queryParts.join(' ');

try {
  switch (type.toLowerCase()) {
    case 'class':
      const classes = searchClasses(query);
      console.log(`\nClasses matching "${query}" (${classes.length} found):`);
      classes.forEach(c => {
        console.log(`\n  ${c.name}`);
        if (c.description) console.log(`    ${c.description.substring(0, 100)}...`);
      });
      break;

    case 'subclass':
      const subclasses = searchSubclasses(query);
      console.log(`\nSubclasses matching "${query}" (${subclasses.length} found):`);
      subclasses.forEach(s => {
        const parentClass = s.class ? s.class.name : 'Unknown';
        console.log(`\n  ${s.name} (${parentClass})`);
        if (s.description) console.log(`    ${s.description.substring(0, 100)}...`);
      });
      break;

    case 'species':
      const species = searchSpecies(query);
      console.log(`\nSpecies matching "${query}" (${species.length} found):`);
      species.forEach(s => console.log(`  - ${s.name}`));
      break;

    case 'feat':
      const feats = searchFeats(query);
      console.log(`\nFeats matching "${query}" (${feats.length} found):`);
      feats.forEach(f => {
        console.log(`\n  ${f.name}`);
        if (f.description) console.log(`    ${f.description.substring(0, 100)}...`);
      });
      break;

    case 'background':
      const backgrounds = searchBackgrounds(query);
      console.log(`\nBackgrounds matching "${query}" (${backgrounds.length} found):`);
      backgrounds.forEach(b => {
        console.log(`\n  ${b.name}`);
        if (b.description) console.log(`    ${b.description.substring(0, 100)}...`);
      });
      break;

    case 'equipment':
      const equipment = searchEquipment(query);
      console.log(`\nEquipment matching "${query}" (${equipment.length} found):`);
      equipment.forEach(e => {
        console.log(`  - ${e.name}${e.rarity ? ` (${e.rarity})` : ''}`);
      });
      break;

    case 'skill':
      const skills = searchSkills(query);
      console.log(`\nSkills matching "${query}" (${skills.length} found):`);
      skills.forEach(sk => {
        const ability = sk.ability_score ? sk.ability_score.name : 'Unknown';
        console.log(`  - ${sk.name} (${ability})`);
      });
      break;

    case 'condition':
      const conditions = searchConditions(query);
      console.log(`\nConditions matching "${query}" (${conditions.length} found):`);
      conditions.forEach(cond => {
        console.log(`\n  ${cond.name}`);
        if (cond.description) console.log(`    ${cond.description.substring(0, 100)}...`);
      });
      break;

    default:
      console.log(`Unknown type: ${type}`);
      console.log('Use "node search-2024.js" for available types.');
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
