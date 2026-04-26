import { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  baseScale = 0.85,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);
  const lastScrollRef = useRef(-1);
  const offsetsRef = useRef([]);
  const lastAppliedRef = useRef(new Map());
  const stackCompletedRef = useRef(false);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  // Only updates scale + blur — never touches translateY.
  // position:sticky handles all pinning natively = zero jitter.
  const updateScales = useCallback(() => {
    const scrollTop = window.scrollY;

    // Skip when scroll hasn't moved (rounded to nearest pixel)
    const rounded = Math.round(scrollTop);
    if (rounded === lastScrollRef.current) return;
    lastScrollRef.current = rounded;

    const cards = cardsRef.current;
    if (!cards.length) return;

    const vh = window.innerHeight;
    const stickyTopPx = parsePercentage(stackPosition, vh);
    const offsets = offsetsRef.current;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const pinPoint = offsets[i] - stickyTopPx;
      const scrollPast = scrollTop - pinPoint;

      let scale = 1;
      let blur = 0;

      if (scrollPast > 0 && i < cards.length - 1) {
        // Progress based on distance to next card's pin point
        const nextPinPoint = offsets[i + 1] - stickyTopPx;
        const range = nextPinPoint - pinPoint;

        if (range > 0) {
          const progress = Math.min(1, scrollPast / range);
          const targetScale = baseScale + i * itemScale;
          scale = 1 - progress * (1 - targetScale);
        }

        // Blur based on how many cards sit above this one
        if (blurAmount) {
          let stackedAbove = 0;
          for (let j = i + 1; j < cards.length; j++) {
            if (scrollTop >= offsets[j] - stickyTopPx) stackedAbove++;
            else break;
          }
          blur = stackedAbove * blurAmount;
        }
      }

      const rS = Math.round(scale * 100) / 100;
      const rB = Math.round(blur);

      // Only write to DOM when values actually changed
      const last = lastAppliedRef.current.get(i);
      if (last && last.s === rS && last.b === rB) continue;

      card.style.transform = rS < 1 ? `scale(${rS})` : '';
      card.style.filter = rB > 0 ? `blur(${rB}px)` : '';
      lastAppliedRef.current.set(i, { s: rS, b: rB });

      // Fire callback when last card enters
      if (i === cards.length - 1) {
        const inView = scrollPast > 0;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }
  }, [stackPosition, baseScale, itemScale, blurAmount, parsePercentage, onStackComplete]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;
    if (!cards.length) return;

    // ── 1. Read natural flow positions BEFORE applying sticky ──
    const offsets = cards.map(card => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });
    offsetsRef.current = offsets;

    // ── 2. Apply sticky positioning (browser handles pinning) ──
    const vh = window.innerHeight;
    const stickyTopPx = parsePercentage(stackPosition, vh);

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.position = 'sticky';
      card.style.top = `${stickyTopPx + i * itemStackDistance}px`;
      card.style.zIndex = cards.length + i;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
    });

    // ── 3. Start rAF loop (only scale/blur, never translateY) ──
    const raf = () => {
      updateScales();
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    // ── 4. Re-measure on resize ──
    const onResize = () => {
      // Temporarily remove sticky to read true flow positions
      cards.forEach(card => {
        card.style.position = '';
        card.style.top = '';
        card.style.transform = '';
        card.style.filter = '';
      });
      void cards[0].offsetTop; // force reflow

      const newOffsets = cards.map(card => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      offsetsRef.current = newOffsets;

      const newVh = window.innerHeight;
      const newStickyTop = parsePercentage(stackPosition, newVh);

      cards.forEach((card, i) => {
        card.style.position = 'sticky';
        card.style.top = `${newStickyTop + i * itemStackDistance}px`;
        card.style.zIndex = cards.length + i;
        card.style.willChange = 'transform';
        card.style.transformOrigin = 'top center';
      });

      lastScrollRef.current = -1;
      lastAppliedRef.current.clear();
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastAppliedRef.current.clear();
      lastScrollRef.current = -1;
    };
  }, [
    itemDistance, itemStackDistance, stackPosition, baseScale,
    itemScale, blurAmount, useWindowScroll, onStackComplete,
    parsePercentage, updateScales
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
