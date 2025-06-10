'use client';

import { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Galleria } from 'primereact/galleria';

export default function PastEventsSection({ data }) {
  const tabItems = data.map((item, index) => ({
    label: item.year,
    yearIndex: index,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const selectedYear = data[activeIndex];

  const itemTemplate = (item) => (
    <img
      src={item.imageSrc}
      alt={item.alt}
      className="block h-80 w-full sm:h-100"
    />
  );

  return (
    <section className="bg-capathon-primary sm:p-0">
      <h2 className="mt-6" style={{ color: 'black' }}>
        PAST EVENTS
      </h2>
      <TabMenu
        model={tabItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="p-tabmenu-nav mx-auto flex max-w-2xl justify-end"
      />

      <div className="mx-auto mb-6 max-w-2xl">
        <Galleria
          value={selectedYear.images}
          item={itemTemplate}
          circular
          showThumbnails={false}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          className="max-w-full"
        />
      </div>

      <div className="mb-6 flex flex-col gap-6 sm:flex-row">
        <div className="custom-shape-1 bg-capathon-secondary opacity-75 sm:w-3/5">
          <p className="m-5 text-white">{selectedYear.description}</p>
        </div>
        <div className="custom-shape-2 bg-capathon-secondary opacity-75 sm:w-2/5">
          <p className="m-5 text-white">{selectedYear.theme}</p>
        </div>
      </div>
    </section>
  );
}
