import React, { useEffect, useState } from 'react';

const Barcode = ({ barCount = 20, minWidth = 2, maxWidth = 8 }) => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    // Only runs on the client, after mount
    setBars(
      Array.from({ length: barCount }, () => ({
        width: Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth,
      }))
    );
  }, [barCount, minWidth, maxWidth]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'right',
      }}
    >
      {bars.map((bar, index) => (
        <div
          key={index}
          className="mr-1 h-25 sm:mr-2 sm:h-35 md:h-45"
          style={{
            width: `${bar.width}px`,
            backgroundColor: 'black',
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default Barcode;
