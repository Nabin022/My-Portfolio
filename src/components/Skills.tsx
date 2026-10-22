import { skillCategories } from '@/data/skills';
import { skillIconMap } from '@/components/ui/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';

function ProficiencyDots({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Proficiency ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-5 rounded-full transition-colors ${
            n <= level ? 'bg-gradient-to-r from-accent to-accent-glow' : 'bg-subtle/10'
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  const { ref, visible } = useReveal();
  return (
    <section id="skills" className="section-pad relative bg-ink-900/40">
      <div className="container-content">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I work with"
          description="Categorized by domain. Proficiency indicators reflect my honest current level — I'm actively growing in several of these areas."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-6 md:grid-cols-2`}>
          {skillCategories.map((cat) => {
            const Icon = skillIconMap[cat.icon];
            return (
              <div key={cat.title} className="card-surface p-6 transition-all hover:border-line/15">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ember/10 text-accent-glow">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-strong">{cat.title}</h3>
                    <p className="text-xs text-faint">{cat.blurb}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-body">{skill.name}</p>
                        {skill.description && (
                          <p className="text-xs text-faint mt-0.5">{skill.description}</p>
                        )}
                      </div>
                      {skill.level && (
                        <div className="shrink-0 pt-1">
                          <ProficiencyDots level={skill.level} />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
