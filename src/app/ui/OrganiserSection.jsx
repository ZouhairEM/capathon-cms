'use client';

import React from 'react';
import { Card } from 'primereact/card';

export default function OrganiserSection({ data }) {
  return (
    <div className="mx-auto flex w-[56rem] items-center justify-center">
      <div className="grid grid-cols-1 justify-items-center gap-20 sm:grid-cols-2 md:grid-cols-3">
        {data.map((organisers) => {
          const header = (
            <img
              alt="Card"
              src={organisers.header}
              className="h-[10rem] object-cover"
            />
          );
          return (
            <Card
              key={organisers.firstName}
              pt={{ body: 'p-0',
                    title: 'm-0 text-black font-medium title-block',
                 }}
              title={
                <span className="flex items-center justify-center text-center font-sans text-[1rem]">
                  {organisers.firstName} 
                  <br></br> 
                  { organisers.lastName}
                </span>
              }
              header={header}
              className="w-[10rem] relative"
            />
          );
        })}
      </div>
    </div>
  );
}
