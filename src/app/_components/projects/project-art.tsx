'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
  IconZoomIn,
  IconX,
} from '@tabler/icons-react';
import { projectMedia } from '@/utils/project-media';

export default function ProjectArt({ id }: { id: string }) {
  const media = projectMedia[id];
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const fullImage = useRef<HTMLDivElement>(null);
  const isOpen = active !== null;

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

  useEffect(() => {
    fullImage.current?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [active]);

  if (!media) return null;
  const selected = media.images[active ?? 0];
  const step = (direction: number) =>
    setActive((value) => ((value ?? 0) + direction + media.images.length) % media.images.length);

  return (
    <>
      <figure className={`project-art real-media media-${id} media-${media.layout}`}>
        <div className="media-gallery">
          {media.images.map((item, index) => (
            <div className="media-frame" key={item.file}>
              <button
                className="media-shot"
                type="button"
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
                      ? '(max-width: 440px) 90vw, 420px'
                      : '(max-width: 1279px) 95vw, 960px'
                  }
                />
                <span className="media-enlarge" aria-hidden>
                  <IconZoomIn size={20} />
                </span>
              </button>
              <p className="media-shot-caption">{item.label}</p>
            </div>
          ))}
        </div>
        <figcaption className="media-caption">
          <span>{media.caption}</span>
          <span className="media-hint">
            Click to enlarge <IconZoomIn size={16} aria-hidden />
          </span>
        </figcaption>
      </figure>
      <dialog
        ref={dialog}
        className={`media-dialog dialog-${media.layout}`}
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
              <p>{selected.label}</p>
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
            <div className="media-full-image" ref={fullImage}>
              <Image
                src={`/images/projects/real/${selected.file}.webp`}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                sizes={
                  media.layout === 'portrait'
                    ? '(max-width: 600px) 95vw, 560px'
                    : '(max-width: 1100px) 95vw, 1100px'
                }
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
