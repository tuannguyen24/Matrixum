import { useMemo, useState } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState<number>(window.pageYOffset);

  const handleScrollPage = () => {
    setPosition(window.pageYOffset);
  };

  useMemo(() => {
    window.addEventListener('scroll', handleScrollPage);
    return () => {
      window.removeEventListener('scroll', handleScrollPage);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return position;
};
