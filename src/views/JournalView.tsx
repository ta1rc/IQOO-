import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mic, Edit3, Sparkles, Smile } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';
import { Memory } from '../types';

export const JournalView: React.FC = () => {
  const { memories, setShowMoodModal } = useLifeStore();

  const defaultMemories: Memory[] = [
    {
      id: 'demo-photo-1',
      activity: 'photography',
      title: 'Golden hour walk',
      emotion: 'inspired',
      quote: 'Found something beautiful on the way home.',
      timestamp: 'Thursday · 6:45 PM',
      image: '/assets/photography.jpg',
      tag: 'Photography · Sunset walk',
      palette: {
        primary: 'rgba(99, 102, 241, 0.45)',
        secondary: 'rgba(244, 211, 94, 0.55)'
      }
    },
    {
      id: 'demo-pasta-1',
      activity: 'cooking',
      title: 'My first pasta',
      emotion: 'proud',
      quote: 'I actually made this.',
      timestamp: 'Tuesday · 8:42 PM',
      image: '/assets/pasta.jpg',
      tag: 'Cooking · First attempt',
      palette: {
        primary: 'rgba(249, 115, 22, 0.45)',
        secondary: 'rgba(251, 191, 36, 0.55)'
      }
    },
    {
      id: 'demo-pottery-1',
      activity: 'pottery',
      title: 'Studio Clay Vase',
      emotion: 'grounded',
      quote: 'Hands in clay, completely focused on the present.',
      timestamp: 'Sunday · 3:30 PM',
      image: '/assets/pottery.jpg',
      tag: 'Pottery · Ceramics Studio',
      palette: {
        primary: 'rgba(224, 122, 95, 0.45)',
        secondary: 'rgba(242, 204, 143, 0.55)'
      }
    },
    {
      id: 'demo-guitar-1',
      activity: 'guitar',
      title: 'Sunset Chords',
      emotion: 'peaceful',
      quote: 'Played acoustic melodies as dusk settled in.',
      timestamp: 'Friday · 7:15 PM',
      image: '/assets/guitar.jpg',
      tag: 'Music · Acoustic Guitar',
      palette: {
        primary: 'rgba(114, 9, 183, 0.45)',
        secondary: 'rgba(247, 37, 133, 0.55)'
      }
    },
    {
      id: 'demo-tennis-1',
      activity: 'tennis',
      title: 'First tennis session',
      emotion: 'energized',
      quote: "Didn't realize how much I missed this.",
      timestamp: 'Saturday · 10:15 AM',
      image: '/assets/tennis.jpg',
      tag: 'Tennis · Protected time',
      palette: {
        primary: 'rgba(42, 157, 143, 0.45)',
        secondary: 'rgba(56, 176, 0, 0.55)'
      }
    }
  ];

  const displayList = memories.length > 0 ? memories : defaultMemories;

  return (
    <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A] overflow-y-auto space-y-6">
      {/* Top Header */}
      <div className="space-y-2 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-semibold">Moments worth keeping</span>
        <h1 className="text-3xl font-light tracking-tight text-[#1C1C1A]">
          A place to come back to.
        </h1>
        <p className="text-xs text-[#6E6E6A] font-light leading-relaxed">
          Talk. Reflect. Remember. Nothing here needs to become a task.
        </p>
      </div>

      {/* Main Prompt & Actions */}
      <div className="p-5 bg-white/80 backdrop-blur-md rounded-3xl border border-[#E8E8E3] shadow-sm space-y-4">
        <p className="text-sm font-medium text-[#1C1C1A]">
          “What felt like living today?”
        </p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => setShowMoodModal(true)}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#F8F8F6] border border-[#E8E8E3] rounded-xl hover:bg-neutral-100 transition"
          >
            <Smile className="w-3.5 h-3.5 text-[#EE6C4D]" />
            <span>How am I feeling?</span>
          </button>
          <button className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#F8F8F6] border border-[#E8E8E3] rounded-xl hover:bg-neutral-100 transition">
            <Mic className="w-3.5 h-3.5 text-[#2A9D8F]" />
            <span>Talk instead</span>
          </button>
        </div>
      </div>

      {/* Memory Archive Gallery */}
      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between text-xs text-[#8E8E8A] font-medium px-1">
          <span>Captured Memories & Palettes</span>
          <span>{displayList.length} items</span>
        </div>

        <div className="space-y-5">
          {displayList.map((mem, idx) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-4 border border-[#E8E8E3] shadow-sm space-y-3"
            >
              {/* Photo Frame */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={mem.image}
                  alt={mem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white">
                  {mem.timestamp}
                </div>
              </div>

              {/* Memory Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[#1C1C1A]">{mem.title}</h3>
                  <span className="text-[10px] uppercase font-bold text-[#EE6C4D] tracking-wider">
                    {mem.emotion}
                  </span>
                </div>
                <p className="text-xs text-[#6E6E6A] italic">
                  “{mem.quote}”
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[10px] text-[#8E8E8A] uppercase tracking-widest">
                    {mem.tag}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div
                      className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: mem.palette?.primary || '#EE6C4D' }}
                    />
                    <div
                      className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: mem.palette?.secondary || '#F4D15E' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
