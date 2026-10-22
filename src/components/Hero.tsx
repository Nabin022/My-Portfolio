import { ArrowRight, Download, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { socialIconMap } from '@/components/ui/icons';
import { Gear } from '@/components/ui/Gear';
import { BlueprintGrid } from '@/components/ui/BlueprintGrid';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <BlueprintGrid className="mask-fade-b opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <Gear className="absolute -right-16 top-24 hidden md:block" size={280} opacity={0.1} spin="slow" />
      <Gear className="absolute right-40 top-1/2 hidden md:block" size={160} opacity={0.08} spin="slower" color="#f0883e" />
      <Gear className="absolute -left-20 bottom-10 hidden md:block" size={200} opacity={0.07} spin="slower" />

      <div className="container-content relative z-10 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        {/* Profile photo */}
        <div className="relative mx-auto lg:mx-0 animate-fade-up">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin-slow" />
            <div className="absolute -inset-2 rounded-full border border-line/10" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-ember/10 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-line/10 bg-ink-800">
              <img
                src={profile.photo}
                alt="Nabin Sarkar profile photo placeholder"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Status chip */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line/10 bg-ink-850/95 px-3 py-1 text-xs font-medium text-body shadow-card backdrop-blur">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
            </div>
          </div>
          <p className="mt-4 text-center text-xs font-mono text-faint">
            Replace <code className="text-accent-glow">/public/profile-placeholder.svg</code> with your photo
          </p>
        </div>

        {/* Text */}
        <div className="text-center lg:text-left" style={{ animationDelay: '0.1s' }}>
          <span className="eyebrow animate-fade-up">
            <span className="h-px w-6 bg-accent/60" />
            Mechanical Design · CAD/CAE · Creative
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-strong text-balance animate-fade-up">
            Nabin Sarkar
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-body leading-relaxed animate-fade-up">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted leading-relaxed animate-fade-up">
            {profile.intro}
          </p>

          <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-faint animate-fade-up">
            <MapPin size={15} className="text-accent" />
            {profile.location}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              Explore My Work
              <ArrowRight size={16} />
            </button>
            <a href={profile.resume} download className="btn-ember">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-7 flex items-center justify-center lg:justify-start gap-3 animate-fade-up">
            {profile.socials.map((s) => {
              const Icon = socialIconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-line/10 bg-subtle/5 text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-glow hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-faint hover:text-muted transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="block h-9 w-5 rounded-full border border-ink-500 p-1">
          <span className="mx-auto block h-2 w-1 rounded-full bg-faint animate-bounce" />
        </span>
      </button>
    </section>
  );
}
