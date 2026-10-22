import { Cog, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';
import { socialIconMap } from '@/components/ui/icons';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/10 bg-ink-950">
      <div className="container-content py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-strong">
            <Cog className="text-accent animate-spin-slow" size={18} />
            Nabin Sarkar
          </div>

          <div className="flex items-center gap-3">
            {profile.socials.map((s) => {
              const Icon = socialIconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line/10 bg-subtle/5 text-muted transition-all hover:border-accent/40 hover:text-accent-glow"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg border border-line/10 px-3 py-2 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent-glow"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-faint">
          © {year} Nabin Sarkar. Built with React, TypeScript, Tailwind CSS, and Lucide icons.
        </p>
      </div>
    </footer>
  );
}
