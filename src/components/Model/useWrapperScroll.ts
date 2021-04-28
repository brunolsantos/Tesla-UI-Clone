import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from "react";

import ModelsContext from './ModelsContext';

export default function UserWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      const updateScroll = () => {
        if (element) {
          const {
            scrollTop, 
            scrollHeight, 
            offsetHeight
          } = element;

          const fullScroll = scrollHeight - offsetHeight;
          scrollY.set(scrollTop); // number
          scrollProgress.set(scrollTop / fullScroll); // 0 - 1 (%)
        }
      }

      element.addEventListener('scroll', updateScroll);

      return () => element.removeEventListener('scroll', updateScroll);
    }
  }, [scrollProgress, scrollY, wrapperRef])

  return {scrollY, scrollProgress};
}