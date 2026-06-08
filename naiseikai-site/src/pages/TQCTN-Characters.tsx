import { Link, useParams, Navigate } from 'react-router-dom'
import {
  HanakoReinaTab,
  KoaRurukaTab,
  HaruhiAoiTab,
  LittleBunnyAruTab,
  AsamiKuroseTab,
} from './KarasuToNinja-TQCTN'

const TITLE_BASE = '/titles/KarasuToNinja-TQCTN'

type CharacterEntry = {
  slug: string
  label: string
  color: string
  Component: () => JSX.Element
}

const CHARACTERS: CharacterEntry[] = [
  { slug: 'hanako-reina',                 label: 'Hanako Reina',      color: 'text-[#ff6b9d]', Component: HanakoReinaTab },
  { slug: 'koa-ruruka',                   label: 'Koa Ruruka',        color: 'text-[#ff6b9d]', Component: KoaRurukaTab },
  { slug: 'haruhi-aoi',                   label: 'Haruhi Aoi',        color: 'text-[#ffaad4]', Component: HaruhiAoiTab },
  { slug: 'little-yours-truly-bunny-aru', label: 'Little Bunny Aru',  color: 'text-[#ffaad4]', Component: LittleBunnyAruTab },
  { slug: 'asami-kurose',                 label: 'Asami Kurose',      color: 'text-[#d49fff]', Component: AsamiKuroseTab },
]

export default function TQCTNCharacter() {
  const { characterSlug } = useParams<{ characterSlug: string }>()
  const entry = CHARACTERS.find((c) => c.slug === characterSlug)

  // 404 — redirect back to the characters tab
  if (!entry) return <Navigate to={`${TITLE_BASE}#characters`} replace />

  const { label, color, Component } = entry

  // Prev / next navigation
  const idx = CHARACTERS.indexOf(entry)
  const prev = CHARACTERS[idx - 1] ?? null
  const next = CHARACTERS[idx + 1] ?? null

  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
        <span>/</span>
        <Link to={TITLE_BASE} className="hover:text-[#00e5ff] transition-colors">The Quiet Crow &amp; The Ninja</Link>
        <span>/</span>
        <Link to={`${TITLE_BASE}`} className="hover:text-[#00e5ff] transition-colors">Characters</Link>
        <span>/</span>
        <span className={color}>{label}</span>
      </nav>

      {/* Character content */}
      <Component />

      {/* Prev / Next nav */}
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          {prev && (
            <Link
              to={`${TITLE_BASE}/${prev.slug}`}
              className="btn-neon-cyan text-xs"
            >
              ← {prev.label}
            </Link>
          )}
        </div>
        <Link to={TITLE_BASE} className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          {next && (
            <Link
              to={`${TITLE_BASE}/${next.slug}`}
              className="btn-neon-purple text-xs"
            >
              {next.label} →
            </Link>
          )}
        </div>
      </div>

    </div>
  )
}
