import { create } from 'zustand';
import { ActivityType, DemoStep, Memory, MoodMode, NavigationTab, PersonalityMode } from '../types';

interface LifeState {
  // Navigation
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;

  // Demo flow control
  demoStep: DemoStep;
  setDemoStep: (step: DemoStep) => void;
  resetDemo: () => void;
  advanceStep: () => void;

  // Vibrance & Surface Controls
  vibranceBoost: boolean;
  toggleVibranceBoost: () => void;

  // Companion personalization
  personality: PersonalityMode;
  setPersonality: (p: PersonalityMode) => void;
  mood: MoodMode;
  setMood: (m: MoodMode) => void;
  showMoodModal: boolean;
  setShowMoodModal: (show: boolean) => void;

  // Interactive overlays
  showConversationModal: boolean;
  setShowConversationModal: (show: boolean) => void;
  showCookingModal: boolean;
  setShowCookingModal: (show: boolean) => void;
  showMemoryModal: boolean;
  setShowMemoryModal: (show: boolean) => void;
  showPhotographyModal: boolean;
  setShowPhotographyModal: (show: boolean) => void;
  showPotteryModal: boolean;
  setShowPotteryModal: (show: boolean) => void;
  showGuitarModal: boolean;
  setShowGuitarModal: (show: boolean) => void;

  // Life state metrics & activities
  aspirationsDiscovered: boolean;
  aspirations: Record<ActivityType, number>;
  livedExperience: Record<ActivityType, number>;
  emotionalResponse: Record<ActivityType, number>;
  workPressure: number;

  // Completion statuses
  protectedTennis: boolean;
  tennisCompleted: boolean;
  cookingCompleted: boolean;
  photographyCompleted: boolean;
  potteryCompleted: boolean;
  guitarCompleted: boolean;
  runningCompleted: boolean;

  memories: Memory[];
  
  // Actions
  discoverAspirations: () => void;
  completeCooking: () => void;
  addPastaMemory: () => void;
  protectTennis: () => void;
  completeTennis: () => void;
  completePhotography: () => void;
  addPhotoMemory: () => void;
  completePottery: () => void;
  addPotteryMemory: () => void;
  completeGuitar: () => void;
  addGuitarMemory: () => void;
  completeRunning: () => void;
  triggerAllActivities: () => void;
}

const defaultAspirations: Record<ActivityType, number> = {
  cooking: 0,
  tennis: 0,
  photography: 0,
  pottery: 0,
  guitar: 0,
  running: 0,
  stargazing: 0,
};

const defaultLivedExperience: Record<ActivityType, number> = {
  cooking: 0,
  tennis: 0,
  photography: 0,
  pottery: 0,
  guitar: 0,
  running: 0,
  stargazing: 0,
};

const defaultEmotionalResponse: Record<ActivityType, number> = {
  cooking: 0,
  tennis: 0,
  photography: 0,
  pottery: 0,
  guitar: 0,
  running: 0,
  stargazing: 0,
};

const stepSequence: DemoStep[] = [
  '1_EMPTY_STATE',
  '2_CONVERSATION',
  '3_TODAY_SELECTION',
  '4_COOKING_EXPERIENCE',
  '5_MEMORY_CAPTURE',
  '6_UPDATED_SURFACE',
  '7_TENNIS_PROTECTED',
  '8_PHOTOGRAPHY_CHALLENGE',
  '9_MEMORIES_VIEW',
  '10_FINAL_HERO_STATE',
  '11_FULL_VIBRANCE',
];

