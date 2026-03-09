import { PortfolioItem, SocialLink, WelcomeText, ExperienceItem } from '@/types';

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
  'Graphic Design',
  'Web Design',
];

// Welcome texts in multiple languages
export const welcomeTexts: WelcomeText[] = [
  { text: 'Welcome', lang: 'English' },
  { text: 'Selamat Datang', lang: 'Indonesian' },
  { text: 'ようこそ', lang: 'Japanese' },
  { text: '환영합니다', lang: 'Korean' },
  { text: '欢迎', lang: 'Chinese' },
  { text: 'مرحباً', lang: 'Arabic' },
  { text: 'ยินดีต้อนรับ', lang: 'Thai' },
  { text: 'CHÀO MỪNG', lang: 'Vietnamese' },
];

// Portfolio items - Update these with your actual work
export const portfolioItems: PortfolioItem[] = [

  {
    id: 1,
    title: 'RANGGAWARSITA',
    categories: ['Motion Graphics'],
    thumbnail: '',
    videoUrl: 'https://youtu.be/dBHlrB9OAwE?si=ukrAg-LVs6uh9SXU',
    description: 'Animasi Petualangan Ranggawarsita Competition 2025',
    about: 'Svahara is a motion graphics project that blends traditional Indonesian aesthetics with modern animation techniques. Created using Adobe After Effects and .',
    tools: ['Adobe After Effects','Adobe Photoshop', 'Adobe Illustrator'],
    year: '2025',
    client: 'Animasi Petualangan Ranggawarsita Competition 2025',
    links: [
      { label: 'Watch on YouTube', url: 'https://youtu.be/dBHlrB9OAwE?si=ukrAg-LVs6uh9SXU', type: 'youtube' },
      { label: 'Instagram', url: 'https://www.instagram.com/tangkaijeruk/', type: 'instagram' },
      { label: '3rd Place Winner', url: 'https://www.instagram.com/p/DPNMiHnku5g/', type: 'champion' },
    ],
  },
  {
    id: 2,
    title: 'RUS Musikal',
    categories: ['Motion Graphics'],
    thumbnail:'',
    description: 'Logo Animation for RUS Musikal Band',
    videoUrl: 'https://youtu.be/aYjr8lNDvcY',
    about: 'Logo Animation for RUS Musikal Band',
    tools: ['Adobe After Effects'],
    year: '2025',
    client: 'RUS Musikal',
    links: [
      { label: 'View on Figma', url: 'https://www.figma.com/design/1juoSaL98bf2UcL7YGF8zk/Untitled?node-id=123-135&t=OeQsTynd9BCW0v0l-1', type: 'figma' },
    ],
  },
  {
    id: 3,
    title: 'Fun Art 20',
    categories: ['Motion Graphics'],
    thumbnail:'',
    description: 'Animation for Fun Art 2025',
    videoUrl: 'https://youtu.be/tvxdrE_W0-c',
    about: 'Animation for Fun Art Festival 2025',
    tools: ['Adobe After Effects'],
    year: '2025',
    client: 'Fun Art Festival 2025',
    links: [
      { label: 'Stinger', url: 'https://youtu.be/f0LatG0j3vg', type: 'youtube' },
      { label: 'Animation', url: 'https://youtu.be/tvxdrE_W0-c', type: 'youtube' },
    ],
  },
    {
    id: 4,
    title: 'Function',
    categories: ['Mobile App Design', 'Web Design', 'UI/UX Design'],
    thumbnail: '/function.png',
    embedUrl:'https://function.lovable.app/',
    description: 'Venue Booking Platform',
    about: 'Function is a venue booking platform that connects event organizers with venue owners, streamlining the booking process and enhancing user experience.',
    tools: ['Figma', 'Visual Studio Code', 'Flutter', 'Python'],
    year: '2025',
    client: 'Function',
    links: [
      { label: 'Mobile', url: 'https://www.figma.com/proto/c4utCSDpa0jHEL7WKVWP0n/Function-UI?node-id=2164-1281&t=U0CASLwrJdUoR7uS-1', type: 'figma' },
      { label: 'Website', url: 'https://www.figma.com/proto/c4utCSDpa0jHEL7WKVWP0n/Function-UI?node-id=164-4&t=U0CASLwrJdUoR7uS-1', type: 'figma' },
      { label: 'View on Github', url: 'https://github.com/Function-Team', type: 'github' },
    ],
  },
    {
    id: 5,
    title: 'Mangan Jawa',
    categories: ['Mobile App Design', 'UI/UX Design'],
    thumbnail: '/manganjawa.png',
    description: 'Food ordering application',
    about: 'Mangan Jawa App is a food ordering application specifically designed for restaurants, with complete features that not only make it easier for customers to place orders, but also help admins manage food stocks efficiently. This application has two types of user accounts, namely: Customer Account: Can be used to view the list of available menus. Allows customers to order food directly through the application. Provides a practical and fast ordering experience, without the need to queue on the spot. Admin Account: Equipped with CRUD (Create, Read, Update, Delete) features to manage food stock data. Admins can add, edit, or delete menus as needed. Monitor food stock availability so that restaurant operations continue to run smoothly. With Mangan Jawa App, restaurant management becomes more organized, and the customer experience in ordering food becomes more comfortable and efficient.',
    tools: ['Figma', 'Visual Studio Code', 'Flutter'],
    year: '2025',
    client: 'School',
    links: [
      { label: 'View on Linkedin', url: 'https://www.linkedin.com/posts/arka-narendra-4288a9280_appdevelopment-flutter-firebase-activity-7303600832472616960-iNv4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiBHZAB-RONQIfGWPqjMXtVADmgrSGb9L8', type: 'linkedin' },
      { label: 'View on Github', url: 'https://github.com/Kasehito/Mangan-Jawa', type: 'github' },
    ],
  },
    {
    id: 6,
    title: 'Svahara',
    categories: ['Motion Graphics'],
    thumbnail: '',
    videoUrl: 'https://youtu.be/qj1plZv0ECk?si=6bzNXYViTHp2HzBn',
    description: 'AMIKOM University Competition',
    about: 'Svahara is a motion graphics project that blends traditional Indonesian aesthetics with modern animation techniques.',
    tools: ['Adobe After Effects', 'Adobe Illustrator'],
    year: '2024',
    client: 'Personal Project',
    links: [
      { label: 'Watch on YouTube', url: 'https://youtu.be/qj1plZv0ECk?si=6bzNXYViTHp2HzBn', type: 'youtube' },
      { label: 'Instagram', url: 'https://www.instagram.com/svahara_/', type: 'instagram' },
    ],
  },
    {
    id: 7,
    title: 'Nusalingo',
    categories: ['UI/UX Design', 'Web Design'],
    thumbnail: '/Showcase.png',
    description: 'Anforcom 2024 UI/UX Competition',
    embedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/vKcfEBlBDFH7tjfGmJrIRx/Anforcom-%7C-Nusalingo?node-id=536-708&scaling=scale-down-width&starting-point-node-id=536%3A708&show-proto-sidebar=1",
    about: 'Nusalingo is a language learning platform designed to help users master local Indonesian languages through interactive lessons, cultural insights, and engaging content.',
    tools: ['Figma'],
    year: '2024',
    client: 'Competition Project',
    links: [
      { label: 'Watch on YouTube', url: 'https://youtu.be/3Fwe_0WoFu4', type: 'youtube' },
      { label: 'View on Figma', url: 'https://www.figma.com/proto/vKcfEBlBDFH7tjfGmJrIRx/Anforcom-%7C-Nusalingo?node-id=536-708&scaling=scale-down&starting-point-node-id=536%3A708', type: 'figma' },
    ],
  },
  {
    id: 8,
    title: 'Eco Create',
    categories: ['Mobile App Design','UI/UX Design'],
    thumbnail:'',
    description: 'GarudaHack 5.0 Competition',
    videoUrl: 'https://youtu.be/ypIZo30ZLhM',
    about: 'Solving trash problem by teaching how to turn it into Hand made craft items.',
    tools: ['Adobe After Effects'],
    year: '2025',
    client: 'GarudaHack 5.0 Competition',
    links: [
      { label: 'View on Youtube', url: 'https://youtu.be/ypIZo30ZLhM', type: 'youtube' },
      { label: 'View the Project', url: 'https://devpost.com/software/eco-create', type: 'other' },
    ],
  },
    {
    id: 9,
    title: 'Travlix',
    categories: ['UI/UX Design', 'Web Design'],
    thumbnail: '/travlix.png',
    description: 'Travel Platform',
    embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/1juoSaL98bf2UcL7YGF8zk/Untitled?node-id=123-135&scaling=scale-down-width&starting-point-node-id=123%3A135',
    about: 'Travlix is a travel planning platform that helps users discover destinations, plan itineraries, and book accommodations seamlessly.',
    tools: ['Figma', 'Adobe Illustrator'],
    year: '2024',
    client: 'Personal Project',
    links: [
      { label: 'View on Figma', url: 'https://www.figma.com/design/1juoSaL98bf2UcL7YGF8zk/Untitled?node-id=123-135&t=OeQsTynd9BCW0v0l-1', type: 'figma' },
    ],
  },
    {
    id: 10,
    title: 'Ethically',
    categories: ['Web Design', 'UI/UX Design'],
    thumbnail: '/ethically.jpeg',
    description: 'OTN 2024 Web Design Competition',
    about: 'Ethically is a digital ethics websitedesigned for teenagers, promoting safe and responsible internet use through engaging content and interactive features.',
    tools: ['Figma','Visual Studio Code','Next.js', 'Adobe Illustrator'],
    year: '2024',
    client: 'OTN 2024 Web Design Competition',
    links: [
      { label: 'Watch on YouTube', url: 'https://youtu.be/3Fwe_0WoFu4', type: 'youtube' },
      { label: 'View on GitHub', url: 'https://github.com/Ethically-App', type: 'github' },
      { label: 'View on Figma', url: 'https://www.figma.com/proto/kDQ8fc4vO5EEUhm7Jgi6ZM/Ethically?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=r1VvTkXcE54Z91Uv-1', type: 'figma' },
    ],
  },
  {
    id: 11,
    title: 'Memorial Video for 19st Gen of SMP AL HIKMAH SURABAYA',
    categories: ['Motion Graphics', 'Videography'],
    thumbnail:'',
    description: 'Memorial Video for 19st Gen of SMP AL HIKMAH SURABAYA',
    videoUrl: 'https://youtu.be/CaNL8p6oJ60',
    about: 'Memorial Video for 19st Gen of SMP AL HIKMAH SURABAYA',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
    year: '2022',
    client: 'SMP Al Hikmah Surabaya',
    links: [
      { label: 'View on Youtube', url: 'https://youtu.be/f0LatG0j3vg', type: 'youtube' },
    ],
  },
  {
    id: 12,
    title: 'Graphic Designs',
    categories: ['Graphic Design'],
    thumbnail:'/wp.jpg',
    embedUrl : 'https://www.pinterest.com/Kasehito/my-design',
    description: 'Working on graphic design projects for various clients. Mostly making feed/poster design for instagram',
    about: 'Graphic Designs for various clients',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
    year: '2022-2024',
    client: 'Various Clients',
    links: [
      { label: 'View on Pinterest', url: 'https://pin.it/3vWp6KFLD', type: 'pinterest' },
    ],
  },
];

