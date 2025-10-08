'use client';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function FaqSection({ data }) {
  return (
    <section className="bg-capathon-secondary bg-[url(/asfalt-light.png)] pb-30">
      <h1 className="section-title-white mx-10 py-20 font-heading">{data.title}</h1>
      <div className="flex justify-center">
        <Accordion className="w-2/3">
          {data.questions.map((faq) => (
            <AccordionTab
              header={faq.header}
              key={faq.header}
              pt={{
                headerAction: {
                  className: 'bg-capathon-primary py-7 text-black',
                  'aria-controls': null,
                },
                content: 'bg-capathon-primary opacity-70 py-5 text-black',
              }}
            >
              <p>{faq.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
