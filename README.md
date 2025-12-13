# React Vite Tailwind Template

A modern, production-ready React template built with Vite, TypeScript, and Tailwind CSS. Features a beautiful, responsive UI with multiple pages and components ready to use.

## ✨ Features

- ⚡ **Vite** - Lightning-fast development with Hot Module Replacement
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📘 **TypeScript** - Type safety and enhanced developer experience
- 🛣️ **React Router** - Client-side routing with multiple pages
- 🌓 **Dark Mode Support** - Built-in dark mode styling
- 📱 **Responsive Design** - Mobile-first responsive components
- ✅ **ESLint** - Code quality and consistency checks

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start Vite development server
npm run type-check   # Run TypeScript compiler without emitting files
npm run lint         # Run ESLint on TypeScript files
```

### Production

```bash
npm run build        # Type check and create production build
npm run preview      # Preview production build locally
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/        # Navigation header with mobile menu
│   │   └── footer/        # Footer with links and social icons
│   └── pages/
│       ├── home/          # Landing page with hero and features
│       ├── about/         # About page with team section
│       ├── services/      # Services showcase page
│       └── contact/       # Contact page with form
├── App.tsx                # Main app component with routing
├── App.css                # Global styles
├── index.css              # Tailwind directives
└── main.tsx               # Application entry point
```

## 🎨 Pages Included

### Home Page
- Hero section with gradient text
- Feature cards with icons
- Statistics section
- Call-to-action sections

### About Page
- Company mission and values
- Technology stack showcase
- Team member profiles with images

### Services Page
- Service cards with detailed features
- Multiple service categories
- Interactive hover effects

### Contact Page
- Contact form with validation
- Contact information cards
- Social media links
- Responsive two-column layout

## 🎨 Customization

### Colors
The template uses a blue-purple gradient theme. To customize colors, update the Tailwind classes in components or modify `tailwind.config.js`.

### Components
All components follow a barrel export pattern with TypeScript:
- Component file: `ComponentName.tsx`
- Index file: `index.ts`

### Adding New Pages
1. Create a new folder in `src/app/pages/your-page/`
2. Create `YourPage.tsx` and `index.ts`
3. Import and add the route in `src/App.tsx`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript 5.7** - Type-safe JavaScript
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **ESLint 9** - Code linting

## 📚 Documentation

For more detailed information, see [CLAUDE.md](./CLAUDE.md)

## 📝 License

This project is open source and available under the MIT License.
