// Spirit data for the flowchart selection tool
// Each spirit tagged with: complexity (B/I/A), playstyles, speed, mechanics, elements

export const flowchartSpirits = [
  // === BEGINNER (B) - Low complexity ===
  {
    id: "lightning",
    name: "Lightning's Swift Strike",
    complexity: "B",
    playstyles: ["G"],
    speed: "F",
    mechanics: ["DD", "IN"],
    elements: ["FR", "AR"],
    tagline: "Fast striker that destroys invaders before they act.",
    description: "High damage, fast powers, simple decisions. Perfect for players who want to kill things quickly.",
    expansion: "Base Game"
  },
  {
    id: "river",
    name: "River Surges in Sunlight",
    complexity: "B",
    playstyles: ["C", "S"],
    speed: "M",
    mechanics: ["PG", "IN", "PS"],
    elements: ["SN", "WT"],
    tagline: "Flowing river that pushes invaders and supports allies.",
    description: "Control-focused spirit that pushes Invaders around and supports allies. Strong scaling innate power.",
    expansion: "Base Game"
  },
  {
    id: "shadows",
    name: "Shadows Flicker Like Flame",
    complexity: "B",
    playstyles: ["F"],
    speed: "S",
    mechanics: ["FG"],
    elements: ["MN", "FR", "AR"],
    tagline: "Darkness and terror specialist that generates massive fear.",
    description: "Fear generation specialist. Weak early game damage but scales into a terror machine.",
    expansion: "Base Game"
  },
  {
    id: "vital_strength",
    name: "Vital Strength of the Earth",
    complexity: "B",
    playstyles: ["D", "S"],
    speed: "S",
    mechanics: ["DP", "BM", "DS"],
    elements: ["SN", "ET", "PL"],
    tagline: "Ultra-defensive tank that protects everything.",
    description: "Ultra-defensive tank. Protects everything with massive Defend. Slow to deal damage but very hard to push out.",
    expansion: "Base Game"
  },
  {
    id: "teeth",
    name: "Devouring Teeth Lurk Underfoot",
    complexity: "B",
    playstyles: ["G"],
    speed: "M",
    mechanics: ["DD", "TS"],
    elements: ["MN", "FR", "ET", "AN"],
    tagline: "Predatory beasts that emerge to devour invaders.",
    description: "Beast-focused predator. Simple mechanics with Beasts tokens providing damage and defense.",
    expansion: "Horizons"
  },
  {
    id: "eyes_watch",
    name: "Eyes Watch from the Trees",
    complexity: "B",
    playstyles: ["D", "F"],
    speed: "F",
    mechanics: ["FG", "DP"],
    elements: ["MN", "AR", "PL"],
    tagline: "Watchful guardian generating fear from the shadows.",
    description: "Defensive fear generator. Spreads Wilds and watches over the island. Great for beginners.",
    expansion: "Horizons"
  },
  {
    id: "fathomless_mud",
    name: "Fathomless Mud of the Swamp",
    complexity: "B",
    playstyles: ["D"],
    speed: "S",
    mechanics: ["DP", "DD"],
    elements: ["MN", "WT", "ET"],
    tagline: "Treacherous swamp that traps and drowns invaders.",
    description: "Wetland specialist that defends strongly in swamps. Simple and sturdy with drowning damage.",
    expansion: "Horizons"
  },
  {
    id: "rising_heat",
    name: "Rising Heat of Stone and Sand",
    complexity: "B",
    playstyles: ["G"],
    speed: "M",
    mechanics: ["DD", "AD"],
    elements: ["SN", "FR", "AR", "ET"],
    tagline: "Scorching heat that bakes invaders in deserts.",
    description: "Heat-based aggressor. Strong in Sands and Mountains. Simple damage dealer with push mechanics.",
    expansion: "Horizons"
  },
  {
    id: "sun_bright",
    name: "Sun-Bright Whirlwind",
    complexity: "B",
    playstyles: ["C"],
    speed: "F",
    mechanics: ["PG"],
    elements: ["SN", "FR", "AR"],
    tagline: "Brilliant winds that scatter everything in their path.",
    description: "Push specialist that scatters everything. Simple but effective at disrupting Invader plans.",
    expansion: "Horizons"
  },

  // === INTERMEDIATE (I) - Moderate complexity ===
  {
    id: "green",
    name: "A Spread of Rampant Green",
    complexity: "I",
    playstyles: ["C", "D"],
    speed: "S",
    mechanics: ["PS", "AD"],
    elements: ["SN", "WT", "PL"],
    tagline: "Unstoppable growth that chokes out invaders.",
    description: "Presence-spreading specialist that chokes Invader expansion. Strong board control through ubiquity.",
    expansion: "Base Game"
  },
  {
    id: "thunderspeaker",
    name: "Thunderspeaker",
    complexity: "I",
    playstyles: ["G", "D"],
    speed: "M",
    mechanics: ["DS", "DD"],
    elements: ["SN", "FR", "AR"],
    tagline: "Dahan commander that weaponizes the native population.",
    description: "Extremely powerful with Dahan but vulnerable without them. Directs Dahan in devastating assaults.",
    expansion: "Base Game"
  },
  {
    id: "keeper",
    name: "Keeper of the Forbidden Wilds",
    complexity: "I",
    playstyles: ["D", "G"],
    speed: "M",
    mechanics: ["AD", "DP", "TS"],
    elements: ["SN", "FR", "PL"],
    tagline: "Ancient guardian using Wilds tokens to protect territory.",
    description: "Territory controller that spreads Wilds tokens. Defensive but capable of punishing trespassers.",
    expansion: "Branch & Claw"
  },
  {
    id: "fangs",
    name: "Sharp Fangs Behind the Leaves",
    complexity: "I",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["TS", "DD", "AD"],
    elements: ["MN", "FR", "PL", "AN"],
    tagline: "Beast commander spreading and weaponizing animal tokens.",
    description: "Beast commander that spreads and weaponizes animal tokens. Strong at disruption and area denial.",
    expansion: "Branch & Claw"
  },
  {
    id: "many_minds",
    name: "Many Minds Move as One",
    complexity: "I",
    playstyles: ["C", "F"],
    speed: "F",
    mechanics: ["TS", "FG", "PS"],
    elements: ["SN", "AR", "AN"],
    tagline: "Swarming creatures acting as a collective intelligence.",
    description: "Swarm controller that gains elements from Beasts. Mobile and disruptive with fear generation.",
    expansion: "Jagged Earth"
  },
  {
    id: "volcano",
    name: "Volcano Looming High",
    complexity: "I",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["DD", "AD", "IN"],
    elements: ["SN", "FR", "AR", "ET"],
    tagline: "Volcanic power building to explosive eruptions.",
    description: "Build-up destroyer that creates Badlands and unleashes devastating eruptions. Mountain-focused.",
    expansion: "Jagged Earth"
  },
  {
    id: "stone",
    name: "Stone's Unyielding Defiance",
    complexity: "I",
    playstyles: ["D"],
    speed: "S",
    mechanics: ["DP", "BM"],
    elements: ["SN", "ET"],
    tagline: "Immovable bedrock that refuses to yield.",
    description: "Ultimate defender. Immovable Presence, massive Defend values, and can prevent Blight with sacrifice.",
    expansion: "Jagged Earth"
  },
  {
    id: "shifting_memory",
    name: "Shifting Memory of Ages",
    complexity: "I",
    playstyles: ["S"],
    speed: "F",
    mechanics: ["CM", "ER"],
    elements: ["MN", "AR", "ET"],
    tagline: "Support spirit preparing elements for powerful future turns.",
    description: "Support specialist that prepares elements for powerful future turns. Helps allies gain powers and Energy.",
    expansion: "Jagged Earth"
  },
  {
    id: "trickster",
    name: "Grinning Trickster Stirs Up Trouble",
    complexity: "I",
    playstyles: ["C", "F"],
    speed: "F",
    mechanics: ["TS", "FG"],
    elements: ["SN", "MN", "FR", "AR"],
    tagline: "Chaos agent that makes invaders destroy each other.",
    description: "Chaos agent that spreads Strife and watches Invaders destroy each other. Unpredictable but fun.",
    expansion: "Jagged Earth"
  },
  {
    id: "lure",
    name: "Lure of the Deep Wilderness",
    complexity: "I",
    playstyles: ["C"],
    speed: "S",
    mechanics: ["PG", "AD", "IS"],
    elements: ["MN", "FR", "PL"],
    tagline: "Trap setter luring invaders into deadly wilderness.",
    description: "Trap setter that lures Invaders into deadly Badlands. Denies exploration with wilderness tokens.",
    expansion: "Jagged Earth"
  },
  {
    id: "ember_eyed",
    name: "Ember-Eyed Behemoth",
    complexity: "I",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["DD", "IN"],
    elements: ["SN", "FR", "ET", "AN"],
    tagline: "Massive walking creature that tramples everything.",
    description: "Physical presence on the board as a walking Behemoth. Devastating in its location but needs to move.",
    expansion: "Nature Incarnate"
  },
  {
    id: "hearth_vigil",
    name: "Hearth-Vigil",
    complexity: "I",
    playstyles: ["D", "S"],
    speed: "F",
    mechanics: ["DP", "DS", "BM"],
    elements: ["SN", "FR", "ET", "PL"],
    tagline: "Protective home-fires defending the Dahan.",
    description: "Dahan defender that makes settlements into fortresses. Combines fire with protection.",
    expansion: "Nature Incarnate"
  },
  {
    id: "towering_roots",
    name: "Towering Roots of the Jungle",
    complexity: "I",
    playstyles: ["D", "C"],
    speed: "M",
    mechanics: ["PS", "DP", "AD"],
    elements: ["SN", "WT", "ET", "PL"],
    tagline: "Ancient jungle trees with deep roots and spreading canopy.",
    description: "Spreading jungle guardian. Extends Presence easily and provides strong defense with Wilds.",
    expansion: "Nature Incarnate"
  },

  // === ADVANCED (A) - High / Very High complexity ===
  {
    id: "bodan",
    name: "Bringer of Dreams and Nightmares",
    complexity: "A",
    playstyles: ["F"],
    speed: "F",
    mechanics: ["FG"],
    elements: ["MN", "AR"],
    tagline: "Pure fear victory specialist that cannot deal damage.",
    description: "Pure Fear victory specialist. Cannot deal damage but generates massive amounts of terror.",
    expansion: "Base Game"
  },
  {
    id: "ocean",
    name: "Ocean's Hungry Grasp",
    complexity: "A",
    playstyles: ["G", "C"],
    speed: "F",
    mechanics: ["DD", "PG", "IN"],
    elements: ["MN", "WT", "ET"],
    tagline: "Devouring ocean that drowns coastal invaders.",
    description: "Coastal dominator that drowns Invaders. Restricted placement but extremely powerful in its domain.",
    expansion: "Base Game"
  },
  {
    id: "wildfire",
    name: "Heart of the Wildfire",
    complexity: "A",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["DD", "AD", "BM"],
    elements: ["FR", "PL"],
    tagline: "Destructive fire that burns everything in its path.",
    description: "Aggressive destroyer that weaponizes Blight. Extremely high damage but risks the island's health.",
    expansion: "Promo Pack 1"
  },
  {
    id: "serpent",
    name: "Serpent Slumbering Beneath the Island",
    complexity: "A",
    playstyles: ["S"],
    speed: "S",
    mechanics: ["ER", "CM"],
    elements: ["MN", "FR", "WT", "ET", "PL", "AN"],
    tagline: "Ancient power slowly awakening to apocalyptic strength.",
    description: "Slow-start monster that takes many turns to awaken but becomes apocalyptically powerful.",
    expansion: "Promo Pack 1"
  },
  {
    id: "shroud",
    name: "Shroud of Silent Mist",
    complexity: "A",
    playstyles: ["G", "D"],
    speed: "M",
    mechanics: ["DD", "TS", "IS"],
    elements: ["MN", "AR", "WT"],
    tagline: "Deadly choking mist that silently eliminates invaders.",
    description: "Silent killer using Disease tokens. Excellent at picking off isolated Invaders. Defensive mist abilities.",
    expansion: "Jagged Earth"
  },
  {
    id: "vengeance",
    name: "Vengeance as a Burning Plague",
    complexity: "A",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["TS", "DD", "BM"],
    elements: ["MN", "FR", "ET", "AN"],
    tagline: "Spirit of hatred spreading disease as retribution.",
    description: "Retribution specialist that turns Blight into Disease. Thrives when the island is suffering.",
    expansion: "Jagged Earth"
  },
  {
    id: "fractured",
    name: "Fractured Days Split the Sky",
    complexity: "A",
    playstyles: ["S", "C"],
    speed: "F",
    mechanics: ["CM", "IN"],
    elements: ["SN", "MN", "AR"],
    tagline: "Time manipulator that repeats and disrupts events.",
    description: "Time manipulator that repeats powers and disrupts event sequences. High skill ceiling.",
    expansion: "Jagged Earth"
  },
  {
    id: "starlight",
    name: "Starlight Seeks Its Form",
    complexity: "A",
    playstyles: ["S"],
    speed: "M",
    mechanics: ["CM", "ER"],
    elements: ["MN", "AR", "FR", "WT", "ET", "PL", "AN"],
    tagline: "Formless spirit that chooses its own nature.",
    description: "Shape-shifting spirit that defines its own identity. Maximum flexibility but requires planning.",
    expansion: "Jagged Earth"
  },
  {
    id: "downpour",
    name: "Downpour Drenches the World",
    complexity: "A",
    playstyles: ["D", "C"],
    speed: "S",
    mechanics: ["AD", "DP", "PG"],
    elements: ["SN", "WT", "AR", "ET"],
    tagline: "Relentless rain flooding the land and drowning invaders.",
    description: "Weather controller that turns lands to Wetlands and floods everything. Strong area denial and defense.",
    expansion: "Promo Pack 2"
  },
  {
    id: "finder",
    name: "Finder of Paths Unseen",
    complexity: "A",
    playstyles: ["C"],
    speed: "F",
    mechanics: ["PG", "IS"],
    elements: ["MN", "AR", "WT"],
    tagline: "Spirit of hidden paths with maximum mobility.",
    description: "Ultimate mobility spirit that treats any two lands as adjacent. Extremely flexible positioning.",
    expansion: "Promo Pack 2"
  },
  {
    id: "breath_darkness",
    name: "Breath of Darkness Down Your Spine",
    complexity: "A",
    playstyles: ["F"],
    speed: "M",
    mechanics: ["FG", "PG"],
    elements: ["MN", "AR"],
    tagline: "Creeping dread that pushes explorers with terror.",
    description: "Fear amplifier that pushes Explorers when generating terror. Excels at psychological warfare.",
    expansion: "Nature Incarnate"
  },
  {
    id: "relentless_gaze",
    name: "Relentless Gaze of the Sun",
    complexity: "A",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["DD", "AD"],
    elements: ["SN", "FR", "AR"],
    tagline: "Scorching sun creating Badlands and punishing exposure.",
    description: "Badlands creator that scales damage with desolation. Harms Dahan too, so requires careful play.",
    expansion: "Nature Incarnate"
  },
  {
    id: "wandering_voice",
    name: "Wandering Voice Keens Delirium",
    complexity: "A",
    playstyles: ["C", "F"],
    speed: "M",
    mechanics: ["TS", "FG"],
    elements: ["MN", "AR", "WT"],
    tagline: "Maddening sounds spreading confusion and strife.",
    description: "Strife spreader that makes Invaders attack each other. Sound-based psychological warfare.",
    expansion: "Nature Incarnate"
  },
  {
    id: "wounded_waters",
    name: "Wounded Waters Bleeding",
    complexity: "A",
    playstyles: ["G", "D"],
    speed: "S",
    mechanics: ["DD", "BM", "TS"],
    elements: ["MN", "WT", "ET", "AN"],
    tagline: "Corrupted waters using suffering as a weapon.",
    description: "Weaponizes Blight and pollution. Thrives in corrupted lands. Dark, powerful, risky.",
    expansion: "Nature Incarnate"
  },
  {
    id: "dances_earthquakes",
    name: "Dances Up Earthquakes",
    complexity: "A",
    playstyles: ["G"],
    speed: "S",
    mechanics: ["DD", "CM", "AD"],
    elements: ["MN", "FR", "ET"],
    tagline: "Seismic power building devastating earthquakes over time.",
    description: "Delayed gratification specialist that builds massive earthquakes over multiple turns. Extremely complex.",
    expansion: "Nature Incarnate"
  }
];

