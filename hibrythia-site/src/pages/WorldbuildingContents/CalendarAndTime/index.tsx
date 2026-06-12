import { Link } from 'react-router-dom';

export default function CalendarAndTime() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link
        to="/world/databases"
        className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block"
      >
        ← Back to Databases & Systems
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
        III. The Inner Gears
      </p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        Calendar & Time — The 32-Hour System
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-10 max-w-[600px] leading-relaxed">
        We're slowly migrating our content here! Check back soon.
      </p>

      {/* Interactive calendar link */}
      <div className="border border-[#2e2b26] rounded-sm p-6 bg-[#131210] max-w-[420px]">
        <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-2">Interactive Tool</p>
        <h2 className="font-display text-sm text-[#f2ebeb] mb-2">The Hetranian Calendar</h2>
        <p className="font-body text-xs text-[#7a7670] leading-relaxed mb-4">
          Explore the live interactive calendar — 32-hour days, 14 months, 444 days per year.
        </p>
        <Link
          to="/32-16TimeSystem"
          className="inline-block font-body text-[10px] tracking-widest uppercase text-[#c9a84c] hover:text-[#f2ebeb] transition-colors duration-200"
        >
          Open Interactive Calendar →
        </Link>
      </div>
    </div>
  );
}
