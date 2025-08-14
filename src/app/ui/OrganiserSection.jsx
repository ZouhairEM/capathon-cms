'use client';

import React from 'react';
import { Card } from 'primereact/card';

export default function OrganiserSection({ data }) {
  return (
    <div className="bg-capathon-secondary bg-[url(/asfalt-light.png)]">
      <h1 className="ml-10 pt-10 pb-20 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {data.title}
      </h1>
      <div className="mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 justify-items-center gap-25 pb-30 sm:grid-cols-2 md:grid-cols-3">
          {data.organisers.map((organisers) => {
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
                pt={{
                  root: 'h-53',
                  body: 'p-0 m-0 text-black title-block cut-corners-tr-bl absolute opacity-50 !h-20',
                  title: 'top-0 p-0 h-13 content-center font-medium',
                }}
                title={
                  <span className="left[-15%] relative flex items-center justify-center text-center font-sans text-[1rem]">
                    {organisers.firstName}
                    <br></br>
                    {organisers.lastName}
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
