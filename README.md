# Spirit Island Reference App - Refactored

This React application provides a comprehensive reference for all Spirit Island spirits across all expansions.

## How to Run / Test the App

### Prerequisites
- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)

### Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   - The app will start at `http://localhost:5173` (or another port if 5173 is busy)
   - Vite will display the URL in the terminal

4. **Build for production** (optional):
   ```bash
   npm run build
   ```

### What You'll See

The app will open with:
- A filterable grid of all 37 Spirit Island spirits
- Filters for complexity, expansion, elements, and tokens
- Click any spirit card to see full details including:
  - Special rules
  - Innate powers
  - Starting power cards
  - Requirements to play

### Quick Start (One Command)

If you have npm installed, just run:
```bash
npm install && npm run dev
```

## Refactoring Summary

The original file `spirit-island-spirits (1).jsx` (71KB) has been refactored into three organized files:

### Files Created

1. **spiritData.js** (60KB)
   - Contains all spirit data organized by expansion
   - Pure data export with no UI logic
   - Easy to update with new spirits

2. **components.jsx** (9KB)
   - All reusable React components
   - Components included:
     - `ElementIcon` - Displays element badges
     - `ComplexityBadge` - Shows spirit complexity
     - `TokenBadge` - Token requirement badges
     - `PowerCard` - Starting power card display
     - `RequirementsSection` - Product and token requirements
     - `SpiritDetail` - Full spirit detail modal
     - `SpiritCard` - Spirit preview card
     - `ExpansionSection` - Expansion grouping
     - `TokenLegend` - Token reference guide
     - `Footer` - App footer

3. **App.jsx** (7KB)
   - Main application component
   - State management for filters
   - Filter logic for spirits
   - Renders filtered spirit lists

## Issues Fixed

1. **Broken JSX** - Fixed incomplete filter button code around line 761 of original file
2. **Missing App component structure** - Reconstructed complete App component with all filters
3. **Code organization** - Separated data, UI components, and application logic
4. **Maintainability** - Each file now has a single, clear purpose

## Features

- Filter by complexity (Low, Moderate, High, Very High)
- Filter by expansion
- Filter by element type
- Filter by required tokens
- Detailed spirit information modal
- Responsive design with Tailwind CSS
- All spirits from Base Game through Nature Incarnate

## Usage

Import and render the App component:

```jsx
import App from './App';

// In your root component or index
<App />
```

## Structure Benefits

- **Easier maintenance**: Changes to data, UI, or logic are isolated
- **Better testing**: Components can be tested independently
- **Improved readability**: Each file has a clear purpose
- **Scalability**: Easy to add new spirits or features
- **Reusability**: Components can be used in other projects

## Expansions Included

- Base Game (8 spirits)
- Branch & Claw (2 spirits)
- Promo Pack 1 / Feather & Flame (2 spirits)
- Jagged Earth (10 spirits)
- Promo Pack 2 / Feather & Flame (2 spirits)
- Horizons of Spirit Island (5 spirits)
- Nature Incarnate (8 spirits)

Total: 37 spirits
