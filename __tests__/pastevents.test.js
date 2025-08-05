import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PastEventsSection from '../src/app/ui/PastEventsSection';

// Mock next/dynamic to just return the component itself
jest.mock('next/dynamic', () => (importFn, options) => {
  // Call the importFn to get the Galleria mock and return it
  importFn();
  const Galleria = require('primereact/galleria').Galleria;
  return Galleria;
});

// Mock primereact/galleria
jest.mock('primereact/galleria', () => ({
  Galleria: (props) => (
    <div data-testid="galleria-mock">
      {props.value && props.value.map((img, i) => (
        <img key={i} src={img.imageSrc} alt={img.alt} />
      ))}
    </div>
  ),
}));

// Mock primereact/tabmenu
jest.mock('primereact/tabmenu', () => ({
  TabMenu: ({ model, activeIndex, onTabChange, className, pt }) => (
    <nav data-testid="tabmenu" className={className}>
      {model.map((item, idx) => (
        <button
          key={item.label}
          data-testid={`tab-${item.label}`}
          className={activeIndex === idx ? 'active' : ''}
          onClick={() => onTabChange({ index: idx })}
        >
          {item.label}
        </button>
      ))}
    </nav>
  ),
}));

const mockData = {
  icon: 'icon.png',
  title: 'Past Events',
  galleryInformation: [
    {
      year: '2022',
      description: 'Description 2022',
      theme: 'Theme 2022',
      images: [
        { imageSrc: 'img1.jpg', alt: 'img1' },
        { imageSrc: 'img2.jpg', alt: 'img2' },
      ],
    },
    {
      year: '2023',
      description: 'Description 2023',
      theme: 'Theme 2023',
      images: [
        { imageSrc: 'img3.jpg', alt: 'img3' },
      ],
    },
  ],
};

describe('PastEventsSection', () => {
  it('renders title, and tab menu', () => {
    render(<PastEventsSection data={mockData} />);
    expect(screen.getByText('Past Events')).toBeInTheDocument();
    expect(screen.getByTestId('tabmenu')).toBeInTheDocument();
    expect(screen.getByTestId('tab-2022')).toBeInTheDocument();
    expect(screen.getByTestId('tab-2023')).toBeInTheDocument();
  });

  it('renders image and correct texts for selected year', () => {
    render(<PastEventsSection data={mockData} />);
    // By default, activeIndex is 1 (2023)
    expect(screen.getByTestId('galleria-mock')).toBeInTheDocument();
    expect(screen.getByText('Description 2023')).toBeInTheDocument();
    expect(screen.getByText('Theme 2023')).toBeInTheDocument();
    expect(screen.getByAltText('img3')).toBeInTheDocument();
  });

  it('switches tab and updates gallery, description, and theme', () => {
    render(<PastEventsSection data={mockData} />);
    // Switch to 2022 tab
    fireEvent.click(screen.getByTestId('tab-2022'));
    expect(screen.getByText('Description 2022')).toBeInTheDocument();
    expect(screen.getByText('Theme 2022')).toBeInTheDocument();
    expect(screen.getByAltText('img1')).toBeInTheDocument();
    expect(screen.getByAltText('img2')).toBeInTheDocument();
  });
});