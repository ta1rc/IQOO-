import React from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { LifeSurface } from './components/LifeSurface';
import { BottomNavigation } from './components/BottomNavigation';
import { TodayView } from './views/TodayView';
import { LifeView } from './views/LifeView';
import { JournalView } from './views/JournalView';
import { ExploreView } from './views/ExploreView';
import { ConversationModal } from './views/ConversationModal';
import { CookingExperienceModal } from './views/CookingExperienceModal';
import { MemoryCaptureModal } from './views/MemoryCaptureModal';
import { PhotographyModal } from './views/PhotographyModal';
import { PotteryModal } from './views/PotteryModal';
import { GuitarModal } from './views/GuitarModal';
import { MoodModal } from './views/MoodModal';
import { useLifeStore } from './store/useLifeStore';

export const App: React.FC = () => {
  const { activeTab } = useLifeStore();

  return (
    <PhoneFrame>
      <LifeSurface>
        {/* Main Tab Content View */}
        <div className="flex-1 relative overflow-hidden">
          {activeTab === 'today' && <TodayView />}
          {activeTab === 'life' && <LifeView />}
          {activeTab === 'journal' && <JournalView />}
          {activeTab === 'explore' && <ExploreView />}
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNavigation />

        {/* Story Modals & Interactive Overlays */}
        <ConversationModal />
        <CookingExperienceModal />
        <MemoryCaptureModal />
        <PhotographyModal />
        <PotteryModal />
        <GuitarModal />
        <MoodModal />
      </LifeSurface>
    </PhoneFrame>
  );
};

export default App;
