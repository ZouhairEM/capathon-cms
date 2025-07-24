'use client';
import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';

export default function CountdownSection({ data }) {
  const countdownTarget = new Date(data.targetDate);

  function getTimeLeft(currentTime) {
    const totalTimeLeft = countdownTarget.getTime() - currentTime.getTime();

    if (totalTimeLeft <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date()));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date()));
    }, 1000);

    setHydrated(true);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="rounded-lg bg-blue-100 p-6 text-center shadow-lg"
      data-cy="countdown-section"
    >
      <h2 className="text-2xl font-semibold text-blue-800">Time left until the event</h2>
      <div className="m-auto mt-6 mb-5 grid max-w-lg min-w-xs grid-cols-4 gap-2 md:gap-6">
        {hydrated &&
          Object.entries(timeLeft).map(([unit, value]) => (
            <Card
              className="rounded-lg bg-blue-700 text-white shadow-lg"
              key={unit}
            >
              <span className="text-md block font-bold md:text-xl">
                {value}
              </span>
              <span className="text-sm capitalize md:text-lg">{unit}</span>
            </Card>
          ))}
      </div>
    </section>
  );
}
