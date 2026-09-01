import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sun, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const PhotographyModal: React.FC = () => {
  const { showPhotographyModal, setShowPhotographyModal, addPhotoMemory } = useLifeStore();
  const [step, setStep] = useState<'challenge' | 'viewfinder' | 'captured'>('challenge');

  if (!showPhotographyModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 z-50 bg-[#1C1C1A] text-white flex flex-col justify-between p-6 select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between z-10 pt-2">
          <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Photography Challenge</span>
          <button
            onClick={() => setShowPhotographyModal(false)}
            className="text-xs text-white/50 hover:text-white"
          >
            Close
          </button>
        </div>

        {/* Step 1: Challenge Card */}
        {step === 'challenge' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <div className="w-16 h-16 mx-auto bg-indigo-500/20 text-indigo-300 rounded-full flex items-center justify-center">
              <Sun className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-indigo-300 font-semibold">
                Sunset Walk · 6:21 PM
              </div>
              <h2 className="text-2xl font-light tracking-tight leading-snug">
                Photography Challenge #01
              </h2>
            </div>

            <div className="p-5 bg-white/10 rounded-2xl border border-white/20 text-sm leading-relaxed text-white/90 italic">
              “Find something beautiful in an ordinary place.”
            </div>

            <p className="text-xs text-white/60">
              You have a 30-minute window after work today.
            </p>

            <button
              onClick={() => setStep('viewfinder')}
              className="w-full py-4 bg-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-indigo-600 transition"
            >
              Start Challenge
            </button>
          </motion.div>
        )}

        {/* Step 2: Camera Viewfinder */}
        {step === 'viewfinder' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-auto flex flex-col items-center space-y-6"
          >
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl">
              <img
                src="/assets/photography.jpg"
                alt="Golden hour photo walk"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[12px] border-black/20 pointer-events-none rounded-3xl" />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white">
                Golden Hour Sunset
              </div>
            </div>

            <button
              onClick={() => setStep('captured')}
              className="w-16 h-16 rounded-full border-4 border-white p-1 hover:scale-105 transition"
            >
              <div className="w-full h-full bg-white rounded-full" />
            </button>
          </motion.div>
        )}

        {/* Step 3: Captured Photo & Memory Color Extraction */}
        {step === 'captured' && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <div className="bg-[#2A2A28] rounded-3xl p-4 border border-white/10 shadow-2xl space-y-3">
              <div className="w-full h-56 rounded-2xl overflow-hidden">
                <img
                  src="/assets/photography.jpg"
                  alt="Golden hour photo walk"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-1">
                <div className="text-[10px] text-indigo-300 uppercase tracking-widest font-semibold">
                  Thursday · 6:45 PM
                </div>
                <h3 className="text-base font-medium text-white">Golden hour</h3>
                <p className="text-xs text-white/70 italic">
                  “Found something beautiful on the way home.”
                </p>
              </div>

              {/* Color Sampled Palette Bar */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span>Extracted memory palette:</span>
                <div className="flex items-center space-x-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#6366F1]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F4D15E]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2A9D8F]" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-light text-indigo-200">
                “This feels like you.”
              </p>
              <p className="text-xs text-white/50">
                These colors are now permanently blended into your Life Surface.
              </p>
            </div>

            <button
              onClick={() => addPhotoMemory()}
              className="w-full py-3.5 bg-indigo-500 text-white rounded-full text-xs font-semibold hover:bg-indigo-600 transition"
            >
              Save Memory & Open Journal
            </button>
          </motion.div>
        )}

        <div className="text-center text-[10px] text-white/40">
          LIFE • Photography Experience
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
