import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Check, Heart } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const MemoryCaptureModal: React.FC = () => {
  const { showMemoryModal, setShowMemoryModal, addPastaMemory } = useLifeStore();
  const [state, setState] = useState<'prompt' | 'viewfinder' | 'captured' | 'reflection'>('prompt');

  if (!showMemoryModal) return null;

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
          <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Memory Keeper</span>
          <button
            onClick={() => setShowMemoryModal(false)}
            className="text-xs text-white/50 hover:text-white"
          >
            Skip
          </button>
        </div>

        {/* State 1: Prompt */}
        {state === 'prompt' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-[#EE6C4D]">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-light tracking-tight leading-snug">
              That deserves to be remembered.
            </h2>

            <p className="text-xs text-white/60">
              Capture your first dish to save this feeling in your Life Surface.
            </p>

            <button
              onClick={() => setState('viewfinder')}
              className="w-full py-4 bg-white text-[#1C1C1A] rounded-full text-sm font-semibold shadow-lg hover:bg-neutral-200 transition"
            >
              Save this moment
            </button>
          </motion.div>
        )}

        {/* State 2: Simulated Camera Viewfinder */}
        {state === 'viewfinder' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-auto flex flex-col items-center space-y-6"
          >
            {/* Viewfinder Frame */}
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl group">
              <img
                src="/assets/pasta.jpg"
                alt="Garlic Butter Pasta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[12px] border-black/20 pointer-events-none rounded-3xl" />
              
              {/* Viewfinder crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-12 h-12 border border-white/60 rounded-full" />
              </div>
            </div>

            <p className="text-xs text-white/50 tracking-wide">
              Tap shutter to capture
            </p>

            <button
              onClick={() => setState('captured')}
              className="w-16 h-16 rounded-full border-4 border-white p-1 hover:scale-105 transition"
            >
              <div className="w-full h-full bg-white rounded-full" />
            </button>
          </motion.div>
        )}

        {/* State 3: Captured Photo Preview & Memory Info */}
        {state === 'captured' && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="my-auto space-y-5"
          >
            {/* Photo Card */}
            <div className="bg-[#2A2A28] rounded-3xl p-4 border border-white/10 shadow-2xl space-y-4 max-w-xs mx-auto">
              <div className="w-full h-60 rounded-2xl overflow-hidden">
                <img
                  src="/assets/pasta.jpg"
                  alt="Garlic Butter Pasta"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="text-[11px] text-[#EE6C4D] font-medium tracking-wide">
                  Tuesday · 8:42 PM
                </div>
                <h3 className="text-lg font-normal text-white">
                  My first pasta
                </h3>
                <p className="text-xs text-white/70 italic">
                  “I actually made this.”
                </p>
                <div className="pt-2 text-[10px] text-white/40 uppercase tracking-widest">
                  Cooking · First attempt
                </div>
              </div>
            </div>

            <button
              onClick={() => setState('reflection')}
              className="w-full py-3.5 bg-white text-black rounded-full text-xs font-semibold hover:bg-neutral-200 transition"
            >
              Continue →
            </button>
          </motion.div>
        )}

        {/* State 4: Reflection & Companion Memory Confirmation */}
        {state === 'reflection' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <p className="text-base text-white/80 font-light">
              “How did it feel?”
            </p>

            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white font-medium text-sm shadow-inner">
              “Honestly? Kind of proud.”
            </div>

            <div className="space-y-2">
              <p className="text-sm text-[#EE6C4D] font-light italic">
                “I'll remember that.”
              </p>
              <p className="text-xs text-white/50">
                Your memory palette has been embedded into your Life Surface.
              </p>
            </div>

            <button
              onClick={() => addPastaMemory()}
              className="w-full py-4 bg-[#EE6C4D] text-white rounded-full text-xs font-semibold shadow-lg hover:bg-[#d95b3c] transition"
            >
              Return to Today
            </button>
          </motion.div>
        )}

        {/* Bottom indicator */}
        <div className="text-center text-[10px] text-white/40">
          LIFE • Memory Keeper
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
