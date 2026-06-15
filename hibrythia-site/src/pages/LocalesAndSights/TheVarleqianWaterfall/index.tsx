import { Link } from 'react-router-dom';

export default function TheVarleqianWaterfall() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        Locales &amp; Sights / The Super-Continent of Varleqe
      </p>

      {/* Hero */}
      <div className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Super-Continent of Varleqe</h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Varleqe is a massive supercontinent that is west of all the other continents and almost takes up 1/5th of the globe (if you look on the map). Varleqe is inhabited by beasts, mythological creatures, demons, and animals. Direwolves are considered beasts, and Kydel is one of them. There aren&apos;t many cities or towns on this continent because this place primarily has ruins and old abandoned cities.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Despite the continent being big, there are many lakes and rivers, where each part of the area has a lush feel. Where there are less rivers, the areas look a bit drier. Some areas are scorched because there are demons living in ruins that often scorch the land due to territorial disputes.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Varleqe — Image Placeholder ]</p>
      </div>

      {/* Villages */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Villages</h2>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Greenlux Town</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Greenlux Town is located north, beyond the North Mountains. Greenlux is very close to the border of Varleqe and was considered a thriving town back in the days. However, due to the population of beasts, many humans have fled from this place.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Oldtree Cementery</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Oldtree Cementery is a small town with its cemetery as its primary attraction. Located southwest of Greenlux and south of Ribbonfelt. And no, Cementery is the name (not a typo).
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Ribbonfelt Town</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A town southwest of Greenlux. This town was important back in the past of Varleqe, since many people come to this place to send out lanterns because of its tradition, SeaLit Lanterns. However, since this town is close to the ice caps, it slowly started to be less known for its tradition.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Greenside Hills Village</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Smackdab in the center of Varleqe, southeast of the other free towns, Greenside Hills is a city that once was active. Greenside Hills used to be a tourist attraction for people around the world because of its beautiful architecture that the buildings are built on. Even to this day, the buildings have remained fresh and preserved since it was built out of material that was made to withstand corrosion and degradation.
          </p>
        </div>
      </div>

      {/* Ruins */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Ruins</h2>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Mountainbearer Gate Ruins</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Mountainbearer Ruins is north of the Hidden Plains Ruins. This Gate Ruin has some form of knowledge about the continent&apos;s living beings.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Hillside Gate Ruins</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of Mountainbearer Ruin. Not much to it, but it&apos;s a prominent location. The Hillside Gate Ruins are filled with lush caves, so there&apos;s plenty of animals there.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Underwater Chambers</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Underwater Chambers is hidden under the water off the coast of Varleqe, southeast. It&apos;s home to mermaids and sirens.
          </p>
        </div>
      </div>

      {/* Gulf of Varleqe */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Gulf of Varleqe</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Gulf of Varleqe was formed from a meteor impact in the past. Parts of the lands are still here, now known as islands. The rest of the land is submerged under the water since a city once thrived in this region of the continent. However, the city now is preserved in the depths of the gulf.
        </p>
      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/locales" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Locales &amp; Sights</span>
        </Link>
      </div>

    </div>
  );
}
