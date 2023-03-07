import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home', () => {
  it('renders a Welcome', () => {
    render(<Home />);

    const welcome = screen.getByText('Test');

    expect(welcome).toBeInTheDocument();
  });
});
