// Portfolio item types
export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Motion Graphics' | 'Videography';
  thumbnail: string;
  videoUrl: string;
  description: string;
}

// Social link types
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  description: string;
}

// Welcome text in different languages
export interface WelcomeText {
  text: string;
  lang: string;
}
