# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Customize Your Content

Open `src/config/site.ts` and update:

#### Your Information
```typescript
export const siteConfig = {
  name: 'Your Name - Portfolio',
  motto: 'Your motto here',
  about: {
    paragraphs: [
      'Tell visitors about yourself...',
      'Your skills and experience...',
      'Your creative approach...',
    ],
  },
};
```

#### Your Social Links
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://instagram.com/YOUR_USERNAME', // ← Change this
    description: 'Follow my visual journey',
  },
  // Update all other links...
];
```

#### Your Portfolio Items
```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Motion Graphics', // or 'Videography'
    thumbnail: '/your-image.jpg', // Add image to /public folder
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO',
    description: 'Project description',
  },
  // Add more projects...
];
```

### 4. Add Your Video Thumbnails (Optional)

1. Save your thumbnail images in the `/public` folder
2. Update the `thumbnail` field in your portfolio items
3. Example: `thumbnail: '/project1-thumb.jpg'`

Or keep the auto-generated placeholder thumbnails!

### 5. Deploy to Vercel

```bash
pnpx vercel
```

Follow the prompts, and your site will be live in minutes!

## 📚 Need More Help?

- **Full Documentation**: See [README.md](README.md)
- **Customization Guide**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Project Details**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## 🎯 File Structure

```
src/config/site.ts  ← Edit this file for all content
src/app/page.tsx    ← Main page (rarely needs changes)
src/components/     ← UI components (for advanced customization)
public/             ← Add your images here
```

## ⚡ Quick Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production build locally
pnpm lint         # Check code quality
```

## 🎨 Quick Style Changes

### Change Background Color

Edit `src/app/globals.css`:
```css
:root {
  --background: #000000; /* Your color here */
  --foreground: #ffffff;
}
```

### Change Site Title

Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
};
```

## ✅ Checklist Before Deploy

- [ ] Updated name and motto
- [ ] Added your about text
- [ ] Updated all social media links
- [ ] Added portfolio items
- [ ] Changed site title and description
- [ ] Tested on mobile
- [ ] All links work

## 🆘 Having Issues?

1. **Port Already in Use?**
   ```bash
   # Kill the process and restart
   pnpm dev
   ```

2. **Changes Not Showing?**
   - Save all files (Ctrl+S)
   - Wait for "Compiled successfully"
   - Refresh browser (Ctrl+R or F5)

3. **Build Errors?**
   ```bash
   # Clean install
   Remove-Item node_modules -Recurse -Force
   Remove-Item pnpm-lock.yaml
   pnpm install
   ```

## 🎉 You're Ready!

Your portfolio is ready to showcase your work. Just add your content and deploy!

**Happy creating! 🎬**
