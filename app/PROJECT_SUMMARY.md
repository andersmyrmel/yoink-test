# Design System Web App

A modern web application implementing a comprehensive design system based on detailed specifications.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components (CSS-in-JS)
- **Font**: Inter (Google Fonts)

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── Badge.tsx          # Badge component
│   │   ├── Button.tsx         # Button with variants (primary, secondary, ghost)
│   │   ├── Divider.tsx        # Divider component
│   │   ├── Icons.tsx          # SVG icon components
│   │   ├── Layout.tsx         # Layout components (Sidebar, Topbar, etc.)
│   │   └── Navigation.tsx     # Navigation menu components
│   ├── theme/
│   │   ├── tokens.ts          # Design tokens (colors, typography, spacing)
│   │   └── GlobalStyles.ts    # Global CSS styles
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Application entry point
├── package.json
└── index.html
```

## Design System Features

### Layout
- **Sidebar**: 276px wide navigation panel
- **Topbar**: 49px high action bar
- **Responsive grid**: 3-column layout for content cards

### Colors
- Semantic tokens for backgrounds, text, borders, and interactive elements
- Primary accent: `rgb(38, 109, 240)` (blue)
- Neutral palette with subtle grays

### Typography
- **Font**: Inter (weights: 400, 500, 600)
- **Sizes**: 10px, 12px, 14px, 16px
- **Line heights**: 15px, 16px, 20px

### Spacing
- **Base unit**: 4px
- **Scale**: 1px, 2px, 4px, 6px, 8px, 10px, 12px, 16px, 24px, 48px

### Components

#### Button
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `small`, `medium`, `large`
- Hover states with transitions

#### Badge
- Compact display for meta information
- Consistent padding and styling

#### Navigation
- Sidebar navigation items with icons
- Active state indication
- Hover effects

#### Icons
- SVG icons: Home, Search, Plus, Settings, File, List, Filter, More
- 14x14px default size

## Running the Application

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

## Development

The application is fully typed with TypeScript and uses strict mode for type checking. All components are built with styled-components for scoped styling and theming support.

### Key Files
- `src/theme/tokens.ts` - All design tokens in one place
- `src/components/Button.tsx` - Example of variant-based component design
- `src/App.tsx` - Sample implementation showing all components in use

## Features Demonstrated

1. **Sidebar Navigation** - Multi-section navigation with icons
2. **Topbar Actions** - Filter, sort, and action buttons
3. **Content Grid** - Responsive 3-column card layout
4. **Component Library** - Reusable Button, Badge, Navigation components
5. **Design Tokens** - Centralized theming system
6. **TypeScript** - Full type safety across the application
