import { useMemo, useState } from 'react';

type BrandInput = {
  brandName: string;
  tagline: string;
  industry: string;
  personality: string;
  targetAudience: string;
  colorDirection: string;
  restrictions: string;
  useCases: string;
};

type StyleDirection = {
  id: string;
  name: string;
  shapeLogic: string;
  typographyLogic: string;
  symbolLogic: string;
  colorLogic: string;
  why: string;
  palette: [string, string, string];
};

const styleLibrary: StyleDirection[] = [
  {
    id: 'minimal-crest',
    name: 'Minimal Crest',
    shapeLogic: 'Shield and circle intersections on a 4x4 grid',
    typographyLogic: 'High-contrast sans with tight optical spacing',
    symbolLogic: 'Abstract emblem with controlled negative space',
    colorLogic: 'Deep navy primary, muted gold accent, warm gray neutral',
    why: 'Balances authority and clarity for trust-driven brands.',
    palette: ['#1E3A8A', '#EAB308', '#CBD5E1'],
  },
  {
    id: 'geometric-monogram',
    name: 'Geometric Monogram',
    shapeLogic: 'Square and circle modules with quarter-arc cuts',
    typographyLogic: 'Modern grotesk sans, medium weight',
    symbolLogic: 'Initial-based monogram built from repeatable units',
    colorLogic: 'Cobalt primary, mint secondary, charcoal neutral',
    why: 'Strong favicon and app-icon legibility.',
    palette: ['#1D4ED8', '#14B8A6', '#1F2937'],
  },
  {
    id: 'linear-emblem',
    name: 'Linear Emblem',
    shapeLogic: 'Rounded rectangle container with line internals',
    typographyLogic: 'Humanist sans with generous tracking',
    symbolLogic: 'Line icon fused with compact wordmark lockup',
    colorLogic: 'Forest primary, sandstone secondary, slate neutral',
    why: 'Feels calm, modern, and production-friendly.',
    palette: ['#166534', '#D6A561', '#334155'],
  },
  {
    id: 'precision-badge',
    name: 'Precision Badge',
    shapeLogic: 'Concentric rings with radial alignment',
    typographyLogic: 'Condensed sans with mono support text',
    symbolLogic: 'Radial icon core with badge perimeter options',
    colorLogic: 'Black primary, off-white secondary, signal red accent',
    why: 'Perfect for patches, hats, and merchandise.',
    palette: ['#111827', '#EF4444', '#F8FAFC'],
  },
  {
    id: 'pixel-sharp-icon',
    name: 'Pixel-Sharp Icon',
    shapeLogic: '8px step grid and squared corners',
    typographyLogic: 'Monospace-inspired sans with custom cuts',
    symbolLogic: 'Icon-first mark with block silhouette',
    colorLogic: 'Electric blue primary, cool gray secondary, white neutral',
    why: 'Excellent for digital products and tiny sizes.',
    palette: ['#2563EB', '#64748B', '#F8FAFC'],
  },
];

const guarantees = [
  'Versatility & Scalability',
  'Simple and Clean Aesthetic',
  'Vector File Delivery',
  'Strategic Branding Alignment',
  'Timelessness',
  'Color Palette Psychology',
  'Unique Customization',
  'Balanced Composition',
  'Comprehensive Deliverables',
];

const quickIndustries = ['Technology', 'Fashion', 'Finance', 'Fitness', 'Food', 'Creative Agency'];
const quickTraits = ['Modern', 'Trusted', 'Bold', 'Clean', 'Premium', 'Friendly'];

const defaultInput: BrandInput = {
  brandName: 'Northline Studio',
  tagline: 'Clarity in Motion',
  industry: 'Creative Agency',
  personality: 'Clean, confident, modern',
  targetAudience: 'Founders and growth teams',
  colorDirection: 'Navy, cyan, neutral grays',
  restrictions: 'No neon, no gradients, no sci-fi effects',
  useCases: 'App icon, website header, social avatar, merch',
};

type ViewTab = 'preview' | 'applications' | 'output';

const parseItems = (value: string, fallback: string[]) => {
  const clean = value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  return clean.length ? clean : fallback;
};

const pickStyleByInput = (input: BrandInput) => {
  const seed = `${input.brandName}${input.industry}${input.personality}`;
  const score = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return styleLibrary[score % styleLibrary.length].id;
};

