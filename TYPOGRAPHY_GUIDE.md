# Typography & Element Hierarchy Guide

This document explains the typography and visual hierarchy system used throughout the portfolio website.

## 📐 Design Principles

### Visual Hierarchy
The site follows a clear visual hierarchy to guide users through content:

1. **Primary**: Main headings (H1) - Largest, boldest, most attention-grabbing
2. **Secondary**: Section headings (H2) - Large, establishes section context
3. **Tertiary**: Subsection headings (H3) - Medium, organizes content blocks
4. **Body**: Paragraphs and descriptions - Readable, comfortable size
5. **Supporting**: Labels, captions, metadata - Smallest, subtle

## 🎨 Typography Scale

### Headings

#### H1 - Hero/Welcome Text
- **Size**: 6rem → 8rem (96px - 128px on desktop)
- **Weight**: 700 (Bold)
- **Usage**: Animated welcome messages
- **Location**: HomeSection
```css
text-6xl md:text-7xl lg:text-8xl font-bold
```

#### H2 - Section Headings
- **Size**: 4rem → 6rem (64px - 96px on desktop)
- **Weight**: 700 (Bold)
- **Usage**: Main section titles (About Me, Portfolio, Let's Connect)
- **Location**: All main sections
```css
text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
```

#### H3 - Card/Item Headings
- **Size**: 1.5rem → 2.5rem (24px - 40px on desktop)
- **Weight**: 600 (Semibold)
- **Usage**: Portfolio item titles, social link names, form heading
- **Location**: Portfolio cards, contact links
```css
text-xl md:text-2xl font-semibold
text-3xl md:text-4xl font-semibold (for forms)
```

### Body Text

#### Large Body - Motto/Intro Text
- **Size**: 2rem → 4rem (32px - 64px on desktop)
- **Weight**: 300 (Light)
- **Style**: Italic
- **Usage**: Personal motto, introductory statements
```css
text-2xl md:text-3xl lg:text-4xl font-light italic
```

#### Medium Body - Section Descriptions
- **Size**: 1.25rem → 1.5rem (20px - 24px)
- **Weight**: 300 (Light)
- **Usage**: Section subtitles, descriptions
```css
text-xl md:text-2xl font-light
```

#### Regular Body - Main Content
- **Size**: 1.125rem → 1.25rem (18px - 20px)
- **Weight**: 300 (Light)
- **Usage**: About paragraphs, main content
```css
text-lg md:text-xl font-light
```

#### Small Body - Card Descriptions
- **Size**: 0.875rem → 1rem (14px - 16px)
- **Weight**: 300 (Light)
- **Usage**: Portfolio descriptions, social link descriptions
```css
text-sm md:text-base font-light
```

### Supporting Text

#### Labels
- **Size**: 1rem → 1.125rem (16px - 18px)
- **Weight**: 300 (Light)
- **Usage**: Form labels
```css
text-base md:text-lg font-light
```

#### Metadata/Tags
- **Size**: 0.75rem (12px)
- **Weight**: 500 (Medium)
- **Style**: Uppercase, increased tracking
- **Usage**: Category tags, language labels
```css
text-xs uppercase tracking-wider font-medium
```

#### Captions
- **Size**: 0.75rem → 0.875rem (12px - 14px)
- **Weight**: 300 (Light)
- **Usage**: Scroll indicator, footer text
```css
text-sm md:text-base font-light
```

## 🎯 Element Hierarchy

### Navigation (Navbar)
```
Level 1: Logo/Brand - text-2xl md:text-3xl font-bold
Level 2: Menu Items - text-base md:text-lg font-light
```

### Home Section
```
Level 1: Welcome Text (H1) - text-6xl md:text-7xl lg:text-8xl
Level 2: Language Label - text-base md:text-lg uppercase
Level 3: Motto - text-2xl md:text-3xl lg:text-4xl italic
Level 4: "About Me" Heading (H2) - text-4xl md:text-5xl lg:text-6xl
Level 5: About Paragraphs - text-lg md:text-xl
Level 6: Scroll Indicator - text-sm md:text-base
```

### Portfolio Section
```
Level 1: Section Title (H2) - text-4xl md:text-5xl lg:text-6xl
Level 2: Section Subtitle - text-xl md:text-2xl
Level 3: Filter Buttons - text-sm md:text-base uppercase
Level 4: Project Title (H3) - text-xl md:text-2xl
Level 5: Project Description - text-sm md:text-base
Level 6: Category Tag - text-xs uppercase
```

### Contact Section
```
Level 1: Section Title (H2) - text-4xl md:text-5xl lg:text-6xl
Level 2: Section Subtitle - text-xl md:text-2xl
Level 3: Social Link Name (H3) - text-xl md:text-2xl
Level 4: Link Description - text-sm md:text-base
Level 5: Form Heading (H3) - text-3xl md:text-4xl
Level 6: Form Labels - text-base md:text-lg
Level 7: Footer Text - text-sm md:text-base
```

## 🔤 Font Weights

- **300 (Light)**: Body text, descriptions, supporting content
- **400 (Regular)**: Not used (for clean, light aesthetic)
- **500 (Medium)**: Buttons, tags, emphasized metadata
- **600 (Semibold)**: Card headings, important items
- **700 (Bold)**: Main headings, hero text, navigation brand

## 📏 Spacing

### Vertical Spacing (Between Elements)
- **Large Sections**: space-y-16 (4rem / 64px)
- **Medium Sections**: space-y-8 (2rem / 32px)
- **Small Groups**: space-y-4 to space-y-6 (1rem - 1.5rem)
- **Tight Groups**: space-y-2 to space-y-3 (0.5rem - 0.75rem)

### Padding
- **Sections**: px-4 (responsive horizontal padding)
- **Cards**: p-6 md:p-8 (1.5rem - 2rem)
- **Form Elements**: px-5 py-4 (1.25rem / 1rem)
- **Buttons**: px-8 py-3 (2rem / 0.75rem)

### Margins
- **Between Sections**: mb-16 to mb-20 (4rem - 5rem)
- **Below Headings**: mb-4 to mb-8 (1rem - 2rem)
- **Before Footer**: mt-20 (5rem)

## 🎨 Color Hierarchy

### Text Colors
- **Primary Text**: White (#FFFFFF) - Main headings and content
- **Secondary Text**: Gray-200 (#E5E7EB) - Emphasized body text, motto
- **Tertiary Text**: Gray-300 (#D1D5DC) - Regular body text
- **Quaternary Text**: Gray-400 (#99A1AF) - Descriptions, subtitles
- **Metadata Text**: Gray-500 (#6A7282) - Tags, captions
- **Footer Text**: Gray-600 - Subtle footer information

### Interactive States
- **Hover**: text-gray-300 (lighter on hover)
- **Active**: White background with black text (buttons)

## 📱 Responsive Behavior

### Mobile First Approach
All text starts at mobile-friendly sizes and scales up:

```css
/* Mobile → Tablet → Desktop */
text-4xl → md:text-5xl → lg:text-6xl
```

### Breakpoints
- **Mobile**: < 768px (default)
- **Tablet**: md: 768px+
- **Desktop**: lg: 1024px+

## ✨ Visual Enhancements

### Font Smoothing
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### Letter Spacing
- **Tight**: tracking-tight (-0.025em) - Large headings
- **Wide**: tracking-wide (0.025em) - Body text, buttons
- **Wider**: tracking-wider (0.05em) - Uppercase labels, tags

### Line Height
- **Headings**: line-height: 1.2 (tight for impact)
- **Body Text**: leading-relaxed (1.625) - Comfortable reading
- **Motto**: leading-relaxed - Extra breathing room

## 🎯 Best Practices

### Do's ✅
- Use H1 only once per page (welcome text)
- Use H2 for main sections
- Use H3 for subsections and cards
- Maintain consistent spacing throughout
- Scale text proportionally on different screen sizes
- Use appropriate font weights for hierarchy

### Don'ts ❌
- Don't skip heading levels (H1 → H3)
- Don't use too many font sizes
- Don't use regular (400) weight - stick to light/semibold/bold
- Don't make body text smaller than 14px on mobile
- Don't forget to test on actual devices

## 🔧 Customization

To maintain hierarchy when customizing:

1. **Keep the Scale**: Maintain size relationships
2. **Preserve Weights**: Light (300) for body, Bold (700) for headings
3. **Consistent Spacing**: Use the defined spacing scale
4. **Test Responsiveness**: Check all breakpoints
5. **Accessibility**: Ensure sufficient contrast and readable sizes

## 📐 Visual Hierarchy Checklist

- [ ] Most important element is largest
- [ ] Clear size difference between levels (at least 25%)
- [ ] Consistent weights across similar elements
- [ ] Appropriate line height for readability
- [ ] Sufficient spacing between sections
- [ ] Proper heading levels (H1, H2, H3)
- [ ] Mobile and desktop scaling tested
- [ ] Color contrast meets accessibility standards

---

This hierarchy system ensures a clear, professional, and easy-to-scan layout that guides users through your portfolio effectively.
