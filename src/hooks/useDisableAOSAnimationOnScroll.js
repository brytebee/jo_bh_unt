import { useEffect } from 'react';

function useDisableAOSAnimationOnScroll() {
  useEffect(() => {
    const aosElements = document.querySelectorAll('[data-aos]');

    function disableAnimation() {
      aosElements.forEach((element) => {
        element.removeAttribute('data-aos');
        element.removeAttribute('data-aos-delay');
        element.removeAttribute('data-aos-duration');
        element.removeAttribute('data-aos-easing');
      });
    }

    window.addEventListener('scroll', disableAnimation, { once: true });

    return () => {
      window.removeEventListener('scroll', disableAnimation);
    };
  }, []);
}

export default useDisableAOSAnimationOnScroll;
