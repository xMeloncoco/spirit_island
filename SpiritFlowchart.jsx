import React, { useState, useMemo, useEffect } from 'react';
import {
  flowchartSpirits,
  complexityOptions,
  playstyleOptions,
  speedOptions,
  mechanicOptions,
  elementCodes
} from './flowchartData';
import { spiritData } from './spiritData';
import { SpiritDetail } from './components';

// === LocalStorage helpers ===

const STORAGE_KEY = 'spiritFlowchartLastResult';

function saveResult(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* ignore */ }
}

function loadResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

// === Find reference spirit by name ===

function findReferenceSpirit(name) {
  for (const spirits of Object.values(spiritData)) {
    const match = spirits.find(s => s.name === name);
    if (match) return match;
  }
  return null;
}

// === Scoring ===

function scoreSpirits(filters, rankedPlaystyles) {
  const { complexity, speed, mechanics } = filters;
  const pool = flowchartSpirits.filter(s => s.complexity === complexity);

  return pool.map(spirit => {
    let score = 0;

    if (rankedPlaystyles) {
      rankedPlaystyles.forEach((code, idx) => {
        const weight = idx === 0 ? 5 : idx === 1 ? 3 : idx === 2 ? 1 : 0;
        if (spirit.playstyles.includes(code)) {
          score += weight;
        }
      });
    } else if (filters.playstyle) {
      if (spirit.playstyles.includes(filters.playstyle)) {
        score += 5;
      }
    }

    if (speed) {
      if (spirit.speed === speed) {
        score += 3;
      } else if (speed === "M" || spirit.speed === "M") {
        score += 2;
      }
    }

    if (mechanics && mechanics.length > 0) {
      mechanics.forEach(m => {
        if (spirit.mechanics.includes(m)) score += 3;
      });
    }

    return { ...spirit, score };
  }).sort((a, b) => b.score - a.score);
}

function categorizeTiers(scored) {
  if (scored.length === 0) return { best: [], runners: [], others: [] };
  const topScore = scored[0].score;
  const best = scored.filter(s => s.score >= topScore - 2);
  const threshold = topScore * 0.8;
  const runners = scored.filter(s => s.score < topScore - 2 && s.score >= threshold);
  const others = scored.filter(s => s.score < threshold);
  return { best, runners, others };
}

function generateCode(complexity, rankedPlaystyles, speed, mechanics) {
  const playstyleCode = rankedPlaystyles ? rankedPlaystyles.join('') : '';
  const mechCode = mechanics.length > 0 ? mechanics.join(',') : '';
  return `${complexity}-${playstyleCode}-${speed}-${mechCode}`;
}

// === Components ===

