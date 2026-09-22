export type UserRole = 'member' | 'admin';

export type AuthMode = 'signin' | 'signup';

export type Language = 'en' | 'am';

export interface ServiceFeature {
  id: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  iconName: 'Users' | 'Church' | 'HandHeart' | 'Calendar' | 'Heart' | 'BookOpen';
  details: {
    badge: string;
    summary: string;
    highlights: string[];
    actionLabel: string;
  };
}

export interface ChurchPillar {
  id: string;
  title: string;
  titleAm: string;
  iconName: 'Sparkles' | 'HeartHandshake' | 'Sprout' | 'Building2';
}

export interface AuthState {
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
  rememberMe: boolean;
  role: UserRole;
  isSubmitting: boolean;
  isAuthenticated: boolean;
  user?: {
    name: string;
    email: string;
    role: UserRole;
  };
}
