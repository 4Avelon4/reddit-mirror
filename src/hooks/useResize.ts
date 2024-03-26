import { useState, useEffect } from 'react';

const SCREEN_mobile = 320;
const SCREEN_tablet = 1024;
const SCREEN_desktop = 1540;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width >= SCREEN_mobile && width < SCREEN_tablet,
    isScreenTablet: width >= SCREEN_tablet && width < SCREEN_desktop,
    isScreenDesktop: width >= SCREEN_desktop,
  };
};