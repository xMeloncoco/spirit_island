import React from 'react';

export const ElementIcon = ({ element }) => {
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

export const ComplexityBadge = ({ complexity }) => {
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

export const TokenBadge = ({ token }) => {
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

export const PowerCard = ({ card }) => (
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

export const RequirementsSection = ({ requirements }) => (
  <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-4 border border-teal-700/50">
    <h3 className="text-lg font-bold text-teal-300 mb-3">Requirements</h3>
    <div className="space-y-3">
      {/* Origin — where the spirit comes from */}
      <div>
        <span className="text-stone-500 text-xs uppercase tracking-wider font-bold">Comes from</span>
        <div className="text-teal-200 font-medium mt-0.5">{requirements.origin}</div>
      </div>

      {/* Gameplay requirements — what you need on the table */}
      <div>
        <span className="text-stone-500 text-xs uppercase tracking-wider font-bold">Requires components from</span>
        {requirements.selfContained ? (
          <div className="mt-0.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-medium">
              Self-contained
            </span>
            <span className="text-stone-400 text-sm ml-2">Playable with just the base game + {requirements.origin}</span>
          </div>
        ) : (
          <div className="mt-0.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-900/40 border border-amber-700/50 text-amber-300 text-sm font-medium">
              Extra components needed
            </span>
            {requirements.tokenSources && requirements.tokenSources.length > 0 && (
              <div className="text-stone-300 text-sm mt-1">
                <span className="text-stone-400">Token sources: </span>
                {requirements.tokenSources.join(" / ")}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tokens */}
      {requirements.tokens.length > 0 && (
        <div>
          <span className="text-stone-500 text-xs uppercase tracking-wider font-bold">Tokens used</span>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {requirements.tokens.map((token, i) => <TokenBadge key={i} token={token} />)}
          </div>
        </div>
      )}

      {/* Jagged Earth ruleset note */}
      {requirements.jaggedEarthRuleset && (
        <div>
          <span className="text-stone-500 text-xs uppercase tracking-wider font-bold">Jagged Earth island boards</span>
          <div className="text-stone-300 text-sm mt-0.5">{requirements.jaggedEarthRuleset}</div>
        </div>
      )}

      {/* Token notes for spirits with mixed token origins */}
      {requirements.tokenNotes && (
        <p className="text-stone-400 text-sm italic">{requirements.tokenNotes}</p>
      )}

      <p className="text-stone-400 text-sm italic border-t border-stone-700/50 pt-2 mt-2">{requirements.notes}</p>
    </div>
  </div>
);

export const SpiritDetail = ({ spirit, onClose }) => (
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

export const SpiritCard = ({ spirit, onClick }) => (
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

export const ExpansionSection = ({ name, spirits, onSpiritClick }) => (
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

export const TokenLegend = () => (
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
);

export const Footer = () => (
  <footer className="border-t border-stone-800 py-8 text-center text-stone-500">
    <p>Spirit Island is designed by R. Eric Reuss and published by Greater Than Games</p>
    <p className="mt-2">This reference tool is for personal use only</p>
  </footer>
);
