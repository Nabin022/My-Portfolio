import { about } from '@/data/about';
import { aboutIconMap } from '@/components/ui/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';

export function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="section-pad relative">
      <div className="container-content">
        <SectionHeading eyebrow="About Me" title="Engineering mindset, creative instinct" />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]`}>
          <div className="space-y-4 text-muted leading-relaxed">
            {about.body.map((para, i) => (
              <p key={i} className="text-pretty">
                {para}
              </p>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {about.cards.map((card) => {
              const Icon = aboutIconMap[card.icon];
              return (
                <div
                  key={card.label}
                  className="card-surface group p-4 transition-all hover:border-accent/30 hover:shadow-glow"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-glow transition-colors group-hover:bg-accent/20">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-faint">
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-body leading-snug">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