export const useLifeStore = create<LifeState>((set, get) => ({
  activeTab: 'today',
  setActiveTab: (tab) => set({ activeTab: tab }),

  demoStep: '1_EMPTY_STATE',
  setDemoStep: (step) => {
    let tab: NavigationTab = get().activeTab;
    if (step === '9_MEMORIES_VIEW') {
      tab = 'journal';
    } else if (step === '1_EMPTY_STATE' || step === '3_TODAY_SELECTION' || step === '6_UPDATED_SURFACE' || step === '7_TENNIS_PROTECTED' || step === '10_FINAL_HERO_STATE' || step === '11_FULL_VIBRANCE') {
      tab = 'today';
    }
    set({ demoStep: step, activeTab: tab });
  },

  vibranceBoost: true,
  toggleVibranceBoost: () => set((state) => ({ vibranceBoost: !state.vibranceBoost })),

  resetDemo: () => {
    set({
      activeTab: 'today',
      demoStep: '1_EMPTY_STATE',
      aspirationsDiscovered: false,
      aspirations: { ...defaultAspirations },
      livedExperience: { ...defaultLivedExperience },
      emotionalResponse: { ...defaultEmotionalResponse },
      workPressure: 0.7,
      protectedTennis: false,
      tennisCompleted: false,
      cookingCompleted: false,
      photographyCompleted: false,
      potteryCompleted: false,
      guitarCompleted: false,
      runningCompleted: false,
      memories: [],
      showConversationModal: false,
      showCookingModal: false,
      showMemoryModal: false,
      showPhotographyModal: false,
      showPotteryModal: false,
      showGuitarModal: false,
      showMoodModal: false,
      mood: 'okay',
      personality: 'quiet'
    });
  },

  advanceStep: () => {
    const currentStep = get().demoStep;
    const currentIndex = stepSequence.indexOf(currentStep);
    if (currentIndex < stepSequence.length - 1) {
      const nextStep = stepSequence[currentIndex + 1];
      get().setDemoStep(nextStep);
    }
  },

  personality: 'quiet',
  setPersonality: (p) => set({ personality: p }),

  mood: 'okay',
  setMood: (m) => set({ mood: m }),
  showMoodModal: false,
  setShowMoodModal: (show) => set({ showMoodModal: show }),

  showConversationModal: false,
  setShowConversationModal: (show) => set({ showConversationModal: show }),
  showCookingModal: false,
  setShowCookingModal: (show) => set({ showCookingModal: show }),
  showMemoryModal: false,
  setShowMemoryModal: (show) => set({ showMemoryModal: show }),
  showPhotographyModal: false,
  setShowPhotographyModal: (show) => set({ showPhotographyModal: show }),
  showPotteryModal: false,
  setShowPotteryModal: (show) => set({ showPotteryModal: show }),
  showGuitarModal: false,
  setShowGuitarModal: (show) => set({ showGuitarModal: show }),

  aspirationsDiscovered: false,
  aspirations: { ...defaultAspirations },
  livedExperience: { ...defaultLivedExperience },
  emotionalResponse: { ...defaultEmotionalResponse },
  workPressure: 0.7,

  protectedTennis: false,
  tennisCompleted: false,
  cookingCompleted: false,
  photographyCompleted: false,
  potteryCompleted: false,
  guitarCompleted: false,
  runningCompleted: false,
  memories: [],

  discoverAspirations: () => {
    set({
      aspirationsDiscovered: true,
      aspirations: {
        cooking: 0.8,
        tennis: 0.8,
        photography: 0.9,
        pottery: 0.7,
        guitar: 0.85,
        running: 0.75,
        stargazing: 0.7
      },
      demoStep: '3_TODAY_SELECTION',
      showConversationModal: false,
      activeTab: 'today'
    });
  },

  completeCooking: () => {
    set((state) => ({
      cookingCompleted: true,
      livedExperience: { ...state.livedExperience, cooking: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, cooking: 0.95 },
      demoStep: '5_MEMORY_CAPTURE',
      showCookingModal: false,
      showMemoryModal: true
    }));
  },

  addPastaMemory: () => {
    const pastaMemory: Memory = {
      id: 'pasta-1',
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
    };
    set((state) => ({
      memories: [pastaMemory, ...state.memories.filter((m) => m.id !== 'pasta-1')],
      showMemoryModal: false,
      demoStep: '6_UPDATED_SURFACE',
      activeTab: 'today'
    }));
  },

  protectTennis: () => {
    set({ protectedTennis: true });
  },

  completeTennis: () => {
    set((state) => ({
      tennisCompleted: true,
      livedExperience: { ...state.livedExperience, tennis: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, tennis: 0.95 },
      demoStep: '8_PHOTOGRAPHY_CHALLENGE',
      activeTab: 'today',
      memories: [
        {
          id: 'tennis-1',
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
        },
        ...state.memories.filter((m) => m.id !== 'tennis-1')
      ]
    }));
  },

  completePhotography: () => {
    set({ showPhotographyModal: true });
  },

  addPhotoMemory: () => {
    const photoMemory: Memory = {
      id: 'photo-1',
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
    };
    set((state) => ({
      photographyCompleted: true,
      livedExperience: { ...state.livedExperience, photography: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, photography: 0.95 },
      memories: [photoMemory, ...state.memories.filter((m) => m.id !== 'photo-1')],
      showPhotographyModal: false,
      demoStep: '9_MEMORIES_VIEW',
      activeTab: 'journal'
    }));
  },

  completePottery: () => {
    set({ showPotteryModal: true });
  },

  addPotteryMemory: () => {
    const potteryMemory: Memory = {
      id: 'pottery-1',
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
    };
    set((state) => ({
      potteryCompleted: true,
      livedExperience: { ...state.livedExperience, pottery: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, pottery: 0.95 },
      memories: [potteryMemory, ...state.memories.filter((m) => m.id !== 'pottery-1')],
      showPotteryModal: false,
      demoStep: '11_FULL_VIBRANCE',
      activeTab: 'today'
    }));
  },

  completeGuitar: () => {
    set({ showGuitarModal: true });
  },

  addGuitarMemory: () => {
    const guitarMemory: Memory = {
      id: 'guitar-1',
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
    };
    set((state) => ({
      guitarCompleted: true,
      livedExperience: { ...state.livedExperience, guitar: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, guitar: 0.95 },
      memories: [guitarMemory, ...state.memories.filter((m) => m.id !== 'guitar-1')],
      showGuitarModal: false,
      demoStep: '11_FULL_VIBRANCE',
      activeTab: 'today'
    }));
  },

  completeRunning: () => {
    set((state) => ({
      runningCompleted: true,
      livedExperience: { ...state.livedExperience, running: 0.95 },
      emotionalResponse: { ...state.emotionalResponse, running: 0.95 }
    }));
  },

  triggerAllActivities: () => {
    get().discoverAspirations();
    get().addPastaMemory();
    get().completeTennis();
    get().addPhotoMemory();
    get().addPotteryMemory();
    get().addGuitarMemory();
    set({
      cookingCompleted: true,
      tennisCompleted: true,
      photographyCompleted: true,
      potteryCompleted: true,
      guitarCompleted: true,
      runningCompleted: true,
      livedExperience: {
        cooking: 1,
        tennis: 1,
        photography: 1,
        pottery: 1,
        guitar: 1,
        running: 1,
        stargazing: 1
      },
      emotionalResponse: {
        cooking: 1,
        tennis: 1,
        photography: 1,
        pottery: 1,
        guitar: 1,
        running: 1,
        stargazing: 1
      },
      demoStep: '11_FULL_VIBRANCE',
      activeTab: 'today'
    });
  }
}));
