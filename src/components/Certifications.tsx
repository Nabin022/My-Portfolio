import { Factory, Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';

export function Certifications() {
  const { ref, visible } = useReveal();
  return (
    <section id="certifications" className="section-pad relative bg-ink-900/40">
      <div className="container-content">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Training and certifications"
          description="Industrial training is listed separately from formal certifications. Placeholder cards are marked so you can replace them with real entries."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3`}>
          {certifications.map((c) => {
            const isTraining = c.type === 'training';
            const Icon = isTraining ? Factory : Award;
            return (
              <div
                key={c.id}
                className="card-surface group relative p-6 transition-all hover:border-ember/30 hover:shadow-ember"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      isTraining ? 'bg-ember/15 text-ember-glow' : 'bg-accent/15 text-accent-glow'
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <span
                    className={`chip ${isTraining ? 'border-ember/30 text-ember-glow' : 'border-accent/30 text-accent-glow'}`}
                  >
                    {isTraining ? 'Industrial Training' : 'Certification'}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-strong leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-body">{c.organization}</p>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-faint">
                  <Calendar size={13} />
                  {c.date}
                </div>

                {c.description && (
                  <p className="mt-3 text-sm text-muted leading-relaxed">{c.description}</p>
                )}

                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-glow hover:text-accent"
                  >
                    <ExternalLink size={14} />
                    Verify
                  </a>
                ) : (
                  !isTraining && (
                    <p className="mt-4 text-xs text-faint">
                      Add verification link in <code className="text-muted">src/data/certifications.ts</code>
                    </p>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
