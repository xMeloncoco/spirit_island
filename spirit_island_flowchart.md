# Spirit Island Spirit Selection Flowchart

_Logic Document v2 - With Ranked Preferences, Result Tiers & Multiplayer_

## Overview

This document outlines the decision tree logic for helping players select a spirit based on their preferences. The flowchart guides users through ranked preference questions, produces tiered results with a shareable preference code, and optionally factors in multiplayer compatibility.

## User Flow Overview

- **Complexity Selection** → Single choice
- **Playstyle Ranking** → Rank all 5 in order of preference
- **Speed Preference** → Fast / Slow / Mixed
- **Mechanic Interests** → Select up to 3 mechanics
- **Results Screen** → Shows Best Matches, Close Runner-Ups, and Preference Code
- **\[Optional\] Narrow Down** → Element preference or additional filters
- **\[Optional\] Multiplayer Mode** → Compare with other players' codes or preferences

## Section 1: Complexity Preference

### Question: "How much complexity are you comfortable with?"

Single selection. This is the primary filter that eliminates ~60% of spirits.

| **Level** | **Code** | **Description** | **Spirit Pool** |
| --- | --- | --- | --- |
| Beginner | B   | Simple mechanics, straightforward strategy | River, Lightning, Shadows, Vital Strength, Earth |
| Intermediate | I   | More moving parts, requires planning ahead | Thunderspeaker, Ocean, Green, BoDaN, Keeper, Stone, Wildfire, Fangs |
| Advanced | A   | Complex decision trees, high skill ceiling | Serpent, Starlight, Lure, Memory, Fractured, Finder, Shroud, Many Minds, Volcano, Downpour, etc. |

## Section 2: Ranked Playstyle Preference

### Question: "Rank these playstyles from most to least appealing:"

User drags/clicks to rank all 5 options. The ranking determines weighted scoring for spirit matching.

| **Playstyle** | **Code** | **Description** |
| --- | --- | --- |
| Aggressive | G   | Destroy invaders quickly, deal high damage, remove threats before they escalate |
| Defensive | D   | Protect the land and Dahan, prevent builds and ravages, sustain through damage |
| Control | C   | Manipulate invader/Dahan placement, redirect threats, deny actions through positioning |
| Fear-focused | F   | Generate terror, win through fear victory, psychological warfare |
| Support | S   | Enhance other spirits, provide energy/cards, enable combos (solo: self-sustain) |

### Scoring System

Each spirit has 1-3 tagged playstyles. Score based on user's ranking:

