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
      {props.value &&
        props.value.map((img, i) => (
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
  id: '7c92Ly3QahJdFViMgw5sw6',
  title: 'Past Events',
  galleryInformation: [
    {
      fields: {
        year: 2022,
        theme:
          '2022 Theme - Ut tincidunt est sed ligula placerat tristique. Morbi dignissim lorem ac suscipit rhoncus. Praesent imperdiet magna at orci congue, at sollicitudin odio scelerisque. Integer pellentesque pharetra arcu, id ultrices turpis cursus id. Aenean vulputate maximus sapien sit amet aliquet.',
        images: [
          {
            fields: {
              title: 'falco',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/3TKuEUjH0m4nQfMfbFsjrP/4fabb089bcb3cc0d828a82ae18997c3a/Falco.png',
                details: {
                  size: 291766,
                  image: {
                    width: 493,
                    height: 490,
                  },
                },
                fileName: 'Falco.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'zouhair',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/1G75EAE2bVrOwVdPWiApoy/b0ffccf2eef03dc9fa0140633a09785a/Zouhair.png',
                details: {
                  size: 151423,
                  image: {
                    width: 290,
                    height: 290,
                  },
                },
                fileName: 'Zouhair.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'maaike',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/3pklJGxVC7xDgHAI54b8sD/87595d881e06111324af55210d373a63/Maaike.png',
                details: {
                  size: 325928,
                  image: {
                    width: 498,
                    height: 374,
                  },
                },
                fileName: 'Maaike.png',
                contentType: 'image/png',
              },
            },
          },
        ],
        description:
          '2022 Desc - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros vitae nisi mollis cursus eu sed odio. Mauris condimentum dapibus sem, eget luctus tellus bibendum eu. Nam et bibendum lacus, a vulputate dolor. Donec malesuada libero sed placerat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      },
    },
    {
      fields: {
        year: 2023,
        theme:
          '2023 Theme - Ut tincidunt est sed ligula placerat tristique. Morbi dignissim lorem ac suscipit rhoncus. Praesent imperdiet magna at orci congue, at sollicitudin odio scelerisque. Integer pellentesque pharetra arcu, id ultrices turpis cursus id. Aenean vulputate maximus sapien sit amet aliquet.',
        images: [
          {
            fields: {
              title: 'martin',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/6FZ474ytZmPEwtzJkji0uV/197515a3e4752ad6d60cf1b20b972507/Martin.png',
                details: {
                  size: 155826,
                  image: {
                    width: 309,
                    height: 309,
                  },
                },
                fileName: 'Martin.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'noa',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/3fDgHpGkoHZgWX6uer3ATz/38740d3ca22efa0389abd671a97b9c83/Noa.png',
                details: {
                  size: 195482,
                  image: {
                    width: 427,
                    height: 320,
                  },
                },
                fileName: 'Noa.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'ryan',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/1vVvNFwPkSDris3v7q3Ha0/136f7b50cab2b3b2c7380f1250f4e107/Ryan.png',
                details: {
                  size: 263438,
                  image: {
                    width: 391,
                    height: 391,
                  },
                },
                fileName: 'Ryan.png',
                contentType: 'image/png',
              },
            },
          },
        ],
        description: '2023 Desc - ho ho ho merryyyyyy x-masss',
      },
    },
    {
      fields: {
        year: 2024,
        theme:
          '2024 Theme - Ut tincidunt est sed ligula placerat tristique. Morbi dignissim lorem ac suscipit rhoncus. Praesent imperdiet magna at orci congue, at sollicitudin odio scelerisque. Integer pellentesque pharetra arcu, id ultrices turpis cursus id. Aenean vulputate maximus sapien sit amet aliquet.',
        images: [
          {
            fields: {
              title: 'falco',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/3TKuEUjH0m4nQfMfbFsjrP/4fabb089bcb3cc0d828a82ae18997c3a/Falco.png',
                details: {
                  size: 291766,
                  image: {
                    width: 493,
                    height: 490,
                  },
                },
                fileName: 'Falco.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'zouhair',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/1G75EAE2bVrOwVdPWiApoy/b0ffccf2eef03dc9fa0140633a09785a/Zouhair.png',
                details: {
                  size: 151423,
                  image: {
                    width: 290,
                    height: 290,
                  },
                },
                fileName: 'Zouhair.png',
                contentType: 'image/png',
              },
            },
          },
          {
            fields: {
              title: 'maaike',
              file: {
                url: '//images.ctfassets.net/0djs73ab5qdl/3pklJGxVC7xDgHAI54b8sD/87595d881e06111324af55210d373a63/Maaike.png',
                details: {
                  size: 325928,
                  image: {
                    width: 498,
                    height: 374,
                  },
                },
                fileName: 'Maaike.png',
                contentType: 'image/png',
              },
            },
          },
        ],
        description:
          '2024 Desc - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros vitae nisi mollis cursus eu sed odio. Mauris condimentum dapibus sem, eget luctus tellus bibendum eu. Nam et bibendum lacus, a vulputate dolor. Donec malesuada libero sed placerat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      },
    },
  ],
  sectionName: 'pastEventsSection',
};

describe('PastEventsSection', () => {
  it('renders title, and tab menu', () => {
    render(<PastEventsSection data={mockData} />);
    expect(screen.getByText('Past Events')).toBeInTheDocument();
    expect(screen.getByTestId('tabmenu')).toBeInTheDocument();
    expect(screen.getByTestId('tab-2022')).toBeInTheDocument();
    expect(screen.getByTestId('tab-2023')).toBeInTheDocument();
    expect(screen.getByTestId('tab-2024')).toBeInTheDocument();
  });

  it('should render the correct information for the default year (2024)', () => {
    render(<PastEventsSection data={mockData} />);
    // By default, activeIndex is 2 (2024)
    expect(screen.getByTestId('galleria-mock')).toBeInTheDocument();
    expect(screen.getByText(/2024 Desc/)).toBeInTheDocument();
    expect(screen.getByText(/2024 Theme/)).toBeInTheDocument();
  });

  it('should render the correct information for 2023 if its selected from the tabmenu', () => {
    render(<PastEventsSection data={mockData} />);
    // Switch to 2023 tab
    fireEvent.click(screen.getByTestId('tab-2023'));
    expect(screen.getByText(/2023 Desc/)).toBeInTheDocument();
    expect(screen.getByText(/2023 Theme/)).toBeInTheDocument();
  });

  it('should render the correct information for 2022 if its selected from the tabmenu', () => {
    render(<PastEventsSection data={mockData} />);
    // Switch to 2022 tab
    fireEvent.click(screen.getByTestId('tab-2022'));
    expect(screen.getByText(/2022 Desc/)).toBeInTheDocument();
    expect(screen.getByText(/2022 Theme/)).toBeInTheDocument();
  });
});
