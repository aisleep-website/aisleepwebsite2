export interface Language {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface TokenomicsData {
  label: string;
  percentage: number;
  color: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}