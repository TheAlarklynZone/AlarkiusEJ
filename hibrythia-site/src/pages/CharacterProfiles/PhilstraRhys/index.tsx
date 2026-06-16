// ─── PhilstraRhys/index.tsx ───────────────────────────────────────────────────
// HAXL | The Hibrythian Saga — Character Profile: Philstra Rhys
// Lore content pending — page shell only
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function PhilstraRhys() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <nav className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-16">
        <Link to="/characters" className="hover:text-[#c9a84c] transition-colors">Characters</Link>
        <span>/</span>
        <span className="text-[#7a746e]">Philstra Rhys</span>
      </nav>
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Background Character</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Philstra Rhys</h1>
      <p className="font-body text-base text-[#4a4844] italic">Lore coming soon.</p>
    </div>
  );
}
