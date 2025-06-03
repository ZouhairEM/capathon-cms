"use client"

import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Galleria } from "primereact/galleria";


export default function PastEventsSection({ data }) {
    const tabItems = data.map((item, index) => ({
        label: item.year,
        yearIndex: index,
    }));

    const [activeIndex, setActiveIndex] = useState(0);
    const selectedYear = data[activeIndex];

    const itemTemplate = (item) => (
        <img src={item.imageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    );

    return(
        <div>
            <h2>PAST EVENTS</h2>
            <TabMenu model={tabItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />

            <div>
                <Galleria 
                    value={selectedYear.images}
                    item={itemTemplate}
                    numVisible={5}
                    circular
                    showThumbnails={false}
                    showItemNavigators
                    showItemNavigatorsOnHover
                    showIndicators
                    style={{ maxWidth:'100%' }}
                />
            </div>

            <div>
                <div>
                    <p>{selectedYear.description}</p>
                </div>
                <div>
                    <p>{selectedYear.theme}</p>
                </div>
            </div>
        </div>
    )
}