import { Link } from 'react-router-dom';

export default function TheSkyContinentOfHetrania() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        Locales &amp; Sights / The Sky Continent of Hetrania
      </p>

      {/* Hero */}
      <div className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Hetrania, The Sky Island Continent</h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          An island continent that floats in the sky over the Sea of Lynneria. North of Varleqe and south of Lynneria.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Hetrania is a continent that floats in the sky above the sea. Hetrania is home to creatures and animals, and is the first place for Kydel to make home. Hetrania floats in the sky with the help of Hexicule Crystals that are below the island. Hexicule Crystals contain high amounts of supernatural and divine power, thus it makes the island float in the sky above mountain elevation.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Getting here to Hetrania is not easy and very dangerous, for there are bridges that connect from Varleqe to Hetrania. The wind flow is very strong, so when the bridges sway, it&apos;s not a good idea to cross them. The bridges that connect both places together are very steep and angled very high. It&apos;s like climbing a ladder that sways in the wind. Even though Hetrania is a floating sky continent, it sometimes drifts back towards the seas&apos; surface one every full-moon, when the full-moon shines directly onto the continent. It&apos;s a 1-in a million chance for this to happen.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Hetrania — Image Placeholder ]</p>
      </div>

      {/* Spiritqual */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Spiritqual</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          On Hetrania, there are gate ruins that lead to a divine cave underground called the Spiritqual. This cave was where Kydel was given a second life as a hibryd being from Zohl. The Spiritqual was built by Zohl, and the Spirit Wardens.
        </p>
      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/locales" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Locales &amp; Sights</span>
        </Link>
        <Link to="/world/locales/lynneria" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">The Continent of Lynneria</span>
        </Link>
      </div>

    </div>
  );
}
