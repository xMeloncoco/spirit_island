import React, { useState } from 'react';

const spiritData = {
  "Base Game": [
    {
      name: "Lightning's Swift Strike",
      complexity: "Low",
      elements: ["Fire", "Air"],
      description: "A spirit of sudden, destructive power. Lightning destroys with fierce joy, excelling at eliminating Towns and Cities but struggling to maintain its pace.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Swiftness of Lightning", text: "For each Air you have, you may use 1 Slow Power as if it were Fast." },
      innate: { name: "Thundering Destruction", text: "From a Sacred Site, Range 1. At 2 Fire + 1 Air: 1 Damage. At 3 Fire + 2 Air: Destroy 1 Town. At 4 Fire + 3 Air + 1 Water: Destroy 1 Town or City." },
      startingCards: [
        { name: "Harbingers of the Lightning", cost: 0, speed: "Slow", elements: ["Fire", "Air"], effect: "Push up to 2 Dahan. 1 Fear if you pushed any Dahan into a land with Town/City." },
        { name: "Lightning's Boon", cost: 1, speed: "Fast", elements: ["Fire", "Air"], effect: "Target Spirit may use up to 2 Slow Powers as if they were Fast Powers this turn." },
        { name: "Shatter Homesteads", cost: 2, speed: "Slow", elements: ["Fire", "Air"], effect: "1 Fear. Destroy 1 Town." },
        { name: "Raging Storm", cost: 3, speed: "Slow", elements: ["Fire", "Air", "Water"], effect: "1 Damage to each Invader." }
      ],
      playstyle: "Aggressive destroyer focusing on Towns and Cities. High card plays but energy-hungry. Can make Slow powers Fast with Air elements."
    },
    {
      name: "River Surges in Sunlight",
      complexity: "Low",
      elements: ["Sun", "Water"],
      description: "A spirit of the flowing river, bringing life and washing away obstacles. River controls the battlefield through pushing and movement.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "River's Domain", text: "When you have Presence in a Wetland, that Wetland is also a Sacred Site." },
      innate: { name: "Massive Flooding", text: "From a Sacred Site, Range 1. At 2 Sun + 2 Water: Push up to 2 Explorer/Town. At 3 Sun + 3 Water: Also +1 Damage per Dahan. At 3 Sun + 4 Water: Also 4 Damage." },
      startingCards: [
        { name: "Boon of Vigor", cost: 0, speed: "Fast", elements: ["Sun", "Water"], effect: "Target Spirit gains 1 Energy. If you target another Spirit, they instead gain 1 Energy per Sacred Site you have." },
        { name: "Flash Floods", cost: 2, speed: "Fast", elements: ["Sun", "Water"], effect: "1 Damage. +1 Damage if target land is Coastal." },
        { name: "Wash Away", cost: 1, speed: "Slow", elements: ["Water"], effect: "Push up to 3 Explorer/Town." },
        { name: "River's Bounty", cost: 0, speed: "Slow", elements: ["Sun", "Water", "Animal"], effect: "Gather up to 2 Dahan. If there are now 2 or more Dahan, add 1 Dahan and gain 1 Energy." }
      ],
      playstyle: "Control-focused spirit that pushes Invaders around and supports allies. Strong scaling innate power. Benefits from Wetlands."
    },
    {
      name: "Shadows Flicker Like Flame",
      complexity: "Low",
      elements: ["Moon", "Fire", "Air"],
      description: "A spirit of darkness and fear, excellent at generating terror but struggling with direct damage early on.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Shadows of the Burning Forest", text: "You may use Slow Powers as if they were Fast Powers by paying +1 Energy for each." },
      innate: { name: "Darkness Swallows the Unwary", text: "Range 0 from Presence. At 3 Moon + 2 Fire + 1 Air: 2 Fear. At 4 Moon + 3 Fire + 2 Air: Instead, 4 Fear and Destroy 1 Explorer." },
      startingCards: [
        { name: "Concealing Shadows", cost: 1, speed: "Fast", elements: ["Moon", "Air"], effect: "Dahan and Presence in target land cannot be damaged by Invaders. 1 Fear if Invaders are present." },
        { name: "Favors Called Due", cost: 1, speed: "Slow", elements: ["Moon", "Air"], effect: "1 Fear. Gather up to 4 Dahan." },
        { name: "Mantle of Dread", cost: 1, speed: "Slow", elements: ["Moon", "Fire", "Air"], effect: "2 Fear. Target Spirit gains +2 Fear from Powers this turn." },
        { name: "Crops Wither and Fade", cost: 1, speed: "Slow", elements: ["Moon", "Fire", "Plant"], effect: "2 Fear. Destroy 1 Town if target land has Blight. 1 Damage to Dahan." }
      ],
      playstyle: "Fear generation specialist. Weak early game damage but scales into a terror machine. Can pay to make Slow powers Fast."
    },
    {
      name: "Vital Strength of the Earth",
      complexity: "Low",
      elements: ["Sun", "Earth", "Plant"],
      description: "A slow, defensive spirit that protects the land and Dahan. Very tough but limited in offense.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Strength of the Land", text: "Presence has +4 Defend. Whenever Presence is Destroyed, Defend 4 in that land." },
      innate: { name: "Rituals of Destruction", text: "Sacred Site only. At 2 Sun + 2 Earth: 2 Damage. At 3 Sun + 3 Earth: +2 Damage. At 4 Sun + 4 Earth: +4 Damage and you may repeat this Power." },
      startingCards: [
        { name: "A Year of Perfect Stillness", cost: 3, speed: "Fast", elements: ["Sun", "Earth"], effect: "Invaders skip all Actions in target land." },
        { name: "Draw of the Fruitful Earth", cost: 1, speed: "Slow", elements: ["Earth", "Plant", "Animal"], effect: "Gather up to 2 Explorer. Gather up to 2 Dahan." },
        { name: "Guard the Healing Land", cost: 3, speed: "Fast", elements: ["Sun", "Earth", "Plant"], effect: "Defend 4. If no Blight, remove 1 Blight." },
        { name: "Gift of Strength", cost: 2, speed: "Fast", elements: ["Sun", "Earth", "Plant"], effect: "Target Spirit gets +3 Energy to use on Power Cards." }
      ],
      playstyle: "Ultra-defensive tank. Protects everything with massive Defend. Slow to deal damage but very hard to push out of an area."
    },
    {
      name: "A Spread of Rampant Green",
      complexity: "Moderate",
      elements: ["Sun", "Water", "Plant"],
      description: "A spirit of unstoppable growth, spreading presence across the island and choking out Invaders with vegetation.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Choke the Land with Green", text: "Whenever Invaders would Build in a land where you have 2 or more Presence, instead they only Explore there." },
      innate: { name: "Creepers Tear Into Mortar", text: "Range 1 from Sacred Site. At 3 Plant: 1 Damage. Push up to 1 Town. At 4 Plant + 2 Water: You may repeat this Power. At 5 Plant + 3 Water: You may repeat this Power again." },
      startingCards: [
        { name: "Gift of Proliferation", cost: 1, speed: "Fast", elements: ["Sun", "Plant"], effect: "Target Spirit adds 1 of their Destroyed Presence to one of their lands." },
        { name: "Overgrow in a Night", cost: 1, speed: "Fast", elements: ["Moon", "Plant"], effect: "Add 1 Presence within Range 1 of a land with your Presence." },
        { name: "Fields Choked with Growth", cost: 2, speed: "Slow", elements: ["Sun", "Water", "Plant"], effect: "Push 1 Town. 1 Damage per 2 Presence you have in target land (round up)." },
        { name: "Stem the Flow of Fresh Water", cost: 0, speed: "Slow", elements: ["Water", "Plant"], effect: "Defend 3. If target land is a Wetland, instead Defend 5." }
      ],
      playstyle: "Presence-spreading specialist that chokes Invader expansion. Strong board control through sheer ubiquity."
    },
    {
      name: "Thunderspeaker",
      complexity: "Moderate",
      elements: ["Sun", "Fire", "Air"],
      description: "A spirit born of Lightning who speaks for the Dahan, directing them in battle. Extremely reliant on Dahan presence.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Thunderspeaker", text: "Your Presence may only be added/moved to lands with Dahan. Whenever you would Gather Dahan, you may move your Presence along with those Dahan." },
      innate: { name: "Lead the Furious Assault", text: "At 2 Sun + 2 Fire: Each Dahan in one of your lands deals Damage equal to their Health. At 3 Sun + 2 Fire + 2 Air: +1 Damage per Dahan. At 4 Sun + 3 Fire + 3 Air: You may Repeat this in another land." },
      startingCards: [
        { name: "Voice of Thunder", cost: 1, speed: "Slow", elements: ["Sun", "Fire", "Air"], effect: "Gather up to 3 Dahan. Push up to 3 Dahan." },
        { name: "Words of Warning", cost: 1, speed: "Fast", elements: ["Sun", "Air"], effect: "Defend 2. If target land has Dahan, Defend +2." },
        { name: "Sudden Ambush", cost: 2, speed: "Fast", elements: ["Fire", "Animal"], effect: "You may Gather 1 Dahan. 1 Damage per Dahan." },
        { name: "Manifestation of Power and Glory", cost: 3, speed: "Slow", elements: ["Sun", "Fire", "Air"], effect: "2 Fear. Each Dahan deals 2 Damage to different Invaders. For each City they destroy, +3 Fear." }
      ],
      playstyle: "Dahan commander that weaponizes the native population. Extremely powerful with Dahan but vulnerable without them."
    },
    {
      name: "Bringer of Dreams and Nightmares",
      complexity: "High",
      elements: ["Moon", "Air"],
      description: "A spirit of dreams that cannot directly damage Invaders, instead winning through pure Fear generation.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "To Dream a Thousand Deaths", text: "Your Powers never directly damage Invaders. When your Powers would Destroy Invaders, instead those Invaders generate Fear." },
      innate: { name: "Night Terrors", text: "Range 1 from Sacred Site. At 2 Moon: 2 Fear. At 3 Moon + 1 Air: Push 1 Explorer. At 5 Moon + 2 Air: +2 Fear." },
      startingCards: [
        { name: "Call on Midnight's Dream", cost: 0, speed: "Fast", elements: ["Moon"], effect: "One Spirit may Forget a Power Card to gain a Major Power. If they do, they may immediately play that Power by paying its cost." },
        { name: "Dreams of the Dahan", cost: 0, speed: "Fast", elements: ["Moon", "Air"], effect: "1 Fear. Each Dahan has +1 Health this turn." },
        { name: "Predatory Nightmares", cost: 2, speed: "Slow", elements: ["Moon", "Air", "Animal"], effect: "2 Fear. Push up to 2 Explorer. Push up to 2 Dahan." },
        { name: "Dread Apparitions", cost: 2, speed: "Fast", elements: ["Moon", "Air"], effect: "2 Fear. Invaders skip Ravage Actions." }
      ],
      playstyle: "Pure Fear victory specialist. Cannot deal damage but generates massive amounts of terror. Unique and challenging playstyle."
    },
    {
      name: "Ocean's Hungry Grasp",
      complexity: "High",
      elements: ["Moon", "Water", "Earth"],
      description: "A spirit of the devouring ocean that can only exist on Coastal lands but is devastatingly powerful there.",
      requirements: { products: ["Base Game"], tokens: [], notes: "Fully playable with base game only." },
      specialRule: { name: "Ocean in Play", text: "Oceans are in play. Ocean is Coastal. Ocean is adjacent to each Coastal land on the Island. Nothing may be added/moved to Ocean except via your Powers. Your Presence can only be in Ocean or Coastal lands." },
      innate: { name: "Pound Ships to Splinters", text: "At 2 Moon + 2 Water: 2 Damage to Ships. At 2 Moon + 3 Water + 1 Earth: Also, 2 Damage to Coastal lands." },
      startingCards: [
        { name: "Call of the Deeps", cost: 0, speed: "Fast", elements: ["Moon", "Water", "Animal"], effect: "Gather up to 2 Explorer/Town to your Ocean. Drown them." },
        { name: "Swallow the Land-Dwellers", cost: 0, speed: "Fast", elements: ["Moon", "Water"], effect: "If target land is Coastal: Gather 1 Explorer from target land into your Ocean. Drown it." },
        { name: "Grasping Tide", cost: 1, speed: "Fast", elements: ["Moon", "Water", "Earth"], effect: "Gather 1 Town. Defend 1 per Presence in target land." },
        { name: "Tidal Boon", cost: 1, speed: "Slow", elements: ["Moon", "Water", "Earth"], effect: "Target Spirit gains 2 Energy. If target Spirit is Ocean's Hungry Grasp, it may immediately add 1 Presence to any Coastal land." }
      ],
      playstyle: "Coastal dominator that drowns Invaders. Restricted placement but extremely powerful in its domain."
    }
  ],
  "Branch & Claw": [
    {
      name: "Keeper of the Forbidden Wilds",
      complexity: "Moderate",
      elements: ["Sun", "Fire", "Plant"],
      description: "An ancient guardian spirit that creates Wilds tokens to protect the land and punish trespassers.",
      requirements: { products: ["Base Game", "Branch & Claw"], tokens: ["Wilds"], notes: "Requires Wilds tokens from Branch & Claw (or Jagged Earth)." },
      specialRule: { name: "Spreading Wilds", text: "Each Spirit Phase, add 1 Wilds to 1 of your lands without any Wilds." },
      innate: { name: "Punish Those Who Trespass", text: "At 2 Sun + 2 Plant: 1 Fear. Destroy 1 Explorer in a land with Wilds. At 3 Sun + 3 Plant: +1 Fear. Destroy 1 Explorer/Town in a land with Wilds. At 4 Sun + 2 Fire + 4 Plant: +2 Fear. Destroy 2 Explorer/Town in lands with Wilds." },
      startingCards: [
        { name: "Regrow from Roots", cost: 1, speed: "Slow", elements: ["Plant"], effect: "If target land has Blight, add 1 Wilds. Otherwise, remove 1 Blight." },
        { name: "Sacrosanct Wilderness", cost: 0, speed: "Fast", elements: ["Sun", "Plant"], effect: "Defend 3 in target land. Push up to 2 Dahan." },
        { name: "Boon of Growing Power", cost: 1, speed: "Fast", elements: ["Sun", "Plant"], effect: "Target Spirit gains 1 Energy and may add 1 of their destroyed Presence to one of their lands." },
        { name: "Towering Wrath", cost: 3, speed: "Slow", elements: ["Sun", "Fire", "Plant"], effect: "2 Fear. 4 Damage." }
      ],
      playstyle: "Territory controller that spreads Wilds tokens. Defensive but capable of punishing Invaders in protected lands."
    },
    {
      name: "Sharp Fangs Behind the Leaves",
      complexity: "Moderate",
      elements: ["Moon", "Fire", "Plant", "Animal"],
      description: "A spirit of predatory beasts that commands animals to attack Invaders. Relies on Beasts tokens.",
      requirements: { products: ["Base Game", "Branch & Claw"], tokens: ["Beasts"], notes: "Requires Beasts tokens from Branch & Claw (or Jagged Earth)." },
      specialRule: { name: "Prey on the Hunters", text: "Beasts in your lands each deal 1 Damage during Ravage (to Invaders). 1 Beasts may be Destroyed to prevent 1 Damage to Dahan during Ravage." },
      innate: { name: "Ranging Hunt", text: "At 1 Moon + 2 Animal: Gather 1 Beasts. 1 Damage per Beasts. At 2 Moon + 1 Fire + 3 Animal: +1 Damage per Beasts. At 3 Moon + 2 Fire + 4 Animal: +1 Damage per Beasts." },
      startingCards: [
        { name: "Too Near the Jungle", cost: 1, speed: "Slow", elements: ["Fire", "Plant", "Animal"], effect: "2 Fear. Add 1 Beasts. If you have 3 Beasts here, +1 Fear." },
        { name: "Prey on the Builders", cost: 1, speed: "Slow", elements: ["Moon", "Animal"], effect: "Each Beasts destroys 1 Explorer. Add 1 Beasts." },
        { name: "Teeth Gleam from Darkness", cost: 2, speed: "Slow", elements: ["Moon", "Fire", "Animal"], effect: "2 Fear. 1 Damage per Beasts in target land." },
        { name: "Terrifying Chase", cost: 0, speed: "Fast", elements: ["Moon", "Plant", "Animal"], effect: "1 Fear. Push 1 Explorer per Beasts. Each pushed Explorer does 1 Damage to Invaders in the land it is pushed into." }
      ],
      playstyle: "Beast commander that spreads and weaponizes animal tokens. Strong at disruption and area denial."
    }
  ],
  "Promo Pack 1 / Feather & Flame": [
    {
      name: "Heart of the Wildfire",
      complexity: "High",
      elements: ["Fire", "Plant"],
      description: "A spirit of destructive fire that burns everything - Invaders, Dahan, and even the land itself. High damage but causes Blight.",
      requirements: { products: ["Base Game", "Promo Pack 1 or Feather & Flame"], tokens: [], notes: "Fully playable with base game + promo spirit. No additional tokens required." },
      specialRule: { name: "Blazing Presence", text: "Your Presence has 'Invaders in this land have -1 Health'. Each of your Presence in a Blighted land is also a Sacred Site." },
      innate: { name: "Flash-Fires", text: "At 2 Fire + 1 Plant: 1 Damage in target land. At 3 Fire + 2 Plant: +1 Damage. At 4 Fire + 3 Plant: +1 Damage. 1 Damage to Dahan. At 5 Fire + 4 Plant: +2 Damage." },
      startingCards: [
        { name: "Flame's Fury", cost: 1, speed: "Slow", elements: ["Fire", "Plant"], effect: "1 Fear. 2 Damage." },
        { name: "Threatening Flames", cost: 2, speed: "Fast", elements: ["Fire", "Plant"], effect: "Defend 4. 1 Fear. Push 1 Town and up to 1 Dahan." },
        { name: "Asphyxiating Smoke", cost: 2, speed: "Slow", elements: ["Fire", "Air"], effect: "1 Fear. 1 Damage to each Invader." },
        { name: "Firestorm", cost: 3, speed: "Slow", elements: ["Fire", "Air", "Plant"], effect: "1 Fear. Add 1 Blight. 1 Damage to Dahan. 3 Damage per Blight." }
      ],
      playstyle: "Aggressive destroyer that weaponizes Blight. Extremely high damage potential but risks the island's health."
    },
    {
      name: "Serpent Slumbering Beneath the Island",
      complexity: "High",
      elements: ["Moon", "Fire", "Water", "Earth", "Plant", "Animal"],
      description: "An ancient, powerful spirit slowly awakening. Starts incredibly weak but becomes terrifyingly strong over time.",
      requirements: { products: ["Base Game", "Promo Pack 1 or Feather & Flame"], tokens: [], notes: "Fully playable with base game + promo spirit. Uses absorbed Presence mechanic." },
      specialRule: { name: "Deep Slumber", text: "You may only have 1 Presence per board. Absorbed Presence cannot do things normally done by Presence (range, etc.)." },
      innate: { name: "Serpent Wakes in Power", text: "At 2 Fire + 2 Earth + 3 Moon: Serpent now ignores 'Deep Slumber'. At 3 Fire + 4 Earth + 4 Moon: Add 1 Presence to any land. At 4 Fire + 5 Earth + 5 Moon: Add 1 Presence to any land. At 5 Fire + 6 Earth + 6 Moon: Destroy all Invaders and Dahan in one land." },
      startingCards: [
        { name: "Gift of the Primordial Deeps", cost: 0, speed: "Fast", elements: ["Moon", "Earth", "Plant"], effect: "Target Spirit gains a Major Power (drawing 2 additional cards). They may immediately play it by paying its cost." },
        { name: "Absorb Essence", cost: 1, speed: "Fast", elements: ["Moon", "Fire", "Water", "Earth"], effect: "Target Spirit may destroy one of their Presence. If they do, you gain 2 Energy and Absorb that Presence." },
        { name: "Elemental Aegis", cost: 2, speed: "Fast", elements: ["Fire", "Water", "Earth"], effect: "1 Damage to Invaders. Defend 6. You and other Spirits may Ignore Damage and Destruction from one Power they use." },
        { name: "Gift of Power", cost: 0, speed: "Slow", elements: ["Moon", "Water"], effect: "Target Spirit gains a Minor Power. If any of your Presence is in an Inland land without Blight, they instead gain a Major Power." }
      ],
      playstyle: "Slow-start monster that takes many turns to awaken but becomes apocalyptically powerful. Excellent support until then."
    }
  ],
  "Jagged Earth": [
    {
      name: "Many Minds Move as One",
      complexity: "Moderate",
      elements: ["Sun", "Air", "Animal"],
      description: "A spirit of swarming creatures - birds, insects, and small animals that act as a collective intelligence.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Beasts"], notes: "Requires Beasts tokens. Playable with Jagged Earth alone (includes all token types)." },
      specialRule: { name: "Birdwatch", text: "Beasts in your lands contribute to your elements (1 Air, 1 Animal per Beasts, max 5 total). After setup, add 1 Beasts to each land with Presence." },
      innate: { name: "The Teeming Host Arrives", text: "At 2 Sun + 2 Air + 2 Animal: Push up to 1 Beasts. 1 Fear per Beasts. At 3 Sun + 3 Air + 3 Animal: +1 Fear per Beasts. At 4 Sun + 4 Air + 4 Animal: Push up to 1 more Beasts. +1 Damage per Beasts." },
      startingCards: [
        { name: "A Dreadful Tide of Scurrying Flesh", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Animal"], effect: "1 Fear. Push up to 2 Explorer." },
        { name: "Guide the Way on Feathered Wings", cost: 0, speed: "Fast", elements: ["Sun", "Air", "Animal"], effect: "Move 1 Beasts up to two lands. As it moves, up to 2 Dahan may move with it." },
        { name: "Boon of Swarming Bedevilment", cost: 0, speed: "Fast", elements: ["Air", "Animal"], effect: "Target Spirit gains 1 Energy. Target Spirit may Push up to 2 Explorer." },
        { name: "Ever-Multiplying Swarm", cost: 2, speed: "Slow", elements: ["Sun", "Fire", "Animal"], effect: "Add 1 Beasts. 1 Fear. Each Beasts does 1 Damage. (Count Beasts after adding.)" }
      ],
      playstyle: "Swarm controller that gains elements from Beasts. Mobile and disruptive with fear generation."
    },
    {
      name: "Volcano Looming High",
      complexity: "Moderate",
      elements: ["Sun", "Fire", "Air", "Earth"],
      description: "A spirit of volcanic power building to an explosive eruption. Accumulates power over time.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Badlands"], notes: "Requires Badlands tokens (introduced in Jagged Earth)." },
      specialRule: { name: "Volcanic Presence", text: "Your presence in a Mountain has +1 Defend. During each Spirit Phase, you may place 1 Presence into a land with your Presence by paying 1 Energy." },
      innate: { name: "Lava Flows", text: "At 1 Fire + 1 Earth: Add 1 Badlands. At 2 Fire + 2 Air + 2 Earth: +1 Damage. At 3 Fire + 3 Air + 3 Earth: +1 Damage, +2 Fear. At 4 Fire + 4 Air + 4 Earth: +2 Damage." },
      startingCards: [
        { name: "Exaltation of Molten Stone", cost: 0, speed: "Fast", elements: ["Sun", "Fire", "Air", "Earth"], effect: "Target Spirit gains 2 Energy. If you target yourself, gain only 1 Energy instead." },
        { name: "Rain of Ash", cost: 2, speed: "Slow", elements: ["Fire", "Air", "Earth"], effect: "Add 1 Badlands. 2 Fear. 1 Damage to Dahan." },
        { name: "Lava Erupts Earthward", cost: 1, speed: "Slow", elements: ["Fire", "Earth"], effect: "1 Damage. Add 1 Badlands. If target land is a Mountain, +1 Damage." },
        { name: "Pyroclastic Bombardment", cost: 2, speed: "Fast", elements: ["Sun", "Fire", "Air"], effect: "2 Damage to Towns/Cities only. Push up to 2 Explorer." }
      ],
      playstyle: "Build-up destroyer that creates Badlands and unleashes devastating eruptions. Mountain-focused."
    },
    {
      name: "Shroud of Silent Mist",
      complexity: "High",
      elements: ["Moon", "Air", "Water"],
      description: "A spirit of deadly, choking mist that silently eliminates Invaders. Causes Disease through miasma.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Disease"], notes: "Requires Disease tokens from Branch & Claw or Jagged Earth." },
      specialRule: { name: "Mists Arise", text: "During setup, add 2 Disease to the land with your starting Presence. At the start of each Spirit Phase, add 1 Disease to a land where you have Presence and no Disease." },
      innate: { name: "The Fog Closes In", text: "At 1 Moon + 2 Air + 1 Water: In a land with Disease, 1 Damage. At 2 Moon + 3 Air + 2 Water: +1 Damage. At 4 Moon + 4 Air + 3 Water: +2 Damage." },
      startingCards: [
        { name: "Softly Beckon Ever Inward", cost: 1, speed: "Fast", elements: ["Moon", "Air"], effect: "Gather up to 3 Explorer (from lands with your Presence)." },
        { name: "Enveloping Swirl Snuffs Torches", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Water"], effect: "Defend 6. 1 Fear if there are Invaders in target land." },
        { name: "Dissolving Vapors", cost: 1, speed: "Slow", elements: ["Moon", "Air", "Water"], effect: "1 Fear. Add 1 Disease. 1 Damage per Disease." },
        { name: "Suffocating Shroud", cost: 2, speed: "Slow", elements: ["Air", "Water"], effect: "1 Damage to each Invader in target land. Skip the next Explore in target land." }
      ],
      playstyle: "Silent killer using Disease tokens. Excellent at picking off isolated Invaders. Defensive with mist-based abilities."
    },
    {
      name: "Vengeance as a Burning Plague",
      complexity: "High",
      elements: ["Moon", "Fire", "Earth", "Animal"],
      description: "A spirit of hatred and pestilence, spreading Disease as retribution for harm done to the land.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Disease", "Badlands"], notes: "Requires Disease and Badlands tokens. Benefits from Blight on the island." },
      specialRule: { name: "Burning Retribution", text: "Whenever Blight would be added to one of your lands, you may add 1 Disease there (in addition to the Blight)." },
      innate: { name: "Fetid Breath Spreads Infection", text: "At 1 Moon + 2 Animal: Add 1 Disease. At 2 Moon + 1 Fire + 3 Animal: 1 Damage per Disease. At 4 Moon + 2 Fire + 4 Animal: Repeat." },
      startingCards: [
        { name: "Plaguebearers", cost: 0, speed: "Fast", elements: ["Fire", "Animal"], effect: "Push up to 2 Disease. They can move past Ocean into a Coastal land on another board." },
        { name: "Fiery Vengeance", cost: 1, speed: "Fast", elements: ["Moon", "Fire"], effect: "1 Fear if target land has Blight. 1 Damage per Blight in target land." },
        { name: "Fetid Breath, Foul Miasma", cost: 1, speed: "Slow", elements: ["Moon", "Air", "Earth", "Animal"], effect: "1 Fear. Add 1 Disease." },
        { name: "Strike Low with Sudden Plague", cost: 2, speed: "Slow", elements: ["Moon", "Earth", "Animal"], effect: "2 Damage. If target land has Disease: +2 Damage." }
      ],
      playstyle: "Retribution specialist that turns Blight into Disease. Thrives when the island is suffering."
    },
    {
      name: "Stone's Unyielding Defiance",
      complexity: "Moderate",
      elements: ["Sun", "Earth"],
      description: "An obstinate spirit of bedrock that refuses to yield. Extremely defensive and prevents Blight addition.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Badlands"], notes: "Uses Badlands tokens. Can prevent Blight by sacrificing Presence." },
      specialRule: { name: "Immutable", text: "Your Presence cannot be moved or removed from the board by Invaders or Powers. (You may still Destroy it yourself.)" },
      innate: { name: "Hold the Island Fast with a Bulwark of Will", text: "At 1 Sun + 2 Earth: Defend 3 in all your lands. At 2 Sun + 3 Earth: Defend +2. At 3 Sun + 4 Earth: Also, 1 Damage in each of your lands. At 4 Sun + 5 Earth: You may pay 2 Energy to prevent Blight by destroying 1 Presence." },
      startingCards: [
        { name: "Stubborn Solidity", cost: 0, speed: "Fast", elements: ["Sun", "Earth"], effect: "Defend 6. 1 Fear if target land has Blight." },
        { name: "Jagged Shards Push from the Earth", cost: 1, speed: "Slow", elements: ["Earth"], effect: "1 Damage. Push up to 1 Explorer/Town/Dahan." },
        { name: "Scarred and Stony Land", cost: 2, speed: "Fast", elements: ["Sun", "Earth"], effect: "Add 1 Badlands. If target land has Blight: +1 Badlands." },
        { name: "Plows Shatter on Rocky Ground", cost: 2, speed: "Slow", elements: ["Earth"], effect: "2 Fear. 2 Damage. Destroy 1 Town." }
      ],
      playstyle: "Ultimate defender. Immovable Presence, massive Defend values, and can prevent Blight with sacrifice."
    },
    {
      name: "Shifting Memory of Ages",
      complexity: "Moderate",
      elements: ["Moon", "Air", "Earth"],
      description: "A spirit of deep time and memory, preparing Element markers for future turns. Excellent support.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Element Markers"], notes: "Requires Element Markers (introduced in Jagged Earth). Core to this spirit's mechanics." },
      specialRule: { name: "Patterns Gauged from Epochs Past", text: "You start with 3 Prepare markers. When you would gain an Element Marker, instead prepare it. During Growth, gain prepared Element Markers." },
      innate: { name: "Insights into a Deeper Truth", text: "At 1 Air + 1 Earth: Target Spirit gains 2 Energy and may Reclaim 1 Power Card. At 2 Moon + 2 Air + 2 Earth: Also draws 1 Minor Power. At 3 Moon + 3 Air + 3 Earth: Also draws 1 Major Power without Forgetting." },
      startingCards: [
        { name: "Boon of Memories Past", cost: 0, speed: "Fast", elements: ["Moon", "Air", "Earth"], effect: "Target Spirit chooses to gain 1 Minor Power (may immediately play it) OR Reclaim up to 3 Power Cards." },
        { name: "Share Secrets of Survival", cost: 0, speed: "Fast", elements: ["Moon", "Earth"], effect: "1 Dahan has +2 Health this turn. You may Gather up to 1 Dahan." },
        { name: "Elemental Teachings", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Earth"], effect: "Add 1 Prepare Marker. Target Spirit gains 2 Energy." },
        { name: "Study the Invaders' Fears", cost: 1, speed: "Slow", elements: ["Moon", "Air"], effect: "You may Prepare 1 Element Marker. If you do, 1 Fear. Otherwise, 3 Fear." }
      ],
      playstyle: "Support specialist that prepares elements for powerful future turns. Helps allies gain powers and Energy."
    },
    {
      name: "Grinning Trickster Stirs Up Trouble",
      complexity: "Moderate",
      elements: ["Sun", "Moon", "Fire", "Air"],
      description: "A mischievous spirit that causes chaos, turning Invaders against each other with Strife.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Strife", "Beasts"], notes: "Requires Strife tokens (and optionally Beasts). From Branch & Claw or Jagged Earth." },
      specialRule: { name: "Let's See What Happens", text: "Once each turn, when you target a land without Strife with a Power, you may add 1 Strife. If you do, resolve one of its Effects at random." },
      innate: { name: "Reckless Escalation", text: "At 2 Sun + 2 Moon + 2 Fire: 1 Fear. Add 1 Strife to a land with Strife. At 4 Sun + 4 Moon + 4 Fire: +2 Fear. Add 1 Strife elsewhere. At 6 Sun + 6 Moon + 6 Fire: In a land with 3+ Strife, 4 Damage. Add 1 Blight." },
      startingCards: [
        { name: "Unexpected Tigers", cost: 0, speed: "Fast", elements: ["Moon", "Fire", "Animal"], effect: "Add 1 Beasts. 1 Fear and 1 Damage if you have 2 Beasts here." },
        { name: "Impersonate Authority", cost: 1, speed: "Fast", elements: ["Sun", "Air"], effect: "Push up to 2 Explorer. Gather up to 2 Explorer." },
        { name: "Incite the Mob", cost: 1, speed: "Slow", elements: ["Sun", "Moon", "Fire"], effect: "1 Fear per Strife in target land. Invaders with Strife deal Damage to other Invaders." },
        { name: "Why Don't You and Them Fight", cost: 2, speed: "Slow", elements: ["Sun", "Moon", "Air"], effect: "2 Fear. Invaders with Strife Damage each other." }
      ],
      playstyle: "Chaos agent that spreads Strife and watches Invaders destroy each other. Unpredictable but fun."
    },
    {
      name: "Lure of the Deep Wilderness",
      complexity: "Moderate",
      elements: ["Moon", "Fire", "Plant"],
      description: "A spirit that draws Invaders into the wilderness where they become lost. Creates Badlands tokens.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Badlands", "Beasts", "Disease", "Wilds"], notes: "Uses multiple token types. Badlands are core; other tokens boost its innate." },
      specialRule: { name: "Forsaken Hunting Grounds", text: "When Invaders Explore into a land with 2 or more Badlands, skip adding Explorers there." },
      innate: { name: "Invite and Ensnare", text: "At 1 Moon + 1 Plant: Gather 1 Explorer into a land with Badlands. At 2 Moon + 1 Fire + 2 Plant: Gather 1 Explorer/Town. At 3 Moon + 2 Fire + 3 Plant: Repeat." },
      startingCards: [
        { name: "Gift of the Untamed Wild", cost: 1, speed: "Fast", elements: ["Moon", "Fire", "Plant"], effect: "Target Spirit gains 2 Energy. Target Spirit may Push up to 2 Explorers." },
        { name: "Softly Call the Unwary", cost: 0, speed: "Slow", elements: ["Moon", "Air", "Plant"], effect: "Gather 1 Explorer." },
        { name: "Perils of the Deepest Island", cost: 1, speed: "Slow", elements: ["Moon", "Fire", "Plant"], effect: "1 Fear. 2 Damage. Add 1 Badlands." },
        { name: "Forsake Society, Worship in the Wilds", cost: 1, speed: "Slow", elements: ["Moon", "Fire", "Plant"], effect: "1 Fear. Replace 1 Explorer with 1 Dahan." }
      ],
      playstyle: "Trap setter that lures Invaders into deadly Badlands. Denies exploration with wilderness tokens."
    },
    {
      name: "Fractured Days Split the Sky",
      complexity: "Very High",
      elements: ["Sun", "Moon", "Air"],
      description: "A spirit of broken time, manipulating the sequence of events. Extremely complex but powerful.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Time (special)"], notes: "Uses unique Time currency mechanic. No standard tokens required, but complex rules." },
      specialRule: { name: "The Past Returns Again", text: "During Time Passes, you may discard up to 2 Power Cards from play to gain 2 Time and Forget those cards instead of discarding them." },
      innate: { name: "Splinter Time", text: "At 2 Sun + 2 Moon + 2 Air: You may Repeat 1 Power Card by paying 2 Time. At 4 Sun + 4 Moon + 4 Air: You may Repeat another Power Card by paying 2 Time." },
      startingCards: [
        { name: "Absolute Stasis", cost: 1, speed: "Fast", elements: ["Sun", "Air"], effect: "Target land and everything in it cease to exist until the end of the Slow phase." },
        { name: "The Past Never Forgets", cost: 1, speed: "Fast", elements: ["Sun", "Moon"], effect: "1 Fear. If you have 1 Time, may spend it: Invaders skip one Action in target land." },
        { name: "Blur the Arc of Years", cost: 1, speed: "Slow", elements: ["Moon", "Air"], effect: "1 Fear. 1 Damage. If Blighted: +1 Fear. Remove 1 Blight." },
        { name: "Pour Time Sideways", cost: 1, speed: "Fast", elements: ["Sun", "Moon", "Air"], effect: "Gain 2 Time. Target Spirit Repeats a Power Card by paying its cost again." }
      ],
      playstyle: "Time manipulator that repeats powers and disrupts event sequences. High skill ceiling with Time currency."
    },
    {
      name: "Starlight Seeks Its Form",
      complexity: "Very High",
      elements: ["Moon", "Air", "Fire", "Water", "Earth", "Plant", "Animal"],
      description: "A formless spirit that can become whatever it needs to be. Chooses its nature at game start.",
      requirements: { products: ["Base Game", "Jagged Earth"], tokens: ["Element Markers"], notes: "Requires Element Markers. Highly customizable depending on Form chosen." },
      specialRule: { name: "A Star Amongst the Spirits", text: "During Setup, choose a Form: Light (gains Sun), Dark (gains Moon), or any mix you want." },
      innate: { name: "Wandering Light", text: "Varies based on chosen Form and elements in play." },
      startingCards: [
        { name: "Shape the Self Anew", cost: 0, speed: "Fast", elements: ["Moon", "Air"], effect: "You may change your Form. Reclaim up to 2 Power Cards." },
        { name: "Boon of Reimagining", cost: 1, speed: "Fast", elements: ["Moon", "Water", "Earth"], effect: "Target Spirit may Forget a Power Card to gain a Minor Power Card." },
        { name: "Gather the Scattered Light of Stars", cost: 0, speed: "Slow", elements: ["Sun", "Moon", "Air"], effect: "Gain Element Markers equal to your Card Plays." },
        { name: "Peace of the Nighttime Sky", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Animal"], effect: "1 Fear. Defend 3." }
      ],
      playstyle: "Shape-shifting spirit that defines its own identity. Maximum flexibility but requires planning."
    }
  ],
  "Promo Pack 2 / Feather & Flame": [
    {
      name: "Downpour Drenches the World",
      complexity: "High",
      elements: ["Sun", "Water", "Air", "Earth"],
      description: "A spirit of relentless rain, flooding the land and drowning Invaders. Creates and manipulates Wetlands.",
      requirements: { products: ["Base Game", "Promo Pack 2 or Feather & Flame"], tokens: ["Wilds"], notes: "Uses Wilds tokens. Requires Branch & Claw, Jagged Earth, or Feather & Flame for tokens." },
      specialRule: { name: "Relentless Downpour", text: "After Growth, choose a land with your Presence. It becomes a Wetland until the end of this turn." },
      innate: { name: "Rain and Mud Suppress Conflict", text: "At 2 Sun + 2 Water + 1 Air: Defend 2 per Presence. At 3 Sun + 3 Water + 2 Air + 1 Earth: Invaders skip Ravage. At 4 Sun + 4 Water + 3 Air + 2 Earth: Skip all Invader Actions." },
      startingCards: [
        { name: "Gift of Abundance", cost: 1, speed: "Fast", elements: ["Sun", "Air", "Water", "Plant"], effect: "Target Spirit either gains 2 Energy, or may Repeat one Power Card this turn by paying its cost." },
        { name: "Foundations Sink into Mud", cost: 1, speed: "Slow", elements: ["Water", "Earth"], effect: "1 Fear. Defend 6. Push up to 2 Towns." },
        { name: "Dark and Tangled Woods", cost: 2, speed: "Slow", elements: ["Moon", "Water", "Plant"], effect: "Add 1 Wilds. Push up to 2 Explorer. If there are 3 Wilds here, +2 Fear." },
        { name: "Unbearable Deluge", cost: 3, speed: "Slow", elements: ["Sun", "Water", "Air"], effect: "2 Fear. 1 Damage to each Invader for each Wetland adjacent to target land." }
      ],
      playstyle: "Weather controller that turns lands to Wetlands and floods everything. Strong area denial and defense."
    },
    {
      name: "Finder of Paths Unseen",
      complexity: "Very High",
      elements: ["Moon", "Air", "Water"],
      description: "A spirit of hidden ways that moves things around the island through secret paths. Maximum mobility.",
      requirements: { products: ["Base Game", "Promo Pack 2 or Feather & Flame"], tokens: [], notes: "No special tokens required. Uses unique adjacency manipulation rules." },
      specialRule: { name: "Paths Wend Through Everywhere", text: "Once per turn, when you use a Power, you may treat any 2 lands as adjacent for that Power." },
      innate: { name: "Lay Paths They Cannot Help But Walk", text: "At 2 Moon + 2 Air: Gather up to 2 Explorers. At 3 Moon + 3 Air + 1 Water: Gather up to 3 Explorers/Towns. At 4 Moon + 4 Air + 2 Water: Gather up to 5 pieces of any type." },
      startingCards: [
        { name: "Paths Tied by Nature", cost: 1, speed: "Fast", elements: ["Moon", "Water", "Plant"], effect: "Move up to 2 Dahan between any 2 of your lands." },
        { name: "Offer Passage between Worlds", cost: 0, speed: "Fast", elements: ["Moon", "Air"], effect: "Target Spirit may move 1 of their Presence from any land to any land within Range 1." },
        { name: "Ways of Shore and Heartland", cost: 1, speed: "Slow", elements: ["Sun", "Moon", "Water"], effect: "Gather up to 3 Dahan." },
        { name: "Open the Ways", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Earth"], effect: "For the rest of this turn, target land is Coastal." }
      ],
      playstyle: "Ultimate mobility spirit that treats any two lands as adjacent. Extremely flexible but complex positioning."
    }
  ],
  "Horizons of Spirit Island": [
    {
      name: "Devouring Teeth Lurk Underfoot",
      complexity: "Low",
      elements: ["Moon", "Fire", "Earth", "Animal"],
      description: "A spirit of predatory creatures that lurk underground, emerging to devour Invaders.",
      requirements: { products: ["Horizons of Spirit Island"], tokens: ["Beasts"], notes: "Standalone game. Beasts tokens included in Horizons box. Compatible with full Spirit Island." },
      specialRule: { name: "Death from Below", text: "Your Presence in a land with Beasts has +1 Defend. After setup, add 1 Beasts to each of your lands." },
      innate: { name: "Frenzy of Gnashing Teeth", text: "At 1 Moon + 1 Fire + 1 Animal: 1 Damage per Beasts. At 2 Moon + 2 Fire + 2 Animal: +1 Fear per Beasts. At 3 Moon + 3 Fire + 3 Animal: +1 Damage per Beasts." },
      startingCards: [
        { name: "Mark Prey for the Swarm", cost: 1, speed: "Fast", elements: ["Moon", "Fire", "Animal"], effect: "1 Fear. Gather up to 1 Beasts." },
        { name: "Herd Towards the Waiting Teeth", cost: 0, speed: "Slow", elements: ["Moon", "Animal"], effect: "Push up to 2 Explorer into a land with Beasts." },
        { name: "Shed Armor of Fear", cost: 2, speed: "Fast", elements: ["Moon", "Fire", "Earth"], effect: "Defend 4. 1 Fear. Add 1 Beasts." },
        { name: "Teeth Like Broken Swords", cost: 2, speed: "Slow", elements: ["Moon", "Fire", "Earth", "Animal"], effect: "2 Damage. Destroy 1 Town." }
      ],
      playstyle: "Beast-focused predator. Simple mechanics with Beasts tokens providing damage and defense."
    },
    {
      name: "Eyes Watch from the Trees",
      complexity: "Low",
      elements: ["Moon", "Air", "Plant"],
      description: "A watchful spirit that generates Fear and prevents Invader actions through vigilance.",
      requirements: { products: ["Horizons of Spirit Island"], tokens: ["Wilds"], notes: "Standalone game. Wilds tokens included in Horizons box. Compatible with full Spirit Island." },
      specialRule: { name: "Watching from the Wilds", text: "During setup, add 1 Wilds to your starting land." },
      innate: { name: "All See Their Secrets", text: "At 2 Moon + 2 Plant: 2 Fear. At 3 Moon + 1 Air + 3 Plant: +1 Fear. At 4 Moon + 2 Air + 4 Plant: In a land with Wilds, Invaders skip one Action." },
      startingCards: [
        { name: "Boon of Watchful Guarding", cost: 1, speed: "Fast", elements: ["Sun", "Moon", "Plant"], effect: "Target Spirit gets Defend 3 in each of their lands." },
        { name: "Scare Off the Newcomers", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Plant"], effect: "1 Fear. Push up to 2 Explorer." },
        { name: "Ever-Watching Eyes", cost: 0, speed: "Slow", elements: ["Moon", "Air"], effect: "1 Fear. Add 1 Wilds." },
        { name: "Whispered Warnings through the Trees", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Plant"], effect: "Defend 2. During Ravage, each Dahan takes 2 less Damage." }
      ],
      playstyle: "Defensive fear generator. Spreads Wilds and watches over the island. Great for beginners."
    },
    {
      name: "Fathomless Mud of the Swamp",
      complexity: "Low",
      elements: ["Moon", "Water", "Earth"],
      description: "A spirit of treacherous swamps that traps and drowns Invaders who venture too deep.",
      requirements: { products: ["Horizons of Spirit Island"], tokens: [], notes: "Standalone game. No special tokens required. Compatible with full Spirit Island." },
      specialRule: { name: "Fathomless Depths", text: "Your Presence in Wetlands has +2 Defend." },
      innate: { name: "Sucking Mire Awaits Them", text: "At 1 Water + 2 Earth: Defend 2. At 2 Water + 3 Earth: +2 Defend. 1 Fear. At 3 Water + 4 Earth: +2 Defend. 2 Damage." },
      startingCards: [
        { name: "Open Shifting Waterways", cost: 1, speed: "Fast", elements: ["Moon", "Water"], effect: "Gather up to 2 Explorer. Push up to 2 Explorer." },
        { name: "Gift of the Swamp's Plenty", cost: 0, speed: "Slow", elements: ["Sun", "Water", "Earth", "Animal"], effect: "Target Spirit gains 2 Energy." },
        { name: "Sludge and Spines Hinder", cost: 1, speed: "Slow", elements: ["Water", "Earth", "Plant"], effect: "Defend 3. If target land is Wetland: +2 Defend." },
        { name: "Swallow, Drag Under, Drown", cost: 2, speed: "Slow", elements: ["Moon", "Water", "Earth"], effect: "1 Fear. 3 Damage. If target land is Wetland: +1 Fear." }
      ],
      playstyle: "Wetland specialist that defends strongly in swamps. Simple and sturdy with drowning damage."
    },
    {
      name: "Rising Heat of Stone and Sand",
      complexity: "Low",
      elements: ["Sun", "Fire", "Air", "Earth"],
      description: "A spirit of scorching heat that bakes the land and drives away Invaders with unbearable warmth.",
      requirements: { products: ["Horizons of Spirit Island"], tokens: ["Badlands", "Beasts"], notes: "Standalone game. Badlands and Beasts tokens included in Horizons box." },
      specialRule: { name: "Scorching Heat", text: "Your Presence in Sands or Mountains has +1 Damage during Ravage." },
      innate: { name: "Deadening Warmth", text: "At 1 Sun + 1 Fire + 1 Air: 1 Damage. At 2 Sun + 2 Fire + 2 Air: Push up to 2 Explorer. At 3 Sun + 3 Fire + 3 Air: +1 Damage." },
      startingCards: [
        { name: "Stinging Sandstorm", cost: 1, speed: "Slow", elements: ["Fire", "Air", "Earth"], effect: "Gather up to 1 of your Presence. 1 Damage to each Invader." },
        { name: "Sun-Baked Land Cracks and Fite Fruits", cost: 1, speed: "Slow", elements: ["Sun", "Fire", "Plant"], effect: "If target land is Sands or Mountain: 2 Fear. Add 1 Badlands." },
        { name: "Call on Herders for Aid", cost: 0, speed: "Fast", elements: ["Sun", "Fire", "Animal"], effect: "Add 1 Beasts OR Gather up to 1 Beasts." },
        { name: "Sweltering Exhaustion", cost: 2, speed: "Fast", elements: ["Sun", "Fire", "Air"], effect: "Defend 4. 1 Fear." }
      ],
      playstyle: "Heat-based aggressor. Strong in Sands and Mountains. Simple damage dealer with push mechanics."
    },
    {
      name: "Sun-Bright Whirlwind",
      complexity: "Low",
      elements: ["Sun", "Fire", "Air"],
      description: "A spirit of brilliant, powerful winds that scatters everything in its path.",
      requirements: { products: ["Horizons of Spirit Island"], tokens: [], notes: "Standalone game. No special tokens required. Compatible with full Spirit Island." },
      specialRule: { name: "Violent Gusts", text: "Whenever you Push, you may Push 1 additional piece of any type." },
      innate: { name: "Gale-Force Winds", text: "At 2 Sun + 1 Fire + 2 Air: Push up to 3 Explorer/Town/Dahan. At 3 Sun + 2 Fire + 3 Air: You may Push up to 1 City. At 4 Sun + 3 Fire + 4 Air: 1 Damage to each Invader you Pushed." },
      startingCards: [
        { name: "Gift of the Sunlit Air", cost: 0, speed: "Fast", elements: ["Sun", "Air"], effect: "Target Spirit gains 1 Energy. If you target yourself, instead gain 2 Energy." },
        { name: "Gust of the Trade Winds", cost: 1, speed: "Fast", elements: ["Sun", "Air"], effect: "Push up to 2 Explorer. You may Gather up to 1 Explorer." },
        { name: "Scatter to the Winds", cost: 2, speed: "Slow", elements: ["Fire", "Air"], effect: "Push up to 4 Explorer/Town. 1 Fear per piece Pushed." },
        { name: "Tempest of Leaves and Branches", cost: 2, speed: "Fast", elements: ["Sun", "Fire", "Air", "Plant"], effect: "2 Damage. Defend 2." }
      ],
      playstyle: "Push specialist that scatters everything. Simple but effective at disrupting Invader plans."
    }
  ],
  "Nature Incarnate": [
    {
      name: "Ember-Eyed Behemoth",
      complexity: "Moderate",
      elements: ["Sun", "Fire", "Earth", "Animal"],
      description: "A massive creature spirit that physically walks the island as an Incarna token.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Incarna"], notes: "Requires Incarna tokens (new in Nature Incarnate). Needs Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Behemoth Walks", text: "You have an Incarna (starts in your starting land). Your Incarna is Presence you can move during Growth." },
      innate: { name: "Trample and Rampage", text: "At 2 Sun + 2 Fire + 2 Earth: Your Incarna's land: 2 Damage. At 3 Sun + 3 Fire + 3 Earth: +2 Damage. At 4 Sun + 4 Fire + 4 Earth: +2 Damage. Destroy 1 Town." },
      startingCards: [
        { name: "Blazing Intimidation", cost: 1, speed: "Fast", elements: ["Sun", "Fire", "Animal"], effect: "2 Fear in a land with your Incarna. Push up to 2 Explorer." },
        { name: "Shuddering Ground", cost: 1, speed: "Slow", elements: ["Fire", "Earth"], effect: "1 Damage. If in a Mountain: +1 Damage." },
        { name: "Territorial Rampage", cost: 2, speed: "Slow", elements: ["Sun", "Fire", "Earth", "Animal"], effect: "In a land with your Incarna: 3 Damage." },
        { name: "Vigor of the Breaking Dawn", cost: 1, speed: "Fast", elements: ["Sun", "Fire", "Animal"], effect: "If you have an Incarna in target land: Heal 2. Otherwise: Gather your Incarna." }
      ],
      playstyle: "Physical presence on the board as a walking Behemoth. Devastating in its location but needs to move to help."
    },
    {
      name: "Hearth-Vigil",
      complexity: "Moderate",
      elements: ["Sun", "Fire", "Earth", "Plant"],
      description: "A spirit of protective home-fires that defends the Dahan and their settlements.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: [], notes: "Requires Base Game + Jagged Earth + Nature Incarnate. No special tokens beyond standard." },
      specialRule: { name: "Dahan Guard the Hearth", text: "Dahan in your lands Defend 1 per Dahan there. (This stacks with other Defend.)" },
      innate: { name: "Flames Flicker in Warning", text: "At 2 Sun + 2 Fire: 1 Fear. Defend 2. At 3 Sun + 3 Fire + 1 Plant: +2 Defend. At 4 Sun + 4 Fire + 2 Plant: +1 Fear. Push up to 2 Explorer." },
      startingCards: [
        { name: "Gift of Living Fire", cost: 1, speed: "Fast", elements: ["Sun", "Fire"], effect: "Target Spirit gains 1 Energy per Dahan in one of your lands." },
        { name: "Stoke the Hearth-Fires", cost: 0, speed: "Slow", elements: ["Sun", "Fire", "Earth"], effect: "1 Fear if Dahan are present. Gather up to 2 Dahan." },
        { name: "Towering Walls of Flame", cost: 2, speed: "Fast", elements: ["Sun", "Fire", "Earth"], effect: "Defend 6." },
        { name: "Cleansing Flames Consume the Unnatural", cost: 2, speed: "Slow", elements: ["Sun", "Fire", "Plant"], effect: "2 Fear. 2 Damage. Remove 1 Blight." }
      ],
      playstyle: "Dahan defender that makes settlements into fortresses. Combines fire with protection."
    },
    {
      name: "Towering Roots of the Jungle",
      complexity: "Moderate",
      elements: ["Sun", "Water", "Earth", "Plant"],
      description: "A spirit of ancient jungle trees with deep roots and towering canopy.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Wilds"], notes: "Requires Wilds tokens. Needs Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Towering Growth", text: "Whenever you add Presence, you may add it to any land adjacent to one of your lands (instead of requiring range from Presence)." },
      innate: { name: "Entwined Growth", text: "At 2 Sun + 2 Earth + 2 Plant: Add 1 Wilds. Defend 4. At 3 Sun + 3 Earth + 3 Plant: +2 Defend. Push up to 2 Town. At 4 Sun + 4 Earth + 4 Plant: +2 Defend. 2 Damage." },
      startingCards: [
        { name: "Boon of the Ancient Groves", cost: 1, speed: "Fast", elements: ["Sun", "Earth", "Plant"], effect: "Target Spirit gains 2 Energy and may add 1 Presence." },
        { name: "Shade of the Old Trees", cost: 0, speed: "Fast", elements: ["Water", "Earth", "Plant"], effect: "Defend 3. If in Jungle: +2 Defend." },
        { name: "Vines and Undergrowth Bar the Way", cost: 1, speed: "Slow", elements: ["Moon", "Water", "Plant"], effect: "Push up to 2 Explorer. Add 1 Wilds." },
        { name: "Crushing Weight of the Canopy", cost: 2, speed: "Slow", elements: ["Sun", "Earth", "Plant"], effect: "2 Damage. Destroy 1 Town." }
      ],
      playstyle: "Spreading jungle guardian. Extends Presence easily and provides strong defense with Wilds."
    },
    {
      name: "Breath of Darkness Down Your Spine",
      complexity: "High",
      elements: ["Moon", "Air"],
      description: "A spirit of creeping dread and whispered terrors that makes Invaders afraid of the dark.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Incarna"], notes: "Uses Incarna token (shadowy figure). Requires Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Creeping Dread", text: "Whenever you generate Fear in a land, you may Push 1 Explorer from that land." },
      innate: { name: "Nightmares Seep Through", text: "At 2 Moon + 1 Air: 2 Fear. At 3 Moon + 2 Air: +1 Fear. At 5 Moon + 3 Air: +1 Fear. Invaders do -1 Damage during Ravage." },
      startingCards: [
        { name: "Creeping Horror", cost: 1, speed: "Slow", elements: ["Moon", "Air"], effect: "2 Fear. Push up to 1 Explorer per Fear generated." },
        { name: "Gift of Lurking Terror", cost: 0, speed: "Fast", elements: ["Moon", "Air"], effect: "Target Spirit generates +1 Fear from each of their Powers this turn." },
        { name: "Shadows of the Unfamiliar", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Animal"], effect: "1 Fear. Defend 2. Push up to 1 Dahan." },
        { name: "Glimpse of Deeper Darkness", cost: 2, speed: "Slow", elements: ["Moon", "Air", "Earth"], effect: "3 Fear. If this generates 5+ total Fear, Skip one Invader Action here." }
      ],
      playstyle: "Fear amplifier that pushes Explorers when generating terror. Excels at psychological warfare."
    },
    {
      name: "Relentless Gaze of the Sun",
      complexity: "High",
      elements: ["Sun", "Fire", "Air"],
      description: "A spirit of the scorching, unblinking sun that creates Badlands and punishes exposure.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Badlands"], notes: "Requires Badlands tokens. Needs Base Game + Jagged Earth + Nature Incarnate. Harms Dahan too!" },
      specialRule: { name: "Domain of the Sun's Reach", text: "Your Sacred Sites are in lands with 2+ Badlands (in addition to lands with 2+ Presence)." },
      innate: { name: "Searing Glare", text: "At 2 Sun + 2 Fire: 1 Damage per Badlands. At 3 Sun + 3 Fire + 1 Air: Add 1 Badlands. +1 Damage per Badlands. At 4 Sun + 4 Fire + 2 Air: +1 Damage per Badlands." },
      startingCards: [
        { name: "Focus the Sun's Rays", cost: 0, speed: "Slow", elements: ["Sun", "Fire", "Air"], effect: "1 Damage. 2 Damage to Dahan. Move up to 3 Presence to target land." },
        { name: "Blinding Heat", cost: 1, speed: "Fast", elements: ["Sun", "Fire"], effect: "Invaders skip Build. Add 1 Badlands." },
        { name: "Scorched Shadows Flee the Day", cost: 1, speed: "Fast", elements: ["Sun", "Fire", "Air"], effect: "Push up to 3 Dahan. 1 Fear." },
        { name: "Parching Sun-Heat", cost: 2, speed: "Slow", elements: ["Sun", "Fire", "Air", "Earth"], effect: "Add 1 Badlands. 2 Damage. 1 Damage to Dahan." }
      ],
      playstyle: "Badlands creator that scales damage with desolation. Harms Dahan too, so requires careful play."
    },
    {
      name: "Wandering Voice Keens Delirium",
      complexity: "High",
      elements: ["Moon", "Air", "Water"],
      description: "A spirit of maddening sounds that spreads confusion and delirium among Invaders.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Strife"], notes: "Requires Strife tokens. Needs Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Maddening Wail", text: "Once per turn, before or after a Power adds Strife, you may add 1 Strife to that land." },
      innate: { name: "Sounds No One Else Can Hear", text: "At 2 Moon + 2 Air: 1 Fear. Add 1 Strife. At 3 Moon + 3 Air + 1 Water: +1 Fear. +1 Strife. At 4 Moon + 4 Air + 2 Water: +1 Fear. Invaders with Strife damage other Invaders." },
      startingCards: [
        { name: "Disorienting Buzz", cost: 0, speed: "Fast", elements: ["Moon", "Air"], effect: "1 Fear. Push up to 1 Explorer." },
        { name: "Gift of Madness", cost: 1, speed: "Fast", elements: ["Moon", "Air", "Water"], effect: "Target Spirit may add 1 Strife to a land with their Presence." },
        { name: "Incomprehensible Shriek", cost: 1, speed: "Slow", elements: ["Moon", "Air", "Water"], effect: "2 Fear. Add 1 Strife." },
        { name: "Voices in the Wind Bring Strife", cost: 2, speed: "Slow", elements: ["Moon", "Air", "Water", "Animal"], effect: "2 Fear. Add 2 Strife to different Invaders." }
      ],
      playstyle: "Strife spreader that makes Invaders attack each other. Sound-based psychological warfare."
    },
    {
      name: "Wounded Waters Bleeding",
      complexity: "High",
      elements: ["Moon", "Water", "Earth", "Animal"],
      description: "A spirit of polluted, corrupted waters that uses its own suffering as a weapon.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Disease"], notes: "Requires Disease tokens. Starts with Blight in its land. Needs Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Corruption Spreads", text: "After setup, add 1 Blight to your starting land. Your Presence in Blighted Wetlands is also a Sacred Site." },
      innate: { name: "Tainted Runoff", text: "At 1 Moon + 2 Water + 1 Earth: In a Blighted land, 2 Damage. At 2 Moon + 3 Water + 2 Earth: +2 Damage. At 3 Moon + 4 Water + 3 Earth: Repeat in a different Blighted land." },
      startingCards: [
        { name: "Gift of Tainted Sustenance", cost: 0, speed: "Fast", elements: ["Moon", "Water", "Animal"], effect: "Target Spirit gains 3 Energy. Add 1 Blight to one of their lands with Presence." },
        { name: "Sanguinary Taint", cost: 1, speed: "Slow", elements: ["Moon", "Water", "Earth"], effect: "If target land has Blight: 2 Fear. 2 Damage." },
        { name: "Miasmic Swamp", cost: 1, speed: "Fast", elements: ["Moon", "Water", "Earth", "Animal"], effect: "Defend 3. Add 1 Disease." },
        { name: "Poisoned Fountain", cost: 2, speed: "Slow", elements: ["Moon", "Water", "Earth"], effect: "Add 1 Blight. 1 Damage per Blight." }
      ],
      playstyle: "Weaponizes Blight and pollution. Thrives in corrupted lands. Dark, powerful, risky."
    },
    {
      name: "Dances Up Earthquakes",
      complexity: "Very High",
      elements: ["Moon", "Fire", "Earth"],
      description: "A spirit of seismic power that builds up energy over time for devastating earthquakes.",
      requirements: { products: ["Base Game", "Jagged Earth", "Nature Incarnate"], tokens: ["Quake", "Badlands", "Incarna"], notes: "Uses unique Quake tokens and Impending mechanic. Starts with 6 unique powers! Requires Base Game + Jagged Earth + Nature Incarnate." },
      specialRule: { name: "Foundations Shift and Strain", text: "You have an Impending slot. Cards there take effect one turn later." },
      innate: { name: "The Earth Moves and Shakes", text: "At 2 Moon + 2 Fire + 2 Earth: 2 Damage. Destroy 1 Town. At 3 Moon + 3 Fire + 3 Earth: +2 Damage. At 4 Moon + 4 Fire + 4 Earth: Destroy all Towns." },
      startingCards: [
        { name: "Begin a Dance of Decades", cost: 1, speed: "Fast", elements: ["Moon", "Fire", "Earth"], effect: "Put a Power Card from hand into your Impending space. You may remove 1 Energy from an Impending Card." },
        { name: "Rhythmic Power Builds to a Cataclysmic Crescendo", cost: 0, speed: "Fast", elements: ["Moon", "Fire", "Earth"], effect: "Choose up to 2 cards in your Impending space. They each gain or lose 1 Energy." },
        { name: "Tremors Knock Them Down", cost: 1, speed: "Slow", elements: ["Moon", "Earth"], effect: "Destroy all Explorer in target land. Push up to 2 Dahan." },
        { name: "Dance the Ground to Ruin", cost: 2, speed: "Slow", elements: ["Moon", "Fire", "Earth"], effect: "2 Fear. 2 Damage. Add 1 Badlands." }
      ],
      playstyle: "Delayed gratification specialist that builds massive earthquakes over multiple turns. Extremely complex timing."
    }
  ]
};

