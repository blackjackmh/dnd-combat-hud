# D&D 5e Ruleset Reference (2024 Edition)

## Quick Combat Rules

### Actions in Combat
- **Action**: Cast a spell, Attack, Dash, Disengage, Dodge, Help, Hide, Ready, Search, Use Object
- **Bonus Action**: Secondary action available most turns (varies by class/spell)
- **Reaction**: Triggered by specific events (opportunity attack, shield spell, etc.)
- **Free Interaction**: Draw/stow a weapon, open a door, etc. (one per turn)

### Ability Checks & Saves
- **DC (Difficulty Class)**: 10 (easy), 15 (moderate), 20 (hard), 25+ (near impossible)
- **Proficiency Bonus**: +2 (levels 1-4), +3 (5-8), +4 (9-12), +5 (13-16), +6 (17-20)
- **Advantage/Disadvantage**: Roll twice, take higher/lower

### Combat Flow
1. **Initiative**: d20 + DEX modifier
2. **Turns**: Each creature takes one turn in order
3. **End of Turn**: Movement, action, bonus action, reaction, free interaction
4. **Concentration**: Can maintain one spell requiring concentration at a time

### Damage & Healing
- **Damage**: Roll stated dice + modifiers
- **Healing**: Restore HP (max HP is cap, no overheal)
- **Death Saves**: At 0 HP, make CON saves (DC 10) on failed turn
  - 3 failures = death
  - 3 successes = stable (0 HP but unconscious)
  - Natural 20 = regain 1 HP
  - Natural 1 = two failures

### Conditions (2024 Edition)
- **Blinded**: Can't see, -4 to hit, auto-miss on attacks
- **Charmed**: Can't harm the charmer, advantage on WIS saves against charmer
- **Deafened**: Can't hear
- **Frightened**: Disadvantage on checks/saves while can see source, can't willingly move toward source
- **Grappled**: Speed 0, can't benefit from increases to speed
- **Incapacitated**: Can't act or react
- **Invisible**: Unseen, advantage on attacks, disadvantage against attacks on you
- **Paralyzed**: Incapacitated, automatically fail STR/DEX saves, attacks have advantage
- **Petrified**: Incapacitated, treated as nonmagical object, resistances/immunities don't apply
- **Poisoned**: Disadvantage on attack rolls and ability checks
- **Prone**: Can't move, disadvantage on melee attack, melee attacks within 5ft have advantage
- **Restrained**: Speed 0, disadvantage on DEX saves/attacks
- **Stunned**: Incapacitated, automatically fail STR/DEX saves, attacks have advantage
- **Unconscious**: Incapacitated, can't move/speak, unaware of surroundings, hits auto-crit if within 5ft

### Common Save DCs
- **Spell Save DC**: 8 + spell level + ability modifier
- **Ability DC**: 10 + proficiency + relevant ability modifier

### Melee Attacks
- **Reach**: 5 feet (normal), 10+ feet (reach weapon/ability)
- **Opportunity Attack**: Reaction when enemy leaves reach (no if incapacitated/surprised)

### Spellcasting
- **Spell Slots**: Limited per level, replenish on long rest
- **Cantrips**: At-will spells, no slots used
- **Concentration**: One active concentration spell at a time
- **Components**: Verbal (can't cast silenced), Somatic (need hand free), Material (specified cost)

### Resting
- **Short Rest**: 1 hour, regain some HP/resources
- **Long Rest**: 8 hours, regain all HP, slots, some class features

## 2024 Edition Updates

### Class Changes (PHB 2024)
- Revised ability score improvements/ASI timing
- Updated class features for balance
- New feat options and interactions

### Combat Changes
- Revised condition mechanics
- Updated action economy clarifications
- New multiattack rules

### Spellcasting Updates
- Revised spell durations and ranges
- Concentration spell clarifications
- Updated cantrip progression

## API Data Sources

Core ruleset data available at:
- Classes: `./classes.json`
- Spells: `./spells.json`
- Monsters: `./monsters.json`
- Conditions: Documented above
- Rules: See sections above

---

*Last updated: 2026-04-18*
*Source: D&D 5e Official Rules + D&D 5e API*
