export type NavigationTab = 'today' | 'life' | 'journal' | 'explore';

export type DemoStep =
  | '1_EMPTY_STATE'
  | '2_CONVERSATION'
  | '3_TODAY_SELECTION'
  | '4_COOKING_EXPERIENCE'
  | '5_MEMORY_CAPTURE'
  | '6_UPDATED_SURFACE'
  | '7_TENNIS_PROTECTED'
  | '8_PHOTOGRAPHY_CHALLENGE'
  | '9_MEMORIES_VIEW'
  | '10_FINAL_HERO_STATE'
  | '11_FULL_VIBRANCE';

export type PersonalityMode = 'quiet' | 'social' | 'structured';
export type MoodMode = 'good' | 'okay' | 'low' | 'overwhelmed';

export type ActivityType =
  | 'cooking'
  | 'tennis'
  | 'photography'
  | 'pottery'
  | 'guitar'
  | 'running'
  | 'stargazing';

export interface Memory {
  id: string;
  activity: ActivityType | string;
  title: string;
  emotion: string;
  quote: string;
  timestamp: string;
  image: string;
  tag: string;
  palette: {
    primary: string;   // e.g. rgba(230, 138, 0, 0.4)
    secondary: string; // e.g. rgba(245, 230, 210, 0.5)
  };
}

export interface ActivityItem {
  id: string;
  activity: ActivityType;
  title: string;
  duration: string;
  subtitle: string;
  status: 'available' | 'protected' | 'completed';
  timeSlot?: string;
  color: string;
}
