// TODO: Re-enable these tests and re-write them to align with the new Contentful implementation

// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import FaqSection from '../src/app/ui/FaqSection';

// describe('FaqSection Component', () => {
//   xtest('renders all AccordionTab headers', () => {
//     render(
//       <FaqSection
//         faqs={[
//           { header: 'FAQ 1', answer: 'Answer 1' },
//           { header: 'FAQ 2', answer: 'Answer 2' },
//         ]}
//       />
//     );

//     const headers = screen.getAllByRole('button');

//     expect(headers.length).toBeGreaterThanOrEqual(1);

//     headers.forEach((header) => {
//       expect(header.textContent).toBeTruthy();
//     });
//   });
// });
