export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactResult =
  | { ok: true; mode: 'demo' | 'formspree' }
  | { ok: false; error: string };

/**
 * Contact form submission handler.
 *
 * In demo mode (no env vars set) it validates and returns success without
 * sending anything — so the UI works out of the box. To actually deliver
 * messages, set VITE_FORMSPREE_ENDPOINT in .env and uncomment the Formspree
 * branch, or wire up a Supabase `contact_messages` table.
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const formspree = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  if (formspree) {
    try {
      const res = await fetch(formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return { ok: false, error: 'Submission failed. Please try again or email directly.' };
      }
      return { ok: true, mode: 'formspree' };
    } catch {
      return { ok: false, error: 'Network error. Please email directly instead.' };
    }
  }

  // Demo mode: no backend configured. Pretend success so the UX is complete,
  // but clearly inform the user in the UI that delivery is not wired up.
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, mode: 'demo' };
}

export function validateContact(p: Partial<ContactPayload>): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!p.name || p.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))
    errors.email = 'Please enter a valid email address.';
  if (!p.subject || p.subject.trim().length < 3) errors.subject = 'Please add a subject.';
  if (!p.message || p.message.trim().length < 10)
    errors.message = 'Your message should be at least 10 characters.';
  return errors;
}
