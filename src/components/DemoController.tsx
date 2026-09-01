import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ChevronRight, Sliders, Flame, Sparkles, Sun } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';
import { DemoStep, PersonalityMode, MoodMode } from '../types';

export const DemoController: React.FC = () => {
  const {
    demoStep,
    setDemoStep,
    resetDemo,
    personality,
    setPersonality,
    mood,
    setMood,
    vibranceBoost,
    toggleVibranceBoost,
    discoverAspirations,
    completeCooking,
    addPastaMemory,
    protectTennis,
    completeTennis,
    completePhotography,
    addPhotoMemory,
    addPotteryMemory,
    addGuitarMemory,
    triggerAllActivities,
    setShowConversationModal,
    setShowCookingModal
  } = useLifeStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const steps: { id: DemoStep; label: string; action: () => void }[] = [
    {
      id: '1_EMPTY_STATE',
      label: '1. Empty State',
      action: () => resetDemo()
    },
    {
      id: '2_CONVERSATION',
      label: '2. Arjun Conversation',
      action: () => {
        setDemoStep('2_CONVERSATION');
        setShowConversationModal(true);
      }
    },
    {
      id: '3_TODAY_SELECTION',
      label: '3. Aspirations Discovered',
      action: () => {
        discoverAspirations();
      }
    },
    {
      id: '4_COOKING_EXPERIENCE',
      label: '4. Start Cooking',
      action: () => {
        setDemoStep('4_COOKING_EXPERIENCE');
        setShowCookingModal(true);
      }
    },
    {
      id: '5_MEMORY_CAPTURE',
      label: '5. Cooking Done',
      action: () => {
        completeCooking();
      }
    },
    {
      id: '6_UPDATED_SURFACE',
      label: '6. Memory Saved (Warm Glow)',
      action: () => {
        addPastaMemory();
      }
    },
    {
      id: '7_TENNIS_PROTECTED',
      label: '7. Protect Tennis',
      action: () => {
        setDemoStep('7_TENNIS_PROTECTED');
        protectTennis();
      }
    },
    {
      id: '8_PHOTOGRAPHY_CHALLENGE',
      label: '8. Tennis Done & Photo Walk',
      action: () => {
        completeTennis();
      }
    },
    {
      id: '9_MEMORIES_VIEW',
      label: '9. Save Photo Memory',
      action: () => {
        addPhotoMemory();
      }
    },
    {
      id: '10_FINAL_HERO_STATE',
      label: '10. Hero Surface',
      action: () => {
        setDemoStep('10_FINAL_HERO_STATE');
      }
    },
    {
      id: '11_FULL_VIBRANCE',
      label: '11. Full Vibrant Atmosphere',
      action: () => {
        triggerAllActivities();
      }
    }
  ];

  // Auto-play timer handler
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      const currentIndex = steps.findIndex((s) => s.id === demoStep);
      if (currentIndex < steps.length - 1) {
        timer = setTimeout(() => {
          steps[currentIndex + 1].action();
        }, 5000);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, demoStep]);

  return (
    <div className="w-full max-w-2xl mb-4 px-3 flex flex-col items-center z-50">
      {/* Mini Control Bar */}
      <div className="bg-[#1C1C1A] text-[#F8F8F6] rounded-full px-4 py-2 flex items-center justify-between w-full shadow-lg border border-white/10 text-xs">
        <div className="flex items-center space-x-2">
          <span className="font-semibold tracking-wider text-[11px] uppercase text-[#E68A00]">
            Demo Deck
          </span>
          <span className="text-[#8E8E8A] hidden sm:inline">•</span>
          <span className="text-white/80 font-medium truncate max-w-[140px] sm:max-w-[200px]">
            {steps.find((s) => s.id === demoStep)?.label || demoStep}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick Vibrant Surface Boost Toggle */}
          <button
            onClick={() => toggleVibranceBoost()}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition ${
              vibranceBoost ? 'bg-[#E68A00] text-black shadow-sm' : 'bg-white/10 text-white/70 hover:text-white'
            }`}
            title="Toggle High Vibrance Surface Lighting"
          >
            <Sparkles className="w-3 h-3" />
            <span>{vibranceBoost ? 'Vibrant ON' : 'Vibrant Soft'}</span>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] transition ${
              isPlaying ? 'bg-[#EE6C4D] text-white animate-pulse' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{isPlaying ? 'Playing...' : 'Auto Pitch'}</span>
          </button>

          <button
            onClick={() => resetDemo()}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition"
            title="Reset to Empty State"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition flex items-center space-x-1"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded Quick Step Jump Grid */}
      {isExpanded && (
        <div className="w-full mt-2 p-3.5 bg-[#1C1C1A]/95 backdrop-blur-lg text-white rounded-2xl border border-white/10 shadow-2xl flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold">
              Jump to Narrative Step
            </span>
            <button
              onClick={() => triggerAllActivities()}
              className="text-[10px] px-2.5 py-1 bg-gradient-to-r from-[#EE6C4D] to-[#6366F1] text-white rounded-full font-semibold shadow-sm hover:scale-105 transition"
            >
              ⚡ Complete All Activities
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  s.action();
                  setIsPlaying(false);
                }}
                className={`px-2.5 py-2 rounded-xl text-left text-[11px] transition flex items-center justify-between ${
                  demoStep === s.id
                    ? 'bg-white/20 text-white font-semibold border border-white/30 shadow-inner'
                    : 'bg-white/5 hover:bg-white/10 text-white/70'
                }`}
              >
                <span className="truncate">{s.label}</span>
                {demoStep === s.id && <ChevronRight className="w-3 h-3 shrink-0 text-[#E68A00]" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            {/* Personality Adaptive Behavior Control */}
            <div className="flex items-center space-x-1.5">
              <span className="text-white/50">Companion Style:</span>
              {(['quiet', 'social', 'structured'] as PersonalityMode[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPersonality(p)}
                  className={`px-2 py-0.5 rounded-md capitalize transition ${
                    personality === p
                      ? 'bg-[#E68A00] text-black font-semibold'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Mood Control */}
            <div className="flex items-center space-x-1.5">
              <span className="text-white/50">User Mood:</span>
              {(['good', 'okay', 'low', 'overwhelmed'] as MoodMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`px-2 py-0.5 rounded-md capitalize transition ${
                    mood === m
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
