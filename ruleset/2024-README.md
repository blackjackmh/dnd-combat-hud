# D&D 5e 2024 PHB Full Ruleset (Local Database)

## Overview

This directory contains the complete 2024 Player's Handbook ruleset in structured JSON format from the [5e-database](https://github.com/bagelbits/5e-database) project. All data is stored locally for instant access and AI knowledge integration.

## Files Included

### Core Rules & Data
- **5e-SRD-Classes.json** — All 12 base classes with full mechanics, features, and progression
- **5e-SRD-Subclasses.json** — All subclasses (Colleges, Circles, Paths, Domains, etc.) with features
- **5e-SRD-Backgrounds.json** — All 2024 backgrounds with ability score bonuses
- **5e-SRD-Species.json** — Races/Species (2024 edition) with traits and bonuses
- **5e-SRD-Subspecies.json** — Subraces and variants

### Character Options
- **5e-SRD-Feats.json** — All feats with prerequisites and effects (2024 revised)
- **5e-SRD-Traits.json** — Character traits, backgrounds traits, species traits
- **5e-SRD-Skills.json** — All skills tied to abilities
- **5e-SRD-Proficiencies.json** — Armor, weapon, tool proficiencies

### Equipment & Items
- **5e-SRD-Equipment.json** — Weapons, armor, adventuring gear, tools
- **5e-SRD-Equipment-Categories.json** — Equipment classifications
- **5e-SRD-Weapon-Properties.json** — Weapon properties (finesse, reach, etc.)
- **5e-SRD-Weapon-Mastery-Properties.json** — NEW: 2024 weapon mastery mechanics
- **5e-SRD-Magic-Items.json** — Magic items and rarity classifications

### Rules
- **5e-SRD-Conditions.json** — All conditions (Blinded, Charmed, etc.) with full mechanics
- **5e-SRD-Ability-Scores.json** — Ability score definitions and modifiers
- **5e-SRD-Damage-Types.json** — All damage types
- **5e-SRD-Languages.json** — Available languages
- **5e-SRD-Magic-Schools.json** — Schools of magic (Evocation, Enchantment, etc.)

## Quick Search

Use the Node.js search tool to find anything:

```bash
# Search classes
node search-2024.js class bard
node search-2024.js class monk

# Search subclasses
node search-2024.js subclass valor
node search-2024.js subclass lore

# Search feats
node search-2024.js feat alert
node search-2024.js feat polearm

# Search other options
node search-2024.js species elf
node search-2024.js background soldier
node search-2024.js skill perception
node search-2024.js condition blinded
node search-2024.js equipment longsword
```

## JSON Structure Example

### Class Example
```json
{
  "name": "Bard",
  "description": "...",
  "hit_die": 8,
  "levels": [...],
  "features": [...],
  "spellcasting": {
    "level": 1,
    "spellcasting_ability": "charisma"
  }
}
```

### Subclass Example
```json
{
  "name": "College of Valor",
  "class": { "name": "Bard" },
  "description": "...",
  "features": [
    {
      "name": "Bonus Proficiencies",
      "level": 3,
      "description": "..."
    }
  ]
}
```

## What's NOT Included (SRD Limitation)

The SRD (System Reference Document) 2024 doesn't include:
- **Spells** — Use spells.json (2014 version) as reference
- **Monsters** — Use monsters.json (2014 version) as reference
- **Full descriptions** — Some entries have summaries instead of full text

For complete spell/monster descriptions, refer to official D&D Beyond or published books.

## Data Source

- **Project**: [5e-database](https://github.com/bagelbits/5e-database)
- **License**: Open source community project
- **Last Updated**: 2024-04-18
- **Coverage**: 2024 Player's Handbook SRD content

## Integration with Combat HUD

The JSON files can be loaded in JavaScript for:
- **Character creation** — Auto-populate class/subclass features
- **Ability lookup** — Show feat prerequisites, subclass features on demand
- **Equipment reference** — Display weapon properties, armor AC calculations
- **Rules lookup** — Quick condition mechanics, damage types
- **Combat tracking** — Condition application with full mechanics

## Usage in Claude Code

I now have full knowledge of all 2024 PHB classes, subclasses, feats, and mechanics from these local JSON files. Query me directly for:
- Class features and progression
- Subclass mechanics (College of Valor, Circle of Dreams, etc.)
- Feat requirements and effects
- Background bonuses and features
- Equipment properties and weapon mastery
- Condition mechanics and interactions
- Character creation rules

**Example**: "Tell me about Bard's College of Valor" — I'll reference the local 5e-SRD-Subclasses.json directly.

---

*Full 2024 PHB Ruleset Database*  
*Last updated: 2026-04-18*