const ElementIcon = ({ element }) => {
  const colors = {
    Sun: "bg-yellow-400 text-yellow-900",
    Moon: "bg-indigo-400 text-indigo-900",
    Fire: "bg-orange-500 text-orange-100",
    Air: "bg-purple-400 text-purple-900",
    Water: "bg-blue-500 text-blue-100",
    Earth: "bg-amber-700 text-amber-100",
    Plant: "bg-green-500 text-green-100",
    Animal: "bg-red-600 text-red-100"
  };
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${colors[element] || 'bg-gray-400'}`}>
      {element[0]}
    </span>
  );
};

const ComplexityBadge = ({ complexity }) => {
  const colors = {
    "Low": "bg-emerald-600 text-emerald-100",
    "Moderate": "bg-amber-500 text-amber-100",
    "High": "bg-orange-600 text-orange-100",
    "Very High": "bg-red-700 text-red-100"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[complexity]}`}>
      {complexity}
    </span>
  );
};

const TokenBadge = ({ token }) => {
  const colors = {
    "Beasts": "bg-red-800", "Wilds": "bg-green-800", "Disease": "bg-purple-800",
    "Strife": "bg-yellow-800", "Badlands": "bg-orange-800", "Element Markers": "bg-blue-800",
    "Incarna": "bg-pink-800", "Quake": "bg-stone-600", "Time (special)": "bg-cyan-800"
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium text-white ${colors[token] || 'bg-gray-600'}`}>
      {token}
    </span>
  );
};

const PowerCard = ({ card }) => (
  <div className="bg-stone-800 rounded-lg p-4 border border-stone-600 hover:border-amber-500 transition-colors">
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-bold text-amber-300 text-sm">{card.name}</h4>
      <div className="flex items-center gap-2">
        <span className={`px-2 py-0.5 rounded text-xs font-bold ${card.speed === 'Fast' ? 'bg-orange-600' : 'bg-blue-600'}`}>
          {card.speed}
        </span>
        <span className="bg-amber-600 text-amber-100 px-2 py-0.5 rounded text-xs font-bold">{card.cost}⚡</span>
      </div>
    </div>
    <div className="flex gap-1 mb-2">
      {card.elements.map((el, i) => <ElementIcon key={i} element={el} />)}
    </div>
    <p className="text-stone-300 text-sm leading-relaxed">{card.effect}</p>
  </div>
);

const RequirementsSection = ({ requirements }) => (
  <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-4 border border-teal-700/50">
    <h3 className="text-lg font-bold text-teal-300 mb-3">📦 Requirements to Play</h3>
    <div className="space-y-2">
      <div>
        <span className="text-stone-400 text-sm">Products needed: </span>
        <span className="text-teal-200 font-medium">{requirements.products.join(" + ")}</span>
      </div>
      {requirements.tokens.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-stone-400 text-sm">Tokens required: </span>
          {requirements.tokens.map((token, i) => <TokenBadge key={i} token={token} />)}
        </div>
      )}
      <p className="text-stone-400 text-sm italic mt-2">{requirements.notes}</p>
    </div>
  </div>
);

const SpiritDetail = ({ spirit, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-stone-900 to-stone-950 rounded-2xl border border-stone-700 shadow-2xl">
        <div className="relative p-6 border-b border-stone-700 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-t-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-white text-3xl leading-none">×</button>
          <h2 className="text-3xl font-black text-amber-100 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{spirit.name}</h2>
          <div className="flex items-center gap-3 mb-3">
            <ComplexityBadge complexity={spirit.complexity} />
            <div className="flex gap-1">{spirit.elements.map((el, i) => <ElementIcon key={i} element={el} />)}</div>
          </div>
          <p className="text-stone-300 italic">{spirit.description}</p>
        </div>
        <div className="p-6 space-y-6">
          <RequirementsSection requirements={spirit.requirements} />
          <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700">
            <h3 className="text-lg font-bold text-amber-400 mb-2">⚔️ Playstyle</h3>
            <p className="text-stone-300">{spirit.playstyle}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-4 border border-purple-700/50">
            <h3 className="text-lg font-bold text-purple-300 mb-2">✨ Special Rule: {spirit.specialRule.name}</h3>
            <p className="text-stone-300">{spirit.specialRule.text}</p>
          </div>
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-4 border border-orange-700/50">
            <h3 className="text-lg font-bold text-orange-300 mb-2">🔥 Innate Power: {spirit.innate.name}</h3>
            <p className="text-stone-300">{spirit.innate.text}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">📜 Starting Power Cards</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {spirit.startingCards.map((card, i) => <PowerCard key={i} card={card} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SpiritCard = ({ spirit, onClick }) => (
  <div onClick={onClick} className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl p-4 border border-stone-700 hover:border-amber-500 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-900/20">
    <h3 className="font-bold text-amber-200 leading-tight mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{spirit.name}</h3>
    <div className="flex items-center gap-2 mb-2"><ComplexityBadge complexity={spirit.complexity} /></div>
    <div className="flex gap-1 mb-2">{spirit.elements.map((el, i) => <ElementIcon key={i} element={el} />)}</div>
    {spirit.requirements.tokens.length > 0 && (
      <div className="flex flex-wrap gap-1 mb-2">
        {spirit.requirements.tokens.slice(0, 3).map((token, i) => <TokenBadge key={i} token={token} />)}
        {spirit.requirements.tokens.length > 3 && <span className="text-stone-500 text-xs">+{spirit.requirements.tokens.length - 3} more</span>}
      </div>
    )}
    <p className="text-stone-400 text-sm line-clamp-2">{spirit.description}</p>
  </div>
);

const ExpansionSection = ({ name, spirits, onSpiritClick }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      <h2 className="text-2xl font-black text-amber-400 whitespace-nowrap" style={{ fontFamily: 'Cinzel, serif' }}>{name}</h2>
      <span className="bg-amber-600 text-amber-100 px-3 py-1 rounded-full text-sm font-bold">{spirits.length} spirits</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {spirits.map((spirit, i) => <SpiritCard key={i} spirit={spirit} onClick={() => onSpiritClick(spirit)} />)}
    </div>
  </div>
);
400 mr-2">Tokens:</span>
            <button onClick={() => setTokenFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === 'all' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}>All</button>
            <button onClick={() => setTokenFilter('none')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === 'none' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}>No tokens</button>
            {allTokens.map(token => (
              <button key={token} onClick={() => setTokenFilter(token)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === token ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}>{token}</button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {Object.entries(spiritData).map(([expansion, spirits]) => {
          const filtered = filterSpirits(spirits);
          if (filtered.length === 0) return null;
          return <ExpansionSection key={expansion} name={expansion} spirits={filtered} onSpiritClick={setSelectedSpirit} />;
        })}
      </main>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700">
          <h3 className="text-xl font-bold text-amber-400 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Token Legend</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div><TokenBadge token="Beasts" /> <span className="text-stone-400 ml-2">Branch & Claw / Jagged Earth / Horizons</span></div>
            <div><TokenBadge token="Wilds" /> <span className="text-stone-400 ml-2">Branch & Claw / Jagged Earth / Horizons</span></div>
            <div><TokenBadge token="Disease" /> <span className="text-stone-400 ml-2">Branch & Claw / Jagged Earth</span></div>
            <div><TokenBadge token="Strife" /> <span className="text-stone-400 ml-2">Branch & Claw / Jagged Earth</span></div>
            <div><TokenBadge token="Badlands" /> <span className="text-stone-400 ml-2">Jagged Earth / Horizons</span></div>
            <div><TokenBadge token="Element Markers" /> <span className="text-stone-400 ml-2">Jagged Earth</span></div>
            <div><TokenBadge token="Incarna" /> <span className="text-stone-400 ml-2">Nature Incarnate</span></div>
            <div><TokenBadge token="Quake" /> <span className="text-stone-400 ml-2">Nature Incarnate</span></div>
          </div>
        </div>
      </div>

      <footer className="border-t border-stone-800 py-8 text-center text-stone-500">
        <p>Spirit Island is designed by R. Eric Reuss and published by Greater Than Games</p>
        <p className="mt-2">This reference tool is for personal use only</p>
      </footer>

      {selectedSpirit && <SpiritDetail spirit={selectedSpirit} onClose={() => setSelectedSpirit(null)} />}
    </div>
  );
}
