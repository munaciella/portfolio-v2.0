import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { motion } from 'framer-motion';
import Skills from '@/components/Skills';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}));

describe('Skills Component', () => {
  it('renders the title correctly', () => {
    render(<Skills />);
    const title = screen.getByText(/Skills/i);
    expect(title).toBeInTheDocument();
  });

  it('renders all skills with icons', () => {
    render(<Skills />);
    const skillElements = screen.getAllByRole('img');
    expect(skillElements.length).toBe(10);
  });

  it('displays skill names', () => {
    render(<Skills />);
    const skillNames = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJS', 'AWS', 'Java', 'GitHub'];
    skillNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('applies hover effect on skill card', () => {
    render(<Skills />);
    const skillCard = screen.getByText('HTML').closest('div');
    expect(skillCard).toHaveClass('bg-slate-100');
  });
});