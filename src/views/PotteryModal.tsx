import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Sparkles } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const PotteryModal: React.FC = () => {
  const { showPotteryModal, setShowPotteryModal, addPotteryMemory } = useLifeStore();
  const [step, setStep] = useState<'intro' | 'viewfinder' | 'captured'>('intro');

  if (!showPotteryModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 z-50 bg-[#1C1C1A] text-white flex flex-col justify-between p-6 select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between z-10 pt-2">
          <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Ceramics Studio</span>
          <button
            onClick={() => setShowPotteryModal(false)}
            className="text-xs text-white/50 hover:text-white"
          >
            Close
          </button>
        </div>

        {step === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <div className="w-16 h-16 mx-auto bg-[#E07A5F]/20 text-[#E07A5F] rounded-full flex items-center justify-center">
              <Feather className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-[#E07A5F] font-semibold">
                Weekend Ceramics
              </div>
              <h2 className="text-2xl font-light tracking-tight leading-snug">
                Pottery Wheel Experience
              </h2>
            </div>

            <p className="text-xs text-white/70 leading-relaxed italic">
              “Hands in clay, completely focused on the physical present.”
            </p>

            <button
              onClick={() => setStep('viewfinder')}
              className="w-full py-4 bg-[#E07A5F] text-white rounded-full text-sm font-semibold shadow-lg hover:bg-[#d46a4f] transition"
            >
              Capture Clay Creation
            </button>
          </motion.div>
        )}

        {step === 'viewfinder' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-auto flex flex-col items-center space-y-6"
          >
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl">
              <img
                src="/assets/pottery.jpg"
                alt="Handcrafted ceramic vase"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white">
                Terracotta Clay · Studio Session
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

        {step === 'captured' && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="my-auto space-y-6 text-center max-w-xs mx-auto"
          >
            <div className="bg-[#2A2A28] rounded-3xl p-4 border border-white/10 shadow-2xl space-y-3">
              <div className="w-full h-56 rounded-2xl overflow-hidden">
                <img
                  src="/assets/pottery.jpg"
                  alt="Ceramic vase"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-1">
                <div className="text-[10px] text-[#E07A5F] uppercase tracking-widest font-semibold">
                  Sunday · 3:30 PM
                </div>
                <h3 className="text-base font-medium text-white">Studio Clay Vase</h3>
                <p className="text-xs text-white/70 italic">
                  “Hands in clay, completely focused on the present.”
                </p>
              </div>
            </div>

            <p className="text-xs text-[#E07A5F]">
              Terracotta & Coral aura added to your Life Surface!
            </p>

            <button
              onClick={() => addPotteryMemory()}
              className="w-full py-3.5 bg-[#E07A5F] text-white rounded-full text-xs font-semibold hover:bg-[#d46a4f] transition"
            >
              Save Memory & Transform Surface
            </button>
          </motion.div>
        )}

        <div className="text-center text-[10px] text-white/40">
          LIFE • Ceramics Experience
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
