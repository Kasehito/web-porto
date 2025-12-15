# Customization Guide

This guide will walk you through customizing your portfolio website step by step.

## 📝 Step 1: Update Your Information

Open `src/config/site.ts` and update the following:

### Site Configuration
```typescript
export const siteConfig = {
  name: 'Your Name - Portfolio', // Change to your name
  motto: 'Your personal motto here', // Your motto
  about: {
    paragraphs: [
      'First paragraph about you...',
      'Second paragraph about your skills...',
      'Third paragraph about your approach...',
    ],
  },
};
```

## 🎬 Step 2: Add Your Portfolio Items

In the same file (`src/config/site.ts`), update the `portfolioItems` array:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Motion Graphics', // or 'Videography'
    thumbnail: '/your-thumbnail.jpg', // Add image to /public folder
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    description: 'Brief description of your project',
  },
  // Add more projects...
];
```

### Adding Video Thumbnails

1. **Option 1: Use Real Images**
   - Export thumbnail from your video (1280x720 or 1920x1080 recommended)
   - Save as JPG or PNG in the `/public` folder
   - Update `thumbnail: '/your-image-name.jpg'`

2. **Option 2: Keep Placeholders**
   - The site uses automatic placeholder thumbnails
   - Different colors for Motion Graphics (purple/blue) and Videography (orange/red)

## 📱 Step 3: Update Social Media Links

Update the `socialLinks` array in `src/config/site.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://instagram.com/YOUR_USERNAME', // Your Instagram
    description: 'Follow my visual journey',
  },
  {
    name: 'YouTube',
    icon: '▶️',
    url: 'https://youtube.com/@YOUR_CHANNEL', // Your YouTube
    description: 'Watch my video portfolio',
  },
  // Update all links...
];
```

### Changing Icons

You can change the emoji icons to any emoji you like:
- Instagram: 📷 📸 🎥
- YouTube: ▶️ 📺 🎬
- LinkedIn: 💼 👔 🤝
- Email: ✉️ 📧 💌
- Vimeo: 🎬 🎞️ 🎥
- Behance: 🎨 🖌️ ✨

## 🎨 Step 4: Customize Colors (Optional)

### Change Background Color

Edit `src/app/globals.css`:

```css
:root {
  --background: #000000; /* Change this hex code */
  --foreground: #ffffff; /* Change text color */
}
```

### Popular Color Schemes

**Dark Blue:**
```css
--background: #0a0e27;
--foreground: #e0e7ff;
```

**Dark Gray:**
```css
--background: #111111;
--foreground: #f5f5f5;
```

**Navy:**
```css
--background: #001529;
--foreground: #ffffff;
```

## ✏️ Step 5: Update Site Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio", // Browser tab title
  description: "Your custom description here",
};
```

## 🌐 Step 6: Update Welcome Languages (Optional)

To add or remove languages from the animated welcome, edit `src/config/site.ts`:

```typescript
export const welcomeTexts: WelcomeText[] = [
  { text: 'Welcome', lang: 'English' },
  { text: 'Your Language', lang: 'Language Name' },
  // Add or remove languages...
];
```

### Popular Additions

- `{ text: 'مرحبا', lang: 'Arabic' }`
- `{ text: 'Добродошли', lang: 'Serbian' }`
- `{ text: 'Välkommen', lang: 'Swedish' }`
- `{ text: 'Tervetuloa', lang: 'Finnish' }`
- `{ text: 'स्वागत', lang: 'Hindi' }`

## 🖼️ Step 7: Add Favicon

1. Create or download a favicon (icon for browser tab)
2. Replace `src/app/favicon.ico` with your icon
3. Recommended size: 32x32 or 64x64 pixels

## 📧 Step 8: Make Contact Form Functional (Optional)

The contact form is currently static. To make it work:

### Option 1: Use Formspree (Easy)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `ContactSection.tsx`:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Use EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their React integration guide
3. Add the EmailJS SDK to handle form submissions

### Option 3: Build API Route

Create `src/app/api/contact/route.ts` for custom backend handling.

## 🚀 Step 9: Deploy Your Site

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `pnpm build`
5. Publish directory: `.next`

## 🎯 Quick Checklist

- [ ] Update name and motto in `src/config/site.ts`
- [ ] Update about paragraphs
- [ ] Add your portfolio items with video URLs
- [ ] Update all social media links
- [ ] Change email address
- [ ] Add video thumbnails (optional)
- [ ] Test all links
- [ ] Update site metadata in `layout.tsx`
- [ ] Test on mobile devices
- [ ] Deploy to Vercel or Netlify

## 💡 Pro Tips

1. **Video URLs**: Works with YouTube, Vimeo, or any video link
2. **Image Optimization**: Keep thumbnails under 500KB for fast loading
3. **Mobile Testing**: Always check your site on mobile devices
4. **SEO**: Fill in good descriptions for better search engine visibility
5. **Backups**: Keep your original videos and images backed up

## 🆘 Need Help?

- Check the main [README.md](README.md) for installation instructions
- Review Next.js docs: https://nextjs.org/docs
- Review Framer Motion docs: https://www.framer.com/motion/
- Check Tailwind CSS docs: https://tailwindcss.com/docs

## 🎨 Advanced Customization

### Add More Sections

Create a new component in `src/components/sections/` and add it to `src/app/page.tsx`:

```typescript
import YourNewSection from '@/components/sections/YourNewSection';

// Add to the main component
<YourNewSection />
```

### Change Animations

Animations are controlled by Framer Motion. Edit any component to customize:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }} // Starting state
  animate={{ opacity: 1, y: 0 }}   // End state
  transition={{ duration: 0.8 }}    // Animation speed
>
```

### Add More Categories

Edit `src/config/site.ts`:

```typescript
export const portfolioCategories = [
  'All',
  'Motion Graphics',
  'Videography',
  'Animation', // New category
  '3D Work',   // New category
] as const;
```

Then update your portfolio items to use the new categories.
