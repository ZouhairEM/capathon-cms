"use client";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";

export default function Countdown({ data }) {
  const countdownTarget = new Date(data.countdown.targetDate);

  const getTimeLeft = () => {
    const now = new Date();
    const totalTimeLeft = countdownTarget.getTime() - now.getTime();

    if (totalTimeLeft <= 0) {
      return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    }

    const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const Minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const Seconds = Math.floor((totalTimeLeft / 1000) % 60);

    return { Days, Hours, Minutes, Seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-cy="countdown-section"
      className="text-center p-6 bg-blue-100 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-blue-800">
        Time left until the event
      </h2>
      <div className="grid grid-cols-4 gap-2 md:gap-6 mt-6 mb-5 max-w-lg min-w-xs m-auto">
        {Object.entries(timeLeft).map((timePart) => {
          return (
            <Card
              className="bg-blue-700 text-white rounded-lg shadow-lg"
              key={timePart[0]}
            >
              <span className="text-md md:text-xl font-bold block">{timePart[1]}</span>
              <span className="text-sm md:text-lg">{timePart[0]}</span>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
