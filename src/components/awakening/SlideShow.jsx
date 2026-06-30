'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES } from './TheAwakening';

const DESIGN_W = 1280;
const DESIGN_H = 720;

export default function SlideShow({ className = '' }) {
  const [current,      setCurrent]      = useState(0);
  const [scale,        setScale]        = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fadeKey,      setFadeKey]      = useState(0);
  const [started,      setStarted]      = useState(false);

  const containerRef = useRef(null);
  const wrapperRef   = useRef(null);
  const total        = SLIDES.length;

  // Scale slide canvas to container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Keyboard navigation (only when started)
  useEffect(() => {
    if (!started) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrent((c) => { const n = Math.min(c + 1, total - 1); if (n !== c) setFadeKey((k) => k + 1); return n; });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrent((c) => { const n = Math.max(c - 1, 0); if (n !== c) setFadeKey((k) => k + 1); return n; });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total, started]);

  // Sync fullscreen state
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === current) return;
    setCurrent(idx);
    setFadeKey((k) => k + 1);
  }, [current]);

  const prev = useCallback(() => goTo(Math.max(current - 1, 0)),        [current, goTo]);
  const next = useCallback(() => goTo(Math.min(current + 1, total - 1)), [current, total, goTo]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await wrapperRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }, []);

  const handleStart = useCallback(async () => {
    setStarted(true);
    await wrapperRef.current?.requestFullscreen();
  }, []);

  const handleSlideClick = useCallback(() => {
    if (!started) { setStarted(true); return; }
    toggleFullscreen();
  }, [started, toggleFullscreen]);

  const canPrev = current > 0;
  const canNext = current < total - 1;

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={isFullscreen ? {
        width: '100%', height: '100%',
        backgroundColor: '#000010',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      } : {
        borderRadius: 3,
        border: '1px solid rgba(99,104,218,0.38)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,4,0.7), 0 6px 18px rgba(0,0,0,0.45)',
        overflow: 'hidden',
      }}
    >
      {/* Slide viewport */}
      <div
        ref={containerRef}
        onClick={handleSlideClick}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: `${DESIGN_W} / ${DESIGN_H}`,
          overflow: 'hidden',
          backgroundColor: '#00034C',
          cursor: started && !isFullscreen ? 'pointer' : 'default',
        }}
      >
        {/* Scaled slide */}
        <div
          key={fadeKey}
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
            animation: 'awakeningFade 0.22s ease',
          }}
        >
          {SLIDES[current]}
        </div>

        {/* Play overlay — shown before user starts */}
        {!started && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(160deg, rgba(0,3,76,0.55) 0%, rgba(0,0,10,0.72) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              cursor: 'pointer',
              zIndex: 10,
            }}
            onClick={handleStart}
          >
            {/* Play button ring */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, border-color 0.2s',
                backgroundColor: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.85)'; }}
            >
              {/* Play triangle */}
              <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, marginLeft: 3 }}>
                <polygon points="6,4 20,12 6,20" fill="white" />
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-ptsans)',
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
            }}>
              Read The Awakening
            </span>
          </div>
        )}

        {/* Expand hint on hover (when started, not fullscreen) */}
        {started && !isFullscreen && (
          <div
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              opacity: 0,
              transition: 'opacity 0.2s',
              pointerEvents: 'none',
              zIndex: 5,
            }}
            className="expand-hint"
          >
            <svg viewBox="0 0 20 20" style={{ width: 16, height: 16 }} fill="rgba(255,255,255,0.5)">
              <path d="M3 3h5v2H5v3H3V3zm9 0h5v5h-2V5h-3V3zM3 12h2v3h3v2H3v-5zm12 3h-3v2h5v-5h-2v3z" />
            </svg>
          </div>
        )}
      </div>

      {/* Navigation bar */}
      {started && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          backgroundColor: 'rgba(0, 3, 76, 0.97)',
          width: '100%',
          boxSizing: 'border-box',
          ...(isFullscreen ? {} : { borderTop: '1px solid rgba(99,104,218,0.2)' }),
        }}>
          {/* Prev */}
          <NavBtn onClick={prev} disabled={!canPrev} aria-label="Previous slide">←</NavBtn>

          {/* Dots */}
          <div style={{ flex: 1, display: 'flex', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? 18 : 5,
                  height: 5,
                  borderRadius: 3,
                  padding: 0,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: i === current ? '#870571' : 'rgba(255,255,255,0.22)',
                  transition: 'width 0.2s ease, background-color 0.2s',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <NavBtn onClick={next} disabled={!canNext} aria-label="Next slide">→</NavBtn>

          <div style={{ width: 1, height: 16, backgroundColor: 'rgba(255,255,255,0.12)', marginLeft: 4 }} />

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              fontFamily: 'var(--font-ptsans)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '3px 9px',
              lineHeight: 1.4,
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
          >
            {isFullscreen ? 'Exit' : 'Full'}
          </button>
        </div>
      )}
    </div>
  );
}

function NavBtn({ children, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      style={{
        background: 'none',
        border: 'none',
        color: disabled ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.55)',
        cursor: disabled ? 'default' : 'pointer',
        fontSize: 18,
        padding: '2px 8px',
        lineHeight: 1,
        transition: 'color 0.15s',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
    >
      {children}
    </button>
  );
}
