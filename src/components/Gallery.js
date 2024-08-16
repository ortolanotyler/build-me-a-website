import React, { useEffect, useRef, useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const galleryRef = useRef(null);
  const trackRef = useRef(null);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);
  const [raf, setRaf] = useState(null);
  const easing = 0.05;

  const lerp = (start, end, t) => start * (1 - t) + end * t;

  const updateScroll = () => {
    setStartY(lerp(startY, endY, easing));
    if (galleryRef.current) {
      galleryRef.current.style.height = `${trackRef.current.clientHeight}px`;
      trackRef.current.style.transform = `translateY(-${startY}px)`;
    }
    activateParallax();
    const newRaf = requestAnimationFrame(updateScroll);
    setRaf(newRaf);

    if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
  };

  const startScroll = () => {
    setEndY(window.scrollY);
    cancelAnimationFrame(raf);
    const newRaf = requestAnimationFrame(updateScroll);
    setRaf(newRaf);
  };

  const parallax = (card) => {
    const wrapper = card.querySelector(`.${styles.cardImageWrapper}`);
    const diff = card.offsetHeight - wrapper.offsetHeight;
    const { top } = card.getBoundingClientRect();
    const progress = top / window.innerHeight;
    const yPos = diff * progress;
    wrapper.style.transform = `translateY(${yPos}px)`;
  };

  const activateParallax = () => {
    const cards = trackRef.current.querySelectorAll(`.${styles.card}`);
    cards.forEach(parallax);
  };

  const init = () => {
    activateParallax();
    startScroll();
  };

  useEffect(() => {
    updateScroll();
    window.addEventListener('scroll', init);
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', init);
      window.removeEventListener('resize', updateScroll);
    };
  }, [startY, endY]);

  return (
    <main className={styles.gallery} ref={galleryRef}>
      <div className={styles.galleryTrack} ref={trackRef}>
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img className={styles.cardImage} src='https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img className={styles.cardImage} src='https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img className={styles.cardImage} src='https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
        {/* Repeat for all other cards */}
      </div>
    </main>
  );
};

export default Gallery;
