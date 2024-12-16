import { renderHook, act } from '@testing-library/react';
import useThemeSwitcher from '../src/hooks/useThemeSwitcher';

describe('useThemeSwitcher', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('should initialize with dark mode if no preference is saved', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    expect(result.current[0]).toBe('dark');
  });

  it('should initialize with saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useThemeSwitcher());
    expect(result.current[0]).toBe('dark');
  });

  it('should update theme when setMode is called', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    const [, setMode] = result.current;

    act(() => {
      setMode('dark');
    });

    expect(result.current[0]).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should respond to system preference changes', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    act(() => {
      window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(
        new Event('change')
      );
    });

    expect(result.current[0]).toBe('dark');

    act(() => {
      window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(
        new Event('change')
      );
    });

    expect(result.current[0]).toBe('dark');
  });

  it('should add/remove dark mode class on documentElement', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    const [, setMode] = result.current;

    act(() => {
      setMode('dark');
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);

    act(() => {
      setMode('light');
    });

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});