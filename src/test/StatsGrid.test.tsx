import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsGrid from '../components/StatsGrid';

describe('StatsGrid', () => {
  it('should render all stat cards', () => {
    render(<StatsGrid />);
    
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
  });

  it('should display revenue value', () => {
    render(<StatsGrid />);
    expect(screen.getByText('$45,231')).toBeInTheDocument();
  });

  it('should display orders value', () => {
    render(<StatsGrid />);
    expect(screen.getByText('1,234')).toBeInTheDocument();
  });

  it('should display users value', () => {
    render(<StatsGrid />);
    expect(screen.getByText('2,451')).toBeInTheDocument();
  });

  it('should display conversion rate value', () => {
    render(<StatsGrid />);
    expect(screen.getByText('3.2%')).toBeInTheDocument();
  });

  it('should display trend indicators', () => {
    render(<StatsGrid />);
    expect(screen.getByText(/12% from last month/i)).toBeInTheDocument();
    expect(screen.getByText(/↑ 5% from last month/i)).toBeInTheDocument();
    expect(screen.getByText(/3% from last month/i)).toBeInTheDocument();
  });

  it('should render in a grid layout', () => {
    const { container } = render(<StatsGrid />);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });
});
