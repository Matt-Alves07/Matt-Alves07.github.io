import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutContent from './AboutContent';

describe('AboutContent Component', () => {
  it('should render standard block elements representing the developer\'s background', () => {
    // Doesn't pass isHome, so default is false
    render(<AboutContent />);
    
    // Check if one of the main timeline/about blocks exists
    expect(screen.getByText(/With a degree in Information Technology/i)).toBeInTheDocument();
    
    // Check that the conditional lead-text is NOT present
    const leadText = screen.queryByText(/I'm glad for your visit/i);
    expect(leadText).not.toBeInTheDocument();
  });

  it('should render the welcoming lead text paragraph when isHome is true', () => {
    render(<AboutContent isHome={true} />);
    
    // Check that the conditional lead-text IS present
    const leadText = screen.getByText(/I'm glad for your visit/i);
    expect(leadText).toBeInTheDocument();
  });
});
