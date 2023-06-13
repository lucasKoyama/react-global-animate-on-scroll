import { useEffect } from 'react'
import PropTypes from 'prop-types';
import 'animate.css';

// animations to use: https://animate.style/
// Intersection observer explanation: https://www.youtube.com/watch?v=2IbRtjez6ag

function AnimateOnScroll({ animateOnce = false }) {
  useEffect(() => {
    const animates = document.querySelectorAll('.animate__animated');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const classList = entry.target.classList;
        const animationClasses = Array.from(classList)
          .filter(className => className.startsWith('animate__') && className !== 'animate__animated');
        const animations = animationClasses.map(className => className.replace("-", ""));

        if (entry.isIntersecting) {
          animations.forEach(className => classList.add(className));
        } else {
          animations.forEach(className => classList.remove(className));
          animations.forEach(className => classList.add(`${className}-`));
        }

        if (animateOnce && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });

    animates.forEach(animate => observer.observe(animate));

    return () => {
      observer.disconnect();
    };
  }, [animateOnce]);
  return null;
}

AnimateOnScroll.propTypes = ({
  animateOnce: PropTypes.bool,
}).isRequired

export default AnimateOnScroll;
