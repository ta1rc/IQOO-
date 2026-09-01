import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Clock, Sparkles, CheckCircle2, ShieldCheck, Heart, ArrowRight, Feather, Music, Activity } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';

export const TodayView: React.FC = () => {
  const {
    demoStep,
    setDemoStep,
    personality,
    setShowConversationModal,
    setShowCookingModal,
    protectedTennis,
    protectTennis,
    completeTennis,
    completePhotography,
    completePottery,
    completeGuitar,
    tennisCompleted,
    cookingCompleted,
    photographyCompleted,
    potteryCompleted,
    guitarCompleted,
    runningCompleted,
    triggerAllActivities,
    aspirationsDiscovered,
    memories,
    vibranceBoost,
    toggleVibranceBoost
  } = useLifeStore();

  const getAdaptiveGreeting = () => {
    if (personality === 'social') {
      return "You've got an hour. Want to do something fun with someone?";
    }
    if (personality === 'structured') {
      return "You have a 50-minute opening. Tennis fits cleanly here.";
    }
    return "You've had a long day. What would feel good tonight?";
  };

  // ==========================================
  // SCREEN 1 — EMPTY STATE
  // ==========================================
  if (demoStep === '1_EMPTY_STATE') {
    return (
      <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A]">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold tracking-wider text-[#1C1C1A]">LIFE</span>
          <span className="text-xs text-[#8E8E8A]">Tuesday · 9:41 AM</span>
        </div>

        {/* Main Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-auto space-y-6 max-w-sm"
        >
          <div className="space-y-3">
            <h1 className="text-4xl font-light tracking-tight text-[#1C1C1A] leading-tight">
              Good morning.
            </h1>
            <p className="text-xl font-light text-[#6E6E6A] leading-relaxed">
              What would make life feel a little more like yours?
            </p>
          </div>

          <button
            onClick={() => {
              setDemoStep('2_CONVERSATION');
              setShowConversationModal(true);
            }}
            className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#1C1C1A] text-[#F8F8F6] rounded-full font-medium shadow-sm hover:bg-black transition-all group"
          >
            <Mic className="w-4 h-4 text-[#EE6C4D] group-hover:scale-110 transition-transform" />
            <span className="text-sm tracking-wide">Talk to me</span>
          </button>
        </motion.div>

        <div className="text-center text-xs text-[#8E8E8A] font-light">
          No dashboards. No metrics. Just room to live.
        </div>
      </div>
    );
  }

  // ==========================================
  // HERO VIBRANT ATMOSPHERE STATE (Screens 10 & 11)
  // ==========================================
  if (demoStep === '10_FINAL_HERO_STATE' || demoStep === '11_FULL_VIBRANCE') {
    const totalExperiences = [cookingCompleted, tennisCompleted, photographyCompleted, potteryCompleted, guitarCompleted, runningCompleted].filter(Boolean).length || 3;
    const totalMemories = memories.length || 2;

    return (
      <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A] overflow-y-auto space-y-6">
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold tracking-wider text-[#1C1C1A]">LIFE</span>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold px-3 py-1 bg-[#EE6C4D]/15 text-[#EE6C4D] rounded-full tracking-wider uppercase">
              {demoStep === '11_FULL_VIBRANCE' ? 'Full Vibrant Surface' : 'Evolved Surface'}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="my-auto space-y-6 max-w-sm py-2"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8E8E8A] font-semibold">
              Your week, so far.
            </span>
            <h1 className="text-3xl font-light tracking-tight text-[#1C1C1A]">
              Life is reflecting you.
            </h1>
          </div>

          {/* Minimal stats pills */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-[#E8E8E3] shadow-sm">
              <div className="text-2xl font-light text-[#1C1C1A]">{totalExperiences}</div>
              <div className="text-xs text-[#6E6E6A] mt-1 font-medium">lived experiences</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-[#E8E8E3] shadow-sm">
              <div className="text-2xl font-light text-[#1C1C1A]">{totalMemories}</div>
              <div className="text-xs text-[#6E6E6A] mt-1 font-medium">memories saved</div>
            </div>
          </div>

          {/* Active Visual Influences Bar */}
          <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-[#E8E8E3] space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-[#1C1C1A]">
              <span>Active Surface Color Influences</span>
              <Sparkles className="w-3.5 h-3.5 text-[#EE6C4D]" />
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] px-2.5 py-1 bg-[#EE6C4D]/15 text-[#EE6C4D] rounded-full font-medium">
                Cooking · Amber
              </span>
              <span className="text-[10px] px-2.5 py-1 bg-[#2A9D8F]/15 text-[#2A9D8F] rounded-full font-medium">
                Tennis · Emerald
              </span>
              <span className="text-[10px] px-2.5 py-1 bg-[#6366F1]/15 text-[#6366F1] rounded-full font-medium">
                Photography · Violet
              </span>
              {potteryCompleted && (
                <span className="text-[10px] px-2.5 py-1 bg-[#E07A5F]/15 text-[#E07A5F] rounded-full font-medium">
                  Pottery · Terracotta
                </span>
              )}
              {guitarCompleted && (
                <span className="text-[10px] px-2.5 py-1 bg-[#7209B7]/15 text-[#7209B7] rounded-full font-medium">
                  Guitar · Sunset Magenta
                </span>
              )}
            </div>
          </div>

          {/* Quick trigger for vibrant showcase */}
          {demoStep !== '11_FULL_VIBRANCE' && (
            <button
              onClick={() => triggerAllActivities()}
              className="w-full py-3.5 bg-gradient-to-r from-[#EE6C4D] via-[#2A9D8F] to-[#6366F1] text-white font-medium text-xs rounded-2xl shadow-md hover:opacity-95 transition"
            >
              Unlock All 5+ Activities & Max Vibrance
            </button>
          )}

          {/* Final Emotional Companion Statement */}
          <div className="p-5 bg-white/90 backdrop-blur-lg rounded-3xl border border-[#E8E8E3] shadow-lg space-y-2 text-center">
            <p className="text-base font-light text-[#6E6E6A]">
              “You're not behind.”
            </p>
            <p className="text-2xl font-normal text-[#1C1C1A] tracking-tight">
              “You're becoming.”
            </p>
          </div>
        </motion.div>

        <div className="text-center text-xs text-[#8E8E8A] font-light">
          YOUR LIFE CHANGES YOUR INTERFACE.
        </div>
      </div>
    );
  }

  // ==========================================
  // STANDARD TODAY TIMELINE VIEW
  // ==========================================
  return (
    <div className="h-full flex flex-col justify-between p-7 text-[#1C1C1A] overflow-y-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm font-semibold tracking-wider text-[#1C1C1A]">LIFE</span>
        <span className="text-xs text-[#8E8E8A]">Tuesday · Today</span>
      </div>

      {/* Main Content Flow */}
      <div className="space-y-5 flex-1">
        {/* Companion Insight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-white/80 backdrop-blur-md rounded-3xl border border-[#E8E8E3] shadow-sm space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EE6C4D]">
              Companion Insight
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#EE6C4D]" />
          </div>

          {demoStep === '3_TODAY_SELECTION' && (
            <div className="space-y-2">
              <p className="text-base font-light text-[#1C1C1A] leading-relaxed">
                “You have 45 minutes tonight.”
              </p>
              <p className="text-xs text-[#6E6E6A] leading-relaxed">
                “You usually lose this window to scrolling. Want to use it for something you've wanted to learn?”
              </p>
            </div>
          )}

          {demoStep === '6_UPDATED_SURFACE' && (
            <div className="space-y-2">
              <p className="text-base font-light text-[#1C1C1A] leading-relaxed">
                “Your life is starting to leave a mark.”
              </p>
              <div className="flex items-center space-x-3 text-xs text-[#6E6E6A] pt-1">
                <span className="font-medium text-[#1C1C1A]">1 experience</span>
                <span>•</span>
                <span className="font-medium text-[#1C1C1A]">1 memory</span>
                <span>•</span>
                <span className="font-medium text-[#EE6C4D]">4 aspirations waiting</span>
              </div>
            </div>
          )}

          {(demoStep === '7_TENNIS_PROTECTED' || demoStep === '8_PHOTOGRAPHY_CHALLENGE') && (
            <div className="space-y-2">
              <p className="text-base font-light text-[#1C1C1A] leading-relaxed">
                {getAdaptiveGreeting()}
              </p>
              <p className="text-xs text-[#6E6E6A]">
                “You said you wanted to play tennis. You have 50 minutes tomorrow.”
              </p>
            </div>
          )}
        </motion.div>

        {/* Timeline Component */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-[#8E8E8A] font-medium px-1">
            <span>Daily Flow</span>
            <span>Tuesday</span>
          </div>

          <div className="p-4 bg-white/60 backdrop-blur-sm rounded-3xl border border-[#E8E8E3] space-y-3">
            <div className="flex items-center space-x-3 text-xs text-[#8E8E8A]">
              <span className="w-12 font-mono text-[11px]">09:00</span>
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <span>Work</span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#8E8E8A]">
              <span className="w-12 font-mono text-[11px]">19:00</span>
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <span>Work ends</span>
            </div>

            {/* Open Slot */}
            <div className="p-3 bg-[#EE6C4D]/10 border border-[#EE6C4D]/20 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-12 font-mono text-xs font-semibold text-[#EE6C4D]">19:15</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE6C4D] animate-ping" />
                <span className="text-xs font-semibold text-[#1C1C1A]">Open Window (45 mins)</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#EE6C4D]">Your Room</span>
            </div>

            {/* Protected Tennis */}
            {protectedTennis && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                  <div>
                    <div className="text-xs font-semibold text-[#1C1C1A]">Tennis · 45 min</div>
                    <div className="text-[10px] text-[#2A9D8F]">Protected personal time</div>
                  </div>
                </div>
                {!tennisCompleted ? (
                  <button
                    onClick={() => completeTennis()}
                    className="px-3 py-1 bg-[#2A9D8F] text-white rounded-full text-[10px] font-semibold"
                  >
                    Complete
                  </button>
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                )}
              </motion.div>
            )}

            <div className="flex items-center space-x-3 text-xs text-[#8E8E8A]">
              <span className="w-12 font-mono text-[11px]">22:30</span>
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <span>Sleep</span>
            </div>
          </div>
        </div>

        {/* Expanded Activity Options List */}
        <div className="space-y-2.5">
          <span className="text-xs text-[#8E8E8A] font-medium px-1">Available Activities</span>
          
          {/* Cooking */}
          <button
            onClick={() => {
              setDemoStep('4_COOKING_EXPERIENCE');
              setShowCookingModal(true);
            }}
            className="w-full p-3.5 bg-white rounded-2xl border border-[#EE6C4D]/30 shadow-sm hover:shadow-md transition text-left flex items-center justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#1C1C1A]">Cooking · Garlic Butter Pasta</span>
                <span className="text-[9px] px-2 py-0.5 bg-[#EE6C4D]/15 text-[#EE6C4D] rounded-full font-bold">
                  Warm Amber
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E6A] mt-0.5">20 min first dish experience</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#EE6C4D]" />
          </button>

          {/* Tennis */}
          <button
            onClick={() => {
              protectTennis();
              setDemoStep('7_TENNIS_PROTECTED');
            }}
            className="w-full p-3.5 bg-white/80 rounded-2xl border border-[#2A9D8F]/30 hover:bg-white transition text-left flex items-center justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#1C1C1A]">Tennis · Court Session</span>
                <span className="text-[9px] px-2 py-0.5 bg-[#2A9D8F]/15 text-[#2A9D8F] rounded-full font-bold">
                  Muted Green
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E6A] mt-0.5">45 min protected play time</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#2A9D8F]" />
          </button>

          {/* Photography */}
          <button
            onClick={() => completePhotography()}
            className="w-full p-3.5 bg-white/80 rounded-2xl border border-[#6366F1]/30 hover:bg-white transition text-left flex items-center justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#1C1C1A]">Photography · Sunset Walk</span>
                <span className="text-[9px] px-2 py-0.5 bg-[#6366F1]/15 text-[#6366F1] rounded-full font-bold">
                  Soft Violet
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E6A] mt-0.5">Golden hour urban challenge</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#6366F1]" />
          </button>

          {/* Pottery */}
          <button
            onClick={() => completePottery()}
            className="w-full p-3.5 bg-white/80 rounded-2xl border border-[#E07A5F]/30 hover:bg-white transition text-left flex items-center justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#1C1C1A]">Ceramics · Pottery Wheel</span>
                <span className="text-[9px] px-2 py-0.5 bg-[#E07A5F]/15 text-[#E07A5F] rounded-full font-bold">
                  Terracotta
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E6A] mt-0.5">Clay vase shaping studio</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
          </button>

          {/* Guitar */}
          <button
            onClick={() => completeGuitar()}
            className="w-full p-3.5 bg-white/80 rounded-2xl border border-[#7209B7]/30 hover:bg-white transition text-left flex items-center justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#1C1C1A]">Music · Acoustic Guitar</span>
                <span className="text-[9px] px-2 py-0.5 bg-[#7209B7]/15 text-[#7209B7] rounded-full font-bold">
                  Sunset Magenta
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E6A] mt-0.5">Dusk chords session</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#7209B7]" />
          </button>
        </div>
      </div>

      <div className="text-center text-[10px] text-[#8E8E8A]">
        LIFE • Adaptive Life Companion
      </div>
    </div>
  );
};
