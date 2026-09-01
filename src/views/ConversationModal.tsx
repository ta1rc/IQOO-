import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, ArrowRight, Sparkles } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const ConversationModal: React.FC = () => {
  const { showConversationModal, setShowConversationModal, discoverAspirations } = useLifeStore();

  const [phase, setPhase] = useState<'input' | 'typing' | 'understanding' | 'response' | 'aspirations' | 'conclusion'>('input');
  const [typedText, setTypedText] = useState('');
  const fullUserText = "I work from 9 to 7 most days. I want to start playing tennis, learn cooking and get into photography, but I never seem to have time.";

  const [aspStep, setAspStep] = useState<number>(0);

  useEffect(() => {
    if (!showConversationModal) {
      setPhase('input');
      setTypedText('');
      setAspStep(0);
      return;
    }

    // Auto-advance sequence for a flawless voice/text demo experience
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>, t3: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      let charIdx = 0;
      const interval = setInterval(() => {
        if (charIdx <= fullUserText.length) {
          setTypedText(fullUserText.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(interval);
          setPhase('understanding');
        }
      }, 25);
      return () => clearInterval(interval);
    }

    if (phase === 'understanding') {
      t1 = setTimeout(() => {
        setPhase('response');
      }, 1800);
    }

    if (phase === 'response') {
      t2 = setTimeout(() => {
        setPhase('aspirations');
      }, 2000);
    }

    if (phase === 'aspirations') {
      if (aspStep < 3) {
        t3 = setTimeout(() => {
          setAspStep((prev) => prev + 1);
        }, 1200);
      } else {
        setTimeout(() => {
          setPhase('conclusion');
        }, 1500);
      }
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [showConversationModal, phase, aspStep]);

  if (!showConversationModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 z-50 bg-[#F8F8F6]/95 backdrop-blur-xl flex flex-col justify-between p-7 text-[#1C1C1A]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-medium">LIFE Companion</span>
          <button
            onClick={() => setShowConversationModal(false)}
            className="text-xs text-[#8E8E8A] hover:text-[#1C1C1A]"
          >
            Cancel
          </button>
        </div>

        {/* Center Dynamic Content */}
        <div className="my-auto space-y-8 max-w-sm">
          {phase === 'input' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-2xl font-light tracking-tight text-[#1C1C1A] leading-snug">
                “I work from 9 to 7 most days. I want to start playing tennis, learn cooking and get into photography...”
              </h2>
              <button
                onClick={() => setPhase('typing')}
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#1C1C1A] text-[#F8F8F6] rounded-full font-medium shadow-md hover:bg-black transition-all"
              >
                <Mic className="w-4 h-4 animate-pulse text-[#EE6C4D]" />
                <span>Simulate Arjun Speaking</span>
              </button>
            </motion.div>
          )}

          {(phase === 'typing' || phase === 'understanding') && (
            <div className="space-y-6">
              <div className="p-5 bg-white/80 rounded-2xl border border-[#E8E8E3] shadow-sm">
                <p className="text-sm text-[#1C1C1A] font-normal leading-relaxed">
                  "{typedText}"
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-[#8E8E8A]">
                <div className="w-2 h-2 rounded-full bg-[#E68A00] animate-ping" />
                <span className="italic font-light">Understanding...</span>
              </div>
            </div>
          )}

          {(phase === 'response' || phase === 'aspirations' || phase === 'conclusion') && (
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-light leading-relaxed text-[#1C1C1A]"
              >
                I hear three things you keep making room for in your head.
              </motion.p>

              {/* Sequential Aspirations List */}
              <div className="space-y-2.5">
                {aspStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3.5 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 rounded-xl"
                  >
                    <span className="text-sm font-medium text-[#1C1C1A]">Tennis</span>
                    <span className="text-xs text-[#2A9D8F] font-light">Muted Green / Blue</span>
                  </motion.div>
                )}

                {aspStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3.5 bg-[#EE6C4D]/10 border border-[#EE6C4D]/20 rounded-xl"
                  >
                    <span className="text-sm font-medium text-[#1C1C1A]">Cooking</span>
                    <span className="text-xs text-[#EE6C4D] font-light">Warm Amber / Orange</span>
                  </motion.div>
                )}

                {aspStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3.5 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-xl"
                  >
                    <span className="text-sm font-medium text-[#1C1C1A]">Photography</span>
                    <span className="text-xs text-[#6366F1] font-light">Soft Blue / Violet</span>
                  </motion.div>
                )}
              </div>

              {phase === 'conclusion' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 pt-2"
                >
                  <p className="text-base text-[#6E6E6A] font-light leading-snug">
                    You don't need more time.
                  </p>
                  <p className="text-lg text-[#1C1C1A] font-medium leading-snug">
                    You need your time to start reflecting what matters to you.
                  </p>
                  <p className="text-sm text-[#8E8E8A]">
                    Let me help you make room.
                  </p>

                  <button
                    onClick={() => discoverAspirations()}
                    className="mt-4 w-full flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#1C1C1A] text-white rounded-full text-sm font-medium shadow-md hover:bg-black transition-all"
                  >
                    <span>Let's Make Room</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-[11px] text-[#8E8E8A]">
          Your interface is beginning to adapt to your aspirations.
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