- Rank 1 (favorite): +5 points per matching playstyle
- Rank 2: +3 points per matching playstyle
- Rank 3: +1 point per matching playstyle
- Rank 4-5: +0 points (neutral, doesn't penalize)

**Example:** User ranks Aggressive #1, Control #2. Ocean (tagged: Control, Aggressive) scores 5+3 = 8 points from playstyle alone.

### Playstyle Code Format

The ranking is encoded as a 5-letter string representing the order. Example: "GCDSF" means Aggressive > Control > Defensive > Support > Fear-focused

## Section 3: Speed Preference

### Question: "Do you prefer acting before or after invaders?"

| **Speed** | **Code** | **Description** |
| --- | --- | --- |
| Fast | F   | Act before invaders - prevent damage proactively, requires good prediction |
| Slow | S   | Act after invaders - bigger effects, cleanup and retaliation, reactive play |
| Mixed | M   | Balanced toolkit - flexible timing, adaptable to situation |

## Section 4: Preferred Mechanics

### Question: "Which mechanics interest you most? (Select up to 3)"

| **Mechanic** | **Code** | **Description** | **Example Spirits** |
| --- | --- | --- | --- |
| Direct Damage | DD  | Destroying invaders through damage powers | Lightning, Wildfire, Volcano, Fangs |
| Area Denial | AD  | Making lands unsafe for invaders | Wildfire, Volcano, Shroud, Lure |
| Push/Gather | PG  | Moving invaders and Dahan between lands | River, Ocean, Green, Finder |
| Defense/Protect | DP  | Preventing damage to lands/Dahan | Earth, Vital Strength, Stone, Keeper |
| Fear Generation | FG  | Creating fear to advance terror levels | Shadows, BoDaN, Many Minds, Shroud |
| Dahan Synergy | DS  | Empowering or working with the Dahan | Thunderspeaker, Vital Strength, Keeper |
| Card Manipulation | CM  | Drawing, recycling, or playing extra cards | Starlight, Memory, Shifting Memory |
| Energy Ramp | ER  | Building large energy reserves over time | Serpent, Earth, Stone |
| Presence Spread | PS  | Rapidly expanding across the board | Green, Ocean, Many Minds |
| Blight Management | BM  | Removing, preventing, or using blight | Vital Strength, Wildfire, Fractured |
| Isolate/Strand | IS  | Cutting off invader movement or builds | Finder, Lure, Shroud |
| Token Synergy | TS  | Using beasts, disease, strife, wilds, etc. | Fangs, Many Minds, Keeper, Vengeance |
| Innate Scaling | IN  | Strong innate powers that grow with elements | Lightning, Ocean, Earth, Serpent |

**Mechanic Code Format:** Comma-separated list of selected codes. Example: "DD,FG,IN" for Direct Damage + Fear Generation + Innate Scaling

## Section 5: Preference Code System

Each user's choices generate a unique preference code that can be shared and compared. This enables multiplayer coordination without both players needing to be present.

### Code Structure

**Format:** \[Complexity\]-\[Playstyle Ranking\]-\[Speed\]-\[Mechanics\]

**Example Code:** I-GCDSF-F-DD,FG,IN

- **I** \= Intermediate complexity
- **GCDSF** \= Aggressive > Control > Defensive > Support > Fear
- **F** \= Prefers Fast powers
- **DD,FG,IN** \= Interested in Direct Damage, Fear Gen, Innate Scaling

### Code Validation

- Complexity: Must be B, I, or A
- Playstyle: Must be exactly 5 characters containing G, D, C, F, S each once
- Speed: Must be F, S, or M
- Mechanics: 1-3 valid mechanic codes, comma-separated

### Optional Extended Code (for future use)

If element preferences are added later:

**Extended Format:** \[Base Code\]-\[Element Codes\]

**Example:** I-GCDSF-F-DD,FG,IN-SN,FR,AR (Sun, Fire, Air elements)

## Section 6: Results Screen Design

### Result Tiers

Spirits are scored and displayed in tiers:

| **Tier** | **Score Range** | **Display** |
| --- | --- | --- |
| Best Matches | Top 1-2 scores | Large cards with portrait, name, tagline, key mechanics, elements |
| Close Runner-Ups | Within 20% of top | Medium cards with portrait, name, brief description |
| Other Options | Remaining valid | Collapsed list, expandable ("Show X more spirits") |

### Results Screen Elements

- **Your Preference Code:** Displayed prominently with copy button
- **Best Matches:** 1-2 spirits with full details
- **Close Runner-Ups:** 2-4 spirits with summary
- **"Narrow It Down" Button:** Opens additional filtering options
- **"Playing with Others?" Button:** Opens multiplayer mode

### "Narrow It Down" Options

When clicked, shows additional optional filters:

- **Element preference:** "Do any of these elements resonate with you?" (single select)
- **Expansion filter:** "Which expansions do you own?" (can exclude spirits)
- **Avoid mechanic:** "Any mechanics you want to avoid?"
- **Random tiebreaker:** "Just pick one for me!"

## Section 7: Multiplayer Considerations

### Multiplayer Flow

When user clicks "Playing with Others?", show:

- **"How many players?"** (2, 3, 4, 5, 6)
- **For each other player: "Do they know what spirit they're playing?"**
  - **Yes →** "Which spirit?" (dropdown/search)
  - **No, but they have a code →** "Enter their preference code:" (text input)
  - **No →** "What playstyle do they generally prefer?" (single select from 5 playstyles)

### Multiplayer Scoring Adjustments

**Element Overlap Scoring:**

Based on known spirits or predicted elements from preference codes:

- **1-2 shared elements:** +2 bonus ("Good synergy - can share element-granting powers")
- **0 shared elements:** +0 ("Different paths - less card competition")
- **3+ shared elements:** \-1 ("High overlap - may compete for same minor powers")

**Playstyle Complementarity:**

- **Complementary pairs:** +1 (Defensive + Aggressive, Control + Support, etc.)
- **Same playstyle:** +0 (neutral - can work, but less variety)

**Coverage Bonus:**

In 3+ player games, bonus for spirits that fill gaps:

- No one has strong defense? Defensive spirits get +2
- No fear generation? Fear-focused spirits get +2

### Multiplayer Results Display

Results show additional info:

- **Synergy indicator:** "Great pairing with \[Spirit\]" or "Fills gap in team"
- **Element overlap visual:** Show shared elements with other players' spirits
- **Team coverage:** "Your team covers: Defense ✓, Damage ✓, Fear ✗, Control ✓"

## Section 8: Complete Scoring Algorithm

### Score Calculation

For each spirit that passes the complexity filter:

| **Factor** | **Max Points** | **Calculation** |
| --- | --- | --- |
| Playstyle Match | 15  | Rank 1: +5, Rank 2: +3, Rank 3: +1 (per tagged playstyle) |
| Speed Match | 3   | Exact match: +3, Mixed matches any: +2 |
| Mechanic Match | 9   | +3 per matching mechanic (max 3 selections) |
| Multiplayer Synergy | 4   | Element overlap +/-2, Complementary +1, Coverage +2 |

**Maximum possible score:** 31 points (solo) or 35 points (multiplayer)

### Tier Thresholds

- **Best Matches:** Highest score(s), or all within 2 points of highest
- **Close Runner-Ups:** Within 80% of highest score
- **Other Options:** Remaining spirits at this complexity

## Section 9: Spirit Data Structure

Each spirit in the database needs these fields for the algorithm:

{ id: "lightning", name: "Lightning's Swift Strike", complexity: "B", // B, I, or A playstyles: \["G"\], // Array of: G, D, C, F, S speed: "F", // F, S, or M mechanics: \["DD", "IN"\], // Array of mechanic codes elements: \["FR", "AR"\], // Primary elements for multiplayer comparison portrait: "/images/lightning.png", tagline: "Fast striker that destroys invaders before they act.", description: "High damage, fast powers, simple decisions. Perfect for players who want to kill things quickly.", expansion: "base" // For filtering by owned content }

### Element Code Reference

| **Element** | **Code** | **Element** | **Code** |
| --- | --- | --- | --- |
| Sun | SN  | Moon | MN  |
| Fire | FR  | Air | AR  |
| Water | WT  | Earth | ET  |
| Plant | PL  | Animal | AN  |

## Section 10: Implementation Checklist

- Build spirit database with all required fields
- Create UI for ranked playstyle selection (drag-and-drop or click-to-rank)
- Implement scoring algorithm
- Build preference code generator and parser
- Design results screen with tiers
- Add "Narrow It Down" optional filters
- Implement multiplayer mode with code comparison
- Test with real players and refine weights

_Document Version: 2.0 | Last Updated: January 2026_