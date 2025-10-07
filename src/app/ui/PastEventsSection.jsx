'use client';
import { useEffect, useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Barcode from './Barcode';
import dynamic from 'next/dynamic';
// PrimeReact's Galleria relies on browser-specific APIs, so we disable SSR for this component.
const Galleria = dynamic(
  () => import('primereact/galleria').then((mod) => mod.Galleria),
  { ssr: false }
);

export default function PastEventsSection({ data }) {
  const tabItems = data.galleryInformation.map((item, index) => ({
    label: item.year,
    yearIndex: index,
  }));

  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const selectedYear = data.galleryInformation[activeIndex];

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
    <section className="bg-capathon-primary relative bg-[url(/asfalt-dark.png)] sm:p-0">
      <div className="flex flex-row items-center justify-between">
        <h2 id="past-events-heading" className="section-title-black ml-10">
          {data.title}
        </h2>
        <Barcode />
      </div>
      <TabMenu
        model={tabItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="mx-auto flex max-w-2xl justify-end"
        pt={{
          action: 'bg-transparent text-black hover:bg-capathon-secondary/30',
        }}
      />

      <div className="mx-auto mb-12 max-w-2xl">
        {showGallery && selectedYear?.images?.length > 0 && (
          <Galleria
            value={selectedYear.images}
            item={itemTemplate}
            circular
            showThumbnails={false}
            showItemNavigators
            showItemNavigatorsOnHover
            className="max-w-full"
            pt={{
              nextItemButton: {
                className: 'focus:opacity-100',
                'aria-label': 'Next Image',
              },
              previousItemButton: {
                className: 'focus:opacity-100',
                'aria-label': 'Previous Image',
              },
              root: {
                'aria-labelledby': 'past-events-heading',
              },
            }}
          />
        )}
      </div>

      <div className="mb-6 flex flex-col gap-6 sm:flex-row">
        <div className="cut-corners-tr-bl flex items-center justify-start bg-black/70 text-white sm:w-3/5">
          <p className="m-5 text-white">{selectedYear.description}</p>
        </div>
        <div className="cut-corners-tl-br flex items-center justify-start bg-black/70 text-white sm:w-2/5">
          <p className="m-5 text-white">{selectedYear.theme}</p>
        </div>
      </div>
    </section>
  );
}
