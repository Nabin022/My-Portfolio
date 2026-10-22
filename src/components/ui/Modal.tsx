import { useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Modal({ open, onClose, title, children, maxWidth = 'max-w-3xl' }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Dialog'}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        className={`relative w-full ${maxWidth} max-h-[88vh] overflow-y-auto rounded-2xl border border-line/10 bg-ink-850 shadow-2xl animate-scale-in`}
      >
        {title && (
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line/10 bg-ink-850/95 px-6 py-4 backdrop-blur">
            <h3 className="font-display text-lg font-semibold text-strong pr-8">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted hover:bg-subtle/10 hover:text-strong transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {!title && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-muted hover:bg-subtle/10 hover:text-strong transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        )}
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
