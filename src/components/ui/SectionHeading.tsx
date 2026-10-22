import { useReveal } from '@/hooks/useScroll';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tightest text-strong text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed text-pretty">{description}</p>
      )}
    </div>
  );
}
