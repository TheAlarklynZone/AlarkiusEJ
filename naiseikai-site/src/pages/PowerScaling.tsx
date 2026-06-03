const ranks = [
  {
    id: 'E',
    label: 'RANK E',
    subtitle: 'Human Level',
    color: 'amber',
    desc: 'The lowest tier, Rank E measures only the user's mental and physical limitations as a baseline human. No supernatural force amplifies them here — only raw willpower and instinct. Emotional influence at this level is unconscious and unrefined.',
    tiers: [
      { rank: 'E-1', desc: 'Murder / Cannibalism (or any form of deliberate lethal violence)' },
    ],
  },
  {
    id: 'D',
    label: 'RANK D',
    subtitle: 'Inhuman / Non Human',
    color: 'cyan',
    desc: 'Rank D elevates physical attributes beyond natural human limits. These individuals have developed — or were born with — a body that surpasses normal biology. Emotionally, their connection to power is instinctual rather than intentional. Capable of lifting weights limited to 200 heunix.',
    tiers: [
      { rank: 'D-1', desc: 'Car Destruction' },
      { rank: 'D-2', desc: 'Appliance Damages' },
      { rank: 'D-3', desc: 'Wrecking Ball Damage' },
      { rank: 'D-4', desc: 'Can deadlift a house or small apartment' },
    ],
  },
  {
    id: 'C',
    label: 'RANK C',
    subtitle: 'Superhuman',
    color: 'green',
    desc: 'Rank C marks the first emergence of conscious emotional influence on power. The individual's mental and physical attributes are amplified by internalized emotional states — whether they realize it or not. Rank C measures both the capacity to destroy and create at a structural level.',
    tiers: [
      { rank: 'C-1', desc: 'Destroy or partially collapse Houses, Apartment Complexes, Skyscrapers' },
      { rank: 'C-2', desc: 'Construct or reinforce Houses, Apartment Complexes, Skyscrapers' },
      { rank: 'C-3', desc: 'Devastation or Creation spanning Small to Large Towns' },
    ],
  },
  {
    id: 'B',
    label: 'RANK B',
    subtitle: 'Power Gifted',
    color: 'blue',
    desc: 'Rank B individuals have received power from an external source — a being, an artifact, or a spiritual event. Their emotional spectrum is broader than average, but borrowed. The cap of Power Gifted is limited to 5 output levels, as externally granted power has a ceiling unless the individual emotionally bonds deeply with it.',
    tiers: [
      { rank: 'B-1', desc: 'City Level Destruction or Creation' },
      { rank: 'B-2', desc: 'Nuclear-scale Destruction — Country Level' },
      { rank: 'B-3', desc: 'State-wide Destruction (measured at emotional restraint)' },
      { rank: 'B-4', desc: 'Small to Large Mountain Level — raw emotional surges required' },
      { rank: 'B-5', desc: 'Max output threshold — emotional bond with source fully realized' },
    ],
  },
  {
    id: 'A',
    label: 'RANK A',
    subtitle: 'Supernatural',
    color: 'pink',
    desc: 'Rank A beings are those whose supernatural abilities are intrinsic — born from within or gifted by a Potent Spirit. Their emotional depth directly shapes the nature of their power. The stronger their emotional identity, the more defined and powerful their abilities become. Those of the Naiseikai's supernatural lineage often fall here.',
    tiers: [
      { rank: 'A-1', desc: 'Country Level Destruction x10 or Creation — driven by deep emotional conviction' },
      { rank: 'A-2', desc: 'Continental Destruction / Continental Rifts — emotional instability at this tier is catastrophic' },
      { rank: 'A-3', desc: 'Island Level Destruction — emotional eruptions at Pompeii scale, amplified 20x' },
    ],
  },
  {
    id: 'S',
    label: 'RANK S',
    subtitle: 'Hypernatural',
    color: 'purple',
    desc: 'At Rank S, emotions stop being a catalyst and begin acting as a cosmic force. Magic users and aura users at this tier can manifest or erase matter at a molecular and planetary level. Their emotional state is no longer private — it radiates outward, affecting the world around them whether they intend it or not.',
    tiers: [
      { rank: 'S-1', desc: 'Ocean and Sea Destruction / Vaporization at Magma-level intensity' },
      { rank: 'S-2', desc: 'Particle Destruction — matter dissolved at the atomic and molecular level' },
      { rank: 'S-3', desc: 'Materialization of objects and anti-matter — emotional will made physical' },
      { rank: 'S-4', desc: 'Planetary Level Destruction (meteor-scale included) — contained emotional detonation. Think: destroying a Jupiter-class body' },
    ],
  },
  {
    id: 'X',
    label: 'RANK X',
    subtitle: 'Omni-Natural',
    color: 'gold',
    desc: 'Rank X beings have transcended individual emotional experience. Their feelings are no longer personal — they are universal. A moment of grief could restructure timelines. A surge of joy could seed galaxies. Divine Power, in Naiseikai, is the expression of emotions so vast they can no longer be contained by a single universe.',
    tiers: [
      { rank: 'X-1', desc: 'Hyperverse Level — emotional resonance reaches beyond dimensional boundaries' },
      { rank: 'X-2', desc: 'Stellarkinesis — Galaxy Manipulation through sustained emotional projection' },
      { rank: 'X-3', desc: 'Timeline creation and destruction. Universal and Multiversal scale — emotion as the axis of existence itself' },
    ],
  },
  {
    id: 'N',
    label: 'RANK N',
    subtitle: 'Unknown Power',
    color: 'ghost',
    desc: 'Rank N remains a mystery even within the Tier Scaling System itself. It is theorized that Rank N is not a power tier — but an emotional state of existence that transcends categorization entirely. No individual has consciously reached this point, as it may require a complete dissolution of the self into the Emotional Spectrum itself.',
    tiers: [
      { rank: 'N-1', desc: 'Unaffected by concepts. Nullifies any ill-intent concepts and/or destroying a concept — the self is no longer bound by emotional law, but is the law, or of an equal force to something unknown and nearly impossible.' },
    ],
  },
]

