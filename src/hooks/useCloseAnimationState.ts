import { useState } from 'react';

export const useCloseAnimationState = () => {
  const [closeAnimationToggle, setCloseAnimationToggle] = useState<
    undefined | boolean
  >(undefined);

  const onClickWithAnimation = () => {
    setCloseAnimationToggle(true);
    setTimeout(() => setCloseAnimationToggle(undefined), 300);
  };

  return { closeAnimationToggle, onClickWithAnimation };
};

export default useCloseAnimationState;
