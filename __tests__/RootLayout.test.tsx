import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((message) => {
    if (message.includes('Warning: validateDOMNesting')) return;
    console.warn(message);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

jest.mock('next/head', () => {
  return function MockHead({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

jest.mock('@/components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('@/components/Footer', () => () => <div data-testid="footer" />);
jest.mock('@/components/TransitionEffect', () => () => (
  <div data-testid="transition-effect" />
));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('RootLayout', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.title = '';
  });

  it('renders the Navbar', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('renders the TransitionEffect', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );
    const transitionEffect = screen.getByTestId('transition-effect');
    expect(transitionEffect).toBeInTheDocument();
  });

  it('sets the meta description correctly', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );
    const meta = document.querySelector('meta[name="description"]');
    expect(meta).toHaveAttribute(
      'content',
      'A portfolio website for Francesco showcasing skills, projects, and experience.'
    );
  });

  it('sets dark mode based on system preferences', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );

    const htmlElement = document.documentElement;
    expect(htmlElement.classList.contains('dark')).toBe(true);
  });
});
