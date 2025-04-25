"use client";

import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function FaqSection({ faqs }) {
  return (
    <section>
      <Accordion>
        {faqs.map((item, index) => (
          <AccordionTab header={item.header} key={index}>
            <p>{item.answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
}
