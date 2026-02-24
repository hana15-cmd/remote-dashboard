import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SalesTable from '../components/SalesTable';

describe('SalesTable', () => {
  it('should render the table title', () => {
    render(<SalesTable />);
    expect(screen.getByText('Monthly Sales')).toBeInTheDocument();
  });

  it('should render table headers', () => {
    render(<SalesTable />);
    expect(screen.getByText('Month')).toBeInTheDocument();
    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(screen.getByText('Expenses')).toBeInTheDocument();
    expect(screen.getByText('Profit')).toBeInTheDocument();
  });

  it('should render month names', () => {
    render(<SalesTable />);
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
    expect(screen.getByText('Mar')).toBeInTheDocument();
  });

  it('should render sales data', () => {
    render(<SalesTable />);
    expect(screen.getByText('$4000')).toBeInTheDocument();
    expect(screen.getByText('$3000')).toBeInTheDocument();
  });

  it('should render expense data', () => {
    render(<SalesTable />);
    expect(screen.getByText('$2400')).toBeInTheDocument();
    expect(screen.getByText('$1398')).toBeInTheDocument();
  });

  it('should render profit data', () => {
    render(<SalesTable />);
    expect(screen.getByText('$1600')).toBeInTheDocument();
    expect(screen.getByText('$1602')).toBeInTheDocument();
  });

  it('should have table structure', () => {
    const { container } = render(<SalesTable />);
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
  });
});
