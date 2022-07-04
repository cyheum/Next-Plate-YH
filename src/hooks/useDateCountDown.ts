import { useState, useEffect, useRef } from 'react';
import { getDateObj } from '@/utils';

export const useDateCountDown = (initialDate: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });
  const countDown = useRef<NodeJS.Timeout | null>(null);

  const stopCountDown = () => {
    if (countDown.current) {
      clearInterval(countDown.current);
      countDown.current = null;
    }
  };

  const calculateTimeLeft = () => {
    const limitDates = getDateObj(initialDate);
    const difference =
      +new Date(
        limitDates.year,
        limitDates.month - 1,
        limitDates.date,
        limitDates.hours,
        limitDates.minutes,
        limitDates.seconds
      ) - +new Date();

    if (difference < 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true });
      stopCountDown();
    } else {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        done: true,
      });
    }
  };

  const startCountDown = () => {
    stopCountDown();
    countDown.current = setInterval(() => calculateTimeLeft(), 1000);
  };

  useEffect(() => {
    startCountDown();

    return () => stopCountDown();
  }, []);

  return timeLeft;
};
