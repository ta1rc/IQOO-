import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Camera, Calendar, ArrowRight, Feather, Music, Activity } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const ExploreView: React.FC = () => {
  const {
    setDemoStep,
    setShowCookingModal,
    completePhotography,
    protectTennis,
    completePottery,
    completeGuitar
  } = useLifeStore();

  const suggestions = [
    {
      id: 'pasta',
      icon: Utensils,
      color: '#EE6C4D',
      title: '20-minute pasta',
      rationale: "Because you've been wanting to learn cooking without another big commitment.",
      actionLabel: 'Try tonight',
      action: () => {
        setDemoStep('4_COOKING_EXPERIENCE');
        setShowCookingModal(true);
      }
    },
    {
      id: 'pottery',
      icon: Feather,
      color: '#E07A5F',
      title: 'Weekend Ceramics Studio',
      rationale: 'Shape raw clay on the pottery wheel and add terracotta warmth to your Life Surface.',
      actionLabel: 'Start clay session',
      action: () => {
        completePottery();
      }
    },
    {
      id: 'guitar',
      icon: Music,
      color: '#7209B7',
      title: 'Sunset Acoustic Chords',
      rationale: 'Unwind with dusk melodies as sunlight fades over the windowsill.',
      actionLabel: 'Play sunset session',
      action: () => {
        completeGuitar();
      }
    },
    {
      id: 'photo',
      icon: Camera,
      color: '#6366F1',
      title: 'Golden-hour photo walk',
      rationale: 'A low-effort way to restart the photography habit you paused.',
      actionLabel: 'Take 30-min walk',
      action: () => {
        completePhotography();
      }
    },
    {
      id: 'saturday',
      icon: Calendar,
      color: '#2A9D8F',
      title: 'Protect Saturday morning tennis',
      rationale: 'You have enough work planned. Make room for something memorable.',
      actionLabel: 'Lock Saturday 10 AM',
      action: () => {
        protectTennis();
        setDemoStep('7_TENNIS_PROTECTED');
      }
    }
  ];

  return (
    <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A] overflow-y-auto space-y-6">
      {/* Top Title */}
      <div className="space-y-2 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-semibold">Discovery</span>
        <h1 className="text-3xl font-light tracking-tight text-[#1C1C1A]">
          Try something.
        </h1>
        <p className="text-xs text-[#6E6E6A] font-light leading-relaxed">
          The system knows what you've been curious about.
        </p>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3 flex-1">
        {suggestions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-4 border border-[#E8E8E3] shadow-sm space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1C1C1A]">{item.title}</h3>
                </div>
              </div>

              <p className="text-xs text-[#6E6E6A] font-light leading-relaxed">
                “{item.rationale}”
              </p>

              <button
                onClick={item.action}
                className="w-full py-2.5 px-4 bg-[#F8F8F6] border border-[#E8E8E3] rounded-xl text-xs font-semibold text-[#1C1C1A] hover:bg-neutral-100 transition flex items-center justify-between"
              >
                <span>{item.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8E8E8A]" />
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center text-[10px] text-[#8E8E8A]">
        LIFE • Adaptive Life Companion
      </div>
    </div>
  );
};
