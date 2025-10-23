import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqSection from '../src/app/ui/FaqSection';

const faqMockData = {
  faqEntries: [
    {
      fields: {
        header: 'What is the purpose of this FAQ?',
        answer: 'This FAQ provides answers to common questions.',
      },
    },
    {
      fields: {
        header: 'How do I register?',
        answer:
          "You can register by clicking the 'Sign up' button on the homepage.",
      },
    },
    {
      fields: {
        header: 'Can I cancel my registration?',
        answer: 'Yes, you can cancel your registration by contacting support.',
      },
    },
  ],
};

describe('FaqSection Component', () => {
  test('renders all AccordionTab headers with the according header texts', () => {
    render(<FaqSection data={faqMockData} />);
    const headers = screen.getAllByRole('button');
    expect(headers.length).toBeGreaterThanOrEqual(1);
    const headerTexts = [
      'What is the purpose of this FAQ?',
      'How do I register?',
      'Can I cancel my registration?',
    ];

    headers.forEach((header, i) => {
      expect(header.textContent).toBe(headerTexts[i]);
    });
  });
});
