import { useState, useMemo, useEffect } from 'react';

const useElementOnScreen = (options, targetRef) => {
  const [activateOnScroll, setActivateOnScroll] = useState(false);

  const inspectScrollonHero = (entries) => {
    const [entry] = entries;
    setActivateOnScroll(entry.isIntersecting);
  };

  const optionMemo = useMemo(() => options, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(inspectScrollonHero, optionMemo);
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, optionMemo]);

  return activateOnScroll;
};

export default useElementOnScreen;
