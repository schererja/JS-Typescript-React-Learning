# JS-Typescript-React-Learning

A comprehensive learning journey through modern JavaScript, TypeScript, and React development.

## Progress Overview

### Week 1: React Countries Dashboard

Building a progressive countries dashboard application across 6 days, improving complexity and features with each iteration.

#### Day 1-2: Foundation & Core Features

- REST API integration with REST Countries API
- Component-based architecture
- TypeScript types and models
- Display countries in a table format
- Search and filter functionality
- Sorting capabilities

#### Day 3-4: Performance & Optimization

- React.memo for preventing unnecessary re-renders
- useMemo for expensive calculations (sorting, filtering, pagination)
- useCallback to stabilize function references
- Derived state vs stored state patterns
- Clean pagination logic without state-reset bugs
- Advanced sorting and filtering with memoization

#### Day 5: Advanced Features

- Additional enhancements to table functionality
- Further optimization iterations

#### Day 6: UX Polish & Error Handling (In Progress)

- **Loading States**: Skeleton components matching table layout
- **Error Handling**: Try/catch with ErrorState component and retry button
- **Planned Features**:
  - Offline mode detection with banner
  - Multi-word search with highlighting
  - Keyboard navigation (Enter/Space for sorting)
  - ARIA attributes for accessibility
  - Responsive design for mobile
  - Row hover states and alternating backgrounds
  - Enhanced pagination UI

## Project Structure

Each day contains a separate React project iteration with:

- `src/components/` - Modular React components
- `src/pages/` - Page-level components
- `src/services/` - API and business logic
- `src/models/` - TypeScript types and interfaces
- `src/utils/` - Utility functions
- `src/hooks/` - Custom React hooks

## Tech Stack

- **Language**: TypeScript
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS
- **Linting**: ESLint

## Running a Project

Each day's project can be run independently:

```bash
cd week-01/day-0X/react-countries
npm install
npm run dev
```
