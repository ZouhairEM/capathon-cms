'use client';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function FaqSection({ data }) {
  return (
    <section className="bg-capathon-secondary bg-[url(/asfalt-light.png)] pb-30">
      <h2 className="section-title-white font-heading mx-10 py-20">
        {data.title}
      </h2>
      <div className="flex justify-center">
        <Accordion className="w-2/3">
          {data.faqEntries.map((faq) => (
            <AccordionTab
              header={faq.fields.header}
              key={faq.fields.header}
              pt={{
                headerAction: {
                  className: 'bg-capathon-primary py-7 text-black',
                  'aria-controls': null,
                  'href': null,
                },
                content: 'bg-capathon-primary opacity-70 py-5 text-black',
              }}
            >
              <p>{faq.fields.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
