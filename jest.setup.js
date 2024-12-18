import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => children),
  },
}));

const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('React does not recognize')) return;
  originalError(...args);
};
