/** Faint blueprint grid + radial accent fade background layer. */
export function BlueprintGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-blueprint ${className}`}
      aria-hidden="true"
    />
  );
}
