import TransitionEffect from '@/components/TransitionEffect';
import { render, screen } from '@testing-library/react';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: ({ children, ...props }: any) => {
      return <div {...props} data-testid={`motion-div-${props['data-testid']}`}>{children}</div>;
    },
  },
}));

describe('TransitionEffect Component', () => {
  it('renders three motion divs with correct classes', () => {
    render(<TransitionEffect />);
    
    const divs = screen.getAllByRole('presentation');
    expect(divs.length).toBe(3);

    expect(divs[0]).toHaveClass('bg-primary');
    expect(divs[1]).toHaveClass('bg-light');
    expect(divs[2]).toHaveClass('bg-dark');
  });
});