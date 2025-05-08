"use client";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";

export default function Countdown({ data }) {
  // Countdown can be renamed CountdownSection
  const countdownTarget = new Date(data.targetDate);

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

  /* The getTimeLeft function could be turned into a 'pure' function by separating the new Date() from the function itself.
    Right now it is a 'side-effect'. Then the function is also more easily testable.   
  */

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    setHydrated(true);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
    // move data attributes after the class 
      data-cy="countdown-section"
      className="text-center p-6 bg-blue-100 rounded-lg shadow-lg"
    >
      {/* Heading styling should be universal, so move all the styling to one file and define all the other headers there too
      */}
      <h2 className="text-2xl font-semibold text-blue-800">
        Time left until the event
      </h2>
      {/* Looking at some of the Tailwind classes, I notice some being placed after breakpoints classes, so it's unnecessarily difficult to read some of the styling. To fix this, I suggest we use a Tailwind plugin that lets you sort tailwind classes based on category. You can read more about this plugin here - https://tailwindcss.com/blog/automatic-class-sorting-with-prettier 
      It also might need to be made part of the Husky script so it runs when running the linter - not sure though
      */}
      <div className="grid grid-cols-4 gap-2 md:gap-6 mt-6 mb-5 max-w-lg min-w-xs m-auto">
        {/* the timePart in the loop can already be destructured */}
        {hydrated && Object.entries(timeLeft).map((timePart) => (
          <Card className="bg-blue-700 text-white rounded-lg shadow-lg" key={timePart[0]}>
            <span className="text-md md:text-xl font-bold block">{timePart[1]}</span>
            <span className="text-sm md:text-lg">{timePart[0]}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
