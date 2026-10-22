import { GraduationCap } from 'lucide-react';
import { education } from '@/data/education';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';

export function Education() {
  const { ref, visible } = useReveal();
  return (
    <section id="education" className="section-pad relative bg-ink-900/40">
      <div className="container-content">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 relative`}>
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-line/10 to-transparent" />
          <ul className="space-y-8">
            {education.map((e) => (
              <li key={e.id} className="relative pl-12">
                <span className="absolute left-2.5 top-2 z-10 flex h-3 w-3 rounded-full bg-accent ring-4 ring-ink-950" />
                <div className="card-surface p-6 transition-all hover:border-accent/30">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-glow">
                      <GraduationCap size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-strong">{e.degree}</h3>
                      <p className="text-sm text-body">{e.institution}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="chip">{e.board}</span>
                    <span className="chip">{e.period}</span>
                  </div>
                  {e.description && (
                    <p className="mt-3 text-sm text-muted leading-relaxed">{e.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
