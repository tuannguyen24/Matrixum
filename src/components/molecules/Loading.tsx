import { FC, useEffect, useState } from 'react';

export interface LoadingProps {
  loading?: boolean;
  delay?: number;
}

export const Loading: FC<LoadingProps> = ({ loading, delay, ...props }) => {
  const [timeLoad, setTimeLoad] = useState<number>(0);

  const loadingStyle = {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#fff',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const texStyle = {
    fontSize: '17px',
    fontFamily: 'GeoMan-italic',
  };

  useEffect(() => {
    if (!loading || timeLoad === 100) return;
    let timer = setTimeout(() => setTimeLoad((prev) => prev + 1), delay && delay * 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLoad]);

  return (
    <div style={loadingStyle}>
      <p style={texStyle}>Loading... {timeLoad}% </p>
    </div>
  );
};
