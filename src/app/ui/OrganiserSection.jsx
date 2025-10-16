'use client';

import React from 'react';
import { Card } from 'primereact/card';

export default function OrganiserSection({ data }) {
  return (
    <div className="bg-capathon-secondary bg-[url(/asfalt-light.png)]">
      <h2 className="section-title-white font-heading mx-10 py-20">
        {data.title}
      </h2>
      <div className="mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 justify-items-center gap-25 pb-30 sm:grid-cols-2 md:grid-cols-3">
          {data.organisers.map((organisers) => {
            const { fields } = organisers;
            const { firstName, lastName } = fields;
            const header = (
              <img
                alt={`Header image of ${firstName} ${lastName}`}
                src={fields.header.fields.file.url}
                className="h-[10rem] object-cover"
              />
            );
            return (
              <Card
                key={firstName}
                pt={{
                  root: 'h-53',
                  body: 'p-0 m-0 text-black title-block cut-corners-tr-bl absolute opacity-50 h-20',
                  title: 'top-0 p-0 h-13 content-center font-medium',
                }}
                title={
                  <span className="left[-15%] relative flex items-center justify-center text-center font-sans text-[1rem]">
                    {firstName}
                    <br></br>
                    {lastName}
                  </span>
                }
                header={header}
                className="w-[10rem]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
