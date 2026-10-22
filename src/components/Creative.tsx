import { useState } from 'react';
import {
  PenTool,
  Video,
  Camera,
  Instagram,
  Play,
  Maximize2,
  ArrowUpRight,
} from 'lucide-react';
import {
  creativeSubsections,
  graphicDesign,
  graphicDesignFilters,
  videos,
  photography,
  social,
  type VideoItem,
} from '@/data/creative';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Modal } from '@/components/ui/Modal';
import { useReveal } from '@/hooks/useScroll';

type Lightbox = { src: string; alt: string; title?: string } | null;

function GraphicGallery({ onOpen }: { onOpen: (item: Lightbox) => void }) {
  const [filter, setFilter] = useState(graphicDesignFilters[0]);
  const items =
    filter === 'All' ? graphicDesign : graphicDesign.filter((g) => g.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {graphicDesignFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === f
                ? 'bg-accent text-white shadow-glow'
                : 'border border-line/10 bg-subtle/5 text-muted hover:text-strong'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <EmptyState text="No items in this category yet — add some in src/data/creative.ts." />
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onOpen({ src: item.src, alt: item.alt, title: item.title })}
              className="group relative aspect-square overflow-hidden rounded-xl border border-line/10 bg-ink-800"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium text-white">{item.title}</span>
                <Maximize2 size={15} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function VideoGallery() {
  const [active, setActive] = useState<VideoItem | null>(null);
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className="card-surface group overflow-hidden text-left transition-all hover:border-ember/30 hover:shadow-ember"
          >
            <div className="relative aspect-video overflow-hidden bg-ink-800">
              <img
                src={v.thumbnail}
                alt={v.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember/90 text-[#18181b] shadow-ember transition-transform group-hover:scale-110">
                  <Play size={22} className="ml-0.5" fill="currentColor" />
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-display text-sm font-semibold text-strong">{v.title}</h4>
              {v.description && (
                <p className="mt-1 text-xs text-faint leading-relaxed">{v.description}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title} maxWidth="max-w-3xl">
        {active && (
          <div>
            {active.embedUrl ? (
              <div className="aspect-video overflow-hidden rounded-xl border border-line/10">
                <iframe
                  src={active.embedUrl}
                  title={active.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-line/15 bg-ink-800 p-8 text-center">
                <Video className="mx-auto text-ember" size={32} />
                <p className="mt-3 text-sm text-muted">
                  No embed URL set for this video. Add a YouTube/Vimeo embed URL to this item in
                  <code className="mx-1 text-body">src/data/creative.ts</code> to enable playback.
                </p>
              </div>
            )}
            {active.description && (
              <p className="mt-4 text-sm text-muted leading-relaxed">{active.description}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

function PhotoGallery({ onOpen }: { onOpen: (item: Lightbox) => void }) {
  if (photography.length === 0) {
    return <EmptyState text="No photographs yet — add some in src/data/creative.ts." />;
  }
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
      {photography.map((p) => (
        <button
          key={p.id}
          onClick={() => onOpen({ src: p.src, alt: p.alt, title: p.title })}
          className="group relative block w-full overflow-hidden rounded-xl border border-line/10 bg-ink-800 break-inside-avoid"
        >
          <img
            src={p.src}
            alt={p.alt}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-left opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-xs font-medium text-white">{p.title}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

function SocialBlock({ onOpen }: { onOpen: (item: Lightbox) => void }) {
  return (
    <div className="card-surface overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[1fr_1.3fr]">
        <div className="bg-gradient-to-br from-ember/10 to-accent/10 p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember to-ember-soft text-white shadow-ember">
            <Instagram size={24} />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-strong">{social.handle}</h3>
          <p className="mt-3 text-sm text-muted leading-relaxed">{social.blurb}</p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ember to-ember-soft px-5 py-2.5 text-sm font-semibold text-[#18181b] transition-transform hover:-translate-y-0.5"
          >
            <Instagram size={16} />
            Visit Instagram
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-2">
          {social.posts.map((post) => (
            <button
              key={post.id}
              onClick={() => onOpen({ src: post.src, alt: post.alt })}
              className="group relative aspect-square overflow-hidden rounded-xl border border-line/10 bg-ink-800"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="text-white" size={18} />
              </div>
            </button>
          ))}
        </div>
      </div>
      <p className="border-t border-line/10 px-5 py-3 text-center text-xs text-faint">
        Static selection — not live-scraped Instagram posts. Add your own post images in
        src/data/creative.ts.
      </p>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-line/15 bg-ink-800/50 p-8 text-center text-sm text-faint">
      {text}
    </div>
  );
}

const TABS = [
  { id: 'graphic', label: 'Graphic Design', icon: PenTool },
  { id: 'video', label: 'Video Editing', icon: Video },
  { id: 'photo', label: 'Photography', icon: Camera },
  { id: 'social', label: 'Social Media', icon: Instagram },
] as const;

export function Creative() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('graphic');
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const { ref, visible } = useReveal();

  const activeSub = creativeSubsections.find((s) => s.id === tab);

  return (
    <section id="creative" className="section-pad relative overflow-hidden">
      <div className="container-content">
        <SectionHeading
          eyebrow="Creative Portfolio — My Other Side"
          title="The creative half"
          description="Engineering is one side of me. This is the other — graphic design, video editing, photography, and content creation."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-10`}>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-line/10 pb-4">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-subtle/10 text-strong'
                      : 'text-muted hover:text-strong hover:bg-subtle/5'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-ember-glow' : ''} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {activeSub && (
            <p className="mt-6 max-w-2xl text-sm text-muted leading-relaxed">
              {activeSub.blurb}
            </p>
          )}

          <div className="mt-6">
            {tab === 'graphic' && <GraphicGallery onOpen={setLightbox} />}
            {tab === 'video' && <VideoGallery />}
            {tab === 'photo' && <PhotoGallery onOpen={setLightbox} />}
            {tab === 'social' && <SocialBlock onOpen={setLightbox} />}
          </div>
        </div>
      </div>

      <Modal open={!!lightbox} onClose={() => setLightbox(null)} maxWidth="max-w-4xl">
        {lightbox && (
          <figure>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full rounded-xl border border-line/10"
            />
            {lightbox.title && (
              <figcaption className="mt-3 text-center text-sm text-muted">
                {lightbox.title}
              </figcaption>
            )}
          </figure>
        )}
      </Modal>
    </section>
  );
}
