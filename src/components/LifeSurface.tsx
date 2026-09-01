import React from 'react';
import { motion } from 'framer-motion';
import { useLifeStore } from '../store/useLifeStore';

export const LifeSurface: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    aspirationsDiscovered,
    aspirations,
    livedExperience,
    emotionalResponse,
    mood,
    memories,
    demoStep,
    vibranceBoost
  } = useLifeStore();

  // Helper score calculator for an activity
  const calcScore = (act: keyof typeof aspirations) => {
    return (
      (aspirations[act] || 0) * 0.25 +
      (livedExperience[act] || 0) * 0.35 +
      (emotionalResponse[act] || 0) * 0.40
    );
  };

  const cookingScore = calcScore('cooking');
  const tennisScore = calcScore('tennis');
  const photoScore = calcScore('photography');
  const potteryScore = calcScore('pottery');
  const guitarScore = calcScore('guitar');
  const runningScore = calcScore('running');

  // Mood modifier
  const isOverwhelmed = mood === 'overwhelmed';
  const moodMultiplier = isOverwhelmed ? 0.35 : 1.0;
  const vibranceScale = vibranceBoost ? 1.7 : 1.0;

  const showColors = aspirationsDiscovered || demoStep !== '1_EMPTY_STATE';

  // Base dynamic opacities (prominent & vibrant: 0.15 up to 0.65)
  const cookingOpacity = showColors ? Math.min(0.65, Math.max(0.12, cookingScore * 0.55 * vibranceScale)) * moodMultiplier : 0;
  const tennisOpacity = showColors ? Math.min(0.62, Math.max(0.12, (tennisScore + runningScore * 0.5) * 0.55 * vibranceScale)) * moodMultiplier : 0;
  const photoOpacity = showColors ? Math.min(0.65, Math.max(0.12, photoScore * 0.55 * vibranceScale)) * moodMultiplier : 0;
  const potteryOpacity = showColors ? Math.min(0.60, Math.max(0.10, potteryScore * 0.55 * vibranceScale)) * moodMultiplier : 0;
  const guitarOpacity = showColors ? Math.min(0.62, Math.max(0.10, guitarScore * 0.55 * vibranceScale)) * moodMultiplier : 0;

  // Memories dynamic aura
  const memoryCount = memories.length;
  const memoryAuraOpacity = showColors && memoryCount > 0 ? Math.min(0.55, 0.20 + memoryCount * 0.1) * vibranceScale * moodMultiplier : 0;

  return (
    <div className="relative w-full h-full min-h-screen bg-[#F8F8F6] text-[#1C1C1A] overflow-hidden select-none font-sans transition-colors duration-1000">
      {/* Physical texture overlay (subtle paper / noise grain) */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.025] mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' h='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* ============================================================ */}
      {/* ATMOSPHERIC RADIAL LIFE SURFACE LIGHTING LAYERS              */}
      {/* ============================================================ */}

      {/* Layer 1: Cooking / Culinary Warm Amber & Radiant Coral */}
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full blur-[85px]"
        animate={{
          opacity: cookingOpacity,
          scale: livedExperience.cooking > 0 ? [1, 1.15, 1] : 1,
          x: livedExperience.cooking > 0 ? [0, -25, 0] : 0,
          y: livedExperience.cooking > 0 ? [0, 25, 0] : 0,
        }}
        transition={{
          opacity: { duration: 2.0, ease: 'easeInOut' },
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.95) 0%, rgba(245, 158, 11, 0.7) 45%, rgba(238, 108, 77, 0.25) 75%, transparent 90%)'
        }}
      />

      {/* Layer 2: Tennis & Running / Electric Emerald & Lime Teal */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-28 w-[440px] h-[440px] rounded-full blur-[90px]"
        animate={{
          opacity: tennisOpacity,
          scale: livedExperience.tennis > 0 ? [1, 1.18, 1] : 1,
          y: [0, -30, 0],
        }}
        transition={{
          opacity: { duration: 2.0, ease: 'easeInOut' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(42, 157, 143, 0.95) 0%, rgba(56, 176, 0, 0.7) 45%, rgba(14, 165, 233, 0.25) 75%, transparent 90%)'
        }}
      />

      {/* Layer 3: Photography & Stargazing / Luminous Indigo & Violet */}
      <motion.div
        className="pointer-events-none absolute bottom-16 -right-16 w-[460px] h-[460px] rounded-full blur-[95px]"
        animate={{
          opacity: photoOpacity,
          scale: livedExperience.photography > 0 ? [1, 1.2, 1] : 1,
          x: [0, -20, 0],
        }}
        transition={{
          opacity: { duration: 2.0, ease: 'easeInOut' },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.95) 0%, rgba(139, 92, 246, 0.75) 50%, rgba(72, 149, 239, 0.3) 80%, transparent 95%)'
        }}
      />

      {/* Layer 4: Pottery / Terracotta Clay & Warm Earth */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-16 w-[380px] h-[380px] rounded-full blur-[80px]"
        animate={{
          opacity: potteryOpacity,
          scale: livedExperience.pottery > 0 ? [1, 1.12, 1] : 1,
          y: [0, 20, 0],
        }}
        transition={{
          opacity: { duration: 2.0, ease: 'easeInOut' },
          scale: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 9.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(224, 122, 95, 0.9) 0%, rgba(242, 204, 143, 0.6) 50%, transparent 85%)'
        }}
      />

      {/* Layer 5: Acoustic Guitar & Music / Deep Fuchsia & Sunset Purple */}
      <motion.div
        className="pointer-events-none absolute bottom-1/3 -left-20 w-[400px] h-[400px] rounded-full blur-[85px]"
        animate={{
          opacity: guitarOpacity,
          scale: livedExperience.guitar > 0 ? [1, 1.15, 1] : 1,
          x: [0, 20, 0],
        }}
        transition={{
          opacity: { duration: 2.0, ease: 'easeInOut' },
          scale: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(114, 9, 183, 0.9) 0%, rgba(247, 37, 133, 0.6) 50%, transparent 85%)'
        }}
      />

      {/* Layer 6: Memory-Extracted Luminous Center Aura */}
      <motion.div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[380px] h-[380px] rounded-full blur-[90px]"
        animate={{
          opacity: memoryAuraOpacity,
          scale: [1, 1.1, 1],
        }}
        transition={{
          opacity: { duration: 2.5, ease: 'easeInOut' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.85) 0%, rgba(230, 138, 0, 0.4) 45%, rgba(99, 102, 241, 0.25) 75%, transparent 90%)'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
