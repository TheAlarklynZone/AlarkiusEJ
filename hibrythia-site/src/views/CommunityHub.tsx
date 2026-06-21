import { Link } from 'react-router-dom';

export default function CommunityHub() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
        {" / "}
        <span className="text-[#c9a84c]">Community Hub</span>
      </p>

      {/* Header */}
      <div>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">The Hibrythian Saga</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Community Hub</h1>
        <p className="font-body text-base text-[#7a746e] leading-relaxed max-w-[600px]">
          A space for readers, worldbuilders, and fans of The Hibrythian Saga. Discussion, comments, and community features coming soon!
        </p>
      </div>

      {/* Placeholder */}
      <div className="px-8 py-16 rounded-xl border border-[#2e2b26] bg-[#1a1714] flex flex-col items-center gap-4 text-center">
        <span className="text-4xl">🏛️</span>
        <p className="font-display text-lg text-[#f2ebeb]">Community Discussion</p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed max-w-[440px]">
          The community hub is being set up. Check back soon — discussions, comments, and fan interactions will live here!
        </p>
        {/* Disqus drop-in zone */}
        <div id="disqus_thread" className="w-full mt-4" />
      </div>

    </div>
  );
}