// Social media and contact links - Update with your actual profiles
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/royyan.zayd',
    description: 'Follow my visual journey',
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: 'https://youtube.com/@Kasehitoo',
    description: 'Watch my video portfolio',
  },
  {
    name: 'Email',
    icon: 'email',
    url: 'mailto:kasehitoworks@gmail.com',
    description: 'Get in touch directly',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/royyan-ahmad-zaydan/',
    description: 'Connect with me professionally',
  }
];

// Experiences
export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    role: 'Graphic & Web Design Intern',
    company: 'Green Living Support',
    period: 'Sep 2022 - Feb 2023',
    location: 'Surabaya, Indonesia',
    type: 'internship',
    description: 'Manage their social media accounts, create visual content for campaigns, and assist in web design projects to enhance their online presence.',
    achievements: [
      'Delivered and managed design concepts for social media for clients',
      'Redesign company website to improve user experience',
    ],
    technologies: ['Canva', 'WordPress'],
  },
  {
    id: 2,
    role: 'Freelance Video Editor, Graphic & Motion Designer',
    company: 'Self-Employed',
    period: 'Jan 2022 - May 2025',
    location: 'Indonesia',
    type: 'freelance',
    description: 'Providing video editing services, graphic design, and motion graphics for a variety of clients',
    achievements: [
      'Got 20+ projects and 5+ repeated clients',
    ],
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Canva', 'Figma'],
  },
  {
    id: 3,
    role: 'Chief Technology Officer',
    company: 'Function',
    period: 'Nov 2023 - Aug 2025',
    location: 'Surabaya, Indonesia',
    type: 'work',
    description: 'Responsible for designing and developing the platform that connects venue owners with event organizers.',
    achievements: [
      'Planning the system architecture',
      'Leading product development, implementing core features',
      'Ensuring scalability and usability',
      'Collaborated with the team to align technical solutions with business goals and user needs',
    ],
    technologies: ['Visual Studio Code','Figma', 'GitHub', 'Flutter', 'Python'],
  },
  {
    id: 4,
    role: 'Software Developer',
    company: 'PT PLN Indonesia Power',
    period: 'Oct 2025 - Present',
    location: 'Jakarta, Indonesia',
    type: 'internship',
    description: 'Responsible for developing and maintaining software solutions that support the company\'s operations and services. This includes working on web applications, internal tools, and collaborating with cross-functional teams to ensure the delivery of high-quality software products.',
    achievements: [
      'Developed and maintained internal web applications to streamline operations and improve efficiency',
      'Collaborated with cross-functional teams to gather requirements and implement software solutions that meet business needs',
      'Implemented best practices for code quality, testing, and deployment, ensuring reliable and maintainable software products',
      'Documented software development processes and created user guides to facilitate adoption and training',
    ],
    technologies: ['Visual Studio Code', 'Laravel', 'GitLab', 'Figma', 'PHP', 'Excel', 'Word'],
  },
];

// Navigation items
export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

// Portfolio categories
export const portfolioCategories = ['All', 'Motion Graphics', 'Graphic Design', 'Web Design', 'UI/UX Design', 'Mobile App Design'] as const;
