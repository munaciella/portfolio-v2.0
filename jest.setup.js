import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
    ...jest.requireActual('framer-motion'),
    motion: {
      div: jest.fn().mockImplementation(({ children }) => children),
    },
  }));
