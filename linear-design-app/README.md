# Linear Design System App

A modern web application built with React and TypeScript, implementing a comprehensive design system inspired by Linear's UI.

## Features

- **Dark theme** with carefully crafted LCH color palette
- **Responsive sidebar navigation** with collapsible functionality
- **Reusable component library** (Button, Navigation, Topbar, Sidebar, Badge)
- **Project management interface** with card-based layout
- **Design system showcase** demonstrating all components
- **Smooth transitions and interactions** (150ms ease timing)
- **Mobile-responsive** breakpoints (640px, 1024px)
- **Custom scrollbar styling** matching the design system

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Variables** - Design token management
- **LCH Colors** - Modern color space for consistent colors

## Design System

### Color Tokens

- `--color-bg-primary`: Main background
- `--color-bg-secondary`: Secondary background
- `--color-bg-elevated`: Elevated surfaces (cards, modals)
- `--color-text-primary`: Primary text
- `--color-text-secondary`: Secondary text
- `--color-text-tertiary`: Tertiary text
- `--color-border-primary`: Primary borders
- `--color-interactive-primary`: Interactive elements

### Typography

- Font family: Inter Variable, SF Pro Display, system fonts
- Base font size: 14px
- Font weights: 400 (regular), 450 (medium), 500 (semibold), 600 (bold)
- Letter spacing: -0.00666667em

### Components

#### Button
Variants: `default`, `outline`, `ghost`
Sizes: `small`, `medium`, `large`
Shapes: `default`, `pill`

#### Navigation
Vertical navigation menu with icon support, active states, and count badges.

#### Topbar
Sticky header with title and action buttons (39px height).

#### Sidebar
229px wide collapsible sidebar with overflow handling.

#### Badge
Visual indicators with variants: `default`, `primary`, `secondary`.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Button.css
│   ├── Badge.tsx
│   ├── Badge.css
│   ├── Navigation.tsx
│   ├── Navigation.css
│   ├── Sidebar.tsx
│   ├── Sidebar.css
│   ├── Topbar.tsx
│   └── Topbar.css
├── App.tsx
├── App.css
├── index.css (Design System CSS Variables)
└── main.tsx
```

## Design Specifications

- **Layout**: Sidebar-content structure with topbar
- **Grid pattern**: 16px base grid
- **Spacing unit**: 8px
- **Color space**: LCH (Lightness, Chroma, Hue)
- **Interaction timing**: 150ms with ease easing
- **Shadow system**: 2 levels (subtle, border/outline)
- **Responsive breakpoints**: 640px (mobile), 1024px (tablet)

## Browser Support

Modern browsers with support for:
- CSS Variables
- LCH color space
- Flexbox and Grid
- ES6+

## License

MIT