const colorMap: Record<string, { badge: string; border: string; bg: string; label: string; tier: string; dot: string }> = {
  amber:  { badge: 'bg-[rgba(255,179,71,0.15)] text-[#ffd080] border border-[rgba(255,179,71,0.3)]',  border: 'border-[rgba(255,179,71,0.25)]',  bg: 'bg-[rgba(255,179,71,0.05)]',  label: 'text-[#ffd080]',  tier: 'text-[#ffd080] bg-[rgba(255,179,71,0.12)] border border-[rgba(255,179,71,0.3)]',  dot: 'bg-[#ffd080]' },
  cyan:   { badge: 'bg-[rgba(0,229,255,0.12)] text-[#7ef5ff] border border-[rgba(0,229,255,0.3)]',    border: 'border-[rgba(0,229,255,0.25)]',    bg: 'bg-[rgba(0,229,255,0.04)]',    label: 'text-[#7ef5ff]',  tier: 'text-[#7ef5ff] bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.3)]',    dot: 'bg-[#7ef5ff]' },
  green:  { badge: 'bg-[rgba(80,220,130,0.12)] text-[#7effc4] border border-[rgba(80,220,130,0.3)]',  border: 'border-[rgba(80,220,130,0.25)]',   bg: 'bg-[rgba(80,220,130,0.04)]',   label: 'text-[#7effc4]',  tier: 'text-[#7effc4] bg-[rgba(80,220,130,0.1)] border border-[rgba(80,220,130,0.3)]',   dot: 'bg-[#7effc4]' },
  blue:   { badge: 'bg-[rgba(90,160,255,0.12)] text-[#a0c8ff] border border-[rgba(90,160,255,0.3)]',  border: 'border-[rgba(90,160,255,0.25)]',   bg: 'bg-[rgba(90,160,255,0.04)]',   label: 'text-[#a0c8ff]',  tier: 'text-[#a0c8ff] bg-[rgba(90,160,255,0.1)] border border-[rgba(90,160,255,0.3)]',   dot: 'bg-[#a0c8ff]' },
  pink:   { badge: 'bg-[rgba(255,110,180,0.12)] text-[#ffaad4] border border-[rgba(255,110,180,0.3)]', border: 'border-[rgba(255,110,180,0.25)]',  bg: 'bg-[rgba(255,110,180,0.04)]',  label: 'text-[#ffaad4]',  tier: 'text-[#ffaad4] bg-[rgba(255,110,180,0.1)] border border-[rgba(255,110,180,0.3)]',  dot: 'bg-[#ffaad4]' },
  purple: { badge: 'bg-[rgba(191,95,255,0.15)] text-[#d49fff] border border-[rgba(191,95,255,0.3)]',  border: 'border-[rgba(191,95,255,0.25)]',   bg: 'bg-[rgba(191,95,255,0.05)]',   label: 'text-[#d49fff]',  tier: 'text-[#d49fff] bg-[rgba(191,95,255,0.12)] border border-[rgba(191,95,255,0.3)]',  dot: 'bg-[#d49fff]' },
  gold:   { badge: 'bg-[rgba(255,210,80,0.12)] text-[#ffe080] border border-[rgba(255,210,80,0.3)]',   border: 'border-[rgba(255,210,80,0.25)]',   bg: 'bg-[rgba(255,210,80,0.04)]',   label: 'text-[#ffe080]',  tier: 'text-[#ffe080] bg-[rgba(255,210,80,0.1)] border border-[rgba(255,210,80,0.3)]',    dot: 'bg-[#ffe080]' },
  ghost:  { badge: 'bg-[rgba(200,200,220,0.08)] text-[#c0bfcf] border border-[rgba(200,200,220,0.2)]', border: 'border-[rgba(200,200,220,0.15)]',  bg: 'bg-[rgba(200,200,220,0.03)]',  label: 'text-[#c0bfcf]',  tier: 'text-[#c0bfcf] bg-[rgba(200,200,220,0.08)] border border-[rgba(200,200,220,0.2)]', dot: 'bg-[#c0bfcf]' },
}

