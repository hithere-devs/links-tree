# Azhar Mahmood - Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my experience as a Full Stack Developer and DevOps Engineer, featuring my projects, skills, and work experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **TypeScript**: Built with TypeScript for better type safety
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Optimized for search engines
- **Dark Theme**: Elegant dark theme design
- **Interactive Components**: Custom tabs, animations, and hover effects

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Sharp** - Image optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [...slug]/         # Dynamic company experience pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components (Radix UI)
│   ├── blog-header.tsx   # Blog header component
│   ├── company-card.tsx  # Company experience card
│   ├── custom-tabs.tsx   # Custom tab component
│   ├── footer.tsx        # Footer component
│   ├── hero-section.tsx  # Hero section component
│   └── nav.tsx           # Navigation component
├── data/                 # Centralized data files
│   ├── companies.ts      # Company information
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   └── social-links.ts   # Social media links
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hithere-devs/links-tree.git
   cd links-tree
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Adding New Companies
Edit `src/data/companies.ts` to add new company experiences:

```typescript
export const companies: Company[] = [
  {
    name: 'Your Company',
    role: 'Your Role',
    logo: yourLogo,
    slug: 'your-company-slug',
  },
  // ... existing companies
];
```

### Adding New Projects
Edit `src/data/projects.ts` to add new projects:

```typescript
export const projectsData: ProjectsData = {
  featured: [
    {
      title: 'Your Project',
      description: 'Project description',
      link: 'https://your-project.com',
      tag: 'Development',
    },
  ],
  // ... existing projects
};
```

### Adding New Skills
Edit `src/data/skills.ts` to add new skills:

```typescript
export const skillsData: SkillsData = {
  top: [
    {
      title: 'Your Skill',
      image: 'https://img.shields.io/badge/your-skill-badge',
    },
  ],
  // ... existing skills
};
```

### Updating Social Links
Edit `src/data/social-links.ts` to update social media links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'Your Platform',
    url: 'https://your-profile.com',
    icon: YourIcon,
  },
  // ... existing links
];
```

## 🎨 Design System

### Colors
- Primary: Dark theme with gray-900 backgrounds
- Accent: White text with gray-400 for secondary text
- Hover: Opacity changes and smooth transitions

### Typography
- Headings: Bold, large text for hierarchy
- Body: Clean, readable text
- Links: Underlined with custom styling

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Custom styled buttons with icons
- **Tabs**: Custom tab component with smooth transitions
- **Navigation**: Clean navigation with social links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with Sharp
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Static site generation for better performance
- **Font Optimization**: Optimized font loading
- **Bundle Analysis**: Optimized bundle sizes

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Functional components with TypeScript interfaces

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 About Me

**Azhar Mahmood** - Full Stack Developer & DevOps Engineer

- **Specializations**: React, Node.js, Spring Boot, Cloud Technologies
- **Experience**: Associate Backend Developer at Reachinbox.ai
- **Skills**: Full-stack development, DevOps, Cloud infrastructure
- **Location**: Available for remote opportunities

## 📞 Contact

- **Portfolio**: [hitheredevs.com](https://hitheredevs.com)
- **LinkedIn**: [linkedin.com/in/hithere-devs](https://linkedin.com/in/hithere-devs)
- **GitHub**: [github.com/hithere-devs](https://github.com/hithere-devs)
- **Twitter**: [@hithere_devs](https://x.com/hithere_devs)
- **Email**: Available through [Calendly](https://calendly.com/mywritingfrenzy/30min)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
