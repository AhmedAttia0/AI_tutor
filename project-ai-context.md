# AI Tutor Project Context

## Project Overview

**Cognixel.AI** is a modern AI-powered education platform that provides intelligent tutoring services. The application features a React-based frontend with a clean, professional design focused on user experience and accessibility.

### What This App Is

- AI Education Platform for personalized learning
- Dashboard interface for tracking progress and managing sessions
- Interactive learning modes (Stuck Point, Deep Explain, Summarize)
- Real-time AI tutoring capabilities
- Progress analytics and achievement tracking

### Tech Stack

- **Frontend**: React 19.2.4 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM 7.14.0
- **Icons**: React Icons, Heroicons
- **UI Components**: Flowbite React (optional enhancement)
- **Build Tool**: Vite with React plugin
- **Package Manager**: npm

### Architecture Philosophy

- **Component-based**: Modular, reusable components
- **Separation of Concerns**: Clear separation between layout, sections, and UI components
- **Scalable Structure**: Organized folder structure for easy maintenance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimized with Vite's fast build and React's efficient rendering

### Component Philosophy

- **Atomic Design**: Small, focused components that can be composed
- **Props-based**: Flexible components accepting configuration via props
- **Consistent Styling**: Unified design tokens and Tailwind classes
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Styling Philosophy

- **Utility-first**: Tailwind CSS for rapid development
- **Design System**: Consistent colors, spacing, typography
- **Responsive**: Mobile-first with progressive enhancement
- **Performance**: Minimal CSS with Tailwind's purging

## Final Folder Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, etc.)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── pages/               # Page components
├── assets/              # Static assets (images, icons)
│   └── frames/          # Design mockups and frames
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles
```

### Why This Structure?

- **Scalability**: Easy to add new pages and components
- **Maintainability**: Clear separation of concerns
- **Reusability**: Components can be shared across pages
- **Developer Experience**: Intuitive organization for team collaboration

### How Features Are Organized

- **Layout Components**: Shared across multiple pages (Navbar, Footer)
- **Section Components**: Page-specific content blocks
- **UI Components**: Generic, reusable elements
- **Pages**: Route-level components that compose sections

## Routing & Layout System

### Current Routes

- `/` - Home/Dashboard page (default route)

### Layout Pattern

```jsx
// pages/Home.jsx
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
// ... other sections

const Home = () => (
  <div className="min-h-screen bg-slate-50">
    <Navbar />
    <Hero />
    {/* Other sections */}
  </div>
);
```

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Compose with layout and section components

## Reusable Patterns

### Section Container Pattern

```jsx
<section className="py-16">
  <div className="mx-auto max-w-7xl px-6">{/* Section content */}</div>
</section>
```

### Card Pattern

```jsx
<div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
  {/* Card content */}
</div>
```

### Grid Pattern

```jsx
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>
```

### Button Patterns

- Primary: `bg-blue-600 text-white hover:bg-blue-700`
- Secondary: `border border-slate-200 text-slate-700 hover:bg-slate-50`

## Dashboard Page Architecture

### Component Breakdown

- **Navbar**: Sticky navigation with logo, menu, notifications, avatar
- **Hero**: Gradient background with CTA buttons and stats
- **LearningModes**: Three learning mode cards
- **DashboardGrid**: Two-column layout with progress and sessions
- **Features**: Four feature cards in grid
- **Footer**: Multi-column footer with links and social

### State Management

- Currently minimal state (mobile menu toggle)
- Future: User session data, progress tracking, AI chat state

### Data Flow

- Static content for now
- Future: API integration for dynamic data
- Props-based component configuration

## Design System Decisions

### Colors

- **Primary**: Blue gradient (`from-blue-900 via-blue-700 to-blue-500`)
- **Background**: `bg-slate-50`
- **Cards**: `bg-white`
- **Text**: `text-slate-900` (headings), `text-slate-500` (body)
- **Accent**: `text-blue-600` for icons and highlights

### Spacing

- **Container**: `max-w-7xl mx-auto px-6 py-16`
- **Sections**: `py-16` for vertical spacing
- **Components**: `p-8` for padding, `gap-8` for spacing

### Typography

- **Headings**: `text-3xl md:text-4xl` with `font-bold`
- **Body**: `text-lg` for descriptions, `text-sm` for metadata
- **Font**: Inter (via Tailwind default)

### Cards

- **Border Radius**: `rounded-2xl` for main cards
- **Shadow**: `shadow-sm hover:shadow-md`
- **Background**: `bg-white`

### Grid Rules

- **Responsive**: `md:grid-cols-2 lg:grid-cols-3`
- **Gaps**: `gap-8` between items
- **Container**: Max width with horizontal padding

### Responsiveness Rules

- **Mobile-first**: Base styles for mobile, enhanced for larger screens
- **Breakpoints**: `sm:`, `md:`, `lg:` for progressive enhancement
- **Flexbox/Grid**: Flexible layouts that adapt to screen size

## How Future AI Should Work On This Project

### Adding New Pages

1. Create component in `src/pages/`
2. Add route to `src/App.jsx`
3. Use existing layout components
4. Follow section composition pattern

### Creating Components

1. Place in appropriate folder (`layout/`, `sections/`, `ui/`)
2. Use functional components with arrow functions
3. Accept props for configuration
4. Follow existing naming conventions

### Naming Rules

- **Components**: PascalCase (e.g., `HeroSection`, `UserCard`)
- **Files**: PascalCase matching component name
- **Folders**: lowercase with hyphens if needed
- **CSS Classes**: kebab-case in custom classes (rarely needed)

### Styling Rules

- **Tailwind First**: Use Tailwind utilities before custom CSS
- **Design Tokens**: Follow established color/spacing patterns
- **Responsive**: Mobile-first with breakpoint prefixes
- **Consistency**: Match existing component patterns

### DOs and DON'Ts

#### DO:

- Use TypeScript for new components (future migration)
- Follow component composition patterns
- Test components in isolation
- Use semantic HTML elements
- Add proper ARIA labels for accessibility
- Keep components small and focused
- Use existing design tokens
- Follow the established folder structure

#### DON'T:

- Create large, monolithic components
- Use inline styles (except for dynamic values)
- Hardcode colors or spacing values
- Mix different styling approaches
- Create components outside the established folders
- Use deprecated HTML elements
- Skip responsive design
- Ignore accessibility guidelines

### Keeping the Project Consistent

- **Code Reviews**: Check for pattern adherence
- **Design Reviews**: Ensure UI consistency
- **Documentation**: Update this file when patterns change
- **Testing**: Maintain component quality
- **Performance**: Monitor bundle size and runtime performance

---

_This document should be updated whenever the architecture or patterns change. Future AI assistants should read this first before making changes._
