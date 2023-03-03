import { useState, useRef, useEffect, MutableRefObject } from 'react';

interface IntersectProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

// intersect hooks 함수
export const useIntersect = (
  { root = null, rootMargin, threshold = 0 }: IntersectProps,
  onEndReached: (() => void) | undefined
) => {
  const [node, setNode] = useState<Element | null>(null);
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onEndReached) {
          onEndReached();
        }
      },
      { root, rootMargin, threshold }
    );

    const { current: currentObserver } = observer;
    if (node) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode];
};

//checkInfo에서 userInfo 먼저, 이전 입력 state, 그후 비교 함수
export const useGetPetInfo = (userPetInfo: string, newPetInfo: string) => {
  const petInfo = newPetInfo ? newPetInfo : userPetInfo;
  return petInfo;
};

export * from './useScrollDirection';
export * from './useDateCountDown';
export * from './useResize';
export * from './useMouseMove';
export * from './useGetStore';
