import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders logo and description', () => {
    render(<Footer />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    const descriptionText = screen.getByText(/Crafting impactful applications and modern solutions/i);
    expect(descriptionText).toBeInTheDocument();
  });

  test('renders Follow Me section with social links', () => {
    render(<Footer />);
    
    const followSection = screen.getByText(/Follow Me/i);
    expect(followSection).toBeInTheDocument();

    const githubLink = screen.getByLabelText(/GitHub/i);
    expect(githubLink).toBeInTheDocument();

    const linkedinLink = screen.getByLabelText(/LinkedIn/i);
    expect(linkedinLink).toBeInTheDocument();
  });

  test('renders the Made With section', () => {
    render(<Footer />);
    const madeWithText = screen.getByText(/Made with/i);
    expect(madeWithText).toBeInTheDocument();

    const avatarImage = screen.getByAltText("Francesco's Image");
    expect(avatarImage).toBeInTheDocument();
  });

  test('renders legal section with privacy and cookie links', () => {
    render(<Footer />);
    const privacyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyLink).toBeInTheDocument();

    const cookieLink = screen.getByText(/Cookie Policy/i);
    expect(cookieLink).toBeInTheDocument();
  });

  test('should display the current year in the copyright section', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`${currentYear}`, 'i'));
    expect(copyrightText).toBeInTheDocument();
  });
});