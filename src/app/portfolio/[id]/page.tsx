'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { portfolioItems } from '@/config/site';
import { ProjectLink } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function getYouTubeThumbnail(url: string) {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

function getYouTubeEmbedUrl(url: string) {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

function getPinterestBoardUrl(url: string): string | null {
  // Match https://pinterest.com/user/board or https://id.pinterest.com/user/board
  const m = url.match(/pinterest\.[a-z.]+\/([^/?#]+\/[^/?#]+)\/?/i);
  return m ? `https://www.pinterest.com/${m[1]}/` : null;
}

const categoryColors: Record<string, string> = {
  'Motion Graphics': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  'Videography': 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  'Web Design': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  'Graphic Design': 'bg-green-500/20 text-green-300 border-green-500/40',
};

// ── Per-type link styles & icons ───────────────────────────────────────────

const linkStyles: Record<string, string> = {
  youtube:   'bg-red-600/15 border-red-500/30 text-red-300 hover:bg-red-600/25 hover:border-red-400/50',
  live:      'bg-blue-500/15 border-blue-500/30 text-blue-300 hover:bg-blue-500/25 hover:border-blue-400/50',
  github:    'bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30',
  figma:     'bg-purple-500/15 border-purple-500/30 text-purple-300 hover:bg-purple-500/25 hover:border-purple-400/50',
  behance:   'bg-blue-400/15 border-blue-400/30 text-blue-200 hover:bg-blue-400/25 hover:border-blue-300/50',
  instagram: 'bg-pink-500/15 border-pink-500/30 text-pink-300 hover:bg-pink-500/25 hover:border-pink-400/50',
  linkedin:  'bg-sky-600/15 border-sky-500/30 text-sky-300 hover:bg-sky-600/25 hover:border-sky-400/50',
  pinterest: 'bg-rose-600/15 border-rose-500/30 text-rose-300 hover:bg-rose-600/25 hover:border-rose-400/50',
  champion:  'bg-yellow-500/15 border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/25 hover:border-yellow-400/50',
  other:     'bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30',
};

function LinkIcon({ type }: { type?: ProjectLink['type'] }) {
  if (type === 'youtube') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a2.998 2.998 0 00-2.112-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.566A2.998 2.998 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.998 2.998 0 002.112 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.566a2.998 2.998 0 002.112-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
  if (type === 'github') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
  if (type === 'figma') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zM8.148 10.49c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117v-6.039H8.148zm4.587 8.501h-.001c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49h4.491v4.49zm-4.49-3.019a3.019 3.019 0 000 6.038 3.019 3.019 0 000-6.038zm12.329-3.491c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49zm-4.49-3.019a3.019 3.019 0 000 6.038 3.019 3.019 0 000-6.038z" />
    </svg>
  );
  if (type === 'behance') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.65.67 1.43.67 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.63.17-1.31.254-2.01.254H0V4.503h6.938zm-.56 5.76c.574 0 1.05-.135 1.425-.404.37-.27.555-.7.555-1.29 0-.33-.06-.606-.176-.83-.115-.224-.28-.4-.49-.527-.21-.127-.45-.214-.728-.264-.28-.048-.578-.072-.9-.072H3.342v3.386h3.036zm.17 6.063c.354 0 .685-.036.99-.107.305-.07.57-.186.795-.35.224-.162.4-.375.53-.64.127-.264.19-.6.19-1.006 0-.8-.222-1.376-.666-1.73-.445-.353-1.04-.527-1.787-.527H3.34v4.36h3.21zm8.494-1.095c.337.328.83.492 1.473.492.46 0 .855-.115 1.19-.35.332-.23.537-.48.615-.74h2.34c-.373 1.17-1.007 2.007-1.9 2.517-.89.51-1.97.765-3.237.765-.88 0-1.673-.14-2.38-.42-.707-.28-1.307-.674-1.797-1.185-.49-.51-.866-1.12-1.128-1.828-.264-.707-.395-1.49-.395-2.348 0-.83.13-1.598.397-2.3.267-.706.645-1.313 1.134-1.828.49-.513 1.086-.912 1.79-1.2.705-.284 1.49-.428 2.356-.428 1.024 0 1.914.2 2.67.597.755.4 1.374.94 1.852 1.617.477.677.82 1.46 1.028 2.344.208.884.277 1.814.207 2.79h-6.97c0 .724.168 1.268.505 1.596zm2.594-4.68c-.27-.298-.706-.447-1.305-.447-.387 0-.71.065-.97.196-.258.13-.467.293-.625.49-.158.198-.27.41-.337.636-.065.227-.104.44-.115.64h3.864c-.1-.664-.34-1.217-.512-1.516zM17.1 4.5h5.37v1.358H17.1z" />
    </svg>
  );  if (type === 'instagram') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
  if (type === 'linkedin') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
  if (type === 'pinterest') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
  if (type === 'champion') return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  );
  // live / other
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

// ── Pinterest Board Widget ────────────────────────────────────────────────

function PinterestBoard({ boardUrl }: { boardUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Pinterest widget script if not already loaded
    const scriptId = 'pinterest-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      script.setAttribute('data-pin-build', 'doBuild');
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Script already exists, trigger rebuild
      const w = window as typeof window & { PinUtils?: { build: () => void } };
      if (w.PinUtils?.build) w.PinUtils.build();
    }
  }, [boardUrl]);

  return (
    <div ref={containerRef} className="flex justify-center w-full overflow-y-auto rounded-2xl bg-white/5 min-h-125">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="100%"
        data-pin-scale-height="640"
        data-pin-scale-width="80"
        href={boardUrl}
      />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const item = portfolioItems.find((p) => p.id === Number(id));

  // Portfolio is section index 3 in the main page
  const goBackToPortfolio = () => {
    sessionStorage.setItem('currentSection', '3');
    router.push('/');
  };

  // Allow scrolling — parent layout locks overflow globally
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <p className="text-white/50 text-lg">Project not found.</p>
        <button
          onClick={goBackToPortfolio}
          className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors"
        >
          ← Go back
        </button>
      </div>
    );  }  const ytThumb = item.videoUrl ? getYouTubeThumbnail(item.videoUrl) : null;
  const ytEmbed = item.videoUrl ? getYouTubeEmbedUrl(item.videoUrl) : null;
  const banner = ytThumb ?? item.thumbnail;

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 flex items-center bg-black/70 backdrop-blur-md border-b border-white/5">        <button
          onClick={goBackToPortfolio}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span className="text-sm font-light tracking-wide">Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full"
        style={{ height: 'clamp(180px, 35vh, 320px)', marginTop: '56px' }}
      >
        <Image
          src={banner}
          alt={item.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onError={(e) => {
            if (item.videoUrl) {
              const vid = getYouTubeId(item.videoUrl);
              if (vid) (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
            }
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)' }}
        />        {/* gradient only, no title */}
      </motion.div>      {/* Title block — below banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pt-6 pb-2"
      >        <div className="flex flex-wrap gap-2 mb-3">
          {item.categories.map((cat) => (
            <span
              key={cat}
              className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[cat] ?? 'bg-white/10 text-white/70 border-white/20'}`}
            >
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          {item.title}
        </h1>
        {(item.year || item.client) && (
          <p className="text-white/40 text-sm mt-1.5 font-light">
            {[item.year, item.client].filter(Boolean).join(' · ')}
          </p>
        )}
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-10">

        {/* About */}
        {item.about && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
              About this project
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
              {item.about}
            </p>
          </motion.section>
        )}

        <div className="border-t border-white/10" />

        {/* Tools + Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {item.tools && item.tools.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Tools used
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/65"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
              Details
            </h2>
            <dl className="space-y-2 text-sm">              <div className="flex gap-3">
                  <dt className="text-white/40 w-16 shrink-0">Type</dt>
                  <dd className="text-white/75">{item.categories.join(', ')}</dd>
                </div>
              {item.year && (
                <div className="flex gap-3">
                  <dt className="text-white/40 w-16 shrink-0">Year</dt>
                  <dd className="text-white/75">{item.year}</dd>
                </div>
              )}
              {item.client && (
                <div className="flex gap-3">
                  <dt className="text-white/40 w-16 shrink-0">Client</dt>
                  <dd className="text-white/75">{item.client}</dd>
                </div>
              )}
            </dl>
          </div>
        </motion.div>        <div className="border-t border-white/10" />        
        {/* Project links */}
        {item.links && item.links.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
              Project links
            </h2>
            <div className="flex flex-wrap gap-3">
              {item.links.map((link, i) => {
                const style = linkStyles[link.type ?? 'other'] ?? linkStyles.other;
                return (
                  <a
                    key={`${link.url}-${i}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm font-medium ${style}`}
                  >
                    <LinkIcon type={link.type} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* YouTube embed */}
        {ytEmbed && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
              Video
            </h2>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src={`${ytEmbed}?rel=0&modestbranding=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.section>
        )}        {/* Live / Embed preview */}
        {item.embedUrl && (() => {
          const pinterestUrl = getPinterestBoardUrl(item.embedUrl);
          if (pinterestUrl) {
            return (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="space-y-4"
              >
                <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Pinterest Board
                </h2>
                <PinterestBoard boardUrl={pinterestUrl} />
              </motion.section>
            );
          }
          return (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="space-y-4"
            >
              <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Live Preview
              </h2>
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white"
                style={{ height: 600 }}
              >
                <iframe
                  src={item.embedUrl}
                  title={`${item.title} – Live Preview`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.section>
          );
        })()}

        <div className="h-16" />
      </div>
    </div>
  );
}
