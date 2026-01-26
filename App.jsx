import React, { useState } from 'react';
import { spiritData } from './spiritData';
import {
  ExpansionSection,
  SpiritDetail,
  TokenLegend,
  Footer,
  TokenBadge
} from './components';

const allTokens = [
  "Beasts", "Wilds", "Disease", "Strife", "Badlands",
  "Element Markers", "Incarna", "Quake", "Time (special)"
];

const allComplexities = ["Low", "Moderate", "High", "Very High"];

const allElements = ["Sun", "Moon", "Fire", "Air", "Water", "Earth", "Plant", "Animal"];

export default function App() {
  const [selectedSpirit, setSelectedSpirit] = useState(null);
  const [tokenFilter, setTokenFilter] = useState('all');
  const [complexityFilter, setComplexityFilter] = useState('all');
  const [expansionFilter, setExpansionFilter] = useState('all');
  const [elementFilter, setElementFilter] = useState('all');

  const filterSpirits = (spirits) => {
    return spirits.filter(spirit => {
      // Token filter
      if (tokenFilter === 'none' && spirit.requirements.tokens.length > 0) return false;
      if (tokenFilter !== 'all' && tokenFilter !== 'none' && !spirit.requirements.tokens.includes(tokenFilter)) return false;

      // Complexity filter
      if (complexityFilter !== 'all' && spirit.complexity !== complexityFilter) return false;

      // Element filter
      if (elementFilter !== 'all' && !spirit.elements.includes(elementFilter)) return false;

      return true;
    });
  };

  const allExpansions = Object.keys(spiritData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      <header className="sticky top-0 z-40 bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 border-b-2 border-amber-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-black text-amber-100 text-center mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            🌊 Spirit Island Reference 🌊
          </h1>
          <p className="text-center text-amber-200 mb-6">Browse all spirits from every expansion</p>

          <div className="space-y-3">
            {/* Complexity Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-amber-400 mr-2">Complexity:</span>
              <button
                onClick={() => setComplexityFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${complexityFilter === 'all' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
              >
                All
              </button>
              {allComplexities.map(complexity => (
                <button
                  key={complexity}
                  onClick={() => setComplexityFilter(complexity)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${complexityFilter === complexity ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                >
                  {complexity}
                </button>
              ))}
            </div>

            {/* Expansion Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-amber-400 mr-2">Expansion:</span>
              <button
                onClick={() => setExpansionFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${expansionFilter === 'all' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
              >
                All
              </button>
              {allExpansions.map(expansion => (
                <button
                  key={expansion}
                  onClick={() => setExpansionFilter(expansion)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${expansionFilter === expansion ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                >
                  {expansion}
                </button>
              ))}
            </div>

            {/* Element Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-amber-400 mr-2">Elements:</span>
              <button
                onClick={() => setElementFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${elementFilter === 'all' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
              >
                All
              </button>
              {allElements.map(element => (
                <button
                  key={element}
                  onClick={() => setElementFilter(element)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${elementFilter === element ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                >
                  {element}
                </button>
              ))}
            </div>

            {/* Token Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-amber-400 mr-2">Tokens:</span>
              <button
                onClick={() => setTokenFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === 'all' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setTokenFilter('none')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === 'none' ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
              >
                No tokens
              </button>
              {allTokens.map(token => (
                <button
                  key={token}
                  onClick={() => setTokenFilter(token)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${tokenFilter === token ? 'bg-teal-600 text-teal-100' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {Object.entries(spiritData)
          .filter(([expansion]) => expansionFilter === 'all' || expansionFilter === expansion)
          .map(([expansion, spirits]) => {
            const filtered = filterSpirits(spirits);
            if (filtered.length === 0) return null;
            return <ExpansionSection key={expansion} name={expansion} spirits={filtered} onSpiritClick={setSelectedSpirit} />;
          })}
      </main>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <TokenLegend />
      </div>

      <Footer />

      {selectedSpirit && <SpiritDetail spirit={selectedSpirit} onClose={() => setSelectedSpirit(null)} />}
    </div>
  );
}
