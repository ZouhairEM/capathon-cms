"use client";

import React from "react";
import { Card } from "primereact/card";

export default function OrganiserSection({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-16">
      {data.map((organiser) => {
        const header = (
          <img
            alt="Card"
            src={organiser.header}
            className="w-full h-[156px] object-cover"
          />
        );
        return (
          <Card
            key={organiser.title}
            pt={{ body: "p-0" }}
            title={
              <span className="h-[55px] flex items-center justify-center w-full text-[15px] m-[5px]">
                {organiser.title}
              </span>
            }
            header={header}
            className="w-[156px] h-[200px] mb-2"
          />
        );
      })}
    </div>
  );
}
