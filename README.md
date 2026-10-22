# Nabin Sarkar — Personal Portfolio

A premium, fully responsive personal portfolio for **Nabin Sarkar**, Mechanical Engineering graduate and creative digital enthusiast. Built with React + TypeScript + Vite + Tailwind CSS, using Lucide icons.

The site presents both sides of Nabin's work — mechanical design engineering (CAD, CAE, thermal analysis, projects, training) and a creative portfolio (graphic design, video editing, photography, content creation) — in a single, polished dark-themed experience.

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS v3** (stable, mutually compatible config — not v4)
- **lucide-react** for icons
- **npm** for package management

No proprietary runtime, hosting, or Bolt-specific features are required. The project runs anywhere Node.js is installed.

---

## Requirements

- **Node.js LTS** (v20 or newer recommended) — download from <https://nodejs.org>
- **VS Code** (optional but recommended) — download from <https://code.visualstudio.com>

---

## Getting started (local development)

1. **Install Node.js LTS** from <https://nodejs.org> (choose the LTS version).

2. **Download / clone this project**, then open the project folder in VS Code.

3. **Open the integrated terminal** in VS Code:
   - Top menu → `Terminal` → `New Terminal`, or press `` Ctrl+` `` (Windows/Linux) / `` Cmd+` `` (Mac).

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site is served at the URL printed in the terminal (usually <http://localhost:5173>).

6. **Create a production build:**
   ```bash
   npm run build
   ```

7. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

8. **Type-check the project:**
   ```bash
   npm run typecheck
   ```

---

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf                  ← replace with your real resume
│   └── profile-placeholder.svg     ← replace with your real photo
├── src/
│   ├── main.tsx                    ← React entry point
│   ├── App.tsx                     ← page composition + layout
│   ├── index.css                   ← Tailwind + global styles
│   ├── data/                       ← ALL editable content lives here
│   │   ├── profile.ts              ← name, headline, socials, intro
│   │   ├── about.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── certifications.ts
│   │   ├── achievements.ts
│   │   ├── creative.ts             ← graphic design, video, photography, social
│   │   └── education.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Achievements.tsx
│   │   ├── Creative.tsx
│   │   ├── Education.tsx
│   │   ├── ResumeContact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── Modal.tsx
│   │       ├── Gear.tsx            ← decorative animated gear
│   │       └── BlueprintGrid.tsx   ← decorative grid background
│   ├── hooks/
│   │   └── useActiveSection.ts
│   └── lib/
│       └── submitContact.ts        ← contact form handler (demo + real)
├── index.html
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── .env.example
├── .gitignore
└── README.md
```

---

## Where to replace your content

All content is data-driven so you rarely touch component code.

| What | Where |
|---|---|
| Name, headline, intro, social links | `src/data/profile.ts` |
| About text + info cards | `src/data/about.ts` |
| Skills (categories, items, proficiency) | `src/data/skills.ts` |
| Projects (title, tools, images, report/pub links) | `src/data/projects.ts` |
| Certifications & training | `src/data/certifications.ts` |
| Achievements | `src/data/achievements.ts` |
| Creative work (graphic design, video, photo, social) | `src/data/creative.ts` |
| Education timeline | `src/data/education.ts` |
| **Profile photo** | Replace `public/profile-placeholder.svg` (or update the path in `src/data/profile.ts`) |
| **Resume PDF** | Replace `public/resume.pdf` |
| **Favicon** | Replace `public/favicon.svg` |
| Contact form delivery | See "Contact form" below |

### Adding images

Drop image files into `public/` (e.g. `public/projects/piston-1.jpg`) and reference them in the data files as `/projects/piston-1.jpg`. For best performance, export images as optimized `.webp` or `.jpg` at a reasonable size.

---

## Contact form

The contact form ships in **demo mode**: it validates the fields and shows a success message, but does not actually send email. This is intentional — you must connect a delivery service before messages reach you.

To enable real delivery, pick one:

- **Formspree (easiest):** Create a form at <https://formspree.io>, copy the endpoint ID, set `VITE_FORMSPREE_ENDPOINT` in `.env`, and uncomment the Formspree branch in `src/lib/submitContact.ts`.
- **Supabase:** Create a `contact_messages` table, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`, and uncomment the Supabase branch in `src/lib/submitContact.ts`.

See `.env.example` for the exact variable names.

---

## Deployment

The project builds to a static `dist/` folder and deploys to **Netlify** or **Vercel** with no extra configuration beyond SPA routing fallback.

### Build first

```bash
npm run build
```

This produces a `dist/` folder you can upload or serve.

### Option A: Netlify

1. Push this project to a GitHub repository.
2. Go to <https://app.netlify.com> → **Add new site** → **Import an existing project**.
3. Select your GitHub repo.
4. Build settings (auto-detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**.

After that, every push to your main branch redeploys automatically.

The included `netlify.toml` handles the SPA routing fallback (so deep links work) and sets a long cache for static assets.

### Option B: Vercel

1. Push this project to a GitHub repository.
2. Go to <https://vercel.com> → **Add New** → **Project**.
3. Import your GitHub repo.
4. Vercel auto-detects Vite. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**.

The included `vercel.json` handles SPA routing fallback. Future pushes to main redeploy automatically.

### Connecting GitHub for automatic deployment

Both Netlify and Vercel link to your GitHub repo during import. Once connected, every `git push` to the `main` branch triggers a new build and deploy automatically — no manual steps needed.

---

## SEO & metadata

Page title, description, and Open Graph tags are set in `index.html`. Update the `og:image` URL (point it to a hosted image of your hero/preview) and the title/description to match your brand before deploying.

---

## License

Personal portfolio for Nabin Sarkar. Content is personal; code structure is free to adapt.
