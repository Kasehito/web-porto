import { PortfolioItem, SocialLink, WelcomeText } from '@/types';

// Site Configuration
export const siteConfig = {
  name: 'KasehitoWorks',
  motto: 'Creating Visual Stories Through Motion & Light',
  location: 'Indonesia',
  about: {
    paragraphs: [
      "I'm a passionate motion graphics artist and videographer based in Indonesia, dedicated to bringing creative visions to life through dynamic visual storytelling.",
      "With a keen eye for detail and a love for innovative design, I specialize in crafting compelling visual experiences that captivate and inspire audiences.",
    ],
  },
};

// Skills
export const skills = [
  'Motion Graphics',
  'Video Editing',
  'Adobe After Effects',
  'Adobe Premiere Pro',
];

// Education
export const education = [
  {
    degree: 'Software Engineering',
    field: 'Visual Communication Design',
    institution: 'SMK Raden Umar Said Kudus',
    year: '2020 - 2024',
    location: 'Indonesia',
  },
  {
    degree: 'Certificate',
    field: 'Advanced Motion Graphics',
    institution: 'Online Academy',
    year: '2023',
    location: 'Online',
  },
];

// Welcome texts in multiple languages
export const welcomeTexts: WelcomeText[] = [
  { text: 'Welcome', lang: 'English' },
  { text: 'Selamat Datang', lang: 'Indonesian' },
  { text: 'Bienvenue', lang: 'French' },
  { text: 'Bienvenido', lang: 'Spanish' },
  { text: 'Willkommen', lang: 'German' },
  { text: 'Benvenuto', lang: 'Italian' },
  { text: 'ようこそ', lang: 'Japanese' },
  { text: '환영합니다', lang: 'Korean' },
  { text: '欢迎', lang: 'Chinese' },
  { text: 'Bem-vindo', lang: 'Portuguese' },
  { text: 'Добро пожаловать', lang: 'Russian' },
];

// Portfolio items - Update these with your actual work
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Motion Graphics Reel',
    category: 'Motion Graphics',
    thumbnail: '/placeholder-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Dynamic motion graphics showcase',
  },
  {
    id: 2,
    title: 'Brand Commercial',
    category: 'Videography',
    thumbnail: '/placeholder-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Commercial videography project',
  },
  {
    id: 3,
    title: 'Music Video',
    category: 'Videography',
    thumbnail: '/placeholder-3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Creative music video production',
  },
  {
    id: 4,
    title: 'Logo Animation',
    category: 'Motion Graphics',
    thumbnail: '/placeholder-4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Professional logo animation',
  },
  {
    id: 5,
    title: 'Documentary Film',
    category: 'Videography',
    thumbnail: '/placeholder-5.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Documentary storytelling',
  },
  {
    id: 6,
    title: 'Motion Design',
    category: 'Motion Graphics',
    thumbnail: '/placeholder-6.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Abstract motion design piece',
  },
];

// Social media and contact links - Update with your actual profiles
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://instagram.com/yourusername',
    description: 'Follow my visual journey',
  },
  {
    name: 'YouTube',
    icon: '▶️',
    url: 'https://youtube.com/@yourusername',
    description: 'Watch my video portfolio',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com/in/yourusername',
    description: 'Connect professionally',
  },
  {
    name: 'Vimeo',
    icon: '🎬',
    url: 'https://vimeo.com/yourusername',
    description: 'High-quality video work',
  },
  {
    name: 'Behance',
    icon: '🎨',
    url: 'https://behance.net/yourusername',
    description: 'Creative portfolio showcase',
  },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:your.email@example.com',
    description: 'Get in touch directly',
  },
];

// Navigation items
export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

// Portfolio categories
export const portfolioCategories = ['All', 'Motion Graphics', 'Videography'] as const;
