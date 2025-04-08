"use client";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";

const countdownTarget = new Date("2025-06-19T17:00:00");

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

export default function Countdown() {
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
      className="flex flex-col items-center justify-center p-6 bg-blue-100 rounded-lg shadow-lg w-1/2 mx-auto mt-4"
    >
      <h2 className="text-2xl font-semibold text-blue-800">
        Time left until the event
      </h2>
      <div className="grid grid-cols-4 gap-6 mt-6 mb-5">
        {Object.entries(timeLeft).map((el) => {
          return (
            <Card
              className="p-6 text-center bg-blue-700 text-white rounded-lg shadow-lg"
              key={el[0]}
            >
              <div className="text-xl font-bold">{el[1]}</div>
              <div className="text-lg">{el[0]}</div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
