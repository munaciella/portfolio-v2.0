import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import AnimatedText from '@/components/AnimatedText';

jest.mock('@/components/AnimatedText', () => {
  return () => <div>Mocked AnimatedText</div>;
});

describe('HomePage', () => {
  it('renders the profile component', () => {
    render(<HomePage />);
    const profileComponent = screen.getByTestId('profile-component');
    expect(profileComponent).toBeInTheDocument();
  });

  it('renders the animated text component', () => {
    render(<HomePage />);
    const animatedText = screen.getByText('Mocked AnimatedText');
    expect(animatedText).toBeInTheDocument();
  });

  it('renders the resume download link', () => {
    render(<HomePage />);
    const resumeLink = screen.getByRole('link', { name: /Resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', '/Francesco_Vurchio-CV.pdf');
  });

  it('renders the "Hire Me" button', () => {
    render(<HomePage />);
    const hireMeLink = screen.getByRole('link', { name: /Hire Me/i });
    expect(hireMeLink).toBeInTheDocument();
  });

  it('renders the "Contact Me" link', () => {
    render(<HomePage />);
    const contactLink = screen.getByRole('link', { name: /Contact Me/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute(
      'href',
      'mailto:francesco.vurchio82@gmail.com'
    );
  });

  it('renders the profile picture', () => {
    render(<HomePage />);
    const profileImage = screen.getByAltText(/Image of developer/i);
    expect(profileImage).toBeInTheDocument();
  });

  it('renders the HireMe component', () => {
    render(<HomePage />);
    const hireMeSection = screen.getByTestId('hire-me');
    expect(hireMeSection).toBeInTheDocument();
  });
});
