"use client";

import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function FaqSection({ data }) {
  return (
    <section>
      <Accordion>
        {data.map((faq) => (
          <AccordionTab header={faq.header} key={faq.header}>
            <p>{faq.answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
}
