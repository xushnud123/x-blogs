'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IconArrowUpRight, IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';
import { projectMedia } from '@/utils/project-media';
import { usePageMotion } from '../motion/motion';

export default function ProjectArt({ id }: { id: string }) {
  const media = projectMedia[id];
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const [galleryState, setGalleryState] = useState({ index: 0, scrollable: false });
  const { paused } = usePageMotion();
  const isOpen = active !== null;

  const syncGallery = useCallback(() => {
    const element = gallery.current;
    if (!element) return;
    const shots = Array.from(element.children) as HTMLElement[];
    const maxScroll = element.scrollWidth - element.clientWidth;
    const nearest = shots.reduce(
      (best, shot, index) =>
        Math.abs(shot.offsetLeft - element.scrollLeft) <
        Math.abs(shots[best].offsetLeft - element.scrollLeft)
          ? index
          : best,
      0,
    );
    setGalleryState({
      index:
        maxScroll <= 2 || element.scrollLeft <= 2
          ? 0
          : element.scrollLeft >= maxScroll - 2
            ? shots.length - 1
            : nearest,
      scrollable: maxScroll > 2,
    });
  }, []);

  useEffect(() => {
    const element = gallery.current;
    if (!element) return;
    const observer = new ResizeObserver(syncGallery);
    observer.observe(element);
    syncGallery();
    return () => observer.disconnect();
  }, [syncGallery]);

  const browseGallery = (direction: number) => {
    const element = gallery.current;
    const shot = element?.children[galleryState.index + direction] as HTMLElement | undefined;
    if (shot) element?.scrollTo({ left: shot.offsetLeft, behavior: paused ? 'instant' : 'smooth' });
  };

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  if (!media) return null;
  const selected = media.images[active ?? 0];
  const step = (direction: number) =>
    setActive((value) => ((value ?? 0) + direction + media.images.length) % media.images.length);

  return (
    <>
      <figure className={`project-art real-media media-${id} media-${media.layout}`}>
        <div className="media-gallery" ref={gallery} onScroll={syncGallery}>
          {media.images.map((item, index) => (
            <button
              className="media-shot"
              type="button"
              key={item.file}
              aria-label={`Enlarge ${media.title} image ${index + 1}: ${item.alt}`}
              aria-haspopup="dialog"
              onClick={() => setActive(index)}
            >
              <Image
                src={`/images/projects/real/${item.file}.webp`}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={
                  media.layout === 'portrait'
                    ? '(max-width: 760px) 75vw, 300px'
                    : '(max-width: 760px) 90vw, 1000px'
                }
              />
              <span className="media-enlarge" aria-hidden>
                <IconArrowUpRight size={18} />
              </span>
            </button>
          ))}
        </div>
        <figcaption className="media-caption">
          <span>{media.caption}</span>
          <span className="media-hint">
            Open image <IconArrowUpRight size={14} aria-hidden />
          </span>
        </figcaption>
        {galleryState.scrollable && (
          <div className="gallery-controls" aria-label={`${media.title} screenshots`}>
            <span aria-live="polite" aria-atomic="true">
              {galleryState.index + 1} / {media.images.length}
            </span>
            <div>
              <button
                type="button"
                aria-label={`Previous ${media.title} screenshot`}
                disabled={galleryState.index === 0}
                onClick={() => browseGallery(-1)}
              >
                <IconChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                aria-label={`Next ${media.title} screenshot`}
                disabled={galleryState.index === media.images.length - 1}
                onClick={() => browseGallery(1)}
              >
                <IconChevronRight size={20} aria-hidden />
              </button>
            </div>
          </div>
        )}
      </figure>
      <dialog
        ref={dialog}
        className="media-dialog"
        aria-labelledby={`media-title-${id}`}
        onCancel={() => setActive(null)}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (media.images.length < 2) return;
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            step(1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        <div className="media-dialog-panel">
          <div className="media-dialog-header">
            <div>
              <h2 id={`media-title-${id}`}>{media.title}</h2>
              <p>{media.caption}</p>
            </div>
            <button
              className="media-close"
              type="button"
              aria-label="Close image"
              onClick={() => setActive(null)}
            >
              <IconX size={24} aria-hidden />
            </button>
          </div>
          {isOpen && (
            <div className="media-full-image">
              <Image
                src={`/images/projects/real/${selected.file}.webp`}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                sizes="(max-width: 760px) 95vw, 1000px"
              />
            </div>
          )}
          <div className="media-dialog-footer">
            {media.source ? (
              <a href={media.source} target="_blank" rel="noopener noreferrer">
                View source <IconArrowUpRight size={16} aria-hidden />
              </a>
            ) : (
              <span>Actual product images</span>
            )}
            {media.images.length > 1 && (
              <div className="media-pagination">
                <button type="button" aria-label="Previous image" onClick={() => step(-1)}>
                  <IconChevronLeft size={20} aria-hidden />
                </button>
                <span aria-live="polite" aria-atomic="true">
                  {(active ?? 0) + 1} / {media.images.length}
                </span>
                <button type="button" aria-label="Next image" onClick={() => step(1)}>
                  <IconChevronRight size={20} aria-hidden />
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
