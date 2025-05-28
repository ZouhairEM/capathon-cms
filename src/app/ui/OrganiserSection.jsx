'use client';

import React from 'react';
import { Card } from 'primereact/card';

export default function OrganiserSection({ data }) {
  return (
    <div className="mx-auto flex w-[900px] items-center justify-center">
      <div className="grid grid-cols-1 justify-items-center gap-20 sm:grid-cols-2 md:grid-cols-3">
        {data.map((organiser) => {
          const header = (
            <img
              alt="Card"
              src={organiser.header}
              className="h-[155px] object-cover"
            />
          );
          return (
            <Card
              key={organiser.title}
              pt={{ body: 'p-0' }}
              title={
                <span className="m-[15px] flex items-center justify-center text-center font-sans text-[15px]">
                  {organiser.title}
                </span>
              }
              header={header}
              className="mb-2 w-[155px]"
            />
          );
        })}
      </div>
    </div>
  );
}
