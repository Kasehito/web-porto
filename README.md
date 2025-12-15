# Motion Graphics & Videography Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Framer Motion. Features smooth scroll animations, multi-language welcome text, and a clean black-and-white theme with Poppins font.

## 🚀 Features

- **Smooth Scroll Animations**: Beautiful animations triggered on scroll using Framer Motion and Intersection Observer
- **Multi-Language Welcome**: Animated welcome text cycling through 10+ languages
- **Three Main Sections**:
  - **Home**: About me, motto, and animated welcome text
  - **Portfolio/Gallery**: Filterable showcase of motion graphics and videography work
  - **Contact**: Social media links and contact form
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Easy to Customize**: Centralized configuration in `src/config/site.ts`
- **Type-Safe**: Full TypeScript support
- **Modern Stack**: Next.js 16, React 19, Framer Motion

## 📋 Prerequisites

- Node.js 18+ installed
- pnpm package manager

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

## 🎨 Customization

### Update Your Information

Edit `src/config/site.ts` to customize:

1. **Site Configuration**:
   - Change the site name and motto
   - Update your about paragraphs

2. **Portfolio Items**:
   - Replace placeholder items with your actual work
   - Update titles, descriptions, categories
   - Add your video URLs (YouTube, Vimeo, etc.)
   - Add thumbnail images to `/public` folder

3. **Social Links**:
   - Update all social media URLs with your profiles
   - Change email address
   - Customize icons and descriptions

4. **Navigation** (if needed):
   - Modify `navItems` array

### Add Your Video Thumbnails

1. Add your video thumbnail images to the `/public` folder
2. Update the `thumbnail` field in `portfolioItems` to match your image filenames

Example:
```typescript
{
  id: 1,
  title: 'My Amazing Project',
  thumbnail: '/my-project-thumb.jpg', // Place my-project-thumb.jpg in /public folder
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  // ...
}
```

## 🏃 Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

Build the project:

```bash
pnpm build
```

Run the production build:

```bash
pnpm start
```

## 🎯 Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with Poppins font
│   ├── page.tsx      # Main page
│   └── globals.css   # Global styles
├── components/
│   ├── sections/     # Main page sections
│   │   ├── HomeSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/           # Reusable UI components
│       ├── Navbar.tsx
│       ├── SectionWrapper.tsx
│       └── AnimatedWelcome.tsx
├── config/
│   └── site.ts       # ⭐ Main configuration file
└── types/
    └── index.ts      # TypeScript type definitions
```

## 🔧 Key Components

### SectionWrapper
Reusable component that handles scroll-triggered animations for sections.

### AnimatedWelcome
Cycles through welcome messages in different languages with smooth transitions.

### Navbar
Fixed navigation bar with smooth scroll links.

### Portfolio Section
Filterable gallery with categories (Motion Graphics, Videography).

### Contact Section
Social media links and contact form.

## 🎨 Styling

- **Theme**: Black background (#000000) with white text
- **Font**: Poppins (weights: 300, 400, 500, 600, 700)
- **Framework**: Tailwind CSS
- **Animations**: Framer Motion

## 📝 Customizing Styles

To change colors or styles, edit:
- `src/app/globals.css` for global styles
- Individual component files for component-specific styles
- Tailwind classes directly in components

## 🚀 Deployment

Deploy easily to Vercel:

```bash
pnpx vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Replace Placeholder Content**: Update all URLs, images, and text in `src/config/site.ts`
2. **Add Real Thumbnails**: Replace emoji placeholders with actual video thumbnails
3. **Test Responsiveness**: Check on mobile, tablet, and desktop
4. **Optimize Images**: Use Next.js Image component for better performance
5. **Update Metadata**: Change title and description in `src/app/layout.tsx`

## 🤝 Support

If you need help customizing this portfolio, check the Next.js and Framer Motion documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
