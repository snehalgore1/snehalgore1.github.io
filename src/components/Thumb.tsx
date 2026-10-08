import { useState } from 'react';

const BASE = `${import.meta.env.BASE_URL}thumbnails/`;
const EXTS = ['png', 'jpg', 'webp'];

/**
 * Project thumbnail loaded from /public/thumbnails/<id>.png (or .jpg/.webp).
 * Renders nothing until a file exists, so cards look unchanged without one.
 */
export function Thumb({ id, alt, className = '', overlay = false }: { id: string; alt: string; className?: string; overlay?: boolean }) {
  const [ext, setExt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  if (ext >= EXTS.length) return null;
  return (
    <>
      <img
        src={`${BASE}${id}.${EXTS[ext]}`}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setExt((e) => e + 1)}
        className={`${className} ${loaded ? '' : 'hidden'}`}
      />
      {overlay && loaded && (
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/5" />
      )}
    </>
  );
}
