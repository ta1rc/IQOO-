import React from 'react';
import { Sun, Compass, BookOpen, Sparkles } from 'lucide-react';
import { useLifeStore } from '../store/useLifeStore';
import { NavigationTab } from '../types';

export const BottomNavigation: React.FC = () => {
  const { activeTab, setActiveTab, demoStep } = useLifeStore();

  // Hide bottom navigation on initial empty state and active full-screen modals to maintain purity
  if (demoStep === '1_EMPTY_STATE') {
    return null;
  }

  const tabs: { id: NavigationTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'today', label: 'Today', icon: Sun },
    { id: 'life', label: 'Life', icon: Compass },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'explore', label: 'Explore', icon: Sparkles },
  ];

  return (
    <div className="shrink-0 z-30 px-6 py-2 bg-gradient-to-t from-[#F8F8F6] via-[#F8F8F6]/90 to-transparent">
      <nav className="flex items-center justify-around bg-[#F3F3EF]/80 backdrop-blur-md rounded-full px-3 py-2 border border-[#E5E5E0]/60 shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#FFFFFF] text-[#1C1C1A] shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-medium'
                  : 'text-[#8E8E8A] hover:text-[#1C1C1A]'
              }`}
            >
              <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
              <span className={`text-xs tracking-tight transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
