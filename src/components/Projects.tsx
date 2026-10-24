import { useState } from 'react';
import { ArrowUpRight, FileText, BookOpen, Wrench, Images } from 'lucide-react';
import { projects, type Project, type ProjectLink } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Modal } from '@/components/ui/Modal';
import { useReveal } from '@/hooks/useScroll';

function linkIcon(kind: ProjectLink['kind']) {
  switch (kind) {
    case 'report':
      return <FileText size={15} />;
    case 'publication':
      return <BookOpen size={15} />;
    case 'external':
      return <ArrowUpRight size={15} />;
    default:
      return <Wrench size={15} />;
  }
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article
      className={`card-surface group flex flex-col overflow-hidden transition-all hover:border-accent/30 hover:shadow-glow ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line/10 bg-ink-800">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {project.featured && (
            <span className="absolute left-3 top-3 chip border-accent/40 bg-accent/15 text-accent-glow">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {project.featured && (
          <p className="mt-5 text-xs font-mono uppercase tracking-[0.18em] text-accent-glow">
            Featured case study
          </p>
        )}
        <h3 className="mt-3 font-display text-lg font-semibold text-strong leading-snug sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{project.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={onOpen} className="btn-ghost py-2 px-4 text-xs">
            <Images size={15} />
            View Details
          </button>
          {project.links?.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost py-2 px-4 text-xs"
              >
                {linkIcon(link.kind)}
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-line/10 px-4 py-2 text-xs text-faint"
                title="Add your link in src/data/projects.ts"
              >
                {linkIcon(link.kind)}
                {link.label} (add link)
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Modal open={!!project} onClose={onClose} title={project?.title} maxWidth="max-w-4xl">
      {project && (
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <figure key={i} className="overflow-hidden rounded-xl border border-line/10 bg-ink-800">
                  <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
                  {img.caption && (
                    <figcaption className="px-3 py-2 text-xs text-faint">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {project.sections && (
            <div className="space-y-6">
              {project.sections.map((sec, i) => (
                <div key={i} className="border-l-2 border-accent/40 pl-4">
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-glow">
                    {sec.heading}
                  </h4>
                  <p className="mt-2 text-sm text-body leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 border-t border-line/10 pt-6">
              {project.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 text-xs"
                  >
                    {linkIcon(link.kind)}
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-line/10 px-4 py-2.5 text-xs text-faint"
                  >
                    {linkIcon(link.kind)}
                    {link.label} — add URL in data file
                  </span>
                )
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, visible } = useReveal();
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering & simulation work"
          description="A selection of my projects — click any card for full objectives, methodology, results, and gallery."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3`}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
