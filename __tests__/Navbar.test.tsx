import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname, useRouter } from 'next/navigation';
import useThemeSwitcher from '../src/hooks/useThemeSwitcher';
import Navbar from '@/components/Navbar';

jest.mock('../src/hooks/useThemeSwitcher', () => jest.fn());
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn() })),
    usePathname: jest.fn(),
  }));
jest.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Navbar', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useThemeSwitcher as jest.Mock).mockReturnValue(['light', jest.fn()]);
    (usePathname as jest.Mock).mockReturnValue('/');
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it('renders correctly with all links and logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Articles')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });

  it('toggles the theme on button click', () => {
    const setModeMock = jest.fn();
    (useThemeSwitcher as jest.Mock).mockReturnValue(['light', setModeMock]);

    render(<Navbar />);
    const themeToggleButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(themeToggleButton);

    expect(setModeMock).toHaveBeenCalledWith('dark');
  });
});