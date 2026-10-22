import { FlaskConical, Trophy, Flag, Star, ExternalLink } from 'lucide-react';
import { achievements, type Achievement } from '@/data/achievements';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';

const categoryMeta: Record<
  Achievement['category'],
  { label: string; icon: typeof Trophy; color: string }
> = {
  project: { label: 'Project Milestone', icon: Flag, color: 'text-accent-glow bg-accent/15' },
  research: { label: 'Research', icon: FlaskConical, color: 'text-accent-glow bg-accent/15' },
  competition: { label: 'Competition / Event', icon: Trophy, color: 'text-ember-glow bg-ember/15' },
  other: { label: 'Achievement', icon: Star, color: 'text-body bg-subtle/10' },
};

export function Achievements() {
  const { ref, visible } = useReveal();
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-content">
        <SectionHeading
          eyebrow="Achievements & Highlights"
          title="Milestones along the way"
          description="Verified milestones and placeholders for items I'll add as they happen. Nothing is invented here."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 relative`}>
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-line/10 to-transparent sm:left-1/2" />

          <ul className="space-y-8">
            {achievements.map((a, i) => {
              const meta = categoryMeta[a.category];
              const Icon = meta.icon;
              const left = i % 2 === 0;
              return (
                <li key={a.id} className="relative pl-12 sm:pl-0">
                  {/* dot */}
                  <span className="absolute left-2.5 top-1.5 z-10 flex h-3 w-3 rounded-full bg-accent ring-4 ring-ink-950 sm:left-1/2 sm:-translate-x-1/2" />

                  <div
                    className={`sm:w-1/2 ${left ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'}`}
                  >
                    <div className="card-surface p-5 transition-all hover:border-line/15">
                      <div className={`flex items-center gap-2 ${left ? 'sm:justify-end' : ''}`}>
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${meta.color}`}>
                          <Icon size={13} />
                          {meta.label}
                        </span>
                        {a.date && (
                          <span className="text-xs font-mono text-faint">{a.date}</span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-base font-semibold text-strong leading-snug">
                        {a.title}
                      </h3>
                      {a.description && (
                        <p className="mt-2 text-sm text-muted leading-relaxed">{a.description}</p>
                      )}
                      {a.link !== undefined && a.link !== '' && (
                        <a
                          href={a.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-glow hover:text-accent ${left ? 'sm:flex-row-reverse' : ''}`}
                        >
                          <ExternalLink size={14} />
                          Open link
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