// Complexity options
export const complexityOptions = [
  { code: "B", label: "Beginner", description: "Simple mechanics, straightforward strategy" },
  { code: "I", label: "Intermediate", description: "More moving parts, requires planning ahead" },
  { code: "A", label: "Advanced", description: "Complex decision trees, high skill ceiling" }
];

// Playstyle options
export const playstyleOptions = [
  { code: "G", label: "Aggressive", description: "Destroy invaders quickly, deal high damage, remove threats before they escalate" },
  { code: "D", label: "Defensive", description: "Protect the land and Dahan, prevent builds and ravages, sustain through damage" },
  { code: "C", label: "Control", description: "Manipulate invader/Dahan placement, redirect threats, deny actions through positioning" },
  { code: "F", label: "Fear-focused", description: "Generate terror, win through fear victory, psychological warfare" },
  { code: "S", label: "Support", description: "Enhance other spirits, provide energy/cards, enable combos (solo: self-sustain)" }
];

// Speed options
export const speedOptions = [
  { code: "F", label: "Fast", description: "Act before invaders - prevent damage proactively" },
  { code: "S", label: "Slow", description: "Act after invaders - bigger effects, reactive play" },
  { code: "M", label: "Mixed", description: "Balanced toolkit - flexible timing" }
];

// Mechanic options
export const mechanicOptions = [
  { code: "DD", label: "Direct Damage", description: "Destroying invaders through damage powers" },
  { code: "AD", label: "Area Denial", description: "Making lands unsafe for invaders" },
  { code: "PG", label: "Push/Gather", description: "Moving invaders and Dahan between lands" },
  { code: "DP", label: "Defense/Protect", description: "Preventing damage to lands/Dahan" },
  { code: "FG", label: "Fear Generation", description: "Creating fear to advance terror levels" },
  { code: "DS", label: "Dahan Synergy", description: "Empowering or working with the Dahan" },
  { code: "CM", label: "Card Manipulation", description: "Drawing, recycling, or playing extra cards" },
  { code: "ER", label: "Energy Ramp", description: "Building large energy reserves over time" },
  { code: "PS", label: "Presence Spread", description: "Rapidly expanding across the board" },
  { code: "BM", label: "Blight Management", description: "Removing, preventing, or using blight" },
  { code: "IS", label: "Isolate/Strand", description: "Cutting off invader movement or builds" },
  { code: "TS", label: "Token Synergy", description: "Using beasts, disease, strife, wilds, etc." },
  { code: "IN", label: "Innate Scaling", description: "Strong innate powers that grow with elements" }
];

// Element code mapping
export const elementCodes = {
  SN: "Sun", MN: "Moon", FR: "Fire", AR: "Air",
  WT: "Water", ET: "Earth", PL: "Plant", AN: "Animal"
};
