import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Dashboard App', () => {
  it('should render the dashboard title', () => {
    render(<App />);
    expect(screen.getByText('Dashboard MFE')).toBeInTheDocument();
  });

  it('should render the dashboard description', () => {
    render(<App />);
    expect(screen.getByText('Real-time metrics and analytics')).toBeInTheDocument();
  });

  it('should render StatsGrid component', () => {
    render(<App />);
    // StatsGrid renders stats cards
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
  });

  it('should render SalesTable component', () => {
    render(<App />);
    expect(screen.getByText('Monthly Sales')).toBeInTheDocument();
  });

  it('should render ProductDistribution component', () => {
    render(<App />);
    expect(screen.getByText('Product Distribution')).toBeInTheDocument();
  });

  it('should render RecentActivity component', () => {
    render(<App />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });

  it('should render KeyMetrics component', () => {
    render(<App />);
    expect(screen.getByText('Key Metrics')).toBeInTheDocument();
  });

  it('should have correct layout structure', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.p-6')).toBeInTheDocument();
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});
