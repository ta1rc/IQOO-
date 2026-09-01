import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';
import { DemoController } from './DemoController';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#EBEBE6] flex flex-col items-center justify-center py-0 md:py-8 px-0 md:px-4 select-none">
      {/* Interactive Presentation Demo Controller Bar */}
      <DemoController />

      {/* Titanium / Soft Glass Phone Container */}
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-[#F8F8F6] md:rounded-[52px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06),0_0_0_12px_#E3E3DC] overflow-hidden flex flex-col transition-all duration-300">
        
        {/* iOS Status Bar */}
        <div className="shrink-0 h-11 px-7 pt-3.5 flex items-center justify-between z-40 text-[#1C1C1A] text-xs font-semibold tracking-tight">
          <span>9:41</span>
          
          {/* Dynamic Pill Notch on Desktop frame */}
          <div className="hidden md:block w-24 h-4 bg-[#1C1C1A] rounded-full mx-auto" />

          <div className="flex items-center space-x-1.5 opacity-80">
            <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
            <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
            <Battery className="w-4 h-4 stroke-[2]" />
          </div>
        </div>

        {/* Screen Content Body */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="shrink-0 h-6 flex items-center justify-center pb-2 z-40">
          <div className="w-32 h-1 bg-[#1C1C1A]/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};