function LogoSymbol({ styleId, initials, colors, className }: { styleId: string; initials: string; colors: [string, string, string]; className?: string }) {
  const primary = colors[0];
  const accent = colors[1];
  const neutral = colors[2];

  return (
    <svg viewBox="0 0 120 120" className={className ?? 'h-16 w-16'} aria-hidden>
      {styleId === 'minimal-crest' && (
        <>
          <path d="M60 10 L102 30 L94 82 C92 97 79 108 60 112 C41 108 28 97 26 82 L18 30 Z" fill={primary} />
          <circle cx="60" cy="56" r="18" fill="#ffffff" />
          <text x="60" y="62" textAnchor="middle" fontSize="16" fill={primary} fontWeight="700">{initials[0]}</text>
        </>
      )}
      {styleId === 'geometric-monogram' && (
        <>
          <rect x="14" y="14" width="92" height="92" rx="16" fill={primary} />
          <path d="M36 32 h18 v56 h-18 z M62 32 h18 c11 0 20 8 20 18 v38 h-18 v-34 c0-4-3-6-6-6 h-14z" fill="#ffffff" />
        </>
      )}
      {styleId === 'linear-emblem' && (
        <>
          <rect x="12" y="24" width="96" height="72" rx="20" fill="none" stroke={primary} strokeWidth="8" />
          <path d="M28 72 h24 l12-24 12 24 h16" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {styleId === 'precision-badge' && (
        <>
          <circle cx="60" cy="60" r="48" fill="none" stroke={primary} strokeWidth="10" />
          <circle cx="60" cy="60" r="26" fill={primary} />
          <text x="60" y="66" textAnchor="middle" fontSize="16" fill={neutral} fontWeight="700">{initials}</text>
        </>
      )}
      {styleId === 'pixel-sharp-icon' && (
        <>
          <rect x="20" y="20" width="24" height="24" fill={primary} />
          <rect x="48" y="20" width="24" height="24" fill={accent} />
          <rect x="76" y="20" width="24" height="24" fill={primary} />
          <rect x="20" y="48" width="24" height="24" fill={accent} />
          <rect x="48" y="48" width="24" height="24" fill={primary} />
          <rect x="76" y="48" width="24" height="24" fill={accent} />
          <rect x="48" y="76" width="24" height="24" fill={primary} />
        </>
      )}
    </svg>
  );
}

function App() {
  const [input, setInput] = useState<BrandInput>(defaultInput);
  const [hasRun, setHasRun] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>(pickStyleByInput(defaultInput));
  const [viewTab, setViewTab] = useState<ViewTab>('preview');

  const discovery = useMemo(() => {
    const traits = parseItems(input.personality, ['Professional', 'Reliable', 'Modern']).slice(0, 5);
    return {
      brandName: input.brandName.trim() || 'Untitled Brand',
      tagline: input.tagline.trim() || 'Not provided',
      industry: input.industry.trim() || 'General Business',
      personality: traits,
      targetAudience: input.targetAudience.trim() || 'General consumers',
      colorDirection: input.colorDirection.trim() || 'Balanced neutrals with one accent',
      restrictions: input.restrictions.trim() || 'No heavy effects',
      useCases: parseItems(input.useCases, ['App icon', 'Web header', 'Social avatar']),
    };
  }, [input]);

  const activeStyle = useMemo(
    () => styleLibrary.find((style) => style.id === selectedStyle) ?? styleLibrary[0],
    [selectedStyle],
  );

  const initials = discovery.brandName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'LB';

  const runPipeline = () => {
    const picked = pickStyleByInput(input);
    if (!selectedStyle) {
      setSelectedStyle(picked);
    }
    setHasRun(true);
  };

  const appendTrait = (trait: string) => {
    const traits = parseItems(input.personality, []);
    if (!traits.includes(trait)) {
      setInput((prev) => ({ ...prev, personality: [...traits, trait].join(', ') }));
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">939PRO</p>
            <h1 className="text-2xl font-semibold">Logo Engine Studio</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-300 md:block">
              GUI Mode: Visual Builder
            </div>
            <button
              onClick={runPipeline}
              className="rounded-xl bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              Generate Logo System
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid w-full max-w-7xl gap-6 px-6 py-6 lg:grid-cols-12">
        <section className="animate-fade-in-up space-y-5 lg:col-span-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-cyan-300">1. Brand Discovery</p>
            <div className="space-y-3">
              {([
                ['Brand Name', 'brandName'],
                ['Tagline', 'tagline'],
                ['Industry / Category', 'industry'],
                ['Brand Personality (comma separated)', 'personality'],
                ['Target Audience', 'targetAudience'],
                ['Color Direction', 'colorDirection'],
                ['Visual Restrictions', 'restrictions'],
                ['Use Cases', 'useCases'],
              ] as const).map(([label, key]) => (
                <label key={key} className="block">
                  <span className="mb-1 block text-xs text-slate-400">{label}</span>
                  <input
                    value={input[key]}
                    onChange={(event) => setInput((prev) => ({ ...prev, [key]: event.target.value }))}
                    className="w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm outline-none ring-cyan-300 transition focus:ring"
                  />
                </label>
              ))}
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs text-slate-400">Quick Industry</p>
              <div className="flex flex-wrap gap-2">
                {quickIndustries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setInput((prev) => ({ ...prev, industry }))}
                    className={`rounded-full px-3 py-1 text-xs transition ${
                      input.industry === industry ? 'bg-cyan-400 text-slate-900' : 'bg-white/8 hover:bg-white/15'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs text-slate-400">Quick Personality Traits</p>
              <div className="flex flex-wrap gap-2">
                {quickTraits.map((trait) => (
                  <button
                    key={trait}
                    onClick={() => appendTrait(trait)}
                    className="rounded-full bg-white/8 px-3 py-1 text-xs transition hover:bg-white/15"
                  >
                    + {trait}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/8 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-cyan-200">Top Features</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-cyan-100">
              {guarantees.map((feature) => (
                <div key={feature} className="rounded-md border border-cyan-300/20 bg-slate-900/40 px-2 py-1.5">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5 lg:col-span-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">2. Style Direction</p>
              <p className="text-xs text-slate-400">Choose manually or let pipeline pick deterministically</p>
            </div>
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {styleLibrary.map((style) => (
                <button
                  key={style.id}
                  onClick={() => {
                    setSelectedStyle(style.id);
                    setHasRun(true);
                  }}
                  className={`rounded-xl border p-3 text-left transition ${
                    selectedStyle === style.id
                      ? 'border-cyan-300 bg-cyan-300/10'
                      : 'border-white/10 bg-slate-900/70 hover:border-white/30'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">{style.name}</span>
                    <LogoSymbol styleId={style.id} initials={initials} colors={style.palette} className="h-8 w-8" />
                  </div>
                  <p className="text-xs text-slate-300">{style.why}</p>
                </button>
              ))}
            </div>
          </div>

          <div className={`${hasRun ? 'animate-fade-in-up' : 'opacity-90'} rounded-2xl border border-white/10 bg-white/[0.03] p-4`}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">3-9. Studio Delivery</p>
              <div className="inline-flex rounded-lg border border-white/10 bg-slate-900 p-1">
                {([
                  ['preview', 'Live Preview'],
                  ['applications', 'Mockups'],
                  ['output', 'Structured Output'],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setViewTab(key)}
                    className={`rounded-md px-3 py-1.5 text-xs transition ${
                      viewTab === key ? 'bg-cyan-400 text-slate-900' : 'text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {viewTab === 'preview' && (
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.20),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.18),transparent_45%)]" />
                  <div className="relative flex items-center gap-4">
                    <div className="animate-pulse-soft rounded-xl bg-white p-3 shadow-2xl">
                      <LogoSymbol styleId={activeStyle.id} initials={initials} colors={activeStyle.palette} className="h-24 w-24" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold tracking-tight">{discovery.brandName}</p>
                      <p className="text-sm text-slate-300">{discovery.tagline}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cyan-300">{activeStyle.name}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    'Full logo (symbol + wordmark)',
                    'Symbol-only',
                    'Wordmark-only',
                    'Monochrome',
                    'Inverse',
                    'Flat vector-safe version',
                    'Merch-safe version (screenprint-friendly)',
                  ].map((variant) => (
                    <div key={variant} className="rounded-lg border border-white/10 bg-slate-900/80 p-2.5 text-xs text-slate-200">
                      {variant}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {viewTab === 'applications' && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'App icon',
                  'T-shirt print',
                  'Hat patch',
                  'Website header',
                  'Social avatar',
                  'Sticker / badge',
                  'Minimal poster',
                ].map((mockup) => (
                  <div key={mockup} className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-slate-400">{mockup}</p>
                    <div className="flex min-h-24 items-center justify-center rounded-lg border border-white/10 bg-slate-950">
                      <LogoSymbol styleId={activeStyle.id} initials={initials} colors={activeStyle.palette} className="h-12 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {viewTab === 'output' && (
              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-200">
                <p className="mb-3 font-semibold tracking-wide text-cyan-300">[LOGO STUDIO OUTPUT]</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">1. Brand Discovery</p>
                    <p>Brand Name: {discovery.brandName}</p>
                    <p>Tagline: {discovery.tagline}</p>
                    <p>Industry / Category: {discovery.industry}</p>
                    <p>Brand Personality: {discovery.personality.join(', ')}</p>
                    <p>Target Audience: {discovery.targetAudience}</p>
                    <p>Color Direction: {discovery.colorDirection}</p>
                    <p>Visual Restrictions: {discovery.restrictions}</p>
                    <p>Use Cases: {discovery.useCases.join(', ')}</p>
                  </div>

                  <div>
                    <p className="font-semibold">2. Style Direction</p>
                    <p>Style Name: {activeStyle.name}</p>
                    <p>Shape Logic: {activeStyle.shapeLogic}</p>
                    <p>Typography Logic: {activeStyle.typographyLogic}</p>
                    <p>Symbol Logic: {activeStyle.symbolLogic}</p>
                    <p>Color Logic: {activeStyle.colorLogic}</p>
                    <p>Why This Works: {activeStyle.why}</p>
                  </div>

                  <div>
                    <p className="font-semibold">3. Final Logo Concept</p>
                    <p>
                      A modular {activeStyle.name.toLowerCase()} lockup combining symbol + wordmark for {discovery.industry.toLowerCase()} use
                      cases.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">4. Geometry Blueprint</p>
                    <p>Primary shape: {activeStyle.shapeLogic}.</p>
                    <p>Secondary shapes: Supporting modules anchored to keyline offsets.</p>
                    <p>Negative space: Internal cutouts remain legible at 24px.</p>
                    <p>Alignment rules: Center-axis symbol lock, baseline wordmark lock.</p>
                    <p>Stroke weights: 2px master stroke, scalable proportionally.</p>
                    <p>Corner radius: Uses 0, 4, and 8 radius tokens.</p>
                    <p>Grid logic: 4x4 parent grid with quarter-cell snapping.</p>
                  </div>

                  <div>
                    <p className="font-semibold">5. Typography System</p>
                    <p>Font family style: Modern geometric sans.</p>
                    <p>Weight: 600 wordmark, 400 tagline.</p>
                    <p>Kerning logic: Optical kerning with tightened diagonal pairs.</p>
                    <p>Letterform modifications: Leading character optically widened.</p>
                    <p>Lockup rules: Horizontal primary, stacked secondary, badge tertiary.</p>
                  </div>

                  <div>
                    <p className="font-semibold">6. Color System</p>
                    <p>Primary palette: {activeStyle.palette[0]}</p>
                    <p>Secondary palette: {activeStyle.palette[1]}</p>
                    <p>Neutral palette: {activeStyle.palette[2]}, #0F172A, #F8FAFC</p>
                    <p>Contrast rules: Maintain minimum 4.5:1 for text/logo lockups.</p>
                    <p>Light/Dark mode variants: Inverse token mapping preserved.</p>
                  </div>

                  <div>
                    <p className="font-semibold">7. Output Variants</p>
                    <p>Full logo, symbol-only, wordmark-only, monochrome, inverse, flat vector-safe, merch-safe screenprint.</p>
                  </div>

                  <div>
                    <p className="font-semibold">8. Brand Applications</p>
                    <p>App icon, T-shirt print, hat patch, website header, social avatar, sticker/badge, minimal poster.</p>
                  </div>

                  <div>
                    <p className="font-semibold">9. Export Notes (vector-safe)</p>
                    <p>Deliver SVG, AI, and EPS with outlined and live type versions.</p>
                    <p>Keep minimum clear space at symbol half-width and min logo height at 18px.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
