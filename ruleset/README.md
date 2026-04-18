# D&D 5e Ruleset Reference

This folder contains the official D&D 5e ruleset (2024 edition) plus reference data for quick rule lookups during combat.

## Files

- **dnd5e-ruleset.md** — Quick reference guide for combat rules, conditions, actions, and 2024 updates
- **classes.json** — All 12 core classes with links to detailed data
- **spells.json** — Complete spell list (5e base ruleset)
- **monsters.json** — Monster/NPC stat blocks and abilities
- **LOOKUP.sh** — Quick command-line tool to search rules

## Usage

### Search the Rules
```bash
# Find rules about conditions
grep -i "blinded\|charmed\|frightened" dnd5e-ruleset.md

# Look up a spell
grep -i "fireball" spells.json

# Find a monster
grep -i "goblin\|dragon" monsters.json
```

### Quick Reference
For fast combat answers, check these sections in **dnd5e-ruleset.md**:
- Actions in Combat
- Conditions (2024 Edition)
- Damage & Healing
- Melee Attacks
- Spellcasting

## Sources

- **Official Rules**: D&D 5e Player's Handbook (2024), Dungeon Master's Guide (2024)
- **API Data**: [D&D 5e API](https://www.dnd5eapi.co/) — Community-maintained, comprehensive ruleset database
- **2024 Updates**: Included in dnd5e-ruleset.md

## Limitations

- API data covers 5e base ruleset (2014-2020)
- Some 2024-specific options may need manual addition
- For official rulings, refer to latest published books

## Integration with Combat HUD

The JSON files can be loaded into your combat HUD app for:
- Spell lookup and effect application
- Monster stat block display
- Condition tracking and effects
- Class ability reference

---

To update with latest data:
```bash
curl -s https://www.dnd5eapi.co/api/2014/spells > spells.json
curl -s https://www.dnd5eapi.co/api/2014/monsters > monsters.json
```
