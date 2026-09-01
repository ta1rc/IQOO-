import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, BookOpen, Sun, Sparkles, Heart, Feather, Music, Activity } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const LifeView: React.FC = () => {
  const {
    cookingCompleted,
    tennisCompleted,
    photographyCompleted,
    potteryCompleted,
    guitarCompleted,
    runningCompleted
  } = useLifeStore();

  const areas = [
    {
      title: 'Feel stronger',
      aspiration: 'Tennis',
      desc: 'Reclaim physical agility and court energy',
      completed: tennisCompleted,
      color: '#2A9D8F',
      bgColor: 'bg-[#2A9D8F]/10',
      borderColor: 'border-[#2A9D8F]/20'
    },
    {
      title: 'Keep learning',
      aspiration: 'Cooking',
      desc: 'Nourish yourself with handmade food',
      completed: cookingCompleted,
      color: '#EE6C4D',
      bgColor: 'bg-[#EE6C4D]/10',
      borderColor: 'border-[#EE6C4D]/20'
    },
    {
      title: 'Be present',
      aspiration: 'Photography',
      desc: 'See beauty in everyday urban moments',
      completed: photographyCompleted,
      color: '#6366F1',
      bgColor: 'bg-[#6366F1]/10',
      borderColor: 'border-[#6366F1]/20'
    },
    {
      title: 'Hands in craft',
      aspiration: 'Ceramics & Pottery',
      desc: 'Focus on physical clay and tactile form',
      completed: potteryCompleted,
      color: '#E07A5F',
      bgColor: 'bg-[#E07A5F]/10',
      borderColor: 'border-[#E07A5F]/20'
    },
    {
      title: 'Express emotion',
      aspiration: 'Acoustic Guitar',
      desc: 'Unwind with dusk chords and music',
      completed: guitarCompleted,
      color: '#7209B7',
      bgColor: 'bg-[#7209B7]/10',
      borderColor: 'border-[#7209B7]/20'
    },
    {
      title: 'Outdoor vitality',
      aspiration: 'Morning Trail Run',
      desc: 'Early sunlight and fresh air rhythm',
      completed: runningCompleted,
      color: '#38B000',
      bgColor: 'bg-[#38B000]/10',
      borderColor: 'border-[#38B000]/20'
    }
  ];

  return (
    <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A] overflow-y-auto space-y-6">
      {/* Top Title Section */}
      <div className="space-y-2 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-semibold">LIFE</span>
        <h1 className="text-3xl font-light tracking-tight text-[#1C1C1A]">
          The life you want.
        </h1>
        <p className="text-xs text-[#6E6E6A] font-light leading-relaxed">
          Not goals to complete. Directions for the person you're becoming.
        </p>
      </div>

      {/* Life Direction Cards */}
      <div className="space-y-3 flex-1">
        {areas.map((area, idx) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className={`p-4 rounded-3xl border transition-all ${area.bgColor} ${area.borderColor}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: area.color }}>
                {area.title}
              </span>
              {area.completed ? (
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white text-[#1C1C1A] font-bold shadow-2xs">
                  Active Surface Glow
                </span>
              ) : (
                <span className="text-[10px] text-[#8E8E8A]">Aspiration</span>
              )}
            </div>

            <div className="mt-1.5 space-y-0.5">
              <h3 className="text-base font-medium text-[#1C1C1A]">{area.aspiration}</h3>
              <p className="text-xs text-[#6E6E6A] font-light leading-relaxed">{area.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Banner */}
      <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E8E8E3] text-center text-xs text-[#6E6E6A] italic">
        “Your interface evolves as you spend time doing what actually matters.”
      </div>
    </div>
  );
};
