import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Utensils, Heart } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const CookingExperienceModal: React.FC = () => {
  const { showCookingModal, setShowCookingModal, completeCooking } = useLifeStore();
  const [step, setStep] = useState<'prep' | 'cook' | 'done'>('prep');

  if (!showCookingModal) return null;

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-[#F8F8F6]/95 backdrop-blur-xl flex flex-col justify-between p-7 text-[#1C1C1A]"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-medium">Tonight</span>
        <button
          onClick={() => setShowCookingModal(false)}
          className="text-xs text-[#8E8E8A] hover:text-[#1C1C1A]"
        >
          Close
        </button>
      </div>

      {/* Main Experience Body */}
      <div className="my-auto space-y-6">
        <div>
          <span className="inline-block px-3 py-1 bg-[#EE6C4D]/10 text-[#EE6C4D] text-xs rounded-full font-medium mb-2">
            20 minutes
          </span>
          <h2 className="text-3xl font-light tracking-tight text-[#1C1C1A]">
            Garlic Butter Pasta
          </h2>
          <p className="text-sm text-[#8E8E8A] mt-1">
            First dish · Quiet evening
          </p>
        </div>

        {/* Companion Guidance Pill */}
        <div className="p-4 bg-white/90 border border-[#E8E8E3] rounded-2xl shadow-sm flex items-start space-x-3">
          <Utensils className="w-5 h-5 text-[#E68A00] shrink-0 mt-0.5" />
          <p className="text-xs text-[#1C1C1A] leading-relaxed">
            “You've never cooked before, so I'll stay with you. No pressure, just enjoy making something with your hands.”
          </p>
        </div>

        {/* Step Progress Bar (PREP -> COOK -> DONE) */}
        <div className="grid grid-cols-3 gap-2 py-2">
          {(['prep', 'cook', 'done'] as const).map((st, idx) => {
            const isCurrent = step === st;
            const isFinished =
              (st === 'prep' && (step === 'cook' || step === 'done')) ||
              (st === 'cook' && step === 'done');

            return (
              <div
                key={st}
                className={`py-2 text-center rounded-xl text-xs uppercase tracking-wider font-medium transition-all ${
                  isCurrent
                    ? 'bg-[#1C1C1A] text-white shadow-sm'
                    : isFinished
                    ? 'bg-[#EE6C4D]/20 text-[#EE6C4D]'
                    : 'bg-black/5 text-[#8E8E8A]'
                }`}
              >
                {st}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="p-6 bg-white rounded-3xl border border-[#E8E8E3] shadow-md min-h-[160px] flex flex-col justify-center">
          {step === 'prep' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1C1C1A]">1. The Prep</h3>
              <p className="text-xs text-[#6E6E6A] leading-relaxed">
                Melt 2 tbsp unsalted butter in a pan over low heat. Mince 2 garlic cloves. Boil water for pasta.
              </p>
              <button
                onClick={() => setStep('cook')}
                className="w-full py-2.5 bg-[#F8F8F6] border border-[#E8E8E3] text-[#1C1C1A] text-xs font-medium rounded-xl hover:bg-neutral-100 transition"
              >
                Done Prep → Next: Cook
              </button>
            </motion.div>
          )}

          {step === 'cook' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1C1C1A]">2. The Sizzle</h3>
              <p className="text-xs text-[#6E6E6A] leading-relaxed">
                Sauté garlic until fragrant (30 seconds). Toss cooked pasta in garlic butter with fresh chopped parsley and black pepper.
              </p>
              <button
                onClick={() => setStep('done')}
                className="w-full py-2.5 bg-[#EE6C4D] text-white text-xs font-medium rounded-xl hover:bg-[#d95b3c] transition"
              >
                Finish Cooking →
              </button>
            </motion.div>
          )}

          {step === 'done' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 text-center">
              <div className="w-10 h-10 mx-auto bg-[#EE6C4D]/10 rounded-full flex items-center justify-center text-[#EE6C4D]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-lg font-light text-[#1C1C1A]">You made it.</h3>
              <p className="text-xs text-[#6E6E6A]">
                Your first home-cooked meal is warm and ready.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      {step === 'done' && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => completeCooking()}
          className="w-full py-4 bg-[#1C1C1A] text-white rounded-full text-sm font-medium shadow-lg hover:bg-black transition"
        >
          I Made It
        </motion.button>
      )}
    </motion.div>
  );
};
