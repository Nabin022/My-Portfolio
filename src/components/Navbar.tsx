import { useEffect, useState } from 'react';
import { Menu, X, Cog, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '@/hooks/useScroll';
import { useTheme } from '@/hooks/useTheme';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'creative', label: 'Creative Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/10 bg-ink-950/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between gap-4">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-display text-base font-bold text-strong"
          aria-label="Back to top"
        >
          <Cog className="text-accent animate-spin-slow" size={20} />
          Nabin Sarkar
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-strong'
                    : 'text-muted hover:text-strong'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-ember" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className={`theme-toggle ${theme === 'light' ? 'is-light' : ''}`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle-slider" aria-hidden="true" />
            <span className="theme-toggle-icon theme-toggle-sun">
              <Sun size={15} />
            </span>
            <span className="theme-toggle-icon theme-toggle-moon">
              <Moon size={15} />
            </span>
          </button>

          <button
            className="lg:hidden rounded-lg p-2 text-strong hover:bg-subtle/10"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line/10 bg-ink-950/95 backdrop-blur-md">
          <ul className="container-content flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-subtle/5 text-strong'
                      : 'text-muted hover:text-strong hover:bg-subtle/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