function StepIndicator({ steps, current }) {
  return (
    <div className="flex items-center justify-center gap-1 mb-8">
      {steps.map((label, i) => (
        <React.Fragment key={i}>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            i === current ? 'bg-amber-600 text-amber-100' :
            i < current ? 'bg-emerald-700 text-emerald-100' :
            'bg-stone-800 text-stone-500'
          }`}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold bg-black/20">
              {i < current ? '\u2713' : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </div>
          {i < steps.length - 1 && <div className="w-6 h-px bg-stone-700" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ComplexityStep({ value, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        How much complexity are you comfortable with?
      </h2>
      <p className="text-stone-400 text-center mb-6">This filters the spirit pool to match your experience level.</p>
      <div className="grid gap-4 max-w-lg mx-auto">
        {complexityOptions.map(opt => (
          <button
            key={opt.code}
            onClick={() => onChange(opt.code)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              value === opt.code
                ? 'border-amber-500 bg-amber-900/30'
                : 'border-stone-700 bg-stone-800/50 hover:border-stone-500'
            }`}
          >
            <div className="font-bold text-amber-200 text-lg">{opt.label}</div>
            <div className="text-stone-400 text-sm mt-1">{opt.description}</div>
            <div className="text-stone-500 text-xs mt-2">
              {flowchartSpirits.filter(s => s.complexity === opt.code).length} spirits
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PlaystyleStep({ value, onChange, useRanking, rankedPlaystyles, onRankedChange, onToggleMode }) {
  if (useRanking) {
    return <PlaystyleRankStep ranked={rankedPlaystyles} onRankedChange={onRankedChange} onToggleMode={onToggleMode} />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        What playstyle appeals to you most?
      </h2>
      <p className="text-stone-400 text-center mb-2">Pick your preferred approach to the game.</p>
      <button onClick={onToggleMode} className="block mx-auto mb-6 text-sm text-teal-400 hover:text-teal-300 underline">
        Switch to ranked preferences (more precise)
      </button>
      <div className="grid gap-3 max-w-lg mx-auto">
        {playstyleOptions.map(opt => (
          <button
            key={opt.code}
            onClick={() => onChange(opt.code)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              value === opt.code
                ? 'border-amber-500 bg-amber-900/30'
                : 'border-stone-700 bg-stone-800/50 hover:border-stone-500'
            }`}
          >
            <div className="font-bold text-amber-200">{opt.label}</div>
            <div className="text-stone-400 text-sm mt-1">{opt.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PlaystyleRankStep({ ranked, onRankedChange, onToggleMode }) {
  const available = playstyleOptions.filter(o => !ranked.includes(o.code));
  const rankedItems = ranked.map(code => playstyleOptions.find(o => o.code === code));

  const removeAt = (idx) => {
    const next = [...ranked];
    next.splice(idx, 1);
    onRankedChange(next);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        Rank playstyles from most to least appealing
      </h2>
      <p className="text-stone-400 text-center mb-2">Click in order of preference. Top picks score higher.</p>
      <button onClick={onToggleMode} className="block mx-auto mb-6 text-sm text-teal-400 hover:text-teal-300 underline">
        Switch to simple selection
      </button>

      <div className="max-w-lg mx-auto mb-6">
        {ranked.length > 0 && (
          <div className="space-y-2 mb-4">
            {rankedItems.map((item, idx) => (
              <div key={item.code} className="flex items-center gap-3 p-3 rounded-lg bg-amber-900/30 border border-amber-700">
                <span className="w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center text-sm font-bold text-amber-100">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <span className="font-bold text-amber-200">{item.label}</span>
                  <span className="text-stone-400 text-xs ml-2">
                    {idx === 0 ? '+5 pts' : idx === 1 ? '+3 pts' : idx === 2 ? '+1 pt' : '+0 pts'}
                  </span>
                </div>
                <button onClick={() => removeAt(idx)} className="text-stone-500 hover:text-red-400 text-lg">&times;</button>
              </div>
            ))}
          </div>
        )}

        {available.length > 0 && (
          <div className="space-y-2">
            <p className="text-stone-500 text-sm">Click to add (rank {ranked.length + 1}):</p>
            {available.map(opt => (
              <button
                key={opt.code}
                onClick={() => onRankedChange([...ranked, opt.code])}
                className="w-full p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-stone-500 text-left transition-all"
              >
                <span className="font-bold text-stone-300">{opt.label}</span>
                <span className="text-stone-500 text-sm ml-2">- {opt.description}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SpeedStep({ value, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        Do you prefer acting before or after invaders?
      </h2>
      <p className="text-stone-400 text-center mb-6">This affects which spirits match your tempo preference.</p>
      <div className="grid gap-4 max-w-lg mx-auto">
        {speedOptions.map(opt => (
          <button
            key={opt.code}
            onClick={() => onChange(opt.code)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              value === opt.code
                ? 'border-amber-500 bg-amber-900/30'
                : 'border-stone-700 bg-stone-800/50 hover:border-stone-500'
            }`}
          >
            <div className="font-bold text-amber-200">{opt.label}</div>
            <div className="text-stone-400 text-sm mt-1">{opt.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function MechanicsStep({ value, onChange }) {
  const toggle = (code) => {
    if (value.includes(code)) {
      onChange(value.filter(c => c !== code));
    } else if (value.length < 3) {
      onChange([...value, code]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        Which mechanics interest you most?
      </h2>
      <p className="text-stone-400 text-center mb-6">Select up to 3 mechanics. Each match adds points.</p>
      <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {mechanicOptions.map(opt => {
          const selected = value.includes(opt.code);
          const disabled = !selected && value.length >= 3;
          return (
            <button
              key={opt.code}
              onClick={() => !disabled && toggle(opt.code)}
              className={`p-3 rounded-xl border-2 text-left transition-all ${
                selected
                  ? 'border-amber-500 bg-amber-900/30'
                  : disabled
                    ? 'border-stone-800 bg-stone-900/50 opacity-40 cursor-not-allowed'
                    : 'border-stone-700 bg-stone-800/50 hover:border-stone-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded border-2 flex items-center justify-center text-xs ${
                  selected ? 'border-amber-500 bg-amber-600 text-white' : 'border-stone-600'
                }`}>
                  {selected ? '\u2713' : ''}
                </span>
                <span className="font-bold text-amber-200 text-sm">{opt.label}</span>
              </div>
              <div className="text-stone-400 text-xs mt-1 ml-7">{opt.description}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ElementBadge({ code }) {
  const name = elementCodes[code] || code;
  const colors = {
    SN: "bg-yellow-400 text-yellow-900",
    MN: "bg-indigo-400 text-indigo-900",
    FR: "bg-orange-500 text-orange-100",
    AR: "bg-purple-400 text-purple-900",
    WT: "bg-blue-500 text-blue-100",
    ET: "bg-amber-700 text-amber-100",
    PL: "bg-green-500 text-green-100",
    AN: "bg-red-600 text-red-100"
  };
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${colors[code] || 'bg-gray-400'}`}>
      {name[0]}
    </span>
  );
}

function SpiritResultCard({ spirit, size = "large", onClick }) {
  const playstyleLabels = spirit.playstyles.map(c => playstyleOptions.find(p => p.code === c)?.label).join(', ');
  const mechLabels = spirit.mechanics.map(c => mechanicOptions.find(m => m.code === c)?.label).join(', ');
  const speedLabel = speedOptions.find(s => s.code === spirit.speed)?.label;

  if (size === "small") {
    return (
      <div
        onClick={onClick}
        className="p-3 rounded-lg bg-stone-800/60 border border-stone-700 cursor-pointer hover:border-amber-500 transition-all"
      >
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-bold text-stone-200 text-sm">{spirit.name}</h4>
            <p className="text-stone-500 text-xs mt-1">{spirit.tagline}</p>
          </div>
          <span className="text-amber-400 font-bold text-sm ml-2 whitespace-nowrap">{spirit.score} pts</span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`rounded-xl border p-5 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-900/20 ${
        size === "large"
          ? 'bg-gradient-to-br from-amber-900/20 to-stone-900 border-amber-600 hover:border-amber-400'
          : 'bg-stone-800/60 border-stone-600 hover:border-amber-500'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className={`font-bold ${size === "large" ? 'text-xl text-amber-200' : 'text-base text-stone-200'}`}
            style={{ fontFamily: 'Cinzel, serif' }}>
          {spirit.name}
        </h3>
        <span className="bg-amber-600 text-amber-100 px-2 py-0.5 rounded text-sm font-bold ml-2 whitespace-nowrap">
          {spirit.score} pts
        </span>
      </div>

      <p className={`${size === "large" ? 'text-stone-300' : 'text-stone-400 text-sm'} mb-3`}>
        {size === "large" ? spirit.description : spirit.tagline}
      </p>

      <div className="flex gap-1 mb-3">
        {spirit.elements.map((el, i) => <ElementBadge key={i} code={el} />)}
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-0.5 rounded bg-stone-700 text-stone-300">{playstyleLabels}</span>
        <span className={`px-2 py-0.5 rounded ${
          spirit.speed === 'F' ? 'bg-orange-800 text-orange-200' :
          spirit.speed === 'S' ? 'bg-blue-800 text-blue-200' :
          'bg-purple-800 text-purple-200'
        }`}>{speedLabel}</span>
        {size === "large" && (
          <span className="px-2 py-0.5 rounded bg-teal-900 text-teal-200">{mechLabels}</span>
        )}
      </div>

      {size === "large" && (
        <div className="mt-2 text-xs text-stone-500">Expansion: {spirit.expansion}</div>
      )}

      <div className="mt-3 text-xs text-amber-400 opacity-70">Click for full details</div>
    </div>
  );
}

// Spirit detail overlay for flowchart results — wraps the reference SpiritDetail or shows a simple view
function FlowchartSpiritDetail({ spirit, onClose }) {
  const refSpirit = findReferenceSpirit(spirit.name);

  if (refSpirit) {
    return <SpiritDetail spirit={refSpirit} onClose={onClose} />;
  }

  // Fallback for spirits not in reference data
  const playstyleLabels = spirit.playstyles.map(c => playstyleOptions.find(p => p.code === c)?.label).join(', ');
  const mechLabels = spirit.mechanics.map(c => mechanicOptions.find(m => m.code === c)?.label).join(', ');
  const speedLabel = speedOptions.find(s => s.code === spirit.speed)?.label;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-stone-900 to-stone-950 rounded-2xl border border-stone-700 shadow-2xl">
          <div className="relative p-6 border-b border-stone-700 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-t-2xl">
            <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-white text-3xl leading-none">&times;</button>
            <h2 className="text-3xl font-black text-amber-100 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{spirit.name}</h2>
            <div className="flex gap-1 mb-3">
              {spirit.elements.map((el, i) => <ElementBadge key={i} code={el} />)}
            </div>
            <p className="text-stone-300 italic">{spirit.description}</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Playstyle</h3>
              <p className="text-stone-300">{playstyleLabels}</p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Speed</h3>
              <p className="text-stone-300">{speedLabel}</p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Mechanics</h3>
              <p className="text-stone-300">{mechLabels}</p>
            </div>
            <div className="text-sm text-stone-500">Expansion: {spirit.expansion}</div>
            <div className="text-sm text-stone-500">Match Score: {spirit.score} pts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsStep({ filters, rankedPlaystyles, useRanking, onRestart }) {
  const scored = useMemo(() => {
    if (useRanking) {
      return scoreSpirits({ complexity: filters.complexity, speed: filters.speed, mechanics: filters.mechanics }, rankedPlaystyles);
    }
    return scoreSpirits(filters, null);
  }, [filters, rankedPlaystyles, useRanking]);

  const { best, runners, others } = useMemo(() => categorizeTiers(scored), [scored]);

  const prefCode = useMemo(() => {
    if (useRanking && rankedPlaystyles.length === 5) {
      return generateCode(filters.complexity, rankedPlaystyles, filters.speed, filters.mechanics);
    }
    return null;
  }, [filters, rankedPlaystyles, useRanking]);

  const [copied, setCopied] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [detailSpirit, setDetailSpirit] = useState(null);

  // Save results to localStorage whenever they compute
  useEffect(() => {
    saveResult({
      filters,
      rankedPlaystyles,
      useRanking,
      timestamp: Date.now()
    });
  }, [filters, rankedPlaystyles, useRanking]);

  const copyCode = () => {
    if (prefCode) {
      navigator.clipboard.writeText(prefCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-200 mb-6 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
        Your Spirit Matches
      </h2>

      {prefCode && (
        <div className="max-w-lg mx-auto mb-8 p-4 rounded-xl bg-teal-900/30 border border-teal-700">
          <div className="text-sm text-teal-400 mb-1">Your Preference Code</div>
          <div className="flex items-center gap-3">
            <code className="text-xl font-mono text-teal-200 flex-1">{prefCode}</code>
            <button
              onClick={copyCode}
              className="px-3 py-1 rounded bg-teal-700 hover:bg-teal-600 text-teal-100 text-sm transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      {best.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-3">Best Matches</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {best.map(s => (
              <SpiritResultCard key={s.id} spirit={s} size="large" onClick={() => setDetailSpirit(s)} />
            ))}
          </div>
        </div>
      )}

      {runners.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-amber-400 mb-3">Close Runner-Ups</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {runners.map(s => (
              <SpiritResultCard key={s.id} spirit={s} size="medium" onClick={() => setDetailSpirit(s)} />
            ))}
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="mb-8">
          <button
            onClick={() => setShowOthers(!showOthers)}
            className="text-stone-400 hover:text-stone-300 text-sm underline"
          >
            {showOthers ? 'Hide' : 'Show'} {others.length} more spirit{others.length !== 1 ? 's' : ''}
          </button>
          {showOthers && (
            <div className="grid gap-2 mt-3">
              {others.map(s => (
                <SpiritResultCard key={s.id} spirit={s} size="small" onClick={() => setDetailSpirit(s)} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={onRestart}
          className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-600 text-amber-100 font-bold transition-colors"
        >
          Start Over
        </button>
      </div>

      {detailSpirit && (
        <FlowchartSpiritDetail spirit={detailSpirit} onClose={() => setDetailSpirit(null)} />
      )}
    </div>
  );
}

// === Welcome / Resume Screen ===

function WelcomeScreen({ savedResult, onResume, onNew }) {
  const complexityLabel = complexityOptions.find(c => c.code === savedResult.filters.complexity)?.label || savedResult.filters.complexity;
  const speedLabel = speedOptions.find(s => s.code === savedResult.filters.speed)?.label || savedResult.filters.speed;
  const mechLabels = savedResult.filters.mechanics.map(c => mechanicOptions.find(m => m.code === c)?.label || c).join(', ');

  let playstyleDesc;
  if (savedResult.useRanking && savedResult.rankedPlaystyles.length > 0) {
    const labels = savedResult.rankedPlaystyles.map(c => playstyleOptions.find(p => p.code === c)?.label || c);
    playstyleDesc = labels.join(' > ');
  } else if (savedResult.filters.playstyle) {
    playstyleDesc = playstyleOptions.find(p => p.code === savedResult.filters.playstyle)?.label || savedResult.filters.playstyle;
  } else {
    playstyleDesc = 'None';
  }

  const date = new Date(savedResult.timestamp);
  const timeAgo = formatTimeAgo(date);

  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-amber-200 mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
        Find Your Spirit
      </h2>
      <p className="text-stone-400 mb-8">You have previous results from {timeAgo}.</p>

      <div className="bg-stone-800/60 border border-stone-700 rounded-xl p-5 mb-8 text-left">
        <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">Previous Preferences</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-500">Complexity</span>
            <span className="text-amber-200 font-medium">{complexityLabel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Playstyle</span>
            <span className="text-amber-200 font-medium text-right max-w-[60%]">{playstyleDesc}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Speed</span>
            <span className="text-amber-200 font-medium">{speedLabel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Mechanics</span>
            <span className="text-amber-200 font-medium text-right max-w-[60%]">{mechLabels}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onResume}
          className="w-full px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-600 text-amber-100 font-bold transition-colors text-lg"
        >
          View Previous Results
        </button>
        <button
          onClick={onNew}
          className="w-full px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium transition-colors"
        >
          Start New Search
        </button>
      </div>
    </div>
  );
}

function formatTimeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? 's' : ''} ago`;
}

// === Main Flowchart ===

export default function SpiritFlowchart() {
  const [savedResult] = useState(() => loadResult());
  const [view, setView] = useState(() => {
    // If there's a saved result, show welcome screen; otherwise start wizard
    return loadResult() ? 'welcome' : 'wizard';
  });

  const [step, setStep] = useState(0);
  const [complexity, setComplexity] = useState(null);
  const [playstyle, setPlaystyle] = useState(null);
  const [useRanking, setUseRanking] = useState(false);
  const [rankedPlaystyles, setRankedPlaystyles] = useState([]);
  const [speed, setSpeed] = useState(null);
  const [mechanics, setMechanics] = useState([]);

  const steps = ["Complexity", "Playstyle", "Speed", "Mechanics", "Results"];

  const canNext = () => {
    if (step === 0) return !!complexity;
    if (step === 1) return useRanking ? rankedPlaystyles.length === 5 : !!playstyle;
    if (step === 2) return !!speed;
    if (step === 3) return mechanics.length > 0;
    return false;
  };

  const restart = () => {
    setStep(0);
    setComplexity(null);
    setPlaystyle(null);
    setUseRanking(false);
    setRankedPlaystyles([]);
    setSpeed(null);
    setMechanics([]);
    setView('wizard');
  };

  const resumeSaved = () => {
    const saved = loadResult();
    if (!saved) return;
    setComplexity(saved.filters.complexity);
    setPlaystyle(saved.filters.playstyle || null);
    setSpeed(saved.filters.speed);
    setMechanics(saved.filters.mechanics || []);
    setUseRanking(saved.useRanking || false);
    setRankedPlaystyles(saved.rankedPlaystyles || []);
    setStep(4); // jump to results
    setView('wizard');
  };

  // Welcome screen with previous results
  if (view === 'welcome' && savedResult) {
    return (
      <WelcomeScreen
        savedResult={savedResult}
        onResume={resumeSaved}
        onNew={restart}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <StepIndicator steps={steps} current={step} />

      {step === 0 && (
        <ComplexityStep value={complexity} onChange={(v) => { setComplexity(v); }} />
      )}
      {step === 1 && (
        <PlaystyleStep
          value={playstyle}
          onChange={setPlaystyle}
          useRanking={useRanking}
          rankedPlaystyles={rankedPlaystyles}
          onRankedChange={setRankedPlaystyles}
          onToggleMode={() => { setUseRanking(!useRanking); setPlaystyle(null); setRankedPlaystyles([]); }}
        />
      )}
      {step === 2 && <SpeedStep value={speed} onChange={setSpeed} />}
      {step === 3 && <MechanicsStep value={mechanics} onChange={setMechanics} />}
      {step === 4 && (
        <ResultsStep
          filters={{ complexity, playstyle, speed, mechanics }}
          rankedPlaystyles={rankedPlaystyles}
          useRanking={useRanking}
          onRestart={restart}
        />
      )}

      {step < 4 && (
        <div className="flex justify-between max-w-lg mx-auto mt-8">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-5 py-2 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => canNext() && setStep(step + 1)}
            disabled={!canNext()}
            className="px-5 py-2 rounded-lg bg-amber-700 text-amber-100 hover:bg-amber-600 disabled:opacity-30 disabled:cursor-not-allowed font-bold transition-colors"
          >
            {step === 3 ? 'See Results' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
