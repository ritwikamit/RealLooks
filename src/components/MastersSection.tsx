import React from 'react';
import { Calendar } from 'lucide-react';
import { STYLISTS } from '../data/salonData';

interface MastersSectionProps {
  onSelectMaster: (stylistId: string) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  const masterStylists = STYLISTS.filter((s) => s.id !== 'any');

  return (
    <section id="masters" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#FFEEB3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Our Team
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Meet the Stylists
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/75">
          Friendly, trained professionals who take the time to get your cut and skin care right.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterStylists.map((master) => (
          <article
            key={master.id}
            className="card brutal-glass rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-72 overflow-hidden border-b-2 border-[#141413]">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#FFEEB3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold">
                {master.experienceYears}+ Years Exp
              </span>
            </figure>

            <div className="card-body p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-[#141413]">{master.name}</h3>
                <p className="text-xs font-extrabold text-[#F47321] mt-0.5">{master.role}</p>
                <p className="text-xs text-[#141413]/75 mt-2 leading-relaxed">{master.bio}</p>

                {master.specialties && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {master.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#B4D7CD] border border-[#141413] text-[#141413] text-[10px] font-bold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => onSelectMaster(master.id)}
                className="btn w-full bg-[#FFEEB3] hover:bg-[#F47321] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book with {master.name.split(' ')[0]}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
