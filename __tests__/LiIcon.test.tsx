import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { motion } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

jest.mock('framer-motion', () => {
  const original = jest.requireActual('framer-motion');
  return {
    ...original,
    useScroll: jest.fn().mockReturnValue({ scrollYProgress: 0.5 }),
  };
});

describe('LiIcon Component', () => {
  test('renders the component with correct structure', () => {
    const mockRef = { current: document.createElement('div') }; 
    const { container } = render(<LiIcon reference={mockRef} />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      'absolute left-0 stroke-dark dark:stroke-light'
    );
  });

  test('renders the SVG with correct structure', () => {
    const mockRef = { current: document.createElement('div') }; 
    const { container } = render(<LiIcon reference={mockRef} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('renders the SVG with correct structure', () => {
    const mockRef = { current: document.createElement('div') }; 
    const { container } = render(<LiIcon reference={mockRef} />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '75');
    expect(svg).toHaveAttribute('height', '75');

    const circles = container.querySelectorAll('circle');
    expect(circles).toHaveLength(3);
  });
});
