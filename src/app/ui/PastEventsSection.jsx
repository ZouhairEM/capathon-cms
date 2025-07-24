'use client';
import { useEffect, useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import dynamic from 'next/dynamic';
// PrimeReact's Galleria relies on browser-specific APIs, so we disable SSR for this component.
const Galleria = dynamic(() => import('primereact/galleria').then(mod => mod.Galleria), { ssr: false });

export default function PastEventsSection({ data }) {
  const tabItems = data.map((item, index) => ({
    label: item.year,
    yearIndex: index,
  }));

  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const selectedYear = data[activeIndex];

  useEffect(() => {
    // Only render Galleria on the client
    setShowGallery(true);
  }, []);

  const itemTemplate = (item) => (
    <img
      src={item.imageSrc}
      alt={item.alt}
      className="block h-80 w-full sm:h-100"
    />
  );

  return (
    <section className="bg-capathon-primary sm:p-0 relative">
      <img
        src={data[0].icon}
        className='absolute top-0 right-0 h-40 w-70 opacity-50 '
      />
      <h2 className="pt-35 pl-5" style={{ color: 'black' }}>
        PAST EVENTS
      </h2>
      <TabMenu
        model={tabItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="mx-auto flex max-w-2xl justify-end"
      />

      <div className="mx-auto mb-6 max-w-2xl">
        {showGallery && selectedYear?.images?.length > 0 && (
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
        )}
      </div>

      <div className="mb-6 flex flex-col gap-6 sm:flex-row">
        <div className="cut-corners-tr-bl sm:w-3/5">
          <p className="m-5 text-white">{selectedYear.description}</p>
        </div>
        <div className="cut-corners-tl-br sm:w-2/5">
          <p className="m-5 text-white">{selectedYear.theme}</p>
        </div>
      </div>
    </section>
  );
}