export default function PowerScaling() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">Universe · Power System</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">
          🎮 Naiseikai Power Scaling
        </h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          A classification system for supernatural powers rooted in the <strong className="text-text">Emotional Spectrum</strong>.
          In the Naiseikai Universe, raw strength alone does not determine a being's true tier — emotions are the catalyst,
          the amplifier, and sometimes the very source of power itself.
        </p>
      </div>

      {/* Intro callout */}
      <section className="mb-14">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm text-text leading-relaxed">
              The stronger the emotional depth, the more volatile — and extraordinary — the power output becomes.
              This system measures the power each individual carries, whether born with it, inherited, or unlocked through
              emotional evolution. Most individuals' power can vary, and this system places them where their power level should be.
              This can also apply to characters who have abnormal strengths even as a human.
            </p>
          </div>
        </div>
      </section>

      {/* Rank ladder overview */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">Tier Ladder</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Rank Overview</h2>
        <div className="flex flex-wrap gap-2">
          {ranks.map((r) => (
            <a
              key={r.id}
              href={`#rank-${r.id}`}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 hover:scale-105 ${colorMap[r.color].badge}`}
            >
              {r.label} · {r.subtitle}
            </a>
          ))}
        </div>
      </section>

      {/* Individual rank sections */}
      {ranks.map((r) => {
        const c = colorMap[r.color]
        return (
          <section key={r.id} id={`rank-${r.id}`} className="mb-12 scroll-mt-24">
            <div className="section-divider" />

            {/* Rank header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
                {r.label}
              </span>
              <h2 className={`font-serif text-2xl ${c.label}`}>{r.subtitle}</h2>
            </div>

            {/* Description */}
            <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-6">{r.desc}</p>

            {/* Tier list */}
            <div className={`border rounded-xl overflow-hidden ${c.border} ${c.bg}`}>
              {r.tiers.map((t, i) => (
                <div
                  key={t.rank}
                  className={`flex items-start gap-4 px-5 py-4 ${
                    i < r.tiers.length - 1 ? `border-b ${c.border}` : ''
                  }`}
                >
                  <span className={`font-mono text-xs font-bold pt-0.5 shrink-0 px-2 py-0.5 rounded ${c.tier}`}>
                    {t.rank}
                  </span>
                  <span className="text-sm text-text-muted leading-relaxed">{t.desc}</span>
                </div>
              ))}
            </div>
          </section>
        )
      })}

      {/* Footer note */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="callout callout-cyan">
          <div>
            <p className="text-xs font-mono text-[#7ef5ff] mb-1">⚠ System Note</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Power levels are not static. Emotional evolution, trauma, bonds, and spiritual events can shift a being's tier.
              The Tier Scaling System is a classification — not a cage.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
