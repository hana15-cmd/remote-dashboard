import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecentActivity from '../components/RecentActivity';

describe('RecentActivity', () => {
  it('should render the component title', () => {
    render(<RecentActivity />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });

  it('should render activity items', () => {
    render(<RecentActivity />);
    expect(screen.getByText('New order received')).toBeInTheDocument();
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText('Payment processed')).toBeInTheDocument();
  });

  it('should render timestamps', () => {
    render(<RecentActivity />);
    expect(screen.getByText('2 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('15 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
  });

  it('should have list structure', () => {
    const { container } = render(<RecentActivity />);
    expect(container.querySelector('.space-y-4')).toBeInTheDocument();
  });
});
