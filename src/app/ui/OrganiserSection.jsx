import React from "react";
import { Card } from "primereact/card";

export default function OrganiserSection({ organisers }) {
  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      {organisers.map((organisers, index) => {
        const header = <img alt="Card" src={organisers.header} />;
        return (
          <Card
            key={index} 
            title={organisers.title}
            header={header}
            className="md:w-25rem"
          />
        );
      })}
    </div>
  );
}
