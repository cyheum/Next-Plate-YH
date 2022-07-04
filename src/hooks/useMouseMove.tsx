import { useState, useEffect } from 'react';

interface IProps {
  moveOnOff: boolean;
  upOnOff: boolean;
  moveCallback?(): void;
  upCallback?(): void;
}

export const useMouseMove = ({
  moveOnOff,
  upOnOff,
  moveCallback,
  upCallback,
}: IProps) => {
  const [movePosition, setMovePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (moveOnOff) {
      document.onmousemove = mouseMovePositionHandler;
      document.ontouchmove = touchMovePositionHandler;
    } else {
      document.onmousemove = null;
      document.ontouchmove = null;
    }

    return () => {
      document.onmousemove = null;
      document.ontouchmove = null;
    };
  }, [moveOnOff]);

  useEffect(() => {
    if (upOnOff) {
      document.onmouseup = mouseUpPositionHandler;
      document.ontouchend = touchEndPositionHandler;
    } else {
      document.onmouseup = null;
      document.ontouchend = null;
    }

    return () => {
      document.onmouseup = null;
      document.ontouchend = null;
    };
  }, [upOnOff]);

  const mouseMovePositionHandler = (e: MouseEvent) => {
    if (moveOnOff) {
      setMovePosition({ x: e.clientX, y: e.clientY });
      moveCallback && moveCallback();
    }
  };

  const touchMovePositionHandler = (e: TouchEvent) => {
    if (moveOnOff) {
      setMovePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      moveCallback && moveCallback();
    }
  };

  const mouseUpPositionHandler = (_: MouseEvent) => {
    if (upOnOff) {
      upCallback && upCallback();
    }
  };

  const touchEndPositionHandler = (_: TouchEvent) => {
    if (upOnOff) {
      upCallback && upCallback();
    }
  };

  return movePosition;
};
