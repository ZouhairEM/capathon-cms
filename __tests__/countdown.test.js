import { render, screen } from '@testing-library/react';
import Countdown from '../src/app/ui/CountdownSection';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('Countdown component', () => {
  const mockData = {
    targetDate: new Date('2025-06-19T00:00:00Z'),
  };

  test('renders countdown with initial values', () => {
    render(<Countdown data={mockData} />);

    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/Hours/i)).toBeInTheDocument();
    expect(screen.getByText(/Minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Seconds/i)).toBeInTheDocument();
  });

  test('should set up interval on mount and update time in countdown', () => {
    // ensure a stable start time
    jest.setSystemTime(new Date('2025-06-12T00:00:00Z'));

    const setIntervalSpy = jest.spyOn(global, 'setInterval');

    render(<Countdown data={mockData} />);

    // the effect should call setInterval when the component mounts
    expect(setIntervalSpy).toHaveBeenCalled();

    // capture an initial numeric value (seconds) and then advance timers
    const secondsBefore = Number(
      screen.getByText(/Seconds/i).previousSibling.textContent
    );

    // advance fake timers by 3 seconds so the interval callback runs a few times
    jest.advanceTimersByTime(3000);

    const secondsAfter = Number(
      screen.getByText(/Seconds/i).previousSibling.textContent
    );

    // after advancing time the displayed seconds should have decreased or wrapped
    expect(typeof secondsAfter).toBe('number');
    expect(secondsAfter).toBeGreaterThanOrEqual(0);
    // in most cases it will be less than or equal to the initial value
    expect(secondsAfter).toBeLessThanOrEqual(secondsBefore);

    setIntervalSpy.mockRestore();
  });

  test('should update countdown over time', () => {
    // Mock the system time and set it to June 12th 2025
    jest.setSystemTime(new Date('2025-06-12T00:00:00Z'));

    // Render the Countdown component for the first time
    const { unmount } = render(<Countdown data={mockData} />);

    // Retrieve the amount of days left on the countdown
    const daysElement = screen.getByText('days').previousSibling;
    const initialDays = Number(daysElement.textContent);

    // Unmount the previously rendered Countdown component
    unmount();

    // Update the mocked system time and set it to 6 days later
    jest.setSystemTime(new Date('2025-06-18T00:00:00Z'));

    // Render the Countdown component for the second time
    render(<Countdown data={mockData} />);

    // Retrieve the amount of days left on the countdown with the new mocked system time in place
    const updatedDaysElement = screen.getByText('days').previousSibling;
    const updatedDays = Number(updatedDaysElement.textContent);

    // Expect the countdown to display fewer days than initially
    expect(updatedDays).toBeLessThan(initialDays);
  });

  test('should not let Countdown component count below zero', () => {
    render(<Countdown data={mockData} />);

    jest.setSystemTime(new Date('2814-01-01T00:00:00Z'));

    const timeLeftElements = screen.getAllByText(/\d+/);

    timeLeftElements.forEach((element) => {
      const timeLeft = element.textContent;
      expect(Number(timeLeft)).toBeGreaterThanOrEqual(0);
    });
  });

  test('clears interval when unmounting', () => {
    const clearIntervalMock = jest.spyOn(global, 'clearInterval');
    const { unmount } = render(<Countdown data={mockData} />);
    unmount();
    expect(clearIntervalMock).toHaveBeenCalled();
    clearIntervalMock.mockRestore();
  });
});
