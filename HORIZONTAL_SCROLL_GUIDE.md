# KasehitoWorks - Horizontal Scroll Portfolio

## 🎨 Overview
Modern horizontal scrolling portfolio website for motion graphics and videography work, featuring glassmorphism design and smooth animations.

## ✨ Key Features

### 1. **Horizontal Scroll Layout**
- Seamless horizontal scrolling experience
- Mouse wheel converts vertical scroll to horizontal
- Snap scroll for precise section navigation
- Hidden scrollbar for clean aesthetic
- 5 full-screen sections

### 2. **Sections**
1. **Home** - Welcome, brand name (KasehitoWorks), location (Indonesia), motto, about
2. **Skills** - 10 skills displayed in glass cards (no progress bars)
3. **Education** - Educational background with institution details
4. **Portfolio** - Filterable video gallery (Motion Graphics / Videography)
5. **Contact** - Social media links + contact form

### 3. **Design System**
- **Color Scheme**: Pure black background (#000000) with white text
- **Glassmorphism**: Backdrop blur effects throughout
- **Typography**: Poppins font family (weights 300-700)
- **Text Hierarchy**: 
  - H1: text-3xl md:text-4xl (Brand name)
  - H2: text-xl md:text-2xl (Section headers)
  - Body: text-sm md:text-base
  - Small: text-xs, text-[10px]

### 4. **Animations**
- Framer Motion scroll-triggered animations
- Hover effects on all interactive elements
- Welcome text cycling (11 languages)
- Smooth transitions and micro-interactions
- Animated scroll indicators with arrows

### 5. **Components Structure**
```
src/
├── app/
│   ├── layout.tsx (Updated metadata)
│   ├── page.tsx (Horizontal scroll container)
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── HomeSection.tsx (NEW: Side-by-side layout)
│   │   ├── SkillsSection.tsx (NEW)
│   │   ├── EducationSection.tsx (NEW)
│   │   ├── PortfolioSection.tsx (Updated for horizontal)
│   │   └── ContactSection.tsx (Updated: compact design)
│   └── ui/
│       ├── Navbar.tsx (Updated brand name)
│       ├── AnimatedWelcome.tsx
│       ├── PlaceholderThumbnail.tsx
│       └── SectionWrapper.tsx
├── config/
│   └── site.ts (NEW: skills, education arrays)
└── types/
    └── index.ts
```

### 6. **Configuration (site.ts)**
```typescript
siteConfig: {
  name: 'KasehitoWorks',
  motto: 'Creating Visual Stories Through Motion & Light',
  location: 'Indonesia',
  about: { paragraphs: [...] }
}

skills: [
  'Motion Graphics', 'Video Editing', 'Visual Effects (VFX)',
  '2D/3D Animation', 'Color Grading', 'Adobe After Effects',
  'Adobe Premiere Pro', 'Cinema 4D', 'DaVinci Resolve', 'Storytelling'
]

education: [
  { degree, field, institution, year, location },
  ...
]

navItems: [
  'Home', 'Skills', 'Education', 'Portfolio', 'Contact'
]
```

## 🎯 Design Highlights

### No Overlapping Elements
- Each section is min-w-full (100vw)
- Proper z-index management
- Background decorations positioned absolutely
- Content in relative z-10 containers

### Glassmorphism Effects
- `backdrop-blur-md` + `bg-white/5` for main cards
- `border border-white/10` for subtle outlines
- Hover states increase border opacity to white/30
- Shadow effects with `shadow-white/10`

### Navigation Indicators
- Every section has a scroll hint in bottom-right
- Animated arrow pointing right
- Pill-shaped glass container
- "Scroll" text with uppercase tracking

### Typography Hierarchy
- Brand name prominent but not oversized
- Section headers consistent at text-xl/2xl
- Body text readable at text-sm/base
- No excessively large text that breaks hierarchy
- Proper line-height and letter-spacing

## 🚀 How to Run

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Customization Quick Guide

### Update Brand Name
Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: 'YourName',
  location: 'Your Location',
  motto: 'Your Motto',
  // ...
}
```

### Add/Remove Skills
Edit `src/config/site.ts`:
```typescript
export const skills = [
  'Skill 1',
  'Skill 2',
  // Add more...
]
```

### Update Education
Edit `src/config/site.ts`:
```typescript
export const education = [
  {
    degree: 'Your Degree',
    field: 'Your Field',
    institution: 'Institution Name',
    year: '2020 - 2024',
    location: 'Country',
  },
]
```

### Change Portfolio Items
Edit `src/config/site.ts` - portfolioItems array

### Update Social Links
Edit `src/config/site.ts` - socialLinks array

## 🎨 Color Customization

All colors are centralized in Tailwind classes:
- Background: `bg-black`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Glass: `bg-white/5`, `bg-white/10`
- Borders: `border-white/10`, `border-white/20`

## 📱 Responsive Design

- Mobile: Single column layouts, smaller text
- Tablet: 2 columns where applicable
- Desktop: Full layout with 2-3 columns
- All sections work on all screen sizes

## 🔧 Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Package Manager**: pnpm
- **Font**: Google Fonts (Poppins)

## 📂 Key Files to Edit

1. `src/config/site.ts` - All content
2. `src/app/globals.css` - Global styles
3. `src/components/sections/*` - Section layouts
4. `src/app/layout.tsx` - Metadata

## 🎬 Current Status

✅ Horizontal scroll implemented
✅ All 5 sections created
✅ Glassmorphism design applied
✅ Skills section (no progress bars)
✅ Education section added
✅ Brand name updated to KasehitoWorks
✅ Location (Indonesia) displayed
✅ Navigation updated with all sections
✅ No overlapping elements
✅ Proper text hierarchy
✅ Smooth animations
✅ Mobile responsive

## 🎯 Next Steps (Optional)

- [ ] Replace placeholder thumbnails with real images
- [ ] Connect contact form to backend (Formspree/EmailJS)
- [ ] Add custom domain
- [ ] Deploy to Vercel/Netlify
- [ ] Add loading animations
- [ ] Implement dark mode toggle (optional)
- [ ] Add internationalization (i18n)
- [ ] Performance optimization
- [ ] SEO optimization

---

**Website Name**: KasehitoWorks
**Location**: Indonesia
**Style**: Horizontal Scroll, Glassmorphism, Black & White
**Sections**: 5 (Home, Skills, Education, Portfolio, Contact)
