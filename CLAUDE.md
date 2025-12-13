# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React + TypeScript + Tailwind CSS template built with Vite. It includes a complete, production-ready UI with four pages (Home, About, Services, Contact), responsive navigation, footer, and a blue-purple gradient design theme.

## Essential Commands

```bash
# Development
npm run dev                  # Start Vite dev server (default: http://localhost:5173)

# Type Checking
npm run type-check           # Run TypeScript compiler without emitting files

# Linting
npm run lint                 # Run ESLint on TypeScript files

# Build
npm run build                # Type check and create production build in dist/ folder
npm run preview              # Preview production build locally
```

## Architecture

### Tech Stack
- **React 19** - Latest React with TypeScript support
- **Vite 6** - Next-generation frontend build tool with HMR
- **TypeScript 5.7** - Static type checking with strict mode
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **ESLint 9** - Code linting with TypeScript support

### Application Structure
- Entry point: `index.html` → `src/main.tsx` → `src/App.tsx`
- `App.tsx` contains the main layout structure with Header, Footer, and routing logic
- `AppRoutes` component centralizes all route definitions using `useRoutes` hook
- All routes wrapped in persistent layout (Header + Footer remain across navigation)

### Routing Structure
Four pages are configured in `src/App.tsx`:
- `/` - Home page with hero, features, stats, and CTAs
- `/about` - About page with mission, tech stack, values, and team
- `/services` - Services showcase with 6 service cards
- `/contact` - Contact page with form and contact information

Route definitions use declarative objects passed to `useRoutes`:
```typescript
const routes = useRoutes([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
]);
```

### Component Organization
All components follow a barrel export pattern:
- **Structure**: `[ComponentName].tsx` + `index.ts` in same directory
- **Components**: `src/app/components/[component-name]/`
- **Pages**: `src/app/pages/[page-name]/`
- Barrel exports enable clean imports: `import Header from "./app/components/header"`

**Layout Components:**
- `Header`: Sticky navigation with logo, nav links, mobile menu, active route highlighting
- `Footer`: Multi-column footer with brand info, quick links, resources, social icons

**Page Components:**
- `Home`: Multi-section landing with hero, features, stats, CTAs
- `About`: Mission statement, tech stack grid, values cards, team profiles with images
- `Services`: 6 service cards with icons, features, color-coded themes
- `Contact`: Two-column layout with contact info and functional form

### Design System
**Color Theme**: Blue-purple gradient (`from-blue-500/600 to-purple-600`)
- Primary gradient used in: buttons, logos, hero text, stats section
- Color-coded service cards: blue, purple, pink, green, indigo, yellow

**Dark Mode**: Tailwind dark mode classes throughout
- Uses `dark:` prefix for dark mode variants
- Applied to text, backgrounds, borders

**Responsive Design**: Mobile-first breakpoints
- Mobile menu toggle in Header for small screens
- Grid layouts adjust: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Responsive spacing and typography

### TypeScript Configuration
- `tsconfig.json` - Main config with strict mode, React JSX support
- `tsconfig.node.json` - For Vite config files (vite.config.ts)
- `src/vite-env.d.ts` - Vite type definitions

### Styling Architecture
- `src/index.css` - Tailwind directives (@tailwind base/components/utilities) + root CSS variables
- `src/App.css` - Page container flexbox layout for sticky footer
- `tailwind.config.js` - Content paths for all source files
- `postcss.config.js` - Tailwind + Autoprefixer

### Adding New Routes
1. Create page component: `src/app/pages/[page-name]/[PageName].tsx`
2. Create barrel export: `src/app/pages/[page-name]/index.ts` with `export { default } from "./PageName"`
3. Import in `src/App.tsx`: `import PageName from "./app/pages/page-name"`
4. Add to routes array in `AppRoutes`: `{ path: "/page-name", element: <PageName /> }`
5. Add navigation link in `Header.tsx` navLinks array
6. Add footer link in `Footer.tsx` if needed

### State Management
Currently uses React hooks (useState) for local component state:
- Header: `isMenuOpen` for mobile menu toggle
- Contact: `formData` for form inputs
No global state management library included - add Redux/Zustand if needed

### Form Handling
Contact form (src/app/pages/contact/Contact.tsx:6):
- Controlled inputs with useState
- Form validation via HTML5 required attributes
- onSubmit handler prevents default, logs data, shows alert, resets form
- No backend integration - implement API call in handleSubmit as needed

### File Extensions
- `.tsx` - React components with JSX
- `.ts` - TypeScript without JSX (barrel exports, utils)
- `.css` - Stylesheets
- `.js` - Config files (tailwind.config.js, postcss.config.js, eslint.config.js)
