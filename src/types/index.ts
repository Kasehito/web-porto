// A single project link with label, url, and optional icon type
export interface ProjectLink {
  label: string;
  url: string;
  type?: 'youtube' | 'live' | 'github' | 'figma' | 'behance' | 'instagram' | 'other' | 'linkedin' | 'champion' | 'pinterest'; // Optional icon type for styling
}

export type PortfolioCategory = 'Motion Graphics' | 'Videography' | 'Web Design' | 'Graphic Design' | 'UI/UX Design' | 'Mobile App Design' | 'Other';

// Portfolio item types
export interface PortfolioItem {
  id: number;
  title: string;
  categories: PortfolioCategory[]; // Array, bisa 1 atau lebih kategori
  thumbnail: string;
  videoUrl?: string;       // YouTube / video link (optional)
  liveUrl?: string;        // Live demo URL for web projects (optional)
  embedUrl?: string;       // Custom embed URL, e.g. CodePen, Figma (optional)
  links?: ProjectLink[];   // Additional / extra  (optional, unlimited)
  description: string;
  about?: string;          // Long description for detail page
  tools?: string[];        // Tools used e.g. ['After Effects', 'Premiere Pro']
  year?: string;           // e.g. '2024'
  client?: string;         // Client name (optional)
}

// Social link types
export interface SocialLink {
  name: string;
  icon: 'instagram' | 'youtube' | 'whatsapp' | 'email' | 'linkedin' | 'github' | 'behance' | 'other' | 'pinterest';
  url: string;
  description: string;
}

// Welcome text in different languages
export interface WelcomeText {
  text: string;
  lang: string;
}

// Experience item types
export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  type: 'work' | 'freelance' | 'project' | 'internship';
}
