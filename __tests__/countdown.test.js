import React from "react";
import { render, screen, act } from "@testing-library/react";
import Countdown from "../src/app/ui/Countdown";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("Countdown component", () => {
  const mockData = {
    targetDate: new Date("2025-06-19T00:00:00Z"),
  };

  test("renders countdown with initial values", () => {
    render(<Countdown data={mockData} />);

    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/Hours/i)).toBeInTheDocument();
    expect(screen.getByText(/Minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Seconds/i)).toBeInTheDocument();
  });

  test("updates countdown over time", () => {
    render(<Countdown data={mockData} />);

    const secondsElement = screen.getByText("Seconds").previousSibling;
    const initialSeconds = Number(secondsElement.textContent);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    const updatedSeconds = Number(secondsElement.textContent);

    expect(updatedSeconds).toBeLessThan(initialSeconds);
  });

  test("does not count below zero", () => {
    render(<Countdown data={mockData} />);

    act(() => {
      jest.advanceTimersByTime(1000 * 60 * 60 * 24 * 50);
    });

    const timeLeftElements = screen.getAllByText(/\d+/);

    timeLeftElements.forEach((element) => {
      const timeLeft = element.textContent;
      expect(Number(timeLeft)).toBeGreaterThanOrEqual(0);
    });
  });

  test("clears interval when unmounting", () => {
    const clearIntervalMock = jest.spyOn(global, "clearInterval");

    const { unmount } = render(<Countdown data={mockData} />);

    unmount();

    expect(clearIntervalMock).toHaveBeenCalled();

    clearIntervalMock.mockRestore();
  });
});
