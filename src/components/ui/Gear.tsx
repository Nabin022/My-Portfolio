/**
 * Decorative animated gear. Pure SVG + CSS animation, respects
 * prefers-reduced-motion via the global CSS override.
 */
export function Gear({
  className = '',
  teeth = 12,
  size = 120,
  color = '#2f6df6',
  spin = 'slow',
  opacity = 0.18,
}: {
  className?: string;
  teeth?: number;
  size?: number;
  color?: string;
  spin?: 'slow' | 'slower' | 'none';
  opacity?: number;
}) {
  const r = 40;
  const toothLen = 8;
  const cx = 50;
  const cy = 50;
  const points: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.5) / teeth) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r;
    const x2 = cx + Math.cos(a) * (r + toothLen);
    const y2 = cy + Math.sin(a) * (r + toothLen);
    const x3 = cx + Math.cos(a2) * (r + toothLen);
    const y3 = cy + Math.sin(a2) * (r + toothLen);
    const x4 = cx + Math.cos(a2) * r;
    const y4 = cy + Math.sin(a2) * r;
    points.push(`M${x1} ${y1} L${x2} ${y2} L${x3} ${y3} L${x4} ${y4}`);
  }
  const path = points.join(' ');
  const spinClass =
    spin === 'slow' ? 'animate-spin-slow' : spin === 'slower' ? 'animate-spin-slower' : '';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${spinClass} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={10} fill="none" stroke={color} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={4} fill={color} />
    </svg>
  );
}
