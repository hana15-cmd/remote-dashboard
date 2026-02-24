# Dashboard (Remote App) Tests

## Overview
Test suite for the Dashboard MFE application using Vitest and React Testing Library.

## Test Files

### App.test.tsx
Tests for the main App component:
- ✅ Renders dashboard title and description
- ✅ Renders all major components (StatsGrid, SalesTable, ProductDistribution, RecentActivity, KeyMetrics)
- ✅ Verifies correct layout structure

### StatsGrid.test.tsx
Tests for the statistics grid component:
- ✅ Renders all stat cards (Total Revenue, Total Orders, Active Users, Conversion Rate)
- ✅ Displays correct values and trend indicators
- ✅ Verifies grid layout structure

### SalesTable.test.tsx
Tests for the sales table component:
- ✅ Renders table with correct headers
- ✅ Displays customer data, products, amounts, and status badges
- ✅ Verifies table structure

### RecentActivity.test.tsx
Tests for the recent activity component:
- ✅ Renders activity items and timestamps
- ✅ Verifies component structure

## Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Coverage
- 4 test files
- 29 test cases
- Components: App, StatsGrid, SalesTable, RecentActivity, KeyMetrics, ProductDistribution

## Notes
- ResizeObserver is mocked for Recharts compatibility
- All tests use jsdom environment
- Tests verify both functionality and UI structure
