# Drizzle Studio Web App

A modern data grid web application built with React, TypeScript, and TailwindCSS, inspired by Drizzle Studio's design system.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **react-data-grid** - High-performance data grid
- **Lucide React** - Icon library

## Design System

This application follows a carefully crafted design system:

### Colors
- Background: `rgb(17, 17, 17)` - Dark charcoal
- Foreground: `rgb(209, 209, 209)` - Light gray text
- Muted foreground: `rgb(140, 140, 143)` - Dimmed text
- Border: `rgb(48, 48, 48)` - Subtle borders

### Typography
- Base font: `system-ui, sans-serif`
- Base size: 14px
- Scale: Linear progression (10px, 12px, 14px, 16px, 18px)
- Headings: 18px, semibold, tight line-height

### Spacing
- Base unit: 4px
- Common values: 8px (micro), 12px (small), 16px (medium)

### Components
- Button border radius: 6px
- Transition duration: 150ms (cubic-bezier)
- Row height: 32px

## Features

- Dark theme UI
- Responsive data grid with 50+ rows
- Sidebar navigation with action buttons
- Hover states and smooth transitions
- Professional design matching Drizzle Studio

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The application will be available at `http://localhost:5173/`

## Project Structure

```
drizzle-studio-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx       # Left sidebar with action buttons
│   │   └── DataGrid.tsx      # Main data grid component
│   ├── App.tsx               # Main application layout
│   ├── App.css               # Custom styles and grid theme
│   └── index.css             # Global styles with Tailwind
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── vite.config.ts            # Vite configuration
```

## Customization

### Adding More Columns

Edit `src/components/DataGrid.tsx` and modify the `columns` array:

```typescript
const columns: Column<Row>[] = [
  { key: 'id', name: 'ID', width: 32, frozen: true },
  { key: 'newColumn', name: 'New Column', width: 200 },
  // ... more columns
];
```

### Changing Theme Colors

Update `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      background: 'rgb(17, 17, 17)',
      foreground: 'rgb(209, 209, 209)',
      // ... more colors
    },
  },
}
```

## License

MIT
