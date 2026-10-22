import { useState } from 'react';
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useScroll';
import { submitContact, validateContact, type ContactPayload } from '@/lib/submitContact';

const EMPTY: ContactPayload = { name: '', email: '', subject: '', message: '' };
const LOCATION_URL = 'https://maps.app.goo.gl/kYKPghxfFvyJfySP6';
const MAP_EMBED_URL = 'https://www.google.com/maps?q=22.490145,88.3118966&z=17&output=embed';

export function ResumeContact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    { type: 'idle' } | { type: 'loading' } | { type: 'success'; mode: 'demo' | 'formspree' } | { type: 'error'; message: string }
  >({ type: 'idle' });

  const update = (field: keyof ContactPayload, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus({ type: 'loading' });
    const result = await submitContact(form);
    if (result.ok) {
      setStatus({ type: 'success', mode: result.mode });
      setForm(EMPTY);
    } else {
      setStatus({ type: 'error', message: result.error });
    }
  };

  const contactCards = [
    { label: 'Email', value: profile.contactEmail, href: `mailto:${profile.contactEmail}`, icon: Mail },
    { label: 'LinkedIn', value: 'nabin-sarkar-sd23m09y03', href: profile.socials[0].href, icon: Linkedin },
    { label: 'GitHub', value: 'Nabin022', href: profile.socials[1].href, icon: Github },
    { label: 'Instagram', value: '@nabin.js', href: profile.socials[2].href, icon: Instagram },
  ];

  return (
    <section id="contact" className="section-pad relative bg-ink-900/40">
      <div className="container-content">
        <SectionHeading
          eyebrow="Resume & Contact"
          title="Let's connect"
          description="Download my resume or send me a message. I'm open to opportunities in mechanical design, CAD/CAE, and product development."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]`}>
          {/* Left: resume + contact cards */}
          <div className="space-y-6">
            <div className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-strong">Resume</h3>
              <p className="mt-2 text-sm text-muted">
                Download my latest resume as a PDF, including my engineering experience, education, projects, skills, and certifications.
              </p>
              <a href={profile.resume} download className="btn-ember mt-4 w-full sm:w-auto">
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-strong">Direct contact</h3>
              <ul className="mt-4 space-y-3">
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-line/10 bg-subtle/5 p-3 transition-all hover:border-accent/30 hover:bg-accent/5"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-glow">
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-faint">{c.label}</span>
                          <span className="block truncate text-sm font-medium text-body">
                            {c.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
          {/* Right: contact form */}
          <div className="card-surface p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-strong">Send a message</h3>

            <div className="mt-3 flex items-start gap-2 rounded-xl border border-line/10 bg-subtle/5 p-3 text-xs text-muted">
              <Info size={15} className="mt-0.5 shrink-0 text-accent-glow" />
              <span>
                This form validates input and shows a success message out of the box. To actually
                deliver messages, connect a service like Formspree or Supabase — see the README
                "Contact form" section.
              </span>
            </div>

            <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => update('subject', v)}
                error={errors.subject}
                placeholder="What's this about?"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-body">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={5}
                  placeholder="Your message..."
                  aria-invalid={!!errors.message}
                  className={`w-full rounded-xl border bg-ink-800 px-4 py-3 text-sm text-strong placeholder:text-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60 ${
                    errors.message ? 'border-red-500/60' : 'border-line/10'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-primary w-full"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                <Send size={15} />
              </button>

              {status.type === 'success' && (
                <div className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>
                    {status.mode === 'demo'
                      ? 'Form validated successfully (demo mode). Connect a delivery service in .env to actually receive messages.'
                      : 'Message sent. Thank you — I\'ll get back to you soon.'}
                  </span>
                </div>
              )}
              {status.type === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>

          <div className="card-surface overflow-hidden">
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-glow">
                <MapPin size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-strong">Current location</h3>
                <p className="mt-1 text-sm text-muted">51, Narayan Pally, Behala, Kolkata, West Bengal 700034</p>
              </div>
            </div>
            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>
          </div>
          <div className="relative h-72 border-t border-line/10 bg-ink-800 sm:h-80">
            <iframe
              src={MAP_EMBED_URL}
              title="Nabin Sarkar current location on Google Maps"
              className="h-full w-full grayscale-[0.15] transition-all hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-body">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-ink-800 px-4 py-3 text-sm text-strong placeholder:text-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60 ${
          error ? 'border-red-500/60' : 'border-line/10'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
