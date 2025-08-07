'use client';

import React from 'react';
import { Card } from 'primereact/card';

export default function OrganiserSection({ data }) {
  return (
    <div className='bg-capathon-secondary'>
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl ml-10 pt-10 pb-20 text-white">{data.title}</h1>
      <div className=" mx-auto flex w-[56rem] items-center justify-center">
        <div className="grid grid-cols-1 justify-items-center gap-20 sm:grid-cols-2 md:grid-cols-3 pb-20">
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
                  body: 'p-0',
                  title: 'm-0 text-black font-medium title-block cut-corners-tr-bl absolute',
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
