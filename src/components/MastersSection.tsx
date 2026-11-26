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
        <p className="font-script text-3xl sm:text-4xl text-[#6061B6] mb-1">
          Hands you can trust
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight">
          Meet the Stylists
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#00105B]/70">
          Friendly, trained professionals who take the time to understand your hair, your routine, and what makes you feel confident.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterStylists.map((master) => (
          <article
            key={master.id}
            className="card glass-surface rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-72 overflow-hidden">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#FCF9EC]/90 backdrop-blur-md text-[#00105B] text-xs font-bold">
                {master.experienceYears}+ Years Exp
              </span>
            </figure>

            <div className="card-body p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#00105B]">{master.name}</h3>
                <p className="text-xs font-bold text-[#6061B6] mt-0.5">{master.role}</p>
                <p className="text-xs text-[#00105B]/70 mt-2 leading-relaxed">{master.bio}</p>

                {master.specialties && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {master.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-[#C9B5E0]/50 text-[#00105B] text-[10px] font-semibold"
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
                className="btn w-full bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Book with {master.name.split(' ')[0]}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
