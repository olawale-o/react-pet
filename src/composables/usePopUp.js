import React from 'react';
import PropType from 'prop-types';

const usePopUp = (el, initial) => {
  const [isVisible, setIsVisible] = React.useState(initial);

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isVisible && el.current && !el.current.contains(e.target)) {
        setIsVisible(null);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => document.removeEventListener('click', checkIfClickedOutside);
  }, []);

  return { isVisible, setIsVisible };
};

export default usePopUp;

usePopUp.propTypes = {
  initial: PropType.oneOfType([PropType.bool, PropType.number]),
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
};
