import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Cloud, Sparkles, Feather } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';
import { MoodMode } from '../types';

export const MoodModal: React.FC = () => {
  const { showMoodModal, setShowMoodModal, mood, setMood } = useLifeStore();

  if (!showMoodModal) return null;

  const options: { id: MoodMode; label: string; desc: string }[] = [
    { id: 'good', label: 'Good', desc: 'Energized and ready to explore' },
    { id: 'okay', label: 'Okay', desc: 'Navigating the day smoothly' },
    { id: 'low', label: 'Low', desc: 'Running low on mental energy' },
    { id: 'overwhelmed', label: 'Overwhelmed', desc: 'Work or life feeling heavy' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 z-50 bg-[#F8F8F6]/95 backdrop-blur-xl flex flex-col justify-between p-7 text-[#1C1C1A]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-medium">Emotional Reflection</span>
          <button
            onClick={() => setShowMoodModal(false)}
            className="text-xs text-[#8E8E8A] hover:text-[#1C1C1A]"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="my-auto space-y-6 max-w-sm">
          <div className="space-y-2">
            <h2 className="text-2xl font-light tracking-tight text-[#1C1C1A]">
              Where are you at today?
            </h2>
            <p className="text-xs text-[#6E6E6A]">
              Select how you're feeling to adjust your companion's tone and pace.
            </p>
          </div>

          <div className="space-y-2.5">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setMood(opt.id)}
                className={`w-full p-4 rounded-2xl text-left border transition-all ${
                  mood === opt.id
                    ? 'bg-white border-[#1C1C1A] shadow-md ring-1 ring-[#1C1C1A]'
                    : 'bg-white/60 border-[#E8E8E3] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#1C1C1A]">{opt.label}</span>
                  {mood === opt.id && <Feather className="w-4 h-4 text-[#EE6C4D]" />}
                </div>
                <p className="text-xs text-[#8E8E8A] mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>

          {/* Supportive Reflection Feedback */}
          {mood === 'overwhelmed' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-[#1C1C1A] text-white rounded-2xl space-y-2 shadow-lg"
            >
              <div className="flex items-center space-x-2 text-xs text-[#EE6C4D] font-medium">
                <Cloud className="w-4 h-4" />
                <span>Space to Breathe</span>
              </div>
              <p className="text-xs font-light leading-relaxed text-white/90">
                “You don't have to fix today. One useful thing, one nourishing thing, then permission to stop.”
              </p>
            </motion.div>
          )}
        </div>

        <button
          onClick={() => setShowMoodModal(false)}
          className="w-full py-4 bg-[#1C1C1A] text-white rounded-full text-xs font-medium shadow-md hover:bg-black transition"
        >
          Save & Return
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
